<template>
  <div class="typeahead-container mx-auto mt-4 d-flex justify-content-center align-items-center">
    <input type="text" id="input-address" class="rounded" placeholder="Saisissez votre adresse" />
    <IconLoc height="40" class="ml-2" @click="locate" :style="{cursor: 'pointer'}" />
  </div>
</template>

<script>
import IconLoc from '~/assets/images/icons/localisation.svg?inline'
import places from 'places.js'
import leafletPip from '@mapbox/leaflet-pip'

export default {
  components: { IconLoc },
  data: () => ({ marker: null, isLocating: false }),
  mounted() {
    var placesAutocomplete = places({
      appId: process.env.ALGOLIA_APP,
      apiKey: process.env.ALGOLIA_KEY,
      container: document.querySelector('#input-address'),
      type: 'address',
      countries: ['fr'],
      useDeviceLocation: false,
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
      const latLng = event.suggestion ? event.suggestion.latlng : { lat: event.latitude, lng: event.longitude }

      if (this.marker) {
        this.marker.setLatLng(latLng)
      } else {
        this.marker = L.marker(latLng).addTo(this.$root.map)
      }
      this.$root.map.setView(latLng, 15)
      if (this.$root.$geojson) leafletPip.pointInLayer(latLng, this.$root.$geojson, true)[0].fire('click')
    },
    clear() {
      this.marker.setLatLng([0, 0])
    },
    locate() {
      if (this.isLocating) return

      this.isLocating = true
      this.$root.map
        .locate({ setView: true, watch: false }) /* This will return map so you can do chaining */
        .on('locationfound', e => {
          this.flyTo(e)
        })
        .on('locationerror', e => {
          console.log(e)
          alert('Location access denied.')
        })
      this.isLocating = false
    }
  }
}
</script>

<style  lang="scss">
.typeahead-container {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);

  z-index: 999;
  width: 50vw;
  min-width: 300px;
  max-width: 450px;
  input {
    height: 50px;
  }
  // & > span {
  // }
  button {
    padding: 0;
  }
  // svg {
  //   fill: var(--primary);
  //   &:hover {
  //     fill: var(--primary);
  //   }
  // }
  .ap-icon-pin {
    display: none;
  }
}
</style>
