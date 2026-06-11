// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Architectury API',
  tagline: 'Write your Minecraft mod once, run it on Fabric and NeoForge',
  favicon: 'img/logo.png',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.architectury.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'architectury', // Usually your GitHub org/user name.
  projectName: 'architectury-api', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Serve the docs at the site root so the Introduction is the homepage.
          routeBasePath: '/',
          // Set this to your docs repo to enable "edit this page" links.
          editUrl:
            'https://github.com/architectury/architectury-api/tree/main/docs/',
          // Docs versioning - one entry per supported Minecraft version.
          // The "current" docs (the files in ./docs) are the latest version and
          // are served at the site root with no version segment in the URL.
          //
          // When porting to a new Minecraft version (e.g. 26.2):
          //   1. Run: npm run docusaurus docs:version 26.1.x
          //      (snapshots the current docs into versioned_docs/version-26.1.x)
          //   2. Keep editing ./docs as the new version, and update the
          //      `current.label` below to the new version (e.g. "26.2.x").
          lastVersion: 'current',
          versions: {
            current: {
              label: '26.1.x',
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Architectury API',
        logo: {
          alt: 'Architectury API Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/architectury/architectury-api',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://discord.gg/C2RdJDpRBP',
            label: 'Discord',
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
              {
                label: 'Introduction',
                to: '/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/C2RdJDpRBP',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/architectury/architectury-api',
              },
              {
                label: 'Architectury Template Generator',
                href: 'https://generate.architectury.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Architectury.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['java', 'groovy', 'gradle'],
      },
    }),
};

export default config;
