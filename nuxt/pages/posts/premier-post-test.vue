<template>
  <div>
    <h1>Premier post</h1>
    <p>
      Je mentionne
      <a
        href="#"
        @click="$store.commit('OPEN_STAKEHOLDER_SLIDER', 'monique_renaud')"
      >Monique Renaud</a> et la remercie pour son soutient. Parlons des
      <a
        href="#"
        @click="$store.commit('OPEN_SOURCE_SLIDER', 'polluants_atmospheriques')"
      >polluants atmosphériques</a>
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style>
</style>
