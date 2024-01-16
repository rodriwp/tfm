terraform {
  required_version = ">=1.2.4"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">=5.32.1"
    }
    tls = {
      source  = "hashicorp/tls"
      version = ">= 4.0.5"
    }
  }

  backend "remote" {}
}
