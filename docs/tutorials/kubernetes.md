---
id: kubernetes
title: Kubernetes
sidebar_label: Kubernetes
description: Definitions and usage of Kubernetes
keywords: [ Kubernetes, What is Kubernetes, What is Kubernetes for, How to use Kubernetes, How to write Kubernetes, Kubernetes Guide, Kubernetes Commands ]
---

Kubernetes is an open source platform, which was created by Google, used for the management, deployment, scalability and monitoring of Docker containers. 

## Kubernetes Features

- Intelligent container deployment.
- Management of workloads (provides load balancing).
- Easy management of services and applications.
- High availability.
- Great flexibility and allows modular work.
- Container monitoring.

## Kubernetes Architecture

There are two main roles, "master" and "node". The master is in charge of managing and orchestrating the different microservices between the 4 available nodes in the cluster.

## Kubernetes Architecture Diagram

![Diagram of Kubernetes Architecture](https://user-images.githubusercontent.com/5632966/107062957-724c5c00-679f-11eb-88f0-fb4b884785ab.png)

## Key Concepts in k8s

**Cluster:** It is a group of devices that can be physical or virtual, are united many times by a network and, therefore, they behave as one.

**Kubernetes node:** A machine that is running Kubernetes, on which pods can be programmed.

**Pod:** A group of one or more containers that share the storage and configurations needed to run.

**Replication Controller:** It is the one who handles the above mentioned failures and recreates, if necessary, the pods. In addition, it also ensures that the number of replicas of the pod is running.

**Service:** It is an abstraction that defines a logical set of pods, as well as the rules and logic to access them.

**Infrastructure as IaC Code**  
A repository will be created with code for the design and deployment of the project's infrastructure. This will represent the desired state on the servers, as well as pre-compiled images of each service to be deployed.

For more information, visit our guide [Introduction to Kubernetes and Docker]https://guide.eoscostarica.io/docs/devops#introduction-to-kubernetes-and-docker)