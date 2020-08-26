---
id: devops
title: DevOps
sidebar_label: DevOps
---

At EOS Costa Rica we follow the DevOps principles to build and deploy software. 

Automation is at the top of our priorities, everything from scaffolding to code optimization, testing, deploy and delivery.

Continuous integration allows us to detect problems early reducing costs and help us deliver robust software more rapidly.

Continuous communication and frequent one-on-one calls as well as pair programming are essential part of our day to day work.

* * *


## Infrastructure as Code ( IAC )

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/53X-HAw7BbA" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Introduction to Terraform 

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/cpxKbf51ccU" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Introduction to HashiCorp Terraform 

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/h970ZBgKINg" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

## EOS Costa Rica Infrastructure as Code (IaC)

* Openstack documentation

https://github.com/edenia/openstack-docs

* Kubernetes documentation

https://github.com/edenia/openstack-docs/blob/master/Kubernetes.md

## Introduction a Docker and Kubernetes

### What is a Container?

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/53X-EnJ7qX9fkcU" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Containers 101

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/VqLcWftIaQI" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

Watch the full intro to containers playlist here   
https://www.youtube.com/embed/EnJ7qX9fkcU&list=PL7bmigfV0EqQt5_pBPQ8tsZjI1w68-e0H

* * *

### What is Docker?

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/PfTKwblbkpE" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Kubernetes in 5 mins

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/PH-2FfFD2PU" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

### Kubernetes vs. Docker: It's Not an Either/Or Question

<figure class="video_container">
  <iframe wwidth="100%" height="315" src="https://www.youtube.com/embed/2vMEQ5zs1ko" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

* * *

## Kubernetes at EOS Costa Rica

Following you can find a set of very convenient tutorials for learning kubernetes from scratch:

https://kubernetes.io/docs/tutorials/kubernetes-basics/

To be able to try these tutorials in a real environment, you could try our Kubernetes installation 
in Openstack. If you prefer so, you may also create a local setup in your own machine: 

https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/. 

Request to the administrators for access to our Openstack installation dashboard and the Sandbox
project. Then you can follow the next steps:

- First of all connect to the master node using the SSH tool:

```
ssh -i key.pem user@master-sandbox
```

- Get information about the cluster:

```
kubectl cluster-info
```
- Show the current available nodes in the cluster:

```
kubectl get nodes
```
