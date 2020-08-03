export default {
  "title": "EOS Costa Rica Developers Guide",
  "tagline": "We’d like to welcome you to our collaborative effort and induct you on to awesome blockchain technology and all the paradigms that make it possible.",
  "url": "https://guide.eoscostarica.io",
  "baseUrl": "/",
  "projectName": "guide.eoscostarica.io",
  "organizationName": "eoscostarica",
  "favicon": "img/favicon/favicon.ico",
  "themeConfig": {
    "navbar": {
      "logo": {
        "alt": "EOS Costa Rica Logo",
        "src": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png",
        "srcDark": "https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png"
      },
      "items": [
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
          "to": "docs/tutorials/getting-started",
          "label": "Tutorials",
          "position": "left"
        },
        {
          "to": "docs/tools/block-explorers",
          "label": "Tools",
          "position": "left"
        },
        {
          "to": "docs/community-resources/telegram-channels",
          "label": "Community",
          "position": "left"
        },
        {
          "href": "https://guias.eoscostarica.io/",
          "label": "Español",
          "position": "right"
        },
        {
          "to": "search",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "logo": {
        "alt": "EOS Costa Rica Logo",
        "src": "https://raw.githubusercontent.com/eoscostarica/guide.eoscostarica.io/master/website/static/img/eoscostarica-logo.png",
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
      "copyright": "Copyright © 2020 EOS Costa Rica",
      "style": "light"
    },
    "algolia": {
      "apiKey": "b385fd20b79dbd8086bb917c038de56e",
      "indexName": "eoscostarica",
      "placeholder": "Search",
      "algoliaOptions": {},
      "appId": "BH4D9OD16A"
    },
    "googleAnalytics": {
      "trackingID": "UA-173987-66"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "./docs",
          "editUrl": "https://github.com/eoscostarica/guide.eoscostarica.io/tree/master/website",
          "sidebarPath": "/Users/rodrigofernandez/dev/guide.eoscostarica.io/website/sidebars.js",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true
        },
        "theme": {
          "customCss": "/Users/rodrigofernandez/dev/guide.eoscostarica.io/website/src/css/custom.css"
        }
      }
    ]
  ],
  "scripts": [
    {
      "src": "https://medium-widget.pixelpoint.io/widget.js",
      "async": true
    },
    {
      "src": "../../static/scripts/mediumScript.js",
      "async": true
    }
  ],
  "onBrokenLinks": "throw",
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": []
};