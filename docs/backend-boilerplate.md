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

## Project structure
```bash
eoscrbackendboilerplate/
├── hasura
│ ├── migrations
│ └── config.ymal
├── hapi
│ ├── src
│ | ├── config
│ | ├── api
│ | ├── routes
│ | └── config.ymal
│ ├── .dockerignore
│ ├── .eslintrc
│ ├── .prettierrc
│ ├── Dockerfile
│ ├── yarn-lock.json
│ └── package.json
├── .env.example
├── .gitignore
├── docker-compose.yaml
├── .LICENSE
├── .prettierrc
├── Dockerfile
├── LICENSE
└── README.md
```
## Instalation
*Basic knowledge of Docker, Docker Compose, and NodeJS is required.*

### Prerequisites
1. [git](https://git-scm.com/)
1. [nodejs](nodejs.org)
1. [hasura](https://hasura.io/docs/2.0/graphql/manual/hasura-cli/install-hasura-cli.html#install-hasura-cli)

### Step by step
1. Clone the repo using the command `git clone --depth=1 https://github.com/eoscostarica/backend-boilerplate.git`
1. Access the directory using the command: `cd backend-boilerplate`
1. Copy `.env.example` file and then update the variables according to your needs.
```
# global
STAGE=dev
APP_NAME=eoscr-backend-boilerplate
# wallet
WALLET_DATA=./wallet_data
# postgres
POSTGRES_USER=eoscr
POSTGRES_PASSWORD=password
POSTGRES_DB=localdb
POSTGRES_DATA=./db_data
# hasura
HASURA_GRAPHQL_ENABLE_CONSOLE=true
HASURA_GRAPHQL_DATABASE_URL=postgres://eoscr:password@postgres:5432/localdb
HASURA_GRAPHQL_ADMIN_SECRET=myadminsecretkey
HASURA_GRAPHQL_UNAUTHORIZED_ROLE=guest
# hapi
HAPI_EOS_API_ENDPOINT=https://jungle2.eosio.cr
HAPI_EOS_API_CHAIN_ID=e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473
HAPI_EOS_BASE_ACCOUNT=baseaccount
HAPI_EOS_BASE_ACCOUNT_PASSWORD=PW...
HAPI_EOS_WALLET_URL=http://wallet:8888
HAPI_HASURA_URL=http://hasura:8080/v1/graphql
HAPI_HASURA_ADMIN_SECRET=myadminsecretkey
HAPI_SERVER_PORT=9090
HAPI_SERVER_ADDRESS=hapi
```
> Content of `.env.example` file.

## Execution
> You need to have a terminal that is capable of run the `makefile`, which is in the root directory. You can find more information about make [here](https://www.gnu.org/software/make/manual/make.html).

We proceed to execute the command `make run`. After that, the following services will be available:
- hapi at http://localhost:9090
- hasura at http://localhost:9695
