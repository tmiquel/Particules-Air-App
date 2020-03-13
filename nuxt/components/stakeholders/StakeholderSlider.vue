<template>
  <drawer placement="right" @close="$store.commit('CLOSE_STAKEHOLDER_SLIDER')" :visible="state.visible" width="65vw">
    <template v-if="selected">
      <div class="container mt-4">
        <div class="row">
          <div class="col">
            <cld-image
              class="d-flex justify-content-center"
              :publicId="stakeholderImgPublicId"
              :alt="selected.title"
              responsive="height"
              :style="responsiveHeight"
            >
              <cld-transformation dpr="auto" fetchFormat="auto" gravity="auto" quality="auto:best" />
            </cld-image>
            <div class="d-flex-inline mt-3">
              <h5 :style="responsiveTitleFontSize">
                <strong>
                  <u>{{ selected.title }}</u>
                </strong>
              </h5>
              <p :style="responsiveTextFontSize" class="text-justify" v-html="selected.description"></p>
            </div>
          </div>
        </div>
      </div>
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
      state: state => state.stakeholderSlider,
      selected: state => {
        if (state.stakeholderSlider.slug in stakeholders) {
          return stakeholders[state.stakeholderSlider.slug]
        } else return null
      }
    }),
    responsiveTitleFontSize() {
      return this.responsiveFontSize('fontSizeLateralSliderTitle')
    },
    responsiveTextFontSize() {
      return this.responsiveFontSize('fontSizeLateralSliderText')
    },
    stakeholderImgPublicId() {
      return this.$store.getters.getImgPublicID(this.selected['start-of-cloudinary-filename'])
    },
    responsiveHeight() {
      const respHeight = this.$mq === 'mobile' ? '20vw' : '45vh'
      return {
        height: '20vw',
        maxHeight: '20vh'
      }
    }
  }
}
</script>
