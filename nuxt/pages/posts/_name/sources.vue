<template>
  <div>
    <app-post-banner
      :post-title="postsTitle[$route.params.name]"
      :background-img-url="require('~/assets/images/banners/posts/' + $route.params.name + '.png')"
    />
    <app-heading>LES SOURCES</app-heading>

    <b-card-group columns class="container">
      <source-card  :source="source" v-for="(source, sourceId, id) in sources" :key="id" :id="sourceId" />
    </b-card-group>
    <div class="container">
      <div class="row">
        <div class="col pl-5">
          <back-to-post-link />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SourceCard from '@/components/sources/SourceCard'
import sources from '~/data/sources.yml'

export default {
  components: { SourceCard },
  data() {
    return {
      sources: sources
    }
  },
  computed: mapState({
    postsTitle: state => state.postsTitle,
  })
}
</script>
