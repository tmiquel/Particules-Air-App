<template>
  <div>
    <app-landing-banner />
    <sante-air />
    <posts-list />
  </div>
</template>

<script>
import SanteAir from '@/components/posts/SanteAir'
import PostsList from '~/components/posts/UI/PostsList'

export default {
  components: {
    SanteAir,
    PostsList
  }
}
</script>

