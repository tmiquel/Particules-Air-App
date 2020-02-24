<template>
  <div>
    <app-landing-banner />
    <app-heading>LES SOURCES</app-heading>

    <div class="container">
      <b-card-group columns v-for="source in sources">
        <source-card :source="source" />
      </b-card-group>
    </div>
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
    console.log(this.sources)
  }
}
</script>
