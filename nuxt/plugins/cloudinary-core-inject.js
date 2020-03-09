import cloudinary from "cloudinary-core";

// Make this.$cloudinary available in all Vue components
// https://code.luasoftware.com/tutorials/vuejs/nuxt-cloudinary/
// https://nuxtjs.org/guide/plugins/#inject-into-vue-instances

const $cloudinary = new cloudinary.Cloudinary({
  //https://cloudinary.com/documentation/cloudinary_sdks#configuration_parameters
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_CLOUD_API_KEY,
  api_secret: process.env.CLOUDINARY_CLOUD_API_SECRET,
  secure: true
});

export default ({ app }, inject) => {
  inject("cloudinary", $cloudinary);
};
