export default {
    themeConfig: {
        siteTitle: 'aternos-afk-abuser',
      nav: [
        { text: 'Guide', link: '/guide' },
        { text: 'Download', link: 'https://github.com/spreehertz/aternos-afk-abuser' }
      ],
      socialLinks: [
        { icon: 'github', link: 'https://github.com/spreehertz/aternos-afk-abuser' },
        { icon: 'twitter', link: 'https://twitter.com/spreehertz' },
      ],
      sidebar: [
        {
          text: 'Guide',
          items: [
            { text: 'Getting Started', link: '/getting-started' },
          ]
        }
      ],
      footer: {
        message: 'Built with VitePress',
        copyright: 'Copyright © 2022 SpreeHertz'
      }
    }
  }