<template>
  <a href="#!" target="_self" @click="$store.commit('OPEN_DEFINITION_SLIDER', to)">
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
