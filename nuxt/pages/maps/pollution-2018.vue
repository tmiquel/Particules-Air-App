<template>
  <client-only>
    <Pollution2018 />
  </client-only>
</template>

<script>
import Pollution2018 from '~/components/maps/Pollution2018.vue'

export default {
  layout: 'map',
  components: { Pollution2018 }
}
</script>
