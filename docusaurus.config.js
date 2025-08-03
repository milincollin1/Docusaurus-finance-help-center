// @ts-check
const config = {
  title: 'Finance Help Center',
  tagline: 'Your guide to budgeting, saving, and investing',
  favicon: 'img/favicon.ico',
  url: 'https://finance-help-center.org',
  baseUrl: '/',
  organizationName: 'milincollin1',
  projectName: 'Docusaurus-finance-help-center',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: { defaultLocale: 'en', locales: ['en'] },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: { sidebarPath: require.resolve('./sidebars.js'), editUrl: undefined },
        blog: false,
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Finance Help',
      logo: { alt: 'Finance Help Logo', src: 'img/logo.svg' },
      items: [
        { to: 'docs/getting-started', label: 'Docs', position: 'left' },
        { href: 'https://github.com/milincollin1/Docusaurus-finance-help-center', label: 'GitHub', position: 'right' },
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
  },
};
module.exports = config;
