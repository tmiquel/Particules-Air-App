<template>
  <div>
    <TheNavbarDesktop v-if="$mq === 'desktop'" />
    <TheNavbarMobile v-else />
    <TheSideMenuDesktop v-if="$mq === 'desktop'" />
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
import TheSideMenuDesktop from '~/components/SingleInstanceCmp/TheSideMenuDesktop.vue'
import StakeholderSlider from '~/components/stakeholders/StakeholderSlider.vue'
import DefinitionSlider from '~/components/definitions/DefinitionSlider.vue'
import ParticulesTeamCarouselModal from '@/components/about/ParticulesTeamCarouselModal'

export default {
  components: {
    TheNavbarMobile,
    TheNavbarDesktop,
    ThePostsMenu,
    TheSideMenuDesktop,
    StakeholderSlider,
    DefinitionSlider,
    ParticulesTeamCarouselModal
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
