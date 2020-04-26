<template>
  <div>
    <app-landing-banner />
    <the-landing-page />
    <large-footer />
  </div>
</template>

<script>
import TheLandingPage from '@/components/SingleInstanceCmp/TheLandingPage'
import LargeFooter from '@/components/nav/LargeFooter'


export default {
  components: {
    TheLandingPage,
    LargeFooter
  }
}
</script>

