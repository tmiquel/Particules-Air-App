<template>
  <div>
    <app-landing-banner />
    <app-heading>LES SOURCES</app-heading>

    <b-card-group columns class="container">
      <source-card :source="source" v-for="(source, id) in sources" :key="id" />
    </b-card-group>
    <back-to-post-link :current-route="this.currentRoute"/>
  </div>
</template>

<script>
import SourceCard from '@/components/sources/SourceCard'
import sources from '~/data/sources.yml'
import BackToPostLink from '@/components/posts/BackToPostLink'

export default {
  props: {
    currentRoute: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      sources: sources
    }
  },
  components: {
    SourceCard,
    BackToPostLink
  }
}
</script>
