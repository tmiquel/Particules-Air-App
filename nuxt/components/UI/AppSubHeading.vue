<template>
  <h6 class="text-uppercase"><slot></slot></h6>
</template>


<style scoped>

h6 {
  color: var(--primary);

    background-image: linear-gradient(
    to right,
    var(--primary),
    white 37px,
    transparent 37px
  );
  background-size: 100% 0.2rem;
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  font-weight: bold;
}
</style>

