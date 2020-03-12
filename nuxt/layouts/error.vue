<template>
  <div class="container">
    <div class="errorpage mt-5">
      <app-heading v-if="error.statusCode === 404">Houston, we’ve had a problem here.</app-heading>
      <app-heading v-else>Une erreur s'est produite</app-heading>
    </div>
    <button class="btn rounded-pill font-weight-bold border-0 mt-2 mb-4 text-white mt-4">
      <nuxt-link id="link" to="/">Retour à l'accueil</nuxt-link>
    </button>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: '404'
}
</script>

<style scoped>
button {
  background: linear-gradient(
    89.86deg,
    var(--left-navbar-gradient-color) -79.71%,
    var(--right-navbar-gradient-color) 167.69%
  );
  padding-left: 2rem !important;
  padding-right: 2rem !important;
}
#link {
  color: cornsilk;
}
</style>
