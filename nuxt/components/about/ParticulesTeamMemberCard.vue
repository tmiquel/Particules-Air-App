<template>
  <b-card class="border-0 mt-2 mb-4 pb-3 d-flex align-items-center justify-content-between h-100" no-body>
    <div></div> <!-- in order to vertically center the image below (justify-content-between)  -->
    <!-- https://github.com/cloudinary/cloudinary-vue/blob/master/src/components/CldImage/CldImage.md -->
    <!-- https://cloudinary.com/documentation/image_transformation_reference -->
    <cld-image :publicId="memberImgPublicId" responsive="width" lazy >
      <cld-transformation height="500" width="500"/>
      <!-- <cld-transformation dpr="auto"  fetchFormat="auto" quality="auto:best" /> -->
      <cld-transformation width="200" gravity="face:center"  height="200" crop="thumb" effect="improve" />
      <cld-transformation radius="max" />
    </cld-image>
    <stakeholder-link
      :to="stakeholderId"
      class="card-link no-underline font-weight-bold gray text-dark stretched-link"
      :style="responsiveTitleFontSize" v-html="stakeholder.name"
      ></stakeholder-link>
  </b-card>
</template>


<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  props: {
    stakeholder: {
      type: Object,
      required: true
    },
    stakeholderId: {
      type: String,
      required: true
    }
  },
  computed: {
    responsiveHeight() {
      const respHeight = this.$mq === 'mobile' ? '20vw' : '45vh'
      return {
        height: '20vw',
        maxHeight: '20vh'
      }
    },
    responsiveTitleFontSize() {
      return this.responsiveFontSize('fontSizeCardTitle')
    },
    responsiveTextFontSize() {
      return this.responsiveFontSize('fontSizeCardText')
    },
    memberImgPublicId() {
      return this.$store.getters.getImgPublicID('team-members/'+ this.stakeholder['start-of-cloudinary-filename'])
    }
  }
}
</script>
