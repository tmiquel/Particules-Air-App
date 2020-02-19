<template>
  <div>
    <TheNavbar />
    <div class="container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import TheNavbar from "~/components/SingleInstanceCmp/TheNavbar.vue";

export default {
  components: {
    TheNavbar
  }
};
</script>

<style lang="scss">
html {
  font-family: $font-family-sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: $font-family-sans-serif;
}
</style>