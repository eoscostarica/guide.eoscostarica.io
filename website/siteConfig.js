/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/eoscostarica-transaprent-whiteall.png'.
    image: '/img/eoscostarica-transaprent-whiteall.png',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Developer Guidelines', // Title for your website.
  tagline: 'EOS Costa Rica Developer Documentation',
  url: 'https://guide.eoscostarica.io', // Your website URL
  baseUrl: '/', // Base URL for your project */
  cname: "guide.eoscostarica.io",
  disableHeaderTitle: true,

  // Used for publishing and more
  projectName: 'guide.eoscostarica.io',
  organizationName: 'eoscostarica',

  editUrl: 'https://github.com/eoscostarica/guide.eoscostarica.io/edit/master/docs/',

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {href: 'https://guide.eoscostarica.io/', label: 'Home'},
    {doc: 'open-source-guidelines', label: 'Developer Guidelines'},
    {doc: 'eos-learn/eosio-protocol', label: 'Learn EOSIO'},
    {href: 'https://guias.eoscostarica.io/', label: 'Español'}
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/eoscostarica-transparent-logo.png',
  footerIcon: 'img/eoscostarica-logo.png',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#212121',
    secondaryColor: '#3EBBD3',
  },

  /* Custom fonts for website */

  fonts: {
    myFont: [
      `Open Sans`, 
      `Nunito Sans`,
      `PT Sans`,
      `Roboto`,
      `Source Sans Pro`,
      `Work Sans`
    ]
  },


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} EOS Costa Rica`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  twitterUsername: "eoscostarica",

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/eoscostarica/guide.eoscostarica.io',

    // Show documentation's last contributor's name.
  enableUpdateBy: false,

  // Show documentation's last update time.
  enableUpdateTime: true,
  docsSideNavCollapsible: true
};

module.exports = siteConfig;
