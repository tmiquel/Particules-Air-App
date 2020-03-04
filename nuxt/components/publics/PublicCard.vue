<template>
  <div>
    <p class="text" :style="responsiveTextFontSize">{{ sensitivePublic.description }}</p>
    <br />
  </div>
</template>

<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  props: {
    sensitivePublic: {
      type: Object,
      required: true
    }
  },
  computed: {
    responsiveTextFontSize() {
      return this.responsiveFontSize('fontSizeCardText')
    },
    responsiveTitleFontSize() {
      return this.responsiveFontSize('fontSizeCardTitle')
    }
  }
}
</script>
