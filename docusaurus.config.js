// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Finance Help Center',
  tagline: 'Your guide to budgeting, saving, and investing',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://finance-help-center.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'milincollin1', // Usually your GitHub org/user name.
  projectName: 'Docusaurus-finance-help-center', // Usually your repo name.
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field
  // to set useful metadata like html lang. For example, if your site is Chinese,
  // you may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Remove "edit this page" links:
          editUrl: undefined,
        },
        blog: false,
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
        title: 'Finance Help',
        logo: {
          alt: 'Finance Help Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: 'docs/getting-started', label: 'Docs', position: 'left' },
          {
            href: 'https://github.com/milincollin1/Docusaurus-finance-help-center',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              { label: 'Getting Started', to: 'docs/getting-started' },
              { label: 'Budgeting', to: 'docs/budgeting' },
              { label: 'Saving & Investing', to: 'docs/saving-investing' },
            ],
          },
          {
            title: 'Community',
            items: [
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
              { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Finance Help Center`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
