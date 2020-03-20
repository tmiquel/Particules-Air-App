<template>
  <div>
    <TheNavbar />
    <TheSideMenuDesktop v-if="$mq === 'desktop'" />
    <div id="pages-container" class="justify-content-center">
      <nuxt />
    </div>
    <TheFooter />
    <!-- Visibility toggles for the sliders below. See Vuex -->
    <StakeholderSlider />
    <DefinitionSlider />
  </div>
</template>

<script>
import TheSideMenuDesktop from '~/components/SingleInstanceCmp/TheSideMenuDesktop.vue'
import TheNavbar from '~/components/SingleInstanceCmp/TheNavbar.vue'
import TheFooter from '~/components/SingleInstanceCmp/TheFooter.vue'
import StakeholderSlider from '~/components/stakeholders/StakeholderSlider.vue'
import DefinitionSlider from '~/components/definitions/DefinitionSlider.vue'

export default {
  components: {
    TheSideMenuDesktop,
    TheNavbar,
    TheFooter,
    StakeholderSlider,
    DefinitionSlider
  }
}
</script>

<style>
#pages-container {
  margin-top: 49px;
  margin-bottom: 62px;
}
</style>
