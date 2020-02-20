<template>
  <div>
    <TheNavbar />
    <div class="container my-5 pt-2">
      <nuxt />
    </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from "~/components/SingleInstanceCmp/TheNavbar.vue"
import TheFooter from "~/components/SingleInstanceCmp/TheFooter.vue"

export default {
  components: {
    TheNavbar,
    TheFooter
  }
}
</script>

<style>
html {
  font-family: var(--font-family-sans-serif);
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  font-family: var(--font-family-sans-serif);
}
</style>
