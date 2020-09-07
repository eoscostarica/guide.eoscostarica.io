---
id: backend-boilerplate
title: Backend Boilerplate
sidebar_label: Backend Boilerplate
---

A highly scalable skeleton with best practices, made for quick start backend projects. 
This template features all the latest tools and best practices in the industry. You can find the repository [here] (https://github.com/eoscostarica/backend-boilerplate).
## Technologies
### **[hasura](https://hasura.io)**
- Hasura GraphQL Engine is an opensource service that connects to your databases & microservices and auto-generates a production-ready GraphQL backend with ACL.

### **[hapi](https://hapi.dev/)**
- A backend service for custom busines logic integrated with hasura using [actions](https://hasura.io/docs/1.0/graphql/manual/actions/index.html#actions)

### **[docker-compose](https://docs.docker.com/compose/)**
- Compose is a tool for defining and running multi-container Docker applications

## Instalation
*Basic knowledge of Docker, Docker Compose, and NodeJS is required.*

### Prerequisites
1. [git](https://git-scm.com/)
1. [nodejs](https://nodejs.org)
1. [hasura](https://hasura.io/docs/2.0/graphql/manual/hasura-cli/install-hasura-cli.html#install-hasura-cli)

### Step by step
1. Clone the repo using the command `git clone --depth=1 https://github.com/eoscostarica/backend-boilerplate.git`
1. Access the directory using the command: `cd backend-boilerplate`
1. Copy `.env.example` file and then update the variables according to your needs.

## Execution
> You need to have a terminal that is capable of run the `makefile`, which is in the root directory. You can find more information about make [here](https://www.gnu.org/software/make/manual/make.html).

We proceed to execute the command `make run`. After that, the following services will be available:
- hapi at http://localhost:9090
- hasura at http://localhost:9695
