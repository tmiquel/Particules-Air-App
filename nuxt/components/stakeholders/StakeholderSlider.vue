<template>
  <drawer
    placement="right"
    :closable="false"
    @close="$store.commit('CLOSE_STAKEHOLDER_SLIDER')"
    :visible="state.visible"
  >
    <template v-if="selected">
      <!-- <img :src="require('~assets/images/stakeholders/'+selected.img)" :alt="selected.img" /> -->
      <h2 v-html="selected.title"></h2>
      <p v-html="selected.description"></p>
    </template>
  </drawer>
</template>

<script>
import Drawer from 'ant-design-vue/lib/drawer'
import stakeholders from '~/static/stakeholders.yml'
import { mapState } from 'vuex'
export default {
  components: { Drawer },
  computed: mapState({
    state: state => state.stakeHolderSlider,
    selected: state => (state.stakeHolderSlider.slug ? stakeholders[state.stakeHolderSlider.slug] : null)
  })
}
</script>

<style >
@import 'ant-design-vue/lib/drawer/style/index.css';

.ant-drawer {
  z-index: 9999;
}
</style>
