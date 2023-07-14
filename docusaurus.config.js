// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '哈啰工业大学生存手册',
  tagline: '开放、互助、共建、共享。帮你在大学少走弯路！（施工中）',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://survive.hlut.win',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hello-University-of-Technology', // Usually your GitHub org/user name.
  projectName: 'SurviveHLUTManual', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Hello-University-of-Technology/SurviveHLUTManual/blob/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Hello-University-of-Technology/SurviveHLUTManual/blob/main/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: '哈工大手册',
        logo: {
          alt: '哈工大手册 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '手册',
          },
          {to: '/blog', label: '更新记录', position: 'left'},
          {
            href: 'https://github.com/Hello-University-of-Technology/SurviveHLUTManual',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '导航',
            items: [
              {
                label: '生存手册',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                label: 'QQ 群',
                href: 'https://qm.qq.com/cgi-bin/qm/qr?k=PN-UfQoIQAz6aRqX3ktWqLub0C1Yl1gy&jump_from=webapi&authKey=gCHdVmi1J6/RXmnT97G+n7K1Kd88VuO0arLHFTCdBiPEG+q3I4FAlHk/FbI6JANS',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Hello-University-of-Technology/SurviveHLUTManual',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} 署名-相同方式共享 4.0 国际 (CC BY-SA 4.0) . 使用 Docusaurus 构建。`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
