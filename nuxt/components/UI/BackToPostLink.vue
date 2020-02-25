<template>
  <nuxt-link :to="url" class="link">Retourner à l’{{ destinationName }}</nuxt-link>
</template>


<script>
export default {
  computed: {
    destinationName() {
      return this.$route.params.name === 'home' ? 'accueil' : 'article'
    },
    url() {
      return this.$route.params.name === 'home' ? '/' : `/posts/${this.$route.params.name}`
    }
  }
}
</script>

<style scoped>
.link {
  position: absolute;
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */
  text-decoration-line: underline;
  color: #454545;
}
</style>
