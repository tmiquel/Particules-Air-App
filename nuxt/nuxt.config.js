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
  plugins: [
    "~/plugins/cloudinary-core-inject.js",
    { src: "~/plugins/cloudinary-vuex-store-init.js", ssr: false },
    "~plugins/global-components.js"
    //idea based on https://github.com/nuxt/nuxt.js/issues/240 comment from Atinux
  ],
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
    ALGOLIA_APP: process.env.ALGOLIA_APP,
    ALGOLIA_KEY: process.env.ALGOLIA_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_CLOUD_API_KEY: process.env.CLOUDINARY_CLOUD_API_KEY,
    CLOUDINARY_CLOUD_API_SECRET: process.env.CLOUDINARY_CLOUD_API_SECRET
  },
  "nuxt-compress": { gzip: { cache: true }, brotli: { threshold: 10240 } },

  generate: {
    routes: function() {
      const posts = fs
        .readdirSync("components/posts/")
        .filter(file => file.indexOf(".") !== 0 && file.slice(-4) === ".vue")
        .map(vuefilename => {
          return vuefilename
            .slice(0, -4)
            .match(
              /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
            )
            .map(x => x.toLowerCase())
            .join("-");
          // "PostName.vue" --> "post-name"
          // source : https://gist.github.com/thevangelist/8ff91bac947018c9f3bfaad6487fa149
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
