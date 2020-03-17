<template>


  <b-card class="border-0 mt-2 mb-4" no-body>
    <cld-image :publicId="postPublicId" responsive="width" lazy>
      <cld-transformation width="1024" gravity="auto" height="576" crop="fill" effect="improve" />
      <cld-transformation dpr="auto"  fetchFormat="auto" quality="auto:best" />
    </cld-image>
    <b-link :to="'/posts/' + route" :style="responsiveTitleFontSize" class="no-underline font-weight-bold gray text-dark stretched-link">{{
      title
    }}</b-link>
  </b-card>
</template>


<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  props: {
    route: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  computed: {
    responsiveTitleFontSize() {
      return this.responsiveFontSize('fontSizeFooter')
    },
    postPublicId() {
      return this.$store.getters.getImgPublicID('posts/' + this.route)
    }
  }
}
</script>
