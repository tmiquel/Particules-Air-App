<template>
  <div>
    <div class="h1" :style="responsiveTitleFontSize">
      {{ definition.title }}
    </div>
    <p class="text" :style="responsiveTextFontSize">
      {{ definition.description }}
    </p>
    <br />
  </div>
</template>

<script>
import { fontSizeMixin } from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  props: {
    definition: {
      type: Object,
      required: true
    }
  },
  computed: {
    responsiveTextFontSize() {
      this.responsiveFontSize(process.env.fontSizeCardText)
    },
    responsiveTitleFontSize() {
      this.responsiveFontSize(process.env.fontSizeCardTitle)
    }
  }
}
</script>


<style scoped>
.h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */
  text-align: justify;
  text-decoration-line: underline;
  color: #454545;
}
.text {
  text-align: justify;
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: #454545;
}
</style>

