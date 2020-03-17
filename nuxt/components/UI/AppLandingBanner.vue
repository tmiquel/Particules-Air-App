<template>
  <div class="container-fluid banner-background-img px-0 mb-5" :style="backImg">
    <div class="container d-flex flex-column flex-nowrap h-100 min-height-25vh">
      <div class="row d-flex flex-column h-100 flex-nowrap justify-content-between min-height-25vh">
        <div class="col flex-grow-1 d-flex align-items-end">
          <h1
            class="pt-3 pb-md-3 pb-2 mb-0 text-uppercase flex-grow-1 font-weight-bold text-white "
            id="banner-title"
            :style="responsiveBannerTitleStyle"
          >
            MON AIR &<span>MA SANTé EN VUES</span>
          </h1>
        </div>
        <div class="col flex-grow-0">
          <p class="text-white pt-1 pb-md-2 mb-1" :style="responsiveFontSizeLandingBannerSubtitle">
            Comprendre comment votre air extérieur impacte votre santé avec des données locales.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'
import { mapGetters, mapState } from 'vuex'

export default {
  mixins: [fontSizeMixin],
  computed: {
    backImg() {
      const imgUrl = this.$cloudinary.url(this.$store.getters.getImgPublicID('landing'), {
        client_hints: true,
        sizes: '100vw',
        transformation: [
          { width: 'auto:50:1600', height: '400' , crop: 'fill', gravity: 'north'},
          { format: 'auto', quality: 'auto', dpr: 'auto'},
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
    responsiveBannerTitleStyle() {
      if (this.$mq === 'mobile') {
        return {
          fontSize: '1.75rem',
          backgroundSize: '100% 0.2rem'
        }
      } else
        return {
          fontSize: '2.5rem',
          backgroundSize: '100% 0.3rem',
          paddingRight: '35%'
        }
    },
    responsiveFontSizeLandingBannerSubtitle() {
      return this.responsiveFontSize('fontSizeLandingBannerSubtitle')
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

#my-banner-text-container {
  margin-left: 1rem;
  margin-right: 1rem;
}

#banner-title {
  background-image: linear-gradient(to right, #fff, #fff 57px, transparent 57px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
}

#banner-title span {
  display: table;
}

p {
  line-height: normal;
}
</style>
