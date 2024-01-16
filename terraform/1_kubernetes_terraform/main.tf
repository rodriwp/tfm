provider "aws" {
  region = var.region
  assume_role {
    role_arn = "arn:aws:iam::${var.account_id}:role/automation-deployment-role"
  }
}

provider "kubernetes" {
  host                   = data.aws_eks_cluster.default.endpoint
  cluster_ca_certificate = base64decode(data.aws_eks_cluster.default.certificate_authority[0].data)
  token                  = data.aws_eks_cluster_auth.default.token
}

data "tfe_outputs" "tf_eks_state" {
  organization = "Mompo"
  workspace    = "mompo-${var.account_name}-${var.region_code}-eks"
}
data "aws_eks_cluster" "default" {
  name = data.tfe_outputs.tf_eks_state.values.cluster_id
}

data "aws_eks_cluster_auth" "default" {
  name = data.tfe_outputs.tf_eks_state.values.cluster_id
}

################################################################################
# aws-auth configmap
################################################################################

locals {
  #Configurable values for the AWS Config maps
  aws_auth_roles = [
    {
      rolearn  = "arn:aws:iam::${var.account_id}:role/MompoAdminAccess"
      username = "k8s_admin"
      groups   = ["system:masters"]
    },
  ]
  aws_auth_users    = []
  aws_auth_accounts = []

  #AWS EKS Module Configurations
  node_iam_role_arns_non_windows = distinct(
    compact(
      concat(
        [for group in data.tfe_outputs.tf_eks_state.values.eks_managed_node_groups : group.iam_role_arn],
      )
    )
  )
  aws_auth_configmap_data = {
    mapRoles = yamlencode(concat(
      [for role_arn in local.node_iam_role_arns_non_windows : {
        rolearn  = role_arn
        username = "system:node:{{EC2PrivateDNSName}}"
        groups = [
          "system:bootstrappers",
          "system:nodes",
        ]
        }
      ],
      local.aws_auth_roles
    ))
    mapUsers    = yamlencode(local.aws_auth_users)
    mapAccounts = yamlencode(local.aws_auth_accounts)
  }
}

# This module will only work with manage eks nodes as the AWS config map is created by default with DNS entry
resource "kubernetes_config_map_v1_data" "aws_auth" {
  force = true
  metadata {
    name      = "aws-auth"
    namespace = "kube-system"
  }
  data = local.aws_auth_configmap_data
}