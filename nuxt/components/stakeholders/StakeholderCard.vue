<template>
  <b-card class="border-0 mt-2 mb-4 pb-3 d-flex align-items-center justify-content-between h-100" no-body>
    <!-- https://github.com/cloudinary/cloudinary-vue/blob/master/src/components/CldImage/CldImage.md -->
        <!-- https://cloudinary.com/documentation/image_transformation_reference -->


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
    responsiveTitleFontSize() {
      return this.responsiveFontSize('fontSizeCardTitle')
    },
    responsiveTextFontSize() {
      return this.responsiveFontSize('fontSizeCardText')
    },
    stakeholderImgPublicId() {
      return this.$store.getters.getImgPublicID('stakeholders/' + this.stakeholder['start-of-cloudinary-filename'])
    }
  }
}
</script>
