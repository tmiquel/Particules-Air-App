<template>
  <div>
    <SearchAddress :map="map" v-if="map" />
    <div id="map"></div>
  </div>
</template>

<script>
import SearchAddress from '~/components/maps/SearchAddress.vue'
var L
if (process.client) L = require('leaflet')

export default {
  components: { SearchAddress },
  data: () => ({ map: null }),
  mounted() {
    this.buildMap()
  },
  methods: {
    buildMap() {
      var map = L.map('map').setView([43.307827, 5.404262], 12)
      this.map = map
      map.createPane('labels')
      map.getPane('labels').style.zIndex = 650
      map.getPane('labels').style.pointerEvents = 'none'
      var positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        detectRetina: true
      }).addTo(map)

      var positronLabels = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_only_labels/{z}/{x}/{y}.png', {
        attribution: '©OpenStreetMap, ©CartoDB',
        pane: 'labels',
        detectRetina: true
      }).addTo(map)
      // L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
      //   attribution:
      //     'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      //   maxZoom: 18,
      //   id: 'mapbox.streets',
      //   transparent: true,
      //   opacity: 0.7,
      //   accessToken: 'pk.eyJ1IjoidG1pcXVlbCIsImEiOiJjanU5d3AzenEyY2QxNDRucnF2c3pydW8wIn0.PQGiuirI2MraPTanoBJzRQ'
      // }).addTo(map)

      var wmsUri = 'https://geoservices.atmosud.org/geoserver/mod_sudpaca_2018/wms'
      var wmsLayer = L.tileLayer
        .wms(wmsUri, {
          layers: 'mod_sudpaca_2018_isa_an',
          format: 'image/png',
          transparent: true,
          opacity: 0.7,
          detectRetina: true
        })
        .addTo(map)

      L.Control.WMSLegend = L.Control.extend({
        options: {
          position: 'topright',
          uri: ''
        },

        onAdd: function() {
          var controlClassName = 'leaflet-control-wms-legend',
            legendClassName = 'wms-legend',
            stop = L.DomEvent.stopPropagation
          this.container = L.DomUtil.create('div', controlClassName)
          this.img = L.DomUtil.create('img', legendClassName, this.container)
          this.img.src = this.options.uri
          this.img.alt = 'Legend'

          L.DomEvent.on(this.img, 'click', this._click, this)
            .on(this.container, 'click', this._click, this)
            .on(this.img, 'mousedown', stop)
            .on(this.img, 'dblclick', stop)
            .on(this.img, 'click', L.DomEvent.preventDefault)
            .on(this.img, 'click', stop)
          this.height = null
          this.width = null
          return this.container
        },
        _click: function(e) {
          L.DomEvent.stopPropagation(e)
          L.DomEvent.preventDefault(e)
          // toggle legend visibility
          var style = window.getComputedStyle(this.img)
          if (style.display === 'none') {
            this.container.style.height = this.height + 'px'
            this.container.style.width = this.width + 'px'
            this.img.style.display = this.displayStyle
          } else {
            if (this.width === null && this.height === null) {
              // Only do inside the above check to prevent the container
              // growing on successive uses
              this.height = this.container.offsetHeight
              this.width = this.container.offsetWidth
            }
            this.displayStyle = this.img.style.display
            this.img.style.display = 'none'
            this.container.style.height = '20px'
            this.container.style.width = '20px'
          }
        }
      })

      L.wmsLegend = function(wmsUri) {
        var wmsLegendControl = new L.Control.WMSLegend()
        wmsLegendControl.options.uri = wmsUri
        map.addControl(wmsLegendControl)
        return wmsLegendControl
      }

      //https://opengislab.com/blog/2018/2/4/creating-simple-leaflet-web-map
      //https://docs.geoserver.org/latest/en/user/services/wms/get_legend_graphic/index.html
      //https://gis.stackexchange.com/questions/182770/how-to-add-wms-legend-in-leaflet-from-geoserver
      var legend = L.control({ position: 'topright' })
      legend.onAdd = function(map) {
        var div = L.DomUtil.create('div')

        L.wmsLegend(wmsUri + '?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&LAYER=mod_sudpaca_2018_isa_an')
        return div
      }
      legend.addTo(map)

      L.control.scale({ imperial: false }).addTo(map)
    }
  }
}
</script>
