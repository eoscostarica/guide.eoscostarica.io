---
id: devops
title: What is DevOps ?
sidebar_label: DevOps
description: DevOps is the process of putting together a team to build a system that is efficient, reliable, and secure.
keywords: [DevOps, What is DevOps for, EOS, EOS Costa Rica, Why DevOps ]
---

DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging *people, processes, & tools.*

It focuses on unifying Development & IT Operations through the principles of flow, feedback, & experimentation.

<figure
  className="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/OOGFxVzW35w" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

## Key Definitions

- **Continuous Integration (CI)**: Addresses building software from contributions of individual developers in a controlled, agile way. (Checking all code into centralized repo daily)
- **Continuous Deployment (CD)**: Automated Deployment (or transport) of code to production with no manual steps required. This will not be the plan with all applications.
- **Continuous Delivery (CD)**: Automation that ensures deployment is validated, however manual step still required to deploy to production.
- **Deployment**: The deployment (or transport) of code to a higher-level environment, up to & including production.
- **Release**: The defined scope and business objective for a set of features to be delivered in a certain timeline.

## Why implement DevOps?

In 2012, Puppet Labs “state of DevOps report” benchmarked 4,039 IT orgs using DevOps and found:

- 30x more frequent code deployments
- 8,000x faster code deployment lead time
- 2x the change success rate
- 12x faster MTTR (mean time to repair)

***

> “*The competitive advantage this capability creates is enormous, enabling faster feature time to market, increased customer satisfaction, market share, employee productivity, and happiness.”* ** - Phoenix Project **

***

## Areas of Emphasis

DevOps principles are applied to and assisted by the following 3 Key areas all working together:

- **People** - DevOps relies on strong people & a strong culture of experimentation, learning, collaboration, and shared goals between Development, QA & IT Operations.
- **Processes** – DevOps builds further upon Lean Agile, applying concepts of lean manufacturing to IT value streams.
- **Tools** – DevOps relies on enhanced tools & technologies, including automation, telemetry, & collaboration tools.

## What is the goal of DevOps?

Improve collaboration between all stakeholders from planning through delivery and automation of the delivery process in order to:

- Improve deployment frequency
- Achieve faster time to market
- Lower failure rate of new releases
- Shorten lead time between fixes
- Improve mean time to recovery

## CI Systems - Examples

![CI_System_image](https://user-images.githubusercontent.com/5632966/106228974-2f442480-61b2-11eb-9ceb-6d47ef5acb67.png 'Devops')

## CD Systems - Examples

![CD_System_image](https://user-images.githubusercontent.com/5632966/105532713-d0ae1080-5cb0-11eb-8d8b-5d3751b7df37.png '')

* * *

## Infrastructure as Code (IAC)

The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/53X-HAw7BbA" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Introduction to HashiCorp Terraform

Terraform is an infrastructure software as code, developed by HashiCorp. It enables users to define and configure the infrastructure of a data center in a high-level language.

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/cpxKbf51ccU" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/h970ZBgKINg" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

## Introduction to Kubernetes and Docker

### **Containers 101**

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/VqLcWftIaQI" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

[More information about containers](https://www.youtube.com/channel/UCdkGV51Nu0unDNT58bHt9bg/search?query=containers)

* * *

### What is Docker?

Docker is an open source project that automates the deployment of applications within software containers, providing an additional layer of abstraction and application virtualization automation across multiple operating systems.

[Learn more about Docker](/docs/tutorials/docker)

<figure 
  className="video_container">
  <iframe
   width="100%" height="315" src="https://www.youtube.com/embed/PfTKwblbkpE" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Kubernetes

Kubernetes is an open source system for automating the deployment, scaling, and handling of containerized applications that was originally designed by Google and donated to the Cloud Native Computing Foundation. It supports different environments for running containers, including Docker.

Following you can find a set of very convenient tutorials for learning kubernetes from scratch:

### Kubernetes in 5 Minutes

<figure 
  className="video_container">
  <iframe 
  width="100%" height="315" src="https://www.youtube.com/embed/PH-2FfFD2PU" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

### Kubernetes vs Docker: Not a Question of Both or One

<figure 
  className="video_container">
  <iframe 
    width="100%" height="315" src="https://www.youtube.com/embed/2vMEQ5zs1ko" frameBorder="0" allowFullScreen loading="lazy">
  </iframe>
</figure>

* * *

## Kubernetes at EOS Costa Rica

To be able to try the [tutorials](https://kubernetes.io/docs/tutorials/kubernetes-basics/) in a real environment, you could try our Kubernetes installation in Openstack. If you prefer so, you may also create a local setup in your own machine: 

[Install Minikube](https://computingforgeeks.com/how-to-install-minikube-on-ubuntu-debian-linux/) 

Request to the administrators for access to our Openstack installation dashboard and the Sandbox
project. Then you can follow the next steps:

- First of all connect to the master node using the SSH tool:

```shell
ssh -i key.pem user@master-sandbox
```

- Get information about the cluster:

```shell
kubectl cluster-info
```

- Show the current available nodes in the cluster:

```shell
kubectl get nodes
```

## References

*“The principles behind DevOps are the same that transformed manufacturing. Instead of optimizing how raw materials are transformed into finished goods, DevOps shows how we optimize the IT value stream...”* - Phoenix Project

*“Imagine living in a DevOps world, where product owners, Development, QA, IT Ops, and InfoSec work together relentlessly to help each other and the overall organization win. They are enabling fast flow of planned work into production, while preserving world-class stability, reliability, availability, and security.”* - Phoenix Project

* [Periodic Table of DevOps Tools](https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68)
* [Automation](https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f)
* [DevOps with GitHub](https://lab.github.com/githubtraining/devops-with-github-actions)