<template>
  <b-row id="map-header">
    <b-col cols="4">
      <b-card no-body class="mb-1">
        <b-card-header header-tag="header" class="p-1" role="tab">
          <b-button block href="#" v-b-toggle.accordion-1 variant="info">Accordion 1</b-button>
        </b-card-header>
        <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
          <b-card-body>
            <b-card-text>
              I start opened because
              <code>visible</code> is
              <code>true</code>
            </b-card-text>
            <b-card-text>text</b-card-text>
          </b-card-body>
        </b-collapse>
      </b-card>
    </b-col>
    <b-col cols="4">
      <SearchAddress />
    </b-col>
    <b-col cols="4"></b-col>
  </b-row>
</template>

<script>
import SearchAddress from '~/components/maps/SearchAddress.vue'
export default {
  components: { SearchAddress }
}
</script>

<style>
#map-header {
  z-index: 999;
}
</style>
