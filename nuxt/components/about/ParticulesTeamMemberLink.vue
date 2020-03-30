<template>
  <a href="#!" :style='{color: "#454545"}' target="_self" @click="onclick">
    <slot />
  </a>
</template>
<script>
export default {
  props: {
    to: { required: true }
  },
  methods: {
    onclick() {
      if (this.$mq === 'mobile') {
        this.$store.commit('OPEN_TEAM_MEMBER_SLIDER', this.to)
      } else {
        this.$store.commit('OPEN_TEAM_CAROUSEL', this.to)
      }
    }
  }
}
</script>

<style scoped>

a {
  text-decoration: none;
}
</style>
