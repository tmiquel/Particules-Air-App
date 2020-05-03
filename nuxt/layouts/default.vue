<template>
  <div>
    <TheNavbarDesktop v-if="$mq === 'desktop'"></TheNavbarDesktop>
    <TheNavbarMobile v-else />
    <div id="pages-container" class="justify-content-center">
      <nuxt />
    </div>


    <!-- Visibility toggles for the sliders below. See Vuex -->
    <StakeholderSlider />
    <DefinitionSlider />
    <ParticulesTeamCarouselModal />
  </div>
</template>

<script>
import TheNavbarMobile from '~/components/SingleInstanceCmp/TheNavbarMobile.vue'
import TheNavbarDesktop from '~/components/SingleInstanceCmp/TheNavbarDesktop.vue'
import ThePostsMenu from '~/components/SingleInstanceCmp/ThePostsMenu.vue'
import StakeholderSlider from '~/components/stakeholders/StakeholderSlider.vue'
import DefinitionSlider from '~/components/definitions/DefinitionSlider.vue'

export default {
  components: {
    TheNavbarMobile,
    TheNavbarDesktop,
    ThePostsMenu,
    StakeholderSlider,
    DefinitionSlider,
    DesktopFooter
  }
}
</script>

<style lang='scss'>
#pages-container {
  margin-top: 49px;
  &.mobile {
    margin-bottom: 62px;
  }
}
</style>
