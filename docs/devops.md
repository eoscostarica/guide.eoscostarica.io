---
id: devops
title: DevOps
sidebar_label: DevOps
---

DevOps is the practice & culture of applying lean manufacturing principles to the IT Value stream to increase software velocity, reduce waste, & improve quality with an emphasis on leveraging *people, processes, & tools.*

It focuses on unifying Development & IT Operations through the principles of flow, feedback, & experimentation.

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/OOGFxVzW35w" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

## Key Definitions

- Continuous Integration (CI): Addresses building software from contributions of individual developers in a controlled, agile way. (Checking all code into centralized repo daily)
- Continuous Deployment (CD): Automated Deployment (or transport) of code to production with no manual steps required. This will not be the plan with all applications.
- Continuous Delivery (CD): Automation that ensures deployment is validated, however manual step still required to deploy to production.
- Deployment: The deployment (or transport) of code to a higher-level environment, up to & including production.
- Release: The defined scope and business objective for a set of features to be delivered in a certain timeline.

## Why do DevOps?

In 2012, Puppet Labs “state of DevOps report” benchmarked 4,039 IT orgs using DevOps and found:

- 30x more frequent code deployments
- 8,000x faster code deployment lead time
- 2x the change success rate
- 12x faster MTTR (mean time to repair)

### Some examples of why do DevOps?

“*The competitive advantage this capability creates is enormous, enabling faster feature time to market, increased customer satisfaction, market share, employee productivity, and happiness.”*

**-Phoenix Project**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7bc6509-de0a-4efd-aa9c-f3a4486809b5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c7bc6509-de0a-4efd-aa9c-f3a4486809b5/Untitled.png)

## Areas of Emphasis

DevOps principles are applied to and assisted by the following 3 Key areas all working together:

- People - DevOps relies on strong people & a strong culture of experimentation, learning, collaboration, and shared goals between Development, QA & IT Operations.
- Processes – DevOps builds further upon Lean Agile, applying concepts of lean manufacturing to IT value streams.
- Tools– DevOps relies on enhanced tools & technologies, including automation, telemetry, & collaboration tools.

## What Is the Goal of DevOps?

Improve collaboration between all stakeholders from planning through delivery and automation of the delivery process in order to:

- Improve deployment frequency
- Achieve faster time to market
- Lower failure rate of new releases
- Shorten lead time between fixes
- Improve mean time to recovery

## CI Systems - Examples

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/70d28084-e01c-4807-9dce-d106519ba31c/CI_Example.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/70d28084-e01c-4807-9dce-d106519ba31c/CI_Example.png)

## CD Systems - Examples

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db2bfb4e-779e-4c7b-9933-05cb788f5008/CD_Example.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/db2bfb4e-779e-4c7b-9933-05cb788f5008/CD_Example.png)


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

## Introduction a Docker and Kubernetes

### Containers 101

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/VqLcWftIaQI" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

[More information about containers](https://www.youtube.com/channel/UCdkGV51Nu0unDNT58bHt9bg/search?query=containers)

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

[Learn Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/)

To be able to try these tutorials in a real environment, you could try our Kubernetes installation 
in Openstack. If you prefer so, you may also create a local setup in your own machine: 

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

# References

“The principles behind DevOps are the same that transformed manufacturing. Instead of optimizing how raw materials are transformed into finished goods, DevOps shows how we optimize the IT value stream..” - Phoenix Project

“Imagine living in a DevOps world, where product owners, Development, QA, IT Ops, and InfoSec work together relentlessly to help each other and the overall organization win. They are enabling fast flow of planned work into production, while preserving world-class stability, reliability, availability, and security.” - Phoenix Project

* [Periodic Table of DevOps Tools](https://www.notion.so/Periodic-Table-of-DevOps-Tools-4e9b29562a944132b1235cfa7e400d68)
* [Automation](https://www.notion.so/Automation-e4dee021a4494d9cbdebb3ebc6205f4f)