<template>
  <div class="container-fluid banner-background-img px-0 mb-5">
    <div class="container d-flex flex-column flex-nowrap h-100">
      <div class="row d-flex flex-column h-100 flex-nowrap justify-content-between">
        <div class="col flex-grow-0">
          <h6
            class="mt-2 mb-0 font-weight-bold text-uppercase text-white pt-md-2"
            id="banner-topic-title"
            :style="responsiveBannerTopicTitleStyle"
          >
            {{ topicTitle }}
          </h6>
        </div>
        <div class="col flex-grow-1 pb-md-2 d-flex">
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
import { fontSizeMixin } from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  props: {
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
      this.responsiveFontSize(process.env.fontSizeTopicTitle)
    },
    responsiveBannerTitleStyle() {
      this.responsiveFontSize(process.env.fontSizePostTitle)
    },
    responsivePostAuthorDateFontSize() {
      this.responsiveFontSize(process.env.fontSizePostAuthorDate)
    }
  }
}
</script>

<style scoped>
.banner-background-img {
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(39, 39, 39, 0.62) 52.6%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('~assets/img/banner-background-image-crop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: center;
  background-blend-mode: multiply;
  mix-blend-mode: darken;
  border-radius: 0px;
  height: 25vh;
}

#banner-topic-title {
  /* fontSize and backgroundSize defined in responsiveBannerTopicTitleStyle() */
  background-image: linear-gradient(to right, #fff, #fff 37px, transparent 37px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  font-family: $headings-font-family !important;
}

#banner-post-title {
  /* fontSize defined in responsiveBannerTitleStyle() */
  font-family: $headings-font-family !important;
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
