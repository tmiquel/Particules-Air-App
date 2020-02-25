<template>
  <b-nav
    :justified="true"
    :small="true"
    type="dark"
    class="footer-bar d-flex justify-content-between fixed-bottom text-center flex-nowrap"
    tabs
  >
    <b-button squared to="/graphs" variant="primary" class="footer-item px-0 flex-grow-1 justify-content-center">
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveGraphText }}
        <b-icon-pie-chart class="ml-1" />
      </span>
    </b-button>
    <b-button squared to="/stakeholders" variant="primary" class="footer-item px-0 flex-grow-1 justify-content-center">
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveStakeholdersText }}
        <b-icon-people class="ml-1" />
      </span>
    </b-button>
    <b-button squared variant="primary" class="footer-item px-0 flex-grow-1 justify-content-center">
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveDefinitionsText }}
        <b-icon-list-check class="ml-1" scale="1.4" shift-v="-1" />
      </span>
    </b-button>
    <b-button squared variant="primary" class="footer-item px-0 flex-grow-1 justify-content-center">
      <span :style="footerTextStyle" class="font-weight-bold">
        {{ responsiveSourcesText }}
        <b-icon-documents class="ml-1" />
      </span>
    </b-button>
  </b-nav>
</template>

<script>
import { BIcon, BIconPieChart, BIconPeople, BIconListCheck, BIconDocuments } from 'bootstrap-vue'

export default {
  components: {
    BIcon,
    BIconPieChart,
    BIconPeople,
    BIconListCheck,
    BIconDocuments
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
      return {
        fontSize: this.$mq === 'mobile' ? '0.7rem' : '1rem'
      }
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


