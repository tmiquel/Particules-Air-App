<template>
  <!-- ICI Appeler le composant qui correspond à l'article -->
  <component :is="$route.params.name" />
</template>

<script>
import SanteAir from '~/components/posts/SanteAir'
import Mortalite from '~/components/posts/Mortalite'
import Enfants from '~/components/posts/Enfants'

export default {
  components: { 'sante-air': SanteAir, mortalite: Mortalite, enfants: Enfants }
}
</script>

<style>
</style>
