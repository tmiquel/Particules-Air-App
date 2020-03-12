<template>
  <div class="container">
    <br />
    <br />
    <br />
    <br />
    <div class="errorpage row row-cols-2">
      <div class="col">
        <app-sub-heading v-if="error.statusCode === 404">Ooups !</app-sub-heading>
        <app-heading v-else>Une erreur s'est produite</app-heading>
      </div>
    </div>
    <div
      class="tenor-gif-embed"
      data-postid="4780646"
      data-share-method="host"
      data-width="100%"
      data-aspect-ratio="2.3380281690140845"
    >
      <a
        href="https://tenor.com/view/apollo13-tom-hanks-houston-we-have-aproblem-problem-worried-gif-4780646"
      >Houston We Have A Problem GIF</a> from
      <a href="https://tenor.com/search/apollo13-gifs">Apollo13 GIFs</a>
    </div>
    <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
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
