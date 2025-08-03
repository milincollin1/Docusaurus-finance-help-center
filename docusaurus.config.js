// @ts-check
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Finance Help Center',
  tagline: 'Your guide to budgeting, saving, and investing',
  favicon: 'img/favicon.ico',

  // Your production URL and base URL
  url: 'https://finance-help-center.org',
  baseUrl: '/',

  organizationName: 'milincollin1', // GitHub org/user name
  projectName: 'Docusaurus-finance-help-center', // Repo name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
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
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Finance Help Center`,
      },
      // Dark mode configuration
      colorMode: {
        defaultMode: 'dark',
        // Allow users to toggle between light and dark
        disableSwitch: false,
        // Do NOT respect system preference; always start in dark
        respectPrefersColorScheme: false,
      },
      // Prism syntax highlighting was removed to avoid build errors
      // prism: {
      //   theme: require('prism-react-renderer/themes/github'),
      //   darkTheme: require('prism-react-renderer/themes/dracula'),
      // },
    }),
};

module.exports = config;
