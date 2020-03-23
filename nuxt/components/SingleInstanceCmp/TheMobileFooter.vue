<template>
  <b-nav
    tabs
    align="right"
    :justified="true"
    :small="true"
    type="dark"
    class="footer-bar d-flex justify-content-between fixed-bottom text-center flex-nowrap"
  >
    <b-nav-text class="footer-item px-0 flex-grow-1 justify-content-center mt-3">
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
.footer-bar {
  background: #016fbf;
  height: 100px;
}
.footer-item {
  width: 176px;
  height: 24px;
  left: 1131px;
  top: 1808px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 50px;
  text-align: right;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
}
</style>


