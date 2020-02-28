<template>
  <div>
    <app-landing-banner />
    <sante-air />
     <h3>Les Liens (non définitif, pour navigation)</h3>
      <nuxt-link to="/posts/sante-air">Article Santé Air</nuxt-link>
      <nuxt-link to="/posts/mortalite">Article Mortalité</nuxt-link>
      <nuxt-link to="/maps/pollution-2018">Map pollution 2018</nuxt-link>
      <nuxt-link to="/maps/pollution-par-iris">Map pollution par Iris</nuxt-link>
  </div>
</template>

<script>
import SanteAir from '@/components/posts/SanteAir'
export default {
  components: {
    SanteAir
  }
}
</script>

