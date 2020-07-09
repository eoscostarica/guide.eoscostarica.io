export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "EOS Costa Rica Logo",
        "src": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png",
        "srcDark": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png"
      },
      "links": [
        {
          "to": "docs/open-source-guidelines",
          "label": "Developer Guidelines",
          "position": "left"
        },
        {
          "to": "docs/eos-learn/eosio-protocol",
          "label": "Learn EOSIO",
          "position": "left"
        },
        {
          "href": "https://guias.eoscostarica.io/",
          "label": "Español",
          "position": "right"
        },
        {
          "to": "search"
        }
      ]
    },
    "footer": {
      "logo": {
        "alt": "EOS Costa Rica Logo",
        "src": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png",
        "srcDark": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png",
        "href": "https://guide.eoscostarica.io/"
      },
      "links": [
        {
          "title": "EOS Costa Rica",
          "items": [
            {
              "label": "Engineering Culture",
              "to": "/docs/engineering-culture"
            },
            {
              "label": "Open Source Projects",
              "to": "/docs/open-source-projects"
            },
            {
              "label": "Open Source Guidelines",
              "to": "/docs/open-source-guidelines"
            }
          ]
        },
        {
          "title": "Comunidad",
          "items": [
            {
              "label": "Meetup",
              "href": "https://www.meetup.com/es/EOS-Costa-Rica/"
            },
            {
              "label": "Canal de Telegram",
              "href": "https://t.me/eoscr"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/eoscostarica/"
            }
          ]
        },
        {
          "title": "Más",
          "items": [
            {
              "label": "LinnkedIn",
              "href": "https://www.linkedin.com/company/eoscostarica/"
            },
            {
              "label": "Medium",
              "href": "https://medium.com/@eoscostarica"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/eoscostarica"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 EOS Costa Rica"
    },
    "algolia": {
      "apiKey": "bc2a776159634dff6c77c849d8b80dc1",
      "indexName": "eoscostarica_guias",
      "placeholder": "Search",
      "algoliaOptions": {}
    },
    "googleAnalytics": {
      "trackingID": "UA-173987-66"
    }
  },
  "title": "Developer Guidelines",
  "tagline": "EOS Costa Rica Developer Documentation",
  "url": "https://guide.eoscostarica.io",
  "baseUrl": "/",
  "projectName": "guias.eoscostarica.io",
  "organizationName": "eoscostarica",
  "favicon": "img/favicon/favicon.ico",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "./docs",
          "sidebarPath": "C:\\Users\\Angelo CG\\Desktop\\migracion guide.eoscostarica.io\\guide.eoscostarica.io\\website\\sidebars.js",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\Angelo CG\\Desktop\\migracion guide.eoscostarica.io\\guide.eoscostarica.io\\website\\src\\css\\custom.css"
        }
      }
    ]
  ]
};