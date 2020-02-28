<template>
  <div class="w-100 mb-5">
    <div class="banner d-flex align-items-end">
      <div class="px-0" id="my-banner-text-container">
        <div>
          <h1 class="pt-3" id="banner-title" :style="responsiveBannerTitleStyle">
            MA SANTE &<span>MON AIR EN VUES</span>
          </h1>
        </div>
        <div>
          <p class="text-white pt-1" :style="responsiveFontSizeLandingBannerSubtitle">
            Comprendre comment l’air impacte votre santé avec des données locales.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'

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
    }
  }
}
</script>

<style scoped>
.banner {
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(39, 39, 39, 0.62) 52.6%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('~assets/images/banners/landing/banner-background-image-crop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: center;
  background-blend-mode: multiply;
  mix-blend-mode: darken;
  border-radius: 0px;
  height: 25vh;
}

#my-banner-text-container {
  margin-left: 1rem;
  margin-right: 1rem;
}

#banner-title {
  background-image: linear-gradient(to right, #fff, #fff 57px, transparent 57px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  font-family: $font-family-sans-serif !important;
  font-weight: bold;
  font-style: normal;
  color: white;
}

#banner-title span {
  display: table;
}

p {
  line-height: normal;
}
</style>
