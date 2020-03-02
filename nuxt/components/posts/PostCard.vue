<template>
  <b-card class="border-0 mt-2 mb-4" no-body>
    <b-card-img :src="require(`~/assets/images/banners/posts/${route}.png`)" alt="Image" class="rounded-0" />
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
    }
  }
}
</script>
