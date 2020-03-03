<template>
  <drawer placement="right" @close="$store.commit('CLOSE_STAKEHOLDER_SLIDER')" :visible="state.visible" width="80vw">
    <template v-if="selected">
      <b-img
        :src="require('~/assets/images/stakeholders/' + selected.img)"
        :alt="selected.img"
        fluid
        center
        class="my-5"
        :style="{ maxHeight: '20vh' }"
      />
      <h5 :style="responsiveTitleFontSize"><strong><u>{{ selected.title }}</u></strong></h5>
      <p :style="responsiveTextFontSize" class="text-justify" v-html="selected.description"></p>
    </template>
  </drawer>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'
import Drawer from 'ant-design-vue/lib/drawer'
import stakeholders from '~/data/stakeholders.yml'
import { mapState } from 'vuex'
export default {
  mixins: [fontSizeMixin],
  components: { Drawer },
  computed: {
    ...mapState({
    state: state => state.stakeHolderSlider,
    selected: state => (state.stakeHolderSlider.slug ? stakeholders[state.stakeHolderSlider.slug] : null)
  }),
    responsiveTitleFontSize() {
      return this.responsiveFontSize('fontSizeLateralSliderTitle')
    },
    responsiveTextFontSize() {
      return this.responsiveFontSize('fontSizeLateralSliderText')
    }
  }
}
</script>
