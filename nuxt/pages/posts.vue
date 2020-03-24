<template>
  <div>
    <app-post-banner
      :post-title="postsTitle[$route.params.name]"
      :background-img-id="$route.params.name"
    />
    <nuxt-child />
    <ThePostsMenu v-if="$mq === 'mobile'"></ThePostsMenu>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import ThePostsMenu from '~/components/SingleInstanceCmp/ThePostsMenu.vue'
export default {
  computed: mapState({
    postsTitle: state => state.postsTitle
  }),
  components: {
    ThePostsMenu
  }
}
</script>
