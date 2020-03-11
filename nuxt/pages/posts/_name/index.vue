<template>
  <div>
    <b-container>
      <!-- ICI Appeler le composant qui correspond à l'article -->
      <component :is="$route.params.name" />
      <posts-list />
    </b-container>
  </div>
</template>


<script>
import SanteAir from '~/components/posts/SanteAir'
import Mortalite from '~/components/posts/Mortalite'
import Enfants from '~/components/posts/Enfants'
import FemmesEnceintes from '~/components/posts/FemmesEnceintes'
import Sportifs from '~/components/posts/Sportifs'
import PersonnesAgees from '~/components/posts/PersonnesAgees'
import PostsList from '~/components/posts/PostsList'

export default {
  components: {
    'sante-air': SanteAir,
    mortalite: Mortalite,
    enfants: Enfants,
    'femmes-enceintes': FemmesEnceintes,
    'personnes-agees': PersonnesAgees,
    sportifs: Sportifs,
    PostsList
  }
}
</script>
