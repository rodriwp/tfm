account_name    = "managed-cloud"
account_id      = 659411004637
region          = "eu-central-1"
region_code     = "ec1"
min_size        = 3
max_size        = 3
desired_size    = 3
disk_size       = 50
instance_type   = "t3.medium"
vpc_cidr        = "10.30.0.0/16"
vpc_azs         = ["eu-central-1a", "eu-central-1b", "eu-central-1c"]
public_subnets  = ["10.30.0.0/20", "10.30.16.0/20", "10.30.32.0/20"]
private_subnets = ["10.30.128.0/20", "10.30.144.0/20", "10.30.160.0/20"]