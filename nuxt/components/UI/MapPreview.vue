<template>
  <nuxt-link :to="'/maps/'+name" tag="div">
    <ExpandIcon />
    <img :src="require(`~/assets/images/map-previews/${name}.png`)" :alt="name" class="img-fluid" />
  </nuxt-link>
</template>

<script>
import ExpandIcon from '~/assets/images/icons/expand.svg?inline'

export default {
  components: { ExpandIcon },
  props: { name: { required: true, type: String } }
}
</script>

<style scoped>
div {
  cursor: pointer;
  position: relative;
}

svg {
  fill: white;
  position: absolute;
  top: 1vw;
  right: 1vw;
  width: 5vw;
  height: 5vw;
  max-width: 25px;
  max-height: 25px;
}
</style>
