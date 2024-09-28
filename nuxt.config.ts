import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en-GB',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        { name: 'author', content: 'Bricks' },
        { name: 'revisit-after', content: '1 day' },
        { name: 'msapplication-TileColor', content: '#000' },
        { name: 'theme-color', content: '#000' },
        { name: 'google', content: 'notranslate' },
        { 'http-equiv': 'content-language', 'content': 'en-GB' },
      ],
      link: [
        // https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs#the-ultimate-favicon-setup
        { rel: 'icon', href: '/favicon.ico', sizes: '32x32' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://a.storyblok.com' },
        { rel: 'preconnect', href: 'https://a2.storyblok.com' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
    pageTransition: { name: 'fade' },
    layoutTransition: false,
  },
  components: true,
  css: process.env.NUXT_STORYBLOK_VERSION === 'draft' ? ['@michaelpumo/screen/app.css'] : [],
  eslint: {
    config: {
      standalone: false,
      stylistic: true,
    },
  },
  gtag: {
    id: '',
  },
  image: {
    provider: 'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
    domains: ['storyblok.com', 'brickslondon.com'],
    quality: 80,
    screens: {
      'xs': 375,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1200,
      '2xl': 1440,
      '3xl': 1920,
    },
  },
  modules: [
    '@nuxt/eslint',
    ['@nuxtjs/google-fonts', {
      families: {
        Inter: [400],
      },
    }],
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/tailwindcss',
    'nuxt-gtag',
    ['@storyblok/nuxt', { accessToken: process.env.NUXT_STORYBLOK_TOKEN }],
  ],
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      'tailwindcss': {},
      'autoprefixer': {},
    },
  },
  runtimeConfig: {
    private: {},
    public: {
      SSR: process.env.NUXT_SSR,
      STORYBLOK_TOKEN: process.env.NUXT_STORYBLOK_TOKEN,
      STORYBLOK_VERSION: process.env.NUXT_STORYBLOK_VERSION,
    },
  },
  site: {
    url: 'https://brickslondon.com',
  },
  ssr: process.env.NUXT_SSR === 'true',
  tailwindcss: {
    cssPath: '@/assets/css/app.css',
  },
  typescript: {
    strict: true,
  },
  vite: {
    plugins: [
      svgLoader({
        svgo: false,
      }),
    ],
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  compatibilityDate: '2024-09-28',
})
