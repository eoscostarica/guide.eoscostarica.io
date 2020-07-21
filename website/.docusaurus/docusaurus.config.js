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
        "src": "https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/eoscostarica-logo.png",
        "srcDark": "https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/eoscostarica-logo.png",
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
          "title": "Community",
          "items": [
            {
              "label": "Meetup",
              "href": "https://www.meetup.com/es/EOS-Costa-Rica/"
            },
            {
              "label": "Telegram channels",
              "href": "https://t.me/eoscr"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/eoscostarica/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Linkedin",
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
      "apiKey": "b385fd20b79dbd8086bb917c038de56e",
      "indexName": "eoscostarica",
      "placeholder": "Search",
      "algoliaOptions": {}
    },
    "googleAnalytics": {
      "trackingID": "UA-173987-66"
    }
  },
  "title": "EOS Costa Rica Developers Guide",
  "tagline": "We’d like to welcome you to our collaborative effort and induct you on to awesome blockchain technology and all the paradigms that make it possible.",
  "url": "https://guide.eoscostarica.io",
  "baseUrl": "/",
  "projectName": "guide.eoscostarica.io",
  "organizationName": "eoscostarica",
  "favicon": "img/favicon/favicon.ico",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "./docs",
          "sidebarPath": "C:\\Users\\Angelo CG\\Desktop\\guide.eoscostarica.io\\website\\sidebars.js",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "C:\\Users\\Angelo CG\\Desktop\\guide.eoscostarica.io\\website\\src\\css\\custom.css"
        }
      }
    ]
  ]
};