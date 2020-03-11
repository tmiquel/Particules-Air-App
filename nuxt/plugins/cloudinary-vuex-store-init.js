import Vue from "vue";
import Cloudinary from "cloudinary-vue";

// import cloudinary from "cloudinary-core";


// // Vue.prototype.$cloudinary = $cloudinary
// // https://code.luasoftware.com/tutorials/vuejs/nuxt-cloudinary/
// // https://nuxtjs.org/guide/plugins/#inject-into-vue-instances
// const $cloudinary = new cloudinary.Cloudinary({
//   //https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
//   cloudName: process.env.CLOUDINARY_CLOUD_NAME,
//   apiKey: process.env.CLOUDINARY_CLOUD_API_KEY,
//   apiSecret: process.env.CLOUDINARY_CLOUD_API_SECRET,
//   secure: true
// });


//https://cloudinary.com/documentation/vue_integration#3_set_cloudinary_configuration_parameters
Vue.use(Cloudinary, {
  configuration: {
    //https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_CLOUD_API_KEY,
    apiSecret: process.env.CLOUDINARY_CLOUD_API_SECRET,
    secure: true
  }
});


// idea based on https://github.com/nuxt/nuxt.js/issues/240 comment from Atinux (Sept 4th 2017)
export default async ctx => {
  await ctx.store.dispatch("cloudinaryInit", ctx);
};
