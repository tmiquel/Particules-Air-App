<template>
  <div>
    <div class="h1" :style="$mq === 'mobile' ? { fontSize: '0.9rem' } : { fontSize: '1.1rem' }">
      {{ definition.title }}
    </div>
    <p class="text" :style="$mq === 'mobile' ? { fontSize: '0.8rem' } : { fontSize: '1rem' }">
      {{ definition.description }}
    </p>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    definition: {
      type: Object,
      required: true
    }
  }
}
</script>


<style scoped>
.h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */
  text-align: justify;
  text-decoration-line: underline;
  color: #454545;
}
.text {
  text-align: justify;
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: #454545;
}
</style>

