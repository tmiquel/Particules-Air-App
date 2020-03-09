<template>
  <div>
    <app-post-banner
      :post-title="postsTitle[$route.params.name]"
      :background-img-id="$route.params.name"
    />
    <nuxt-child />
  </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    postsTitle: state => state.postsTitle
  })
}
</script>
