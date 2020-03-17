<template>
  <div class="container-fluid banner-background-img px-0 mb-5" :style="backImg">
    <div class="container d-flex flex-column flex-nowrap h-100 min-height-25vh">
      <div class="row d-flex flex-column h-100 flex-nowrap justify-content-between min-height-25vh">
        <div class="col flex-grow-0">
          <h6
            class="mt-2 mb-0 font-weight-bold text-uppercase text-white pt-md-2"
            id="banner-topic-title"
            :style="responsiveBannerTopicTitleStyle"
          >
            {{ topicTitle }}
          </h6>
        </div>
        <div class="col flex-grow-1 pb-1 pb-md-2 d-flex">
          <h1
            class="pt-2 mb-0 text-white font-weight-bold align-self-center"
            id="banner-post-title"
            :style="responsiveBannerTitleStyle"
          >
            {{ postTitle }}
          </h1>
        </div>
        <div class="col flex-grow-0">
          <span
            class="text-white pt-1 pb-md-2 font-italic date-and-time-overline"
            :style="responsivePostAuthorDateFontSize"
          >
            {{ postDate }} / Par {{ postAuthor }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  props: {
    backgroundImgId: {
      type: String,
      required: true
      // Working example: <app-post-banner post-title="Les Sources" :background-img-url="require('~/assets/images/banners/landing/banner-background-image-crop.jpg')"/>
    },
    topicTitle: {
      type: String,
      default: 'mon air & ma santé'
    },
    postTitle: {
      type: String,
      required: true
    },
    postDate: {
      type: String,
      default: 'Le 15 mars 2020'
    },
    postAuthor: {
      type: String,
      default: "l'équipe Particules"
    }
  },
  computed: {
    backImg() {
      const imgUrl = this.$cloudinary.url(this.$store.getters.getImgPublicID(this.backgroundImgId), {
        client_hints: true,
        sizes: '100vw',
        transformation: [
          { width: 'auto:50:1900', height: "400", crop: 'fill', gravity: 'auto', format: 'auto', quality: 'auto', dpr: 'auto'},
          //https://cloudinary.com/documentation/responsive_images#default_value_for_browsers_that_don_39_t_support_client_hints
          // https://cloudinary.com/documentation/image_transformations#embedding_images_in_web_pages
          // { width: '1600', height:'600', gravity:'north', format: 'jpg', crop: 'crop'}
          //https://help.outofthesandbox.com/hc/en-us/articles/115013833028-Image-Size-Guide
        ]
      })
      return {
        backgroundImage: `linear-gradient(180deg,rgba(255, 255, 255, 0) 0%,rgba(39, 39, 39, 0.62) 52.6%,rgba(0, 0, 0, 0.6) 100%),url(
       ${imgUrl})`
      }
    },
    responsiveBannerTopicTitleStyle() {
      return this.responsiveFontSize('fontSizeTopicTitle')
    },
    responsiveBannerTitleStyle() {
      return this.responsiveFontSize('fontSizePostTitle')
    },
    responsivePostAuthorDateFontSize() {
      return this.responsiveFontSize('fontSizePostAuthorDate')
    }
  }
}
</script>

<style scoped>

.min-height-25vh {
  min-height: 25vh;
}

.banner-background-img {
  background-size: cover;
  background-repeat: no-repeat;
  background-position-x: center;
  background-blend-mode: multiply;
  mix-blend-mode: darken;
  border-radius: 0px;
  min-height: 25vh;
}

#banner-topic-title {
  /* fontSize and backgroundSize defined in responsiveBannerTopicTitleStyle() */
  background-image: linear-gradient(to right, #fff, #fff 37px, transparent 37px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  background-size: 100% 0.3rem;
  font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
}

#banner-post-title {
  /* fontSize defined in responsiveBannerTitleStyle() */
  font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
}

.date-and-time-overline {
  background-image: linear-gradient(to right, #fff, #fff 57px, transparent 57px);
  background-repeat: no-repeat;
  background-position: 0 0;
  padding-bottom: 0.9rem;
  background-size: 100% 0.1rem;
}

#banner-post-title span {
  display: table;
}

p {
  line-height: normal;
}
</style>
