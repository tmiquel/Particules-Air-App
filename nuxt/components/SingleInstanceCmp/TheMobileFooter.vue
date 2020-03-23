<template>
  <b-nav
    :justified="true"
    :small="true"
    type="dark"
    class="footer-bar d-flex justify-content-between fixed-bottom text-center flex-nowrap"
    tabs
  >
    <b-button squared class="footer-item px-0 flex-grow-1 justify-content-center">
      <span :style="footerTextStyle" class="font-weight-bold">
        Fait à Marseille avec
        {{ responsiveSourcesText }}
        <img
          src="~/assets/images/icons/desktop/footer_coeur.svg"
          class="filter-white ml-1"
        />
      </span>
    </b-button>
  </b-nav>
</template>

<script>
import { BIcon, BIconPieChart, BIconPeople, BIconListCheck, BIconDocuments } from 'bootstrap-vue'

import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],

  methods: {
    urlFor(page) {
      return `/posts/${this.$route.params.name ? this.$route.params.name : 'home'}/${page}`
    }
  }
}
</script>


<style >
img {
  width: 22.26px;
  height: 17.5px;
  left: 1316px;
  top: 1813px;
}
.filter-white {
  filter: invert(100%) sepia(0%) saturate(5959%) hue-rotate(237deg) brightness(111%) contrast(81%);
}
.footer-item {
  background: #016fbf;
  height: 120px;
}
</style>


