terraform {
  required_version = "1.6.6"

  required_providers {
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = ">= 2.25.2"
    }
    tfe = {
      version = "~> 0.51.1"
    }
  }

  backend "remote" {}
}
