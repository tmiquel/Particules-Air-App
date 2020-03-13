<template>
  <b-card class="border-0 mt-2 mb-4 pb-3 d-flex align-items-center justify-content-between h-100" no-body>
    <div></div>
    <!-- empty div in order to vertically center the image below (justify-content-between)  -->
    <!-- https://github.com/cloudinary/cloudinary-vue/blob/master/src/components/CldImage/CldImage.md -->
    <!-- https://cloudinary.com/documentation/image_transformation_reference -->
    <cld-image :publicId="memberImgPublicId" responsive="width" lazy>
      <cld-transformation width="200" gravity="face:center" height="200" crop="thumb" effect="improve" />
      <cld-transformation radius="max" />
      <cld-transformation dpr="auto"  fetchFormat="auto" quality="auto:best" />

    </cld-image>
    <particules-team-member-link
      :to="memberId"
      class="card-link no-underline font-weight-bold gray text-dark stretched-link"
      :style="responsiveMemberNameFontSize"
      v-html="member.name"
    ></particules-team-member-link>
  </b-card>
</template>


<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'
import ParticulesTeamMemberLink from '@/components/about/ParticulesTeamMemberLink'
export default {
  mixins: [fontSizeMixin],
  props: {
    member: {
      type: Object,
      required: true
    },
    memberId: {
      type: String,
      required: true
    }
  },
  components: {
    ParticulesTeamMemberLink
  },
  computed: {
    responsiveMemberNameFontSize() {
      return this.responsiveFontSize('fontSizeCardTitle')
    },
    memberImgPublicId() {
      return this.$store.getters.getImgPublicID('team-members/' + this.member['start-of-cloudinary-filename'])
    }
  }
}
</script>
