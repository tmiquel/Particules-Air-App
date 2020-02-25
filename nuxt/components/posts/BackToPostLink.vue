<template>
  <nuxt-link :to="destinationRoute" class="link">Retourner à l’{{ destinationName }}</nuxt-link>
</template>


<script>
export default {
  props: {
    currentRoute: {
      required: true
    }
  },
  computed: {
    destinationName() {
      this.currentRoute.params.name === 'home' ? 'accueil' : 'article'
    },
    destinationRoute() {
      this.currentRoute.params.name === 'home' ? '/' : ('/posts/' + this.currentRoute.params.name)
    }
  }
}
</script>


