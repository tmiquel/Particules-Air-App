<template>
  <drawer

    placement="right"
    @close="$store.commit('CLOSE_STAKEHOLDER_SLIDER')"
    :visible="state.visible"
    :width="respDrawerWidth"
  >
    <template v-if="selected">
      <b-container class="mt-4 px-0" fluid>
        <b-row class="row-cols-1 row-cols-lg-2">
          <b-col class="px-3" cols="12" lg="3">
            <cld-image
              class="d-flex justify-content-center px-md-5 pb-md-3 px-lg-0 pb-lg-0"
              responsive="width"
              :publicId="stakeholderImgPublicId"
              :alt="selected.title"
            >
              <cld-transformation dpr="auto" fetchFormat="auto" gravity="auto" quality="auto:best" />
            </cld-image>
          </b-col>
          <b-col class="px-3" cols="12" lg="9">
            <!-- <div class="d-flex-inline pt-4"> -->
              <h5 class="mt-4 mt-lg-0" :style="responsiveTitleFontSize">
                <strong>
                  <u>{{ selected.title }}</u>
                </strong>
              </h5>
              <p :style="responsiveTextFontSize" v-html="selected.description"></p>
            <!-- </div> -->
          </b-col>
        </b-row>
      </b-container>
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
  data() {
    return {
      antBodyStyleProp: { padding: '2rem 0' }
    }
  },
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
    },
    respDrawerWidth() {
      return this.$mq === 'mobile' ? '80vw' : '65vw'
    }
  }
}
</script>
