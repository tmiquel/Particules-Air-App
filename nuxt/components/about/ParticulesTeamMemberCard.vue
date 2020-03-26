<template>
  <b-card class="border-0 mt-2 mb-4 pb-3 d-flex align-items-center justify-content-around h-100 text-center" no-body>
    <div v-if="$mq === 'mobile'"></div>
    <!-- empty div in order to vertically center the image below (justify-content-between)  -->
    <!-- https://github.com/cloudinary/cloudinary-vue/blob/master/src/components/CldImage/CldImage.md -->
    <!-- https://cloudinary.com/documentation/image_transformation_reference -->
    <cld-image class="px-md-4" :publicId="memberImgPublicId" responsive="width" lazy>
      <cld-transformation width="213" gravity="face:center" height="254" crop="thumb" effect="improve" />
      <!-- <cld-transformation radius="max" /> -->
      <cld-transformation dpr="auto" fetchFormat="auto" quality="auto:best" />
    </cld-image>
    <particules-team-member-link
      :to="memberId"
      class="card-link pt-md-3 no-underline font-weight-bold gray text-dark stretched-link"
      :style="responsiveMemberNameFontSize"
      v-html="member.name"
    ></particules-team-member-link>
    <span v-if="$mq ==='desktop'" :style="{fontSize: '22px'}" class="text-primary">{{member.jobtitle}}</span>
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
      return this.responsiveFontSize('fontSizeParticulesMemberCardTitle')
    },
    memberImgPublicId() {
      return this.$store.getters.getImgPublicID('team-members/' + this.member['start-of-cloudinary-filename'])
    }
  }
}
</script>
