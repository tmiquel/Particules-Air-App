<template>
  <div>
    <app-landing-banner />
    <app-heading>LES SOURCES</app-heading>

    <b-card-group columns class="container">
      <source-card :source="source" v-for="(source, id) in sources" :key="id" />
    </b-card-group>
    <back-to-post-link />
  </div>
</template>

<script>
import SourceCard from '@/components/sources/SourceCard'
import sources from '~/data/sources.yml'

export default {
  components: { SourceCard },
  data() {
    return {
      sources: sources
    }
  }
}
</script>
