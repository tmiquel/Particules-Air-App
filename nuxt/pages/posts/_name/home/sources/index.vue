<template>
  <SourcesPagesComponent :current-route="this.$route"/>
</template>

<script>
import SourcesPagesComponent from '@/components/sources/SourcesPagesComponent'

export default {
  components: {
    SourcesPagesComponent
  }
}
</script>
