<template>
  <client-only>
    <PollutionIrisSeuilOMSPacaMap />
  </client-only>
</template>

<script>
import PollutionIrisSeuilOMSPacaMap from '~/components/maps/PollutionIrisSeuilOMSPacaMap.vue'

export default {
  layout: 'map',
  components: { PollutionIrisSeuilOMSPacaMap }
}
</script>
