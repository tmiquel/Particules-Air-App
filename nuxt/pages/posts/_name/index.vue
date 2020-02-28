<template>
  <b-container>
    <!-- ICI Appeler le composant qui correspond à l'article -->
    <component :is="$route.params.name" />
  </b-container>
</template>

<script>
import SanteAir from '~/components/posts/SanteAir'
import Mortalite from '~/components/posts/Mortalite'

export default {
  components: { 'sante-air': SanteAir, mortalite: Mortalite }
}
</script>

<style>
</style>
