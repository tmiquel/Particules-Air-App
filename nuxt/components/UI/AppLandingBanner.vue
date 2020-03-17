<template>
  <div class="container-fluid landing-banner-container px-0 mb-5  min-height-25vh">
    <div class="container d-flex flex-column flex-nowrap h-100 min-height-25vh">
      <div class="row d-flex flex-column h-100 flex-nowrap justify-content-between min-height-25vh">
        <div class="col flex-grow-1 d-flex align-items-end">
          <h1
            class="pt-3 pb-md-3 pb-2 mb-0 text-uppercase flex-grow-1 font-weight-bold text-white "
            id="landing-banner-title"
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
    <cld-image
      :publicId="bannerBackgroundImgPublicId"
      responsive="width"
      lazy
      class="below h-100 w-100 overlaid img-fluid"
    >
      <!-- https://github.com/AlexandreBonaventure/vue-mq -->
      <mq-layout mq="mobile">
        <cld-transformation width="auto:50:700" height="180" crop="fill" gravity="north" />
      </mq-layout>
      <mq-layout mq="desktop">
        <cld-transformation width="auto:50:1600" height="400" crop="fill" gravity="north" />
      </mq-layout>

      <cld-transformation dpr="auto" fetchFormat="auto" quality="auto:best" />
      <!-- https://cloudinary.com/documentation/image_transformations#color_effects -->
      <!-- https://cloudinary.com/documentation/image_transformation_reference -->
      <!--   //https://cloudinary.com/documentation/responsive_images#default_value_for_browsers_that_don_39_t_support_client_hints
     https://cloudinary.com/documentation/image_transformations#embedding_images_in_web_pages
     https://cloudinary.com/documentation/image_transformation_reference
    https://help.outofthesandbox.com/hc/en-us/articles/115013833028-Image-Size-Guide
 -->
    </cld-image>
  </div>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'
import { mapGetters, mapState } from 'vuex'

export default {
  mixins: [fontSizeMixin],
  computed: {
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
    },
    bannerBackgroundImgPublicId() {
      return this.$store.getters.getImgPublicID('landing/')
    }
  }
}
</script>

<style lang="scss">
.overlaid {
  position: absolute !important;
  top: 0;
  left: 0;
}

.below {
  z-index: -1;
}
.min-height-25vh {
  min-height: 25vh;
}

.landing-banner-container {
  position: relative !important;
  min-height: 25vh;
}

.landing-banner-container [src*='cloudinary.com'] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

#landing-banner-title {
  background-image: linear-gradient(to right, #fff, #fff 57px, transparent 57px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
}

#landing-banner-title span {
  display: table;
}

p {
  line-height: normal;
}
</style>
