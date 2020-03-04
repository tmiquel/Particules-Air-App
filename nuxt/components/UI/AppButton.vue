<template>
  <nuxt-link
    class="btn rounded-pill font-weight-bold border-0 mt-2 mb-4 text-white"
    tag="button"
    :to="to"
  >
    <slot>Envoyer</slot>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
      default: ''
    }
  }
}
</script>

<style scoped>
.btn {
  background: linear-gradient(
    89.86deg,
    var(--left-navbar-gradient-color) -79.71%,
    var(--right-navbar-gradient-color) 167.69%
  );
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
</style>
