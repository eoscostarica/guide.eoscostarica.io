
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/',
  component: ComponentCreator('/'),
  exact: true,
  
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug'),
  exact: true,
  
},
{
  path: '/search',
  component: ComponentCreator('/search'),
  exact: true,
  
},
{
  path: '/docs',
  component: ComponentCreator('/docs'),
  
  routes: [
{
  path: '/docs/agile-methodologies',
  component: ComponentCreator('/docs/agile-methodologies'),
  exact: true,
  
},
{
  path: '/docs/backend-boilerplate',
  component: ComponentCreator('/docs/backend-boilerplate'),
  exact: true,
  
},
{
  path: '/docs/community-resources/blog-posts',
  component: ComponentCreator('/docs/community-resources/blog-posts'),
  exact: true,
  
},
{
  path: '/docs/community-resources/eos-podcasts',
  component: ComponentCreator('/docs/community-resources/eos-podcasts'),
  exact: true,
  
},
{
  path: '/docs/community-resources/eosio-networks',
  component: ComponentCreator('/docs/community-resources/eosio-networks'),
  exact: true,
  
},
{
  path: '/docs/community-resources/telegram-channels',
  component: ComponentCreator('/docs/community-resources/telegram-channels'),
  exact: true,
  
},
{
  path: '/docs/developer-tools',
  component: ComponentCreator('/docs/developer-tools'),
  exact: true,
  
},
{
  path: '/docs/engineering-culture',
  component: ComponentCreator('/docs/engineering-culture'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/accounts-and-permissions',
  component: ComponentCreator('/docs/eos-learn/accounts-and-permissions'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/block-producers',
  component: ComponentCreator('/docs/eos-learn/block-producers'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/consensus-mechanism',
  component: ComponentCreator('/docs/eos-learn/consensus-mechanism'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/dapp-development',
  component: ComponentCreator('/docs/eos-learn/dapp-development'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/devops',
  component: ComponentCreator('/docs/eos-learn/devops'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/eos-blockchain',
  component: ComponentCreator('/docs/eos-learn/eos-blockchain'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/eosio-protocol',
  component: ComponentCreator('/docs/eos-learn/eosio-protocol'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/important-functions',
  component: ComponentCreator('/docs/eos-learn/important-functions'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/private-keys',
  component: ComponentCreator('/docs/eos-learn/private-keys'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/smart-contract',
  component: ComponentCreator('/docs/eos-learn/smart-contract'),
  exact: true,
  
},
{
  path: '/docs/eos-learn/system-resources',
  component: ComponentCreator('/docs/eos-learn/system-resources'),
  exact: true,
  
},
{
  path: '/docs/material-ui',
  component: ComponentCreator('/docs/material-ui'),
  exact: true,
  
},
{
  path: '/docs/open-source-guidelines',
  component: ComponentCreator('/docs/open-source-guidelines'),
  exact: true,
  
},
{
  path: '/docs/open-source-projects',
  component: ComponentCreator('/docs/open-source-projects'),
  exact: true,
  
},
{
  path: '/docs/tools/block-explorers',
  component: ComponentCreator('/docs/tools/block-explorers'),
  exact: true,
  
},
{
  path: '/docs/tools/command-line',
  component: ComponentCreator('/docs/tools/command-line'),
  exact: true,
  
},
{
  path: '/docs/tools/eosio-sdk-libraries',
  component: ComponentCreator('/docs/tools/eosio-sdk-libraries'),
  exact: true,
  
},
{
  path: '/docs/tools/glossary',
  component: ComponentCreator('/docs/tools/glossary'),
  exact: true,
  
},
{
  path: '/docs/tutorials/getting-started',
  component: ComponentCreator('/docs/tutorials/getting-started'),
  exact: true,
  
},
{
  path: '/docs/tutorials/git-workflow-tutorial',
  component: ComponentCreator('/docs/tutorials/git-workflow-tutorial'),
  exact: true,
  
},
{
  path: '/docs/tutorials/hello-world-contract',
  component: ComponentCreator('/docs/tutorials/hello-world-contract'),
  exact: true,
  
},
{
  path: '/docs/tutorials/modern-cpp',
  component: ComponentCreator('/docs/tutorials/modern-cpp'),
  exact: true,
  
},
{
  path: '/docs/tutorials/node-installation',
  component: ComponentCreator('/docs/tutorials/node-installation'),
  exact: true,
  
},
{
  path: '/docs/visual-resources',
  component: ComponentCreator('/docs/visual-resources'),
  exact: true,
  
},
{
  path: '/docs/web-app-boilerplate',
  component: ComponentCreator('/docs/web-app-boilerplate'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
