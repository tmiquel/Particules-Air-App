<template>
  <b-card class="border-0 mt-2 mb-4 pb-3 d-flex align-items-center justify-content-between h-100" no-body>
    <!-- https://github.com/cloudinary/cloudinary-vue/blob/master/src/components/CldImage/CldImage.md -->
    <cld-image :publicId="stakeholderImgPublicId" responsive="width" lazy >
      <cld-transformation dpr="auto" fetchFormat="auto" gravity="auto" quality="auto:best" />
    </cld-image>
    <stakeholder-link
      :to="stakeholderId"
      class="card-link no-underline font-weight-bold gray text-dark stretched-link"
      :style="responsiveTitleFontSize"
      >{{ stakeholder.title }}
    </stakeholder-link>
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
    stakeholderImgPublicId() {
      return this.$store.getters.getImgPublicID(this.stakeholder['start-of-cloudinary-filename'])
    }
  }
}
</script>
