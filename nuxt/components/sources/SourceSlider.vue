<template>
  <drawer
    placement="bottom"
    @close="$store.commit('CLOSE_SOURCE_SLIDER')"
    :visible="state.visible"
    height="auto"
  >
    <template v-if="selected">
      <h6 class="font-weight-bold" v-html="selected.title"></h6>
      <span v-html="selected.description"></span>
    </template>
  </drawer>
</template>

<script>
import Drawer from 'ant-design-vue/lib/drawer'
import sources from '~/data/sources.yml'
import { mapState } from 'vuex'
export default {
  components: { Drawer },
  computed: mapState({
    state: state => state.sourceSlider,
    selected: state => (state.sourceSlider.slug ? sources[state.sourceSlider.slug] : null)
  })
}
</script>
