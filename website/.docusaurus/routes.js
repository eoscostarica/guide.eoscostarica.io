
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/search',
  component: ComponentCreator('/search','bd6'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','dfe'),
  
  routes: [
{
  path: '/docs/agile-methodologies',
  component: ComponentCreator('/docs/agile-methodologies','286'),
  exact: true,
},
{
  path: '/docs/backend-boilerplate',
  component: ComponentCreator('/docs/backend-boilerplate','1b4'),
  exact: true,
},
{
  path: '/docs/community-resources/blog-posts',
  component: ComponentCreator('/docs/community-resources/blog-posts','ce3'),
  exact: true,
},
{
  path: '/docs/community-resources/eos-podcasts',
  component: ComponentCreator('/docs/community-resources/eos-podcasts','6c8'),
  exact: true,
},
{
  path: '/docs/community-resources/eosio-networks',
  component: ComponentCreator('/docs/community-resources/eosio-networks','d3a'),
  exact: true,
},
{
  path: '/docs/community-resources/social-media-guidelines',
  component: ComponentCreator('/docs/community-resources/social-media-guidelines','3bf'),
  exact: true,
},
{
  path: '/docs/community-resources/telegram-channels',
  component: ComponentCreator('/docs/community-resources/telegram-channels','bc2'),
  exact: true,
},
{
  path: '/docs/developer-tools',
  component: ComponentCreator('/docs/developer-tools','9ac'),
  exact: true,
},
{
  path: '/docs/engineering-culture',
  component: ComponentCreator('/docs/engineering-culture','fc1'),
  exact: true,
},
{
  path: '/docs/eos-learn/accounts-and-permissions',
  component: ComponentCreator('/docs/eos-learn/accounts-and-permissions','566'),
  exact: true,
},
{
  path: '/docs/eos-learn/block-producers',
  component: ComponentCreator('/docs/eos-learn/block-producers','e48'),
  exact: true,
},
{
  path: '/docs/eos-learn/consensus-mechanism',
  component: ComponentCreator('/docs/eos-learn/consensus-mechanism','d9a'),
  exact: true,
},
{
  path: '/docs/eos-learn/dapp-development',
  component: ComponentCreator('/docs/eos-learn/dapp-development','d17'),
  exact: true,
},
{
  path: '/docs/eos-learn/devops',
  component: ComponentCreator('/docs/eos-learn/devops','21c'),
  exact: true,
},
{
  path: '/docs/eos-learn/eos-blockchain',
  component: ComponentCreator('/docs/eos-learn/eos-blockchain','0d2'),
  exact: true,
},
{
  path: '/docs/eos-learn/eosio-protocol',
  component: ComponentCreator('/docs/eos-learn/eosio-protocol','546'),
  exact: true,
},
{
  path: '/docs/eos-learn/important-functions',
  component: ComponentCreator('/docs/eos-learn/important-functions','238'),
  exact: true,
},
{
  path: '/docs/eos-learn/private-keys',
  component: ComponentCreator('/docs/eos-learn/private-keys','8d5'),
  exact: true,
},
{
  path: '/docs/eos-learn/ricardian-contracts',
  component: ComponentCreator('/docs/eos-learn/ricardian-contracts','1a9'),
  exact: true,
},
{
  path: '/docs/eos-learn/smart-contract',
  component: ComponentCreator('/docs/eos-learn/smart-contract','9f5'),
  exact: true,
},
{
  path: '/docs/eos-learn/system-resources',
  component: ComponentCreator('/docs/eos-learn/system-resources','3f0'),
  exact: true,
},
{
  path: '/docs/material-ui',
  component: ComponentCreator('/docs/material-ui','f6b'),
  exact: true,
},
{
  path: '/docs/open-source-guidelines',
  component: ComponentCreator('/docs/open-source-guidelines','d60'),
  exact: true,
},
{
  path: '/docs/open-source-projects',
  component: ComponentCreator('/docs/open-source-projects','709'),
  exact: true,
},
{
  path: '/docs/tools/block-explorers',
  component: ComponentCreator('/docs/tools/block-explorers','74b'),
  exact: true,
},
{
  path: '/docs/tools/command-line',
  component: ComponentCreator('/docs/tools/command-line','b1f'),
  exact: true,
},
{
  path: '/docs/tools/eosio-sdk-libraries',
  component: ComponentCreator('/docs/tools/eosio-sdk-libraries','31d'),
  exact: true,
},
{
  path: '/docs/tools/glossary',
  component: ComponentCreator('/docs/tools/glossary','1f0'),
  exact: true,
},
{
  path: '/docs/tutorials/getting-started',
  component: ComponentCreator('/docs/tutorials/getting-started','99e'),
  exact: true,
},
{
  path: '/docs/tutorials/git-workflow-tutorial',
  component: ComponentCreator('/docs/tutorials/git-workflow-tutorial','f71'),
  exact: true,
},
{
  path: '/docs/tutorials/hello-world-contract',
  component: ComponentCreator('/docs/tutorials/hello-world-contract','681'),
  exact: true,
},
{
  path: '/docs/tutorials/modern-cpp',
  component: ComponentCreator('/docs/tutorials/modern-cpp','a3c'),
  exact: true,
},
{
  path: '/docs/tutorials/node-installation',
  component: ComponentCreator('/docs/tutorials/node-installation','e7b'),
  exact: true,
},
{
  path: '/docs/visual-resources',
  component: ComponentCreator('/docs/visual-resources','a06'),
  exact: true,
},
{
  path: '/docs/web-app-boilerplate',
  component: ComponentCreator('/docs/web-app-boilerplate','ec9'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
