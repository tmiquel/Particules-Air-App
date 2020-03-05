<template>
  <div class="d-flex justify-content-center">
    <h5 id="app-title" class="text-uppercase mb-4 mb-md-5" :style="responsiveHeadingFontSize">
      <slot></slot>
    </h5>
  </div>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  computed: {
    responsiveHeadingFontSize() {
      return this.responsiveFontSize('fontSizeHeading')
    }
  }
}
</script>

<style scoped>
#app-title {
  background-image: linear-gradient(
    to right,
    var(--left-gradient-color),
    var(--right-gradient-color) 37px,
    transparent 37px
  );
  background-size: 100% 0.2rem;
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  /* font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',  'Noto Color Emoji';; */
  font-weight: bold;

  color: var(--font-headers-color);
}
</style>

