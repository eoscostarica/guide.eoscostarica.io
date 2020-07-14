/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'Developer Guidelines', // Title for your website.
  tagline: 'EOS Costa Rica Developer Documentation',
  url: 'https://guide.eoscostarica.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  //cname: "guide.eoscostarica.io",
  // Used for publishing and more
  projectName: 'guide.eoscostarica.io',
  organizationName: 'eoscostarica',
  favicon: 'img/favicon/favicon.ico',
  //scripts: ['https://buttons.github.io/buttons.js','../../scripts/languageSelector.js'],
  themeConfig: {
    navbar: {
      logo: {
        alt: 'EOS Costa Rica Logo',
        src: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png',
        srcDark: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png'
      },
      links: [
        /*{
          href: 'https://guias.eoscostarica.io/',
          label: 'Inicio',
          position: 'left',
        },*/
        {to: 'docs/open-source-guidelines', label: 'Developer Guidelines', position: 'left'},
          {to: 'docs/eos-learn/eosio-protocol', label: 'Learn EOSIO', position: 'left'},
          {
            href: 'https://guias.eoscostarica.io/',
            label: 'Español',
            position: 'right',
          },
          {to: 'search'},
      ],
    },
    footer: {
      logo: {
        alt: 'EOS Costa Rica Logo',
        src: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent.png',
        srcDark: 'https://raw.githubusercontent.com/eoscostarica/design-assets/master/logos/eosCR/byw-horizontal-transparent-white.png',
        href: 'https://guide.eoscostarica.io/',
      },
      links: [
        {
          title: 'EOS Costa Rica',
          items: [
            {
              label: 'Engineering Culture',
              to: '/docs/engineering-culture',
            },
            {
              label: 'Open Source Projects',
              to: '/docs/open-source-projects',
            },
            {
              label: 'Open Source Guidelines',
              to: '/docs/open-source-guidelines',
            },
          ],
        },
        {
          title: 'Comunidad',
          items: [
            {
              label: 'Meetup',
              href: 'https://www.meetup.com/es/EOS-Costa-Rica/',
            },
            {
              label: 'Canal de Telegram',
              href: 'https://t.me/eoscr',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/eoscostarica/',
            },
          ],
        },
        {
          title: 'Más',
          items: [
            {
              label: 'LinnkedIn',
              href: 'https://www.linkedin.com/company/eoscostarica/',
            },
            {
              label: 'Medium',
              href: 'https://medium.com/@eoscostarica',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/eoscostarica',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EOS Costa Rica`, // You can also put own HTML here.
    },
    //Algolia integration
    algolia: {
      apiKey: 'b385fd20b79dbd8086bb917c038de56e',
      indexName: 'eoscostarica',
      placeholder: 'Search',
      algoliaOptions: {} // Optional, if provided by Algolia
    },
    googleAnalytics: {
      trackingID: "UA-173987-66",
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // Docs folder path relative to website dir.
          path: './docs',
          // Sidebars file relative to website dir.
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
module.exports = siteConfig;