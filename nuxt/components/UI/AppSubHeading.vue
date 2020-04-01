<template>
  <div>
    <h6 id="mobile" class="text-uppercase text-left" v-if="$mq === 'mobile'">
      <b><slot></slot></b>
    </h6>
    <h6 id="desktop" class="text-uppercase py-3" :class="[isCenteredOnDesktop ? 'text-center' : 'text-left']" v-if="$mq === 'desktop'">
      <b><slot></slot></b>
    </h6>
  </div>
</template>

<script>
export default {
  props: {
    isCenteredOnDesktop: {
      type: Boolean,
      default: false
    }
  }
}
</script>


<style scoped>
#mobile {
  color: var(--primary);

  background-image: linear-gradient(to right, var(--primary), white 37px, transparent 37px);
  background-size: 100% 0.2rem;
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
}

#desktop {
  font-size: 25px;
  color: var(--dark-grey);
}
</style>

