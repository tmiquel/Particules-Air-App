<template>
  <div class="mt-5">
    <app-heading>Les articles</app-heading>
    <b-container>
      <b-row :no-gutters="true" class="row-cols-2 row-cols-md-3 row-cols-lg-4">
        <b-col v-for="(titleObject, route, index) in postsTitles" :key="index">
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
  }
}
</script>
