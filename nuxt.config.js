// const bodyParser = require('body-parser')
const axios = require('axios')

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'WD Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap' }
    ]
  },

  loading: { color: '#fa923f', height: '4px', duration: 5000 },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/core-components.js',
    '~plugins/date-filter.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  axios: {
    baseURL: process.env.BASE_URL || 'https://nuxt-blog-53b08-default-rtdb.europe-west1.firebasedatabase.app',
    credentials: false
  },

  router: {
    middleware: 'log'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  transition: {
    name: 'fade',
    mode: 'out-in'
  },

  env: {
    baseUrl: process.env.BASE_URL || 'https://nuxt-blog-53b08-default-rtdb.europe-west1.firebasedatabase.app',
    fbAPIKey: 'AIzaSyCtvVG6Su8OKcsJsBz8HwpcRz6XCvTc43Y'
  },

  // serverMiddleware: [
  //   bodyParser.json(),
  //   '~/api'
  // ],

  generate: {
    routes: function() {
      return axios.get('https://nuxt-blog-53b08-default-rtdb.europe-west1.firebasedatabase.app/posts.json')
      .then(res => {
        const routes = []
        for (const key in res.data) {
          routes.push({
            route: '/posts/' + key,
            payload: { postData: res.data[key] }
          })
        }
        return routes
      })
    }
  },
}
