---
id: web-app-boilerplate
title: Web App Boilerplate
sidebar_label: Webapp Boilerplate
description: Webapp Boilerplate for software developers EOS Costa Rica
keywords: [ Webapp Boilerplate, Components, Material to develop, Web boilerplate]
---

## React Webapp Boilerplate

A bare-bones react web app featuring UAL for EOSIO authenticators (wallets)

## Technologies

- React.js - React 16✨, React Router 5
- Rematch/core - Rematch a Redux Framework
- Material-ui/core - React components for faster and easier web development
- universal-authenticator-library - A library for allowing apps to easily use different auth providers (optional)
- Lint - ESlint
- Styles - Material-UI Theme (customizable)

## Installation

Basic knowledge about Docker, Docker Compose and NodeJS is required.

### Prerequisites

- [git](https://git-scm.com/)
- [node.js](https://nodejs.org/es/)
- [yarn](https://yarnpkg.com/)

### Step by step

Copy the `.env.example` then update the environment variables according to your needs

```
cp .env.example .env
```

_If you want to the boilerplate using UAL login integration, please make sure that `REACT_APP_USE_UAL` env variable is set as true._

## Execution

1.  Clone this repo using `git clone --depth=1 https://github.com/eoscostarica/webapp-boilerplate.git <YOUR_PROJECT_NAME>`
2.  Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
3.  Run `yarn` in order to install dependencies.
    _At this point you can run `yarn start` to see the example app at `http://localhost:3000`._

- **GitHub** : https://github.com/eoscostarica/webapp-boilerplate

## EOSCR React Components
A collection of React Components for EOSIO

### GitHub Repository
https://github.com/eoscostarica/eoscr-components

### StoryBook Preview
https://components.eosio.cr


