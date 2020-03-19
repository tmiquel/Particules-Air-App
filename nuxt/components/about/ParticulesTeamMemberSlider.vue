<template>
  <drawer
    :bodyStyle="antBodyStyleProp"
    placement="right"
    @close="$store.commit('CLOSE_TEAM_MEMBER_SLIDER')"
    :visible="state.visible"
    :width="respDrawerWidth"
  >
    <template v-if="selected">
      <div class="mt-4" :class="[this.$mq === 'mobile' ? 'container-fluid' : 'container']">
        <b-row class="row-cols-1">
          <b-col :style="imgHeightStyle" class="d-flex justify-content-center align-items-center">
            <cld-image
              class="d-flex h-100 justify-content-center"
              :publicId="stakeholderImgPublicId"
              :alt="selected.title"
              responsive="height"
              :style="maxWidthAndResponsiveHeight"
            >
              <!-- https://github.com/cloudinary/cloudinary-vue/blob/master/src/components/CldImage/CldImage.md -->
              <!-- https://cloudinary.com/documentation/image_transformation_reference -->

              <cld-transformation width="1600" gravity="face:center" height="1600" crop="fill" effect="improve" />
              <cld-transformation radius="max" />
              <cld-transformation dpr="auto" fetchFormat="auto" gravity="auto" quality="auto:best" />
            </cld-image>
          </b-col>
          <b-col class="pt-4 px-md-5">
            <h5 :style="responsiveTitleFontSize" class="text-center">
              <strong v-html="selected.name"> </strong>
            </h5>
            <p :style="responsiveTextFontSize" class="text-left pt-3" v-html="selected.description"></p>
            <p :style="responsiveTextFontSize" class="text-left pt-3" v-show="selected.twitter">
              <a  :href="selected.twitter"><u :style="{color: 'black !important'}">Suivez-moi sur Twitter</u></a>
            </p>

            <p :style="responsiveTextFontSize" class="text-left pt-3" v-show="selected.email">
              <a :href="'mailto:'+selected.email">
              <u :style="{color: 'black !important'}">Email : {{ selected.email }}</u></a>
            </p>
          </b-col>
        </b-row>
      </div>
    </template>
  </drawer>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'
import Drawer from 'ant-design-vue/lib/drawer'
import particulesTeamMembers from '~/data/particules-team.yml'
import { mapState } from 'vuex'
export default {
  mixins: [fontSizeMixin],
  components: { Drawer },
  data() {
    return {
      antBodyStyleProp: {padding: '2rem 10px'}
    }
  },
  computed: {
    ...mapState({
      state: state => state.particulesTeamMemberSlider,
      selected: state => {
        if (state.particulesTeamMemberSlider.slug) {
          if (state.particulesTeamMemberSlider.slug in particulesTeamMembers) {
            return particulesTeamMembers[state.particulesTeamMemberSlider.slug]
          }
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
    maxWidthAndResponsiveHeight() {
      const respHeight = this.$mq === 'mobile' ? '30vh' : '25vh'
      return {
        height: respHeight,
        maxHeight: '30vh',
        maxWidth: '100%',
      }
    },
    imgHeightStyle() {
      return (this.$mq === 'mobile' ? {height: '30vh'} : {height : '25vh'} )
    },
    respDrawerWidth() {
      return this.$mq === 'mobile' ? '80vw' : '65vw'
    }
  }
}
</script>
