// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Auxilor Plugins',
  tagline: 'Wiki for Auxilor (eco) plugins',
  url: 'https://plugins.auxilor.io/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Auxilor', // Usually your GitHub org/user name.
  projectName: 'auxilor.github.io', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/Auxilor/auxilor.github.io/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Auxilor Plugins',
        logo: {
          alt: 'eco icon',
          src: 'img/logo.svg',
        },
        items: [
            {
              href: 'https://discord.gg/ZcwpSsE',
              label: 'Support Discord',
              position: 'right',
            },
            {
              href: 'https://github.com/Auxilor',
              label: 'Contribute on GitHub',
              position: 'right',
            }
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: 'f04c51915432c1fada99e882da164ecc',
        indexName: 'auxilor',
        appId: 'MZ2URUJP31', // Optional, if you run the DocSearch crawler on your own
        algoliaOptions: {} // Optional, if provided by Algolia
      },
    }),
};

module.exports = config;
