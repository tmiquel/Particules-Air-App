const fs = require("fs");

export default {
  mode: "spa",
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: pageTitle =>
      pageTitle ? `${pageTitle} - Particules` : "Particules",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Barlow|Source+Sans+Pro&display=swap"
      }
    ]
  },
  // FOR PWA + SEO
  meta: {
    nativeUI: true,
    description: "",
    lang: "fr",
    ogHost: "https://particules.info",
    ogImage: "/icon.png",
    ogSiteName: "Particules"
  },
  manifest: {
    name: "Particules",
    lang: "fr",
    description: ""
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#386796" },
  /*
   ** Global CSS
   */
  css: ["@/assets/application.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~plugins/global-components.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    "bootstrap-vue/nuxt",
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa",
    "@nuxtjs/svg",
    // As per
    //https://hackernoon.com/how-i-use-scss-variables-mixins-functions-globally-in-nuxt-js-projects-while-compiling-css-utilit-58bb6ff30438
    [
      "nuxt-mq",
      {
        // Default breakpoint for SSR
        defaultBreakpoint: "default",
        breakpoints: {
          // changed to match Bootstrap default's breakpoints
          // cf https://getbootstrap.com/docs/4.0/layout/grid/#grid-options
          mobile: 768, // default vue-mq: 450
          desktop: Infinity
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  bootstrapVue: {
    bootstrapCSS: false, // Or `css: false`
    bootstrapVueCSS: false // Or `bvCSS: false`
  },
  env: {
    algoliaApp: process.env.ALGOLIA_APP,
    algoliaKey: process.env.ALGOLIA_KEY
  },
  "nuxt-compress": { gzip: { cache: true }, brotli: { threshold: 10240 } },

  generate: {
    routes: function() {
      const posts = fs
        .readdirSync("assets/images/banners/posts/")
        .filter(file => file.indexOf(".") !== 0 && file.slice(-4) === ".png")
        .map(pngfilename => {
          return pngfilename.slice(0, -4);
          // "postname.png" --> "postname"
        });
      const routes = [];
      for (const filename of posts) {
        routes.push("/posts/" + filename);
        routes.push("/posts/" + filename + "/sources");
        routes.push("/posts/" + filename + "/graphs");
        routes.push("/posts/" + filename + "/stakeholders");
        routes.push("/posts/" + filename + "/definitions");
      }
      return routes;
    }
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ya?ml$/,
        use: "js-yaml-loader"
      });
    }
  }
};
