<template>
  <b-card class="border-0 mt-2 mb-4" no-body overlay>
    <map-preview :name="mapId" :has-margins="false" class="mb-0" />
    <b-card-text :style="responsiveTitleFontSize" class="no-underline font-weight-bold gray text-dark">{{
      map.title
    }}</b-card-text>
    <b-card-text :style="responsiveTextFontSize" class="no-underline gray text-dark">{{ map.description }}</b-card-text>
    <!-- <b-card-body> -->
    <stakeholder-link to="monique" class="card-link no-underline"
      >Producteur des données : {{ stakeholders[map.data_producer_id].title }}
    </stakeholder-link>
    <b-link :href="sources[map.source_id].link" class="card-link  no-underline text-muted"
      >Lien externe vers les données</b-link
    >
    <!-- </b-card-body> -->
  </b-card>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'
import stakeholders from '~/data/stakeholders.yml'
import sources from '~/data/sources.yml'

export default {
  mixins: [fontSizeMixin],
  props: {
    map: {
      type: Object,
      required: true
    },
    mapId: {
      type: String
    }
  },
  computed: {
    responsiveTitleFontSize() {
      return this.responsiveFontSize('fontSizeCardTitle')
    },
    responsiveTextFontSize() {
      return this.responsiveFontSize('fontSizeCardText')
    }
  },
  data() {
    return {
      sources: sources,
      stakeholders: stakeholders
    }
  }
}
</script>
