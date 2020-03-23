<template>
  <div class="mt-5">
    <app-heading>Les articles</app-heading>
    <b-container>
      <b-row :no-gutters="true" class="row-cols-2 row-cols-md-3 row-cols-lg-4">
        <b-col v-for="(titleObject, route, index) in shownPosts" :key="index">
          <post-card :title="titleObject.title" :route="route" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import postsTitles from '~/data/posts-titles.yml'
import PostCard from '@/components/posts/UI/PostCard'
export default {
  components: {
    PostCard
  },
  data() {
    return {
      postsTitles
    }
  },
  computed: {
    shownPosts() {
      let shownPosts = Object.assign({}, this.postsTitles)
      delete shownPosts['home']
      if (this.$route.params.name) {
        delete shownPosts[this.$route.params.name]
      } else {
        // we are in the Home page
        let homePostKey = this.postsTitles['home']['redirect-to']
        delete shownPosts[homePostKey]
      }
      return shownPosts
    }
  }
}
</script>
