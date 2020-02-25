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


