<template>
  <nuxt-link :to="'/maps/' + name" tag="div" :class="[{ 'my-5': hasMargins }, $style['preview-map']]" id="preview-map">
    <ExpandIcon />
    <!-- https://help.outofthesandbox.com/hc/en-us/articles/115013833028-Image-Size-Guide -->
    <cld-image :publicId="mapPreviewImgPublicId" responsive="width" lazy class="img-fluid">
      <cld-transformation width="1024" gravity="auto" height="576" crop="fill" />
      <cld-transformation dpr="auto"  fetchFormat="auto" quality="auto:best" />
      <cld-transformation effect="outline:outer:5:200" :color="primaryColor"/>
      <!-- https://cloudinary.com/documentation/image_transformations#color_effects -->
          <!-- https://cloudinary.com/documentation/image_transformation_reference -->

    </cld-image>
  </nuxt-link>
</template>

<script>
import ExpandIcon from '~/assets/images/icons/expand.svg?inline'

export default {
  components: { ExpandIcon },
  props: {
    name: { required: true, type: String },
    hasMargins: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    mapPreviewImgPublicId() {
      return this.$store.getters.getImgPublicID('map-previews/' + this.name)
    },
    primaryColor() {
      return this.$style.primaryColor
    }
  }
}
</script>

<style module lang="scss">
@import '~assets/_custom.scss';
@use "sass:map";

.preview-map {
  cursor: pointer;
  position: relative;

  &:hover {
    svg {
      transform: scale(1.5);
    }
  }
  svg {
    fill: var(--primary);
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 5vw;
    height: 5vw;
    max-width: 25px;
    max-height: 25px;
    transition: transform 0.2s;
  }
}

// https://redonion.se/en/css-modules-in-vue-js-2/
// https://www.netguru.com/codestories/vue.js-scoped-styles-vs-css-modules
// $primary-color: #4b8ac9;

:export {
  primaryColor: map-get($theme-colors,'primary');
}
</style>
