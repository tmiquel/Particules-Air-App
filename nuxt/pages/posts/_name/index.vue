<template>
  <div>
    <app-post-banner
      :post-title="postsTitle[$route.params.name]"
      :background-img-url="require('~/assets/images/banners/posts/' + $route.params.name + '.png')"
    />
    <b-container>
      <!-- ICI Appeler le composant qui correspond à l'article -->

      <component :is="$route.params.name" />
      <posts-list />
    </b-container>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SanteAir from '~/components/posts/SanteAir'
import Mortalite from '~/components/posts/Mortalite'
import Enfants from '~/components/posts/Enfants'
import FemmesEnceintes from '~/components/posts/FemmesEnceintes'
import Sportifs from '~/components/posts/Sportifs'
import PostsList from '~/components/posts/PostsList'

export default {
  components: {
    'sante-air': SanteAir,
    mortalite: Mortalite,
    enfants: Enfants,
    'femmes-enceintes': FemmesEnceintes,
    sportifs: Sportifs,
    PostsList
  },
  computed: mapState({
    postsTitle: state => state.postsTitle
  })
}
</script>

<style>
</style>
