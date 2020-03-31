<template>
  <nuxt-link :to="url" class="link" :style="responsiveLinkFontSize"
    ><strong class="no-underline pr-1"><</strong> <u>Retourner à l’{{ destinationName }}</u></nuxt-link
  >
</template>


<script>
import fontSizeMixin from '@/mixins/fontSizeMixin.js'

export default {
  mixins: [fontSizeMixin],
  computed: {
    destinationName() {
      return this.$route.params.name === 'home' ? 'accueil' : 'article'
    },
    url() {
      return this.$route.params.name === 'home' ? '/' : `/posts/${this.$route.params.name}`
    },
    responsiveLinkFontSize() {
      return this.responsiveFontSize('fontSizeCardText')
    }
  }
}
</script>

<style scoped>
.link {
  color: var(--dark-grey);
}
</style>
