# guide.eoscostarica.io
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-8-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

import useBaseUrl from '@docusaurus/useBaseUrl';


EOS Costa Rica Developers Documentation Site.

In this site you will find the resources collected in the day-to-day life of EOS Costa Rica collaborators. Feel free to collaborate, comment and suggest changes / ideas to improve the site.

<img
  alt="Guide front page"
  src={useBaseUrl('img/guide-page.png')}
/>;

## About the Project

This project recollect all new knowledge gotten by our workers to help and share information.

## Table of Contents

With a good view about the information structure can make the reader go to the specific needed information, so then give a good view of the information with a Table of Contents will make easier this process. For example:

**Table of Contents**

1. Gif or Image Introduction
2. About The Project
3. Content Table
4. Project Purpose
5. Version
6. Tech Stack
7. Development Environment
8. File Structure
9. License
10. Contributing
11. Contributors
12. About Company

## Project Purpose

We have created this project to improve our workflow which allows the old and new member have a guideline to follow to help them feel as comfortable as possible following the programming practices, recommendations, programming bases and others.

## Version
:::note modify
we are on version 0.2.0
:::

## Tech Stack
- React.js - React 16✨, React Router 5
- Docusaurus - Build optimized websites quickly, focus on your content
- Material-ui/core - React components for faster and easier web development universal-authenticator-library - A library for allowing apps to easily use different auth providers
- Lint - ESlint
- Styles - Material-UI Theme (customizable)


## Development Environment

[evodex.io](https://evodex.io/exchange) is running on the EOS MainNet and is built from the master branch, our production branch.

[jungle.evodex.io](https://jungle.evodex.io/) is running on the Jungle 3 TestNet and is built from the develop branch used for development, integration, and testing new features.

### Quick start

- Clone this repo using `https://github.com/eoscostarica/guide.eoscostarica.io.git`
- Move to the appropriate directory: `cd guide.eoscostarica.io.git`.
- Run `yarn` in order to install dependencies. At this point you can run `yarn start` to see the example app at http://localhost:3000.

### Getting Started

Give the needed instruction to run the project locally, for example:

#### **Prerequisites**

- `yarn`
- `git`
- `node.js`

#### **Installation**

1. Clone the repository

    `
    git clone https://github.com/eoscostarica/guide.eoscostarica.io.git
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

```sh
guias.eoscostarica.io/
├── .github
│ ├── workflows
│ | ├── nodejs.yml
│ | └── services
│ └── pull_request_template.md
├── docs
├── src
│ ├── css
│ | ├── custom.css
│ | └── homepage.css
│ ├── pages
│ | └── index.js
├── static
│ ├── img
│ ├── scripts
│ └── CNAME
├── .all-contributorsrc
├── .gitignore
├── docusaurus.config.JS
├── package.json
├── package.json
├── yarn.lock
└── README.md
```

## License

MIT © [EOS Costa Rica](https://eoscostarica.io)

## Contributing

We use a Kanban-style board. That's were we prioritize the work. [Go to Project Board](https://github.com/eoscostarica/guide.eoscostarica.io/projects/1).

If you want to make a contribution, please follow the next steps:

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m '<type>(<scope>): <subject>'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please Read EOS Costa Rica's [Open Source Contributing Guidelines](https://guide.eoscostarica.io/docs/open-source-guidelines/) for more information about programming conventions.

If you find a bug, please report big and small bugs by **opening an issue** `<link to issue project section>`

## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
   <tr>
    <td align="center"><a href="https://github.com/JustinCast"><img src="https://avatars1.githubusercontent.com/u/17890146?v=4?s=100" width="100px;" alt=""/><br /><sub><b>JustinCast</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JustinCast" title="Code">💻</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JustinCast" title="Documentation">📖</a> <a href="#infra-JustinCast" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="#maintenance-JustinCast" title="Maintenance">🚧</a> <a href="#projectManagement-JustinCast" title="Project Management">📆</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AJustinCast" title="Reviewed Pull Requests">👀</a> <a href="#translation-JustinCast" title="Translation">🌍</a></td>
    <td align="center"><a href="https://eoscostarica.io"><img src="https://avatars0.githubusercontent.com/u/5632966?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Xavier Fernandez</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=xavier506" title="Code">💻</a> <a href="#content-xavier506" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=xavier506" title="Documentation">📖</a> <a href="#ideas-xavier506" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Axavier506" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Edgar097"><img src="https://avatars3.githubusercontent.com/u/76976401?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Edgar Parra</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=Edgar097" title="Code">💻</a> <a href="#content-Edgar097" title="Content">🖋</a> <a href="#ideas-Edgar097" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AEdgar097" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/leister-francisco-alvarez-campos-65b7801bb/"><img src="https://avatars3.githubusercontent.com/u/28828796?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Leister Francisco Alvarez Campos</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=leisterfrancisco" title="Code">💻</a> <a href="#content-leisterfrancisco" title="Content">🖋</a> <a href="#ideas-leisterfrancisco" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Aleisterfrancisco" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/stephaniedelgadobrenes/"><img src="https://avatars1.githubusercontent.com/u/31549144?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Steph Delgado</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=steph222" title="Code">💻</a> <a href="#content-steph222" title="Content">🖋</a> <a href="#ideas-steph222" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Asteph222" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/AngeloCG97"><img src="https://avatars3.githubusercontent.com/u/51149817?v=4?s=100" width="100px;" alt=""/><br /><sub><b>AngeloCG97</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=AngeloCG97" title="Code">💻</a> <a href="#content-AngeloCG97" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=AngeloCG97" title="Documentation">📖</a> <a href="#ideas-AngeloCG97" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AAngeloCG97" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/JeanVegaD"><img src="https://avatars0.githubusercontent.com/u/19317138?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Jean Vega</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JeanVegaD" title="Code">💻</a> <a href="#content-JeanVegaD" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=JeanVegaD" title="Documentation">📖</a> <a href="#ideas-JeanVegaD" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3AJeanVegaD" title="Reviewed Pull Requests">👀</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ldrojas"><img src="https://avatars1.githubusercontent.com/u/29232417?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Luis Diego Rojas</b></sub></a><br /><a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=ldrojas" title="Code">💻</a> <a href="#content-ldrojas" title="Content">🖋</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/commits?author=ldrojas" title="Documentation">📖</a> <a href="#ideas-ldrojas" title="Ideas, Planning, & Feedback">🤔</a> <a href="https://github.com/eoscostarica/desarrolladores.eoscostarica.io/pulls?q=is%3Apr+reviewed-by%3Aldrojas" title="Reviewed Pull Requests">👀</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## About EOS Costa Rica

<div style={{ display: "block", textAlign: "center" }}>
    <img style={{ width: "50%" }} src="https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/fullColor-horizontal-transparent-white.png" />
</div>

EOS Costa Rica is an independently-owned, self-funded, bare-metal Genesis block producer that provides stable and secure infrastructure for EOSIO blockchains. We support open source software for our community while offering enterprise blockchain development and custom smart contract development for our clients.

[eoscostarica.io](https://eoscostarica.io/)