<template>
  <b-nav
    :justified="true"
    :small="true"
    type="dark"
    class="footer-bar d-flex justify-content-between fixed-bottom text-center flex-nowrap"
    tabs
  >
    <b-button
      squared
      variant="primary"
      class="footer-item px-0 flex-grow-1 justify-content-center"
      :to="urlFor('graphs')"
    >
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveGraphText }}
        <b-icon-pie-chart class="ml-1" />
      </span>
    </b-button>
    <b-button
      squared
      variant="primary"
      class="footer-item px-0 flex-grow-1 justify-content-center"
      :to="urlFor('stakeholders')"
    >
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveStakeholdersText }}
        <b-icon-people class="ml-1" />
      </span>
    </b-button>
    <b-button
      squared
      variant="primary"
      class="footer-item px-0 flex-grow-1 justify-content-center"
      :to="urlFor('definitions')"
    >
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveDefinitionsText }}
        <b-icon-list-check class="ml-1" scale="1.4" shift-v="-1" />
      </span>
    </b-button>
    <b-button
      squared
      variant="primary"
      class="footer-item px-0 flex-grow-1 justify-content-center"
      :to="urlFor('sources')"
    >
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveSourcesText }}
        <b-icon-files class="ml-1" />
      </span>
    </b-button>
  </b-nav>
</template>

<script>
import { BIcon, BIconPieChart, BIconPeople, BIconListCheck, BIconFiles } from 'bootstrap-vue'

import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  components: {
    BIcon,
    BIconPieChart,
    BIconPeople,
    BIconListCheck,
    BIconFiles
  },
  computed: {
    responsiveGraphText() {
      return this.$mq === 'mobile' ? 'GRAPHES' : 'LES GRAPHES'
    },
    responsiveStakeholdersText() {
      return this.$mq === 'mobile' ? 'ACTEURS' : 'LES ACTEURS'
    },
    responsiveDefinitionsText() {
      return this.$mq === 'mobile' ? 'LEXIQUE' : 'LE LEXIQUE'
    },
    responsiveSourcesText() {
      return this.$mq === 'mobile' ? 'SOURCES' : 'LES SOURCES'
    },
    footerTextStyle() {
      return this.responsiveFontSize('fontSizeFooter')
    }
  },
  methods: {
    urlFor(page) {
      return `/posts/${this.$route.params.name ? this.$route.params.name : 'home'}/${page}`
    }
  }
}
</script>


<style >
.footer-item span {
  font-family: 'Source Sans Pro', 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue',
    Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}
</style>
