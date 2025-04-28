import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "aternos-afk-abuser",
  description: "Documentation for aternos-afk-abuser",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get started', link: '/getting-started' }
    ],

    sidebar: [
      {
        text: 'Documentation',
        items: [
          { text: 'Tutorial', link: '/getting-started' },
          { text: 'Troubleshooting', link: '/troubleshooting' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/spreehertz/aternos-afk-abuser' }
    ]
  }
})
