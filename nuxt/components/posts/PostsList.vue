<template>
  <div class="mt-5">
    <app-heading>Les articles</app-heading>
    <b-container>
      <b-row cols="2" md="3" :no-gutters="true">
        <b-col v-for="(title, route, index) in postsTitle" :key="index">
          <post-card :title="title" :route="route"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import PostCard from '@/components/posts/PostCard'
export default {
  computed: mapState({
    postsTitle: state => state.postsTitle
  }),
  components: {
    PostCard
  }
}
</script>
