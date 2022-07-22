---
id: readme-file-template
title: Readme file template
sidebar_label: Readme File Template
description: Template to create a readme file
keywords: [readme, file, template, Readme File, Readme File Example, markdown, github markdown, github markdown template, example readme]
---

README is a file that brings a little description about the whole project, which contains an introduction and explanation of this one. The kind of information that can be describe here is information required to understand the project and its structure or purpose. Then, we will give a template to create a README file for a new project.

### To Copy this Readme Template see the [Markdown Source Code](./readme-file-source-code-template)

***

## Gif or Image Introduction

It's simple and can sound easy and yes, It does, but the impact that a Gif or Image can produce is significant. The viewer acquires the needed information to get interested in the project. For example:

![Life bank](/img/life-bank.webp)

## About the Project

Give a general description of the project brings a general view about the **project as a product**, for example:

*"Lifebank is an EOSIO-based dapp that helps local communities create a virtuous circle of value exchange between three parties — eligible life donors, community donation centers, and participating local businesses (sponsors).*

*Lifebank is an initiative of EOS Costa Rica, a company that develops blockchain-based solutions to solve real-world problems. Lifebank is our entry to the Coding for Change challenge organized by leading blockchain company, Block.one."*

## Table of Contents
With a good view about the information structure can make the reader go to the specific needed information, so then give a good view of the information with a Table of Contents will make easier this process. For example:

**Table of Contents**
1. Gif or Image Introduction
1. About The Project
1. Content Table
1. Project Purpose
1. Tech Stack
1. Development Environment
1. File Structure
1. Contributing
1. About Company

## Project Purpose

Describes the reason of why this was made, for example: 

*"We identified two main problems: a blood donation shortage and a local economic slowdown. Amid the COVID-19 outbreak, blood banks urgently need donors. People who are potential qualifying donors are prompted to stay home and isolate. As donations plummet and demand for blood and plasma increases, blood banks are experiencing a pronounced global shortage.*

*Moreover, the pandemic is impacting local economies due to a generalized lockdown. Small businesses that rely on the local community must think of ways to incentivize customers to buy as soon as restrictions are lifted."*

## Tech Stack
The purpose is to make the user know the main technology were needed to develop the project, so the user could understand the project with a new kind of view, for example, the information that could be given here is:


- React.js - React 18✨, React Router 5
- Rematch/core - Rematch a Redux Framework
- Material-ui/core - React components for faster and easier web development universal-authenticator-library - A library for allowing apps to easily use different auth providers
- Lint - ESlint
- Styles - Material-UI Theme (customizable)


## Development Environment

Specify where were the project developed, in case someone else wants to make a contribution to the project progress, for example:

[evodex.io](https://evodex.io/exchange) is running on the EOS MainNet and is built from the master branch, our production branch.

[jungle.evodex.io](https://jungle.evodex.io/) is running on the Jungle 3 TestNet and is built from the develop branch used for development, integration, and testing new features.

### Quick Start

- Clone this repo using `git clone https://github.com/YOUR_PROJECT_NAME.git`
- Move to the appropriate directory: `cd <YOUR_PROJECT_NAME>`.
- Run `yarn` in order to install dependencies. At this point you can run `yarn start` to see the example app at http://localhost:3000.

### Getting Started
Give the needed instruction to run the project locally, for example:

#### **Prerequisites**

`
yarn
`

#### **Installation**

1. Clone the repository

    `
    git clone https://github.com/your_username_/Project-Name.git
    `
2. Install yarn packages

    `
    yarn install
    `

    or just

    `
    yarn
    `
3. Run the project
    
    `
    yarn start
    `

## File Structure
This could help the reader understand the organization inside the project, for example:

```text title="modify"
/
├── public
│   ├── index.html
│   └── manifest.json
├──  src
│   ├── api
│   ├── components
│   ├── config
│   ├── containers
│   ├── models
│   ├── routes
│   ├── theme
│   ├── utils
│   ├── App.js
│   ├── index.js
│   └── store.js
├── .dockerignore
├── .gitignore
├── .env.example
├── .eslintrc
├── .prettierrc
├── Dockerfile
├── LICENSE
├── README.md
├── docker-compose.yml
├── nginx.conf
└── package.json
```

## Contributing

If you want to make a contribution, please follow the next steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m '<type>(<scope>): <subject>'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please Read EOS Costa Rica's [Open Source Contributing Guidelines](https://guide.eoscostarica.io/docs/open-source-guidelines/) for more information about programming conventions.

If you find a bug, please report big and small bugs by **opening an issue** `<link to issue project section>`

## About EOS Costa Rica

<div style={{ display: "block", textAlign: "center" }}>
    <img style={{ width: "40%" }} src="https://raw.githubusercontent.com/eoscostarica/.github/master/.github/workflows/images/eos-costa-rica-logo.png" />
</div>

EOS Costa Rica is an independently-owned, self-funded, bare-metal Genesis block producer that provides stable and secure infrastructure for EOSIO blockchains. We support open source software for our community while offering enterprise blockchain development and custom smart contract development for our clients.

[eoscostarica.io](https://eoscostarica.io/)