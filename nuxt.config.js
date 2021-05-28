export default {
  env: {
    api: 'https://api.pantus.ru',
  },
  target: 'server',
  server: {
    port: 8000,
    host: '0.0.0.0',
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title:
      'ПАНТУС - Интернет-магазин запчастей c низкими ценами и доставкой по России',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-modecss
  css: ['./assets/fonts/font-awesome/index.css', './assets/sass/default.sass'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '@/plugins/axios.ts' }, { src: '@plugins/v-mask.js' }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://composition-api.nuxtjs.org/
    '@nuxtjs/composition-api',
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],
  // styleResources: {
  //   sass: ['@/assets/sass-mixin/index.sass'],
  // },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://github.com/nuxt-community/redirect-module
    '@nuxtjs/redirect-module',
    // https://github.com/LinusBorg/portal-vue
    'portal-vue/nuxt',
    // https://github.com/nuxt-community/recaptcha-module
    '@nuxtjs/recaptcha',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://www.npmjs.com/package/cookie-universal-nuxt
    ['cookie-universal-nuxt'],
    // https://www.npmjs.com/package/@nuxtjs/style-resources
    // '@nuxtjs/style-resources',
  ],
  // https://github.com/nuxt-community/redirect-module
  redirect: {
    rules: require('./redirect'),
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: 'Pantus интернет магазин',
      short_name: 'Pantus',
      lang: 'ru',
      useWebmanifestExtension: false,
      background_color: '#000',
      theme_color: '#000',
      // start_url: "http://test2.pantus.ru:8083/",
      icons: [
        {
          src: '/icon.png',
          type: 'image/png',
          sizes: '192x192',
        },
      ],
    },
    workbox: {},
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: ['vee-validate/dist/rules'],
  },
  router: {
    prefetchLinks: false,
    middleware: ['server-user-data'],
  },
  recaptcha: {
    siteKey: '6LdMI94ZAAAAADQt2xBdUxgnhr0QpnezUwkcqiHV',
    version: 2,
  },
}
