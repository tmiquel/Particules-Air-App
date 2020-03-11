<template>
  <div class="typeahead-container px-3">
    <input type="text" id="input-map" class="mt-3" placeholder="Saisissez votre adresse" />
  </div>
</template>

<script>
var places
if (process.client) places = require('places.js')
import leafletPip from '@mapbox/leaflet-pip'

export default {
  props: { map: { required: true } },
  data: () => ({ marker: null }),
  mounted() {
    var placesAutocomplete = places({
      appId: process.env.ALGOLIA_APP,
      apiKey: process.env.ALGOLIA_KEY,
      container: document.querySelector('#input-map'),
      type: 'address',
      countries: ['fr'],
      insideBoundingBox: '45.1193, 7.8287, 42.7754, 3.9683', //westlimit=3.9683; southlimit=42.7754; eastlimit=7.8287; northlimit=45.1193
      autocompleteOptions: {
        minLength: 4,
        debounce: 400
      }
    })
    placesAutocomplete.on('change', this.flyTo)
    placesAutocomplete.on('clear', this.clear)
  },
  methods: {
    flyTo(event) {
      // this.map.flyTo([event.geometry.coordinates[1], event.geometry.coordinates[0]], 16)
      const latLng = event.suggestion.latlng
      if (this.$parent.$geojson) leafletPip.pointInLayer(latLng, this.$parent.$geojson, true)[0].fire('click')
      if (this.marker) {
        this.marker.setLatLng(latLng)
      } else {
        this.marker = L.marker(latLng).addTo(this.map)
      }
      this.map.setView(latLng, 15)
    },
    clear() {
      this.marker.setLatLng([0, 0])
    }
  }
}
</script>

<style  lang="scss">
.typeahead-container {
  width: 100vw;
  display: flex;
  position: fixed;
  z-index: 999;
  & > span {
    max-width: 400px;
  }
  button {
    padding: 0;
  }
  svg {
    margin-top: 7px;
  }
}
</style>
