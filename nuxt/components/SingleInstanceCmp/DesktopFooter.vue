<template>
  <b-nav
    tabs
    align="right"
    class="footer-bar d-flex justify-content-between fixed-bottom text-center flex-nowrap"
  >
    <b-nav-text class="footer-item flex-grow-1 mt-3 mr-5">
      Fait à Marseille avec
      <img
        src="~/assets/images/icons/desktop/footer_coeur.svg"
        class="filter-white ml-1"
      />
    </b-nav-text>
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


<style scoped >
img {
  width: 22.26px;
  height: 17.5px;
  left: 1316px;
  top: 1813px;
}
.filter-white {
  filter: invert(100%) sepia(0%) saturate(5959%) hue-rotate(237deg) brightness(111%) contrast(81%);
}
.footer-bar {
  background: #016fbf;
  height: 90px;
}
.footer-item {
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 50px;
  text-align: right;
  /* identical to box height */

  color: #ffffff;
}
</style>


