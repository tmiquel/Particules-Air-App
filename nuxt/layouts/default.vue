<template>
  <div>
    <TheNavbar />
    <div id="pages-container" class="justify-content-center">
      <nuxt />
    </div>
    <DesktopFooter />
    <!-- Visibility toggles for the sliders below. See Vuex -->
    <StakeholderSlider />
    <DefinitionSlider />
  </div>
</template>

<script>
import TheNavbar from '~/components/SingleInstanceCmp/TheNavbar.vue'
import ThePostsMenu from '~/components/SingleInstanceCmp/ThePostsMenu.vue'
import StakeholderSlider from '~/components/stakeholders/StakeholderSlider.vue'
import DefinitionSlider from '~/components/definitions/DefinitionSlider.vue'
import DesktopFooter from '~/components/SingleInstanceCmp/DesktopFooter.vue'

export default {
  components: {
    TheNavbar,
    ThePostsMenu,
    StakeholderSlider,
    DefinitionSlider,
    DesktopFooter
  }
}
</script>

<style>
#pages-container {
  margin-top: 49px;
  margin-bottom: 62px;
}
</style>
