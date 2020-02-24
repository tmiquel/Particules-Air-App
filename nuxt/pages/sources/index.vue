<template>
  <div>
    <app-landing-banner />
    <app-heading>LES SOURCES</app-heading>

    <div class="container">
      <b-card-group columns>
        <source-card />
        <source-card />
        <source-card />
        <source-card />
        <source-card />
        <source-card />
        <source-card />
        <source-card />
        <source-card />
        <source-card />
      </b-card-group>
    </div>
  </div>
</template>

<script>
import SourceCard from '@/components/sources/SourceCard'

export default {
  components: {
    SourceCard
  }

}
</script>
