<template>
  <div>
    <app-post-banner
      :post-title="postsTitles[$route.params.name].title"
      :background-img-id="$route.params.name"
    />
    <nuxt-child />
  </div>
</template>


<script>
import postsTitles from '~/data/posts-titles.yml'
export default {
  data() {
    return {
      postsTitles
    }
  }
}
</script>
