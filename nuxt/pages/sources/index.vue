<template>
  <div>
    <app-landing-banner />
    <app-heading>LES SOURCES</app-heading>

    <b-card-group columns class="container">
      <source-card :source="source" v-for="(source, id) in sources" :key="id" />
    </b-card-group>
  </div>
</template>

<script>
import SourceCard from '@/components/sources/SourceCard'
import sources from '~/data/sources.yml'

export default {
  data() {
    return {
      sources: sources
    }
  },
  components: {
    SourceCard
  },
  mounted() {
    // console.log(this.sources)
  }
}
</script>
