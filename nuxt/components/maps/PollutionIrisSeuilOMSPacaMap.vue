<template>
  <div id="map"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
import axios from 'axios'
var L
if (process.client) L = require('leaflet')
var geojson
var map
var info
var legend

export default {
  mounted() {
    this.createMap()
    axios.get('/iris_2018_pop14_formatted_simplified.json').then(resp => {
      this.addLayer(resp.data)
    })
  },
  methods: {
    createMap() {
      map = L.map('map').setView([43.3, 5.4], 8)
      const mapboxToken =
        'pk.eyJ1Ijoia2V2aW5iZXJ0aGllciIsImEiOiJjazZtN3Z1Y2UwbGE3M2xwNnhiZnIzZjM5In0.MaE3umnwu7me7VZalKFG7A'
      L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxToken}`, {
        id: 'mapbox/light-v9',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(map)
    },
    toPerc(val, base) {
      let result = (val / base) * 100
      return Math.round(result * 100) / 100
    },
    addLayer(geojsonFeature) {
      geojson = L.geoJSON(geojsonFeature, {
        style: this.setStyle,
        onEachFeature: this.onEachFeature
      }).addTo(map)
      info = L.control()
      info.onAdd = function(map) {
        this._div = L.DomUtil.create('div', 'info') // create a div with a class "info"
        this.update()
        return this._div
      }

      // method that we will use to update the control based on feature properties passed
      info.update = props => {
        // insee_com: '13071'
        // nom_com: 'Les Pennes-Mirabeau'
        // iris: '0107'
        // code_iris: '130710107'
        // nom_iris: 'Jas de Rhodes-Grande Colle'
        // typ_iris: 'H'
        // IRIS_POP14: 3531
        // SURFACE: 13488943.7225
        // DENSITE: 262
        // POP_LD_NO2: 15
        // POP_LD_PM1: 86
        // POP_LD_PM2: 2790
        // POP_LD_O3: 3531
        // ISA: 47

        if (!props) return
        // <h4>Population exposée supérieur aux seuils de l'OMS par iris et polluant</h4>
        info._div.innerHTML = `
          ${props.insee_com} ${props.nom_com} <br/>
          ${props.nom_iris} <br/>
          Population : ${props.IRIS_POP14} Habitants <br/>
          Oxydes d'azote (NOx): ${this.toPerc(props.POP_LD_NO2, props.IRIS_POP14)}% (${props.POP_LD_NO2} hab.)<br/>
          Particules (10 microns) : ${this.toPerc(props.POP_LD_PM1, props.IRIS_POP14)}% (${props.POP_LD_PM1} hab.)<br/>
          Particules (2.5 microns) : ${this.toPerc(props.POP_LD_PM2, props.IRIS_POP14)}% (${props.POP_LD_PM2} hab.)
          <br/>
          Ozone (O3) : ${this.toPerc(props.POP_LD_O3, props.IRIS_POP14)}% (${props.POP_LD_O3} hab.)`
      }
      info.addTo(map)

      legend = L.control({ position: 'bottomright' })
      legend.onAdd = map => {
        var div = L.DomUtil.create('div', 'info legend'),
          grades = [0, 10, 20, 50, 70, 100],
          labels = []

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
          div.innerHTML += `
            <p><i style="background: ${this.perc2color(grades[i] + 1)}"></i>
            ${grades[i]} ${grades[i + 1] ? '&ndash;' + grades[i + 1] : ''}%</p>`
        }

        return div
      }

      legend.addTo(map)
    },
    perc2color(perc) {
      return perc > 100
        ? '#800026'
        : perc > 70
        ? '#BD0026'
        : perc > 50
        ? '#E31A1C'
        : perc > 30
        ? '#FC4E2A'
        : perc > 20
        ? '#FD8D3C'
        : perc > 10
        ? '#FEB24C'
        : perc > 5
        ? '#FED976'
        : '#FFEDA0'
    },
    setStyle(feature) {
      const average =
        (feature.properties.POP_LD_NO2 +
          feature.properties.POP_LD_PM1 +
          feature.properties.POP_LD_PM2 +
          feature.properties.POP_LD_O3) /
        4
      const percentage = (average / feature.properties.IRIS_POP14) * 100
      return {
        fillColor: this.perc2color(percentage),
        color: '#ffffff',
        weight: 1,
        opacity: 0.7
      }
    },
    onEachFeature(feature, layer) {
      layer.on({
        mouseover: this.highlightFeature,
        mouseout: this.resetHighlight,
        click: this.zoomToFeature
      })
    },
    highlightFeature(e) {
      var layer = e.target

      layer.setStyle({
        weight: 1,
        color: '#666',
        fillOpacity: 0.7
      })

      if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) layer.bringToFront()

      info.update(layer.feature.properties)
    },
    resetHighlight(e) {
      geojson.resetStyle(e.target)
      info.update()
    },
    zoomToFeature(e) {
      map.fitBounds(e.target.getBounds())
    }
  }
}
</script>

<style >
#map {
  height: 100vh;
  width: 100vw;
}
.info {
  padding: 6px 8px;
  font: 14px/16px Arial, Helvetica, sans-serif;
  background: white;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}
.info h4 {
  margin: 0 0 5px;
  color: #777;
}
.legend {
  line-height: 18px;
  color: #555;
  padding-top: 1.5em;
}
.legend i {
  width: 18px;
  height: 18px;
  float: left;
  margin-right: 8px;
  opacity: 0.7;
}
</style>
