export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static', // Global page headers: https://go.nuxtjs.dev/config-head

  head: {
  script: [
        {
          innerHTML: `
        window._historyCache = {
            replaceState: window.history.replaceState,
            pushState: window.history.pushState
        };
     `,
        },
        {
          src: "https://appsforoffice.microsoft.com/lib/1/hosted/office.js",
        },
        {
          innerHTML: `
        // And restore them
        window.history.replaceState = window._historyCache.replaceState;
        window.history.pushState = window._historyCache.pushState;
        window.Office.onReady(()=>{console.log("meow")});
     `,
        }],
  },
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
  dir: 'docs',
  },
  buildDir: 'nuxt-dist',
  router: {
    base: '/addin'
  }
}
