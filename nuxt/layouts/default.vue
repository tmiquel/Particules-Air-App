<template>
  <div>
    <TheNavbar />
    <div class="container my-5 pt-2">
      <nuxt />
    </div>
    <TheFooter />
    <StakeholderSlider />
    <SourceSlider />
  </div>
</template>

<script>
import TheNavbar from '~/components/SingleInstanceCmp/TheNavbar.vue'
import TheFooter from '~/components/SingleInstanceCmp/TheFooter.vue'
import StakeholderSlider from '~/components/stakeholders/StakeholderSlider.vue'
import SourceSlider from '~/components/sources/SourceSlider.vue'

export default {
  components: {
    TheNavbar,
    TheFooter,
    StakeholderSlider,
    SourceSlider
  }
}
</script>

