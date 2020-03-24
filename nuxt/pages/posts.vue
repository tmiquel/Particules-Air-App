<template>
  <div>
    <app-post-banner
      :post-title="postsTitles[$route.params.name].title"
      :background-img-id="$route.params.name"
      v-if="postsTitles[$route.params.name].title"
    />
    <app-post-banner
      :post-title="postsTitles[postsTitles[$route.params.name]["redirect-to"]].title"
      :background-img-id="$route.params.name"
      v-if="postsTitles[$route.params.name]['redirect-to']"
    />
    <nuxt-child />
    <ThePostsMenu v-if="$mq === 'mobile'"></ThePostsMenu>
  </div>
</template>


<script>
import postsTitles from '~/data/posts-titles.yml'
import ThePostsMenu from '~/components/SingleInstanceCmp/ThePostsMenu.vue'
export default {
  data() {
    return {
      postsTitles
    }
  },
  components: {
    ThePostsMenu
  }
}
</script>
