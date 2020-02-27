<template>
  <div class="d-flex justify-content-center">
    <h5 id="app-title" class="text-center text-uppercase mb-4 mb-md-5" :style="responsiveHeadingFontSize">
      <slot></slot>
    </h5>
  </div>
</template>

<script>
import { fontSizeMixin } from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  computed: {
    responsiveHeadingFontSize() {
      this.responsiveFontSize(process.env.fontSizeHeading)
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
  font-family: var(--headings-font-family);
  font-weight: bold;
  font-style: normal;

  color: var(--font-headers-color);
}
</style>

