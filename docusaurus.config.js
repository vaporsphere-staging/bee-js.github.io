module.exports = {
  title: 'Bee JS Library',
  tagline: 'Welcome to the Swarm',
  url: 'https://swarm-gateways.net',
  // note! we use SED to change this during automated builds, see ./.github/workflows/gh-pages.yml
  baseUrl: '/',
  plugins: [require.resolve('docusaurus-lunr-search')],
  onBrokenLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Swarm', // Usually your GitHub org/user name.
  projectName: 'bee', // Usually your repo name.
  themeConfig: {
    colourMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'Swarm Bee JS Library',
      logo: {
        alt: 'Swarm Logo',
        src: 'img/swarm-logo-2.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Get Started',
          position: 'left',
        },
        // {
        //   to: 'docs/installation/quick-start',
        //   activeBasePath: 'docs',
        //   label: 'Installation',
        //   position: 'left',
        // },
        // {
        //   to: 'docs/getting-started/start-your-node',
        //   activeBasePath: 'docs',
        //   label: 'Start Your Node',
        //   position: 'left',
        // },
        {
          to: 'docs/api-reference/api-reference',
          activeBasePath: 'docs',
          label: 'API Reference',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/ethersphere/bee',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Swarm',
          items: [
            {
              label: 'Swarm',
              to: 'https://ethswarm.org',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Mattermost',
              href: 'https://beehive.ethswarm.org/',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/ethswarm',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/ethswarm',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/ethereum-swarm',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ethersphere/bee',
            },
          ],
        },
      ],
      copyright: `Copyleft © ${new Date().getFullYear()}.`,
    },
    announcementBar: {
      id: 'bee_announcements',
      content:
        '⭐️ Proudly announcing the Bee-JS Beta Release! ⭐️',
      backgroundColor: '#dd7200', // Defaults to `#fff`.
      textColor: '#242424', // Defaults to `#000`.
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'introduction',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/ethersphere/docs.github.io/blob/master',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/ethersphere/docs.github.io',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
