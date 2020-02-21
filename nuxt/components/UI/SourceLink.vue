<template>
  <a href="#" target="_self" @click="$store.commit('OPEN_SOURCE_SLIDER', to)">
    <slot />
  </a>
</template>
<script>
export default {
  props: {
    to: { required: true }
  }
}
</script>
