---
id: docker
title: Docker
sidebar_label: Docker
---


## Docker Engine

Docker Engine is an open source containerization technology for building and containerizing your applications. Docker Engine acts as a client-server application with:

- A server with a long-running daemon process [dockerd](https://docs.docker.com/engine/reference/commandline/dockerd).
- APIs which specify interfaces that programs can use to talk to and instruct the Docker daemon.
- A command line interface (CLI) client [docker](https://docs.docker.com/engine/reference/commandline/cli/).

The CLI uses [Docker APIs](https://docs.docker.com/engine/api/) to control or interact with the Docker daemon through scripting or direct CLI commands. Many other Docker applications use the underlying API and CLI. The daemon creates and manage Docker objects, such as images, containers, networks, and volumes.

For more details, see [Docker Architecture](https://docs.docker.com/get-started/overview/#docker-architecture).

To have an initial docker configuration, we need to set up three main thing:

1. **Dockerfile**: Define the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image.
1. **Image**: An image is a read-only template with instructions for creating a Docker container
1. **Container**: A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI.

## Docker Compose

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

Using Compose is basically a three-step process:

1. Define your app’s environment with a Dockerfile so it can be reproduced anywhere.
1. Define the services that make up your app in docker-compose.yml so they can be run together in an isolated environment.
1. Run docker-compose up and Compose starts and runs your entire app.

A docker-compose.yml looks like this:
```yml
version: "3.9"  # optional since v1.27.0
services:
  web:
    build: .
    ports:
      - "5000:5000"
    volumes:
      - .:/code
      - logvolume01:/var/log
    links:
      - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

## Getting Started

To start our first Docker project, we are going to create the needed configuration to make it start and says `Hello world, we are EOS Costa Rica 🦋`. First of all, we need the main configuration, so follow next steps to get it.

### Project Structure
```
/
├──  node_modules
├── src
│   ├── index.js
├── .dockerignore
├── .gitignore
├── Dockerfile
├── package.json
└── yarn.lock
```

### Code Breakdown

#### Dockerfile

```Dockerfile
FROM node:12

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD [ "yarn", "start" ]
```

#### .dockerignore

`node_modules`

#### .gitignore

`node_modules`

#### src/index.js

```js
const app = require('express')();
 
app.get('/', (req, res ) => 
    res.json({ message: 'Hello world, we are EOS Costa Rica 🦋' }) 
);
 
const port = process.env.PORT || 8080;
 
app.listen(port, () => console.log(`app listening on http://localhost:${port}`) );
```

#### package.json

```json
{
  "name": "docker-demo",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node src/index.js"
  },
  "keywords": [],
  "author": "EOS Costa Rica",
  "license": "MIT",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### Commands

#### Build the Image

`docker build -t eoscostarica/helloworld:1.0 .`

#### Run the Container

`docker run -p 5000:8080 <image-id>`

### Docker Compose

#### docker-compose.yml 

```yml
version: '3'
services:
  web:
    build: .
    ports:
      - "8080:8080"
  db:
    image: "mysql"
    environment: 
      MYSQL_ROOT_PASSWORD: password
    volumes:
      - db-data:/foo

volumes:
  db-data:
```

### Run multiple Containers

#### command line

`docker-compose up`