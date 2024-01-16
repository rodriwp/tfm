variable "account_id" {
  description = "AWS Account Id"
  type        = string
}
variable "account_name" {
  description = "AWS Account Name"
  type        = string
}
variable "region" {
  description = "AWS region"
  type        = string
  default     = "eu-central-1"
}
variable "region_code" {}
variable "min_size" {
  description = "Node group min size"
  type        = number
}
variable "max_size" {
  description = "Node group max size"
  type        = number
}
variable "desired_size" {
  description = "Node group desired capacity"
  type        = number
}
variable "disk_size" {
  description = "Node group disk size"
  type       = number
}
variable "instance_type" {}
variable "vpc_id" {}
variable "subnet_ids" {}