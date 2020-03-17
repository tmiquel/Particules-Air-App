<template>
  <div class="container-fluid post-banner-container px-0 mb-5 min-height-25vh">
    <div class="container d-flex flex-column flex-nowrap h-100 min-height-25vh">
      <div class="row d-flex flex-column h-100 flex-nowrap justify-content-between min-height-25vh">
        <div class="col flex-grow-0">
          <h6
            class="mt-2 mb-0 font-weight-bold text-uppercase text-white pt-md-2"
            id="post-banner-topic-title"
            :style="responsiveBannerTopicTitleStyle"
          >
            {{ topicTitle }}
          </h6>
        </div>
        <div class="col flex-grow-1 pb-1 pb-md-2 d-flex">
          <h1
            class="pt-2 mb-0 text-white font-weight-bold align-self-center"
            id="post-banner-post-title"
            :style="responsiveBannerTitleStyle"
          >
            {{ postTitle }}
          </h1>
        </div>
        <div class="col flex-grow-0">
          <span
            class="text-white pt-1 pb-md-2 font-italic post-banner-date-and-time-overline"
            :style="responsivePostAuthorDateFontSize"
          >
            {{ postDate }} / Par {{ postAuthor }}
          </span>
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
        <cld-transformation width="auto:50:700" height="180" crop="fill" gravity="auto" />
      </mq-layout>
      <mq-layout mq="desktop">
        <cld-transformation width="auto:50:1600" height="400" crop="fill" gravity="auto" />
      </mq-layout>

      <cld-transformation dpr="auto" fetchFormat="auto" quality="auto:best" />
      <!-- https://cloudinary.com/documentation/image_transformations#color_effects -->
      <!-- https://cloudinary.com/documentation/image_transformation_reference -->
    </cld-image>
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
    responsiveBannerTopicTitleStyle() {
      return this.responsiveFontSize('fontSizeTopicTitle')
    },
    responsiveBannerTitleStyle() {
      return this.responsiveFontSize('fontSizePostTitle')
    },
    responsivePostAuthorDateFontSize() {
      return this.responsiveFontSize('fontSizePostAuthorDate')
    },
    bannerBackgroundImgPublicId() {
      return this.$store.getters.getImgPublicID(this.backgroundImgId)
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

.post-banner-container [src*='cloudinary.com'] {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.min-height-25vh {
  min-height: 25vh;
}

.post-banner-container {
  position: relative;
}

#post-banner-topic-title {
  /* fontSize and backgroundSize defined in responsiveBannerTopicTitleStyle() */
  background-image: linear-gradient(to right, #fff, #fff 37px, transparent 37px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  background-size: 100% 0.3rem;
  font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
}

#post-banner-post-title {
  /* fontSize defined in responsiveBannerTitleStyle() */
  font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
}

.post-banner-date-and-time-overline {
  background-image: linear-gradient(to right, #fff, #fff 57px, transparent 57px);
  background-repeat: no-repeat;
  background-position: 0 0;
  padding-bottom: 0.9rem;
  background-size: 100% 0.1rem;
}

#post-banner-post-title span {
  display: table;
}
</style>
