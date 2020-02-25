<template>
  <div>
    <app-landing-banner />
    <app-heading>LE LEXIQUE</app-heading>
    <div class="container">
      <div class="row">
        <div class="col">
          <definition-card v-for="definition in definitions" :key="definition.title" :definition="definition" />
          <br />
          <nuxt-link to="/" class="link">Retourner à l’article</nuxt-link>
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
import BackToPostLink from '@/components/posts/BackToPostLink'

export default {
  props: {
    currentRoute: {
      type: Object,
      required: true
    }
  },
  components: {
    DefinitionCard,
    BackToPostLink
  },
  data() {
    return {
      definitions: definitions
    }
  }
}
</script>
