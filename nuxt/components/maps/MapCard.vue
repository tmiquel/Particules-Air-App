<template>
  <b-card class="border-0 mt-2 mb-4 pb-3" no-body overlay>
    <b-card-text :style="responsiveTitleFontSize" class="no-underline font-weight-bold gray text-dark">{{
      map.title
    }}</b-card-text>
    <map-preview :name="mapId" :has-margins="false" class="mb-0" />
    <!-- <b-card-body> -->
    <div class="d-flex justify-content-between py-1">
      <stakeholder-link :to="map.data_producer_id" class="card-link no-underline" :style="responsiveTextFontSize"
        >Source : {{ stakeholders[map.data_producer_id].title }}
      </stakeholder-link>
      <b-link :href="sources[map.source_id].link" class="card-link no-underline" :style="responsiveTextFontSize"
        >Lien vers les données</b-link
      >
    </div>
    <b-card-text :style="responsiveTextFontSize" class="no-underline gray text-dark">{{ map.description }}</b-card-text>
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
