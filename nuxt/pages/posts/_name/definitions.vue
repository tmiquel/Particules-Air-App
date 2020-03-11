<template>
  <div>

    <app-heading>LE LEXIQUE</app-heading>
    <div class="container">
      <div class="row">
        <div class="col">
          <definition-card v-for="definition in definitions" :key="definition.title" :definition="definition" />
          <br />
          <back-to-post-link />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefinitionCard from '@/components/definitions/DefinitionCard'
import definitions from '~/data/definitions.yml'
export default {
  components: {
    DefinitionCard
  },
  data() {
    return {
      definitions: definitions
    }
  }
}
</script>
