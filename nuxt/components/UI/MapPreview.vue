<template>
  <nuxt-link :to="'/maps/'+name" tag="div" class="my-5" id="preview-map">
    <ExpandIcon />
    <img
      :src="require(`~/assets/images/map-previews/${name}.png`)"
      :alt="name"
      class="img-fluid rounded"
    />
  </nuxt-link>
</template>

<script>
import ExpandIcon from '~/assets/images/icons/expand.svg?inline'

export default {
  components: { ExpandIcon },
  props: { name: { required: true, type: String } }
}
</script>

<style scoped lang="scss">
#preview-map {
  cursor: pointer;
  position: relative;

  &:hover {
    svg {
      transform: scale(1.5);
    }
  }
  svg {
    fill: var(--footer-background-color);
    position: absolute;
    top: 3vw;
    right: 3vw;
    width: 5vw;
    height: 5vw;
    max-width: 25px;
    max-height: 25px;
    transition: transform 0.2s;
  }
}
</style>
