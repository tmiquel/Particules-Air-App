<template>
  <div>
    <TheNavbar />
    <div id="pages-container" class="justify-content-center mb-5">
      <nuxt />
    </div>
    <TheFooter />
    <StakeholderSlider />
    <DefinitionSlider />
  </div>
</template>

<script>
import TheNavbar from '~/components/SingleInstanceCmp/TheNavbar.vue'
import TheFooter from '~/components/SingleInstanceCmp/TheFooter.vue'
import StakeholderSlider from '~/components/stakeholders/StakeholderSlider.vue'
import DefinitionSlider from '~/components/definitions/DefinitionSlider.vue'

export default {
  components: {
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
}
</style>
