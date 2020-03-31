<template>
  <div id="map">
    <portal to="map-menu">
      <b-list-group-item>
        Surexposition à la pollution atmosphérique par ilôt d’habitation
        <br />Personnes cvivant au dela du seuil de recommendation de l’OMS
        <br />
        <template v-if="currentIris">
          <span
            class="text-secondary"
          >{{currentIris.insee_com}} {{currentIris.nom_com}} - {{currentIris.nom_iris}}</span>

          <h3>{{currentIris.IRIS_POP14}} Habitants</h3>
          <h6
            class="text-danger"
          >Dont {{Math.floor(currentIris.IRIS_POP14 * (averagePerc(currentIris)/100))}} sensibles</h6>
        </template>
      </b-list-group-item>
      <b-list-group-item>
        <b>Effets sur la santé</b>
        <ol>
          <li>Pneumonie</li>
          <li>Cancer</li>
          <li>Maladies cardio-vasculaires</li>
        </ol>
      </b-list-group-item>
      <b-list-group-item>
        <b>Polluants</b>
        <template v-if="currentIris">
          <div v-for="(label, key) in polluants" :key="key">
            <small>{{toPerc(currentIris[key], currentIris.IRIS_POP14)}} %</small>
            <small>{{label}}</small>
          </div>
        </template>
      </b-list-group-item>
      <b-list-group-item>
        <b>Légende</b>
        <div class="mt-3 w-100 d-flex" :style="{paddingRight: '.75rem', marginLeft: '.1rem'}">
          <div
            v-for="grade in grades"
            :key="grade"
            :style="{backgroundColor: perc2color(grade + 1), height: '10px' }"
            class="flex-grow-1 border-right border-white"
          ></div>
        </div>
        <div class="w-100 d-flex justify-content-between">
          <small v-for="grade in [...grades, 100]" :key="grade">{{grade}}</small>
        </div>
      </b-list-group-item>
      <b-list-group-item>
        <b>Nos sources</b>
      </b-list-group-item>
    </portal>
  </div>
</template>

<script>
import axios from 'axios'
import Pbf from 'pbf'
import geobuf from 'geobuf'
import L from 'leaflet'

var geojson
var map
var info
var legend

export default {
  data() {
    return {
      polluants: {
        POP_LD_NO2: "Dioxyde d'azote",
        POP_LD_PM1: 'Particules 10 microns',
        POP_LD_PM2: 'Particules 2.5 microns',
        POP_LD_O3: 'Ozone'
      },
      grades: [0, 10, 20, 50, 70],
      currentIris: null
    }
  },
  beforeCreate() {
    this.$geoJSONCall = axios.request({
      responseType: 'arraybuffer',
      url: '/iris_2018_pop14_formatted_simplified_light1_picked-p4.pbf',
      method: 'get'
    })
  },
  async mounted() {
    let [mapMounted, geoJSONResponse] = await Promise.all([this.createMap(), this.$geoJSONCall])
    let data = geoJSONResponse.data
    // console.log(data)
    var geojson = geobuf.decode(new Pbf(data))
    // console.log(geojson)
    this.addLayer(geojson)
  },
  methods: {
    createMap() {
      new Promise((resolve, reject) => {
        map = L.map('map', { zoomControl: false }).setView([43.3, 5.4], 12)
        this.$root.map = map
        resolve()
      })
      this.addLayers(map)
    },
    addLayers(map) {
      new Promise((resolve, reject) => {
        map.createPane('labels')
        // map.getPane('labels').style.zIndex = 650
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
        L.control.zoom({ position: 'bottomright' }).addTo(map)
        resolve()
      })
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
      this.$root.$geojson = geojson

      // LEGEND
      legend = L.control({ position: 'bottomleft' })
      legend.onAdd = map => {
        var div = L.DomUtil.create('div', 'info legend d-lg-none'),
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

      // INFO
      info = L.control({ position: 'bottomleft' })
      info.onAdd = function(map) {
        this._div = L.DomUtil.create('div', 'info  d-lg-none') // create a div with a class "info"
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
          ${props.insee_com} ${props.nom_com} - ${props.nom_iris} <br/>
          Population : ${props.IRIS_POP14} Habitants <br/>
          Dioxyde d'azote (NO₂): ${this.toPerc(props.POP_LD_NO2, props.IRIS_POP14)}% (${props.POP_LD_NO2} hab.)<br/>
          Particules (10 microns) : ${this.toPerc(props.POP_LD_PM1, props.IRIS_POP14)}% (${props.POP_LD_PM1} hab.)<br/>
          Particules (2.5 microns) : ${this.toPerc(props.POP_LD_PM2, props.IRIS_POP14)}% (${props.POP_LD_PM2} hab.)
          <br/>
          Ozone (O3) : ${this.toPerc(props.POP_LD_O3, props.IRIS_POP14)}% (${props.POP_LD_O3} hab.)`
      }
      info.addTo(map)
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
    averagePerc(iris) {
      const average = (iris.POP_LD_NO2 + iris.POP_LD_PM1 + iris.POP_LD_PM2 + iris.POP_LD_O3) / 4
      return (average / iris.IRIS_POP14) * 100
    },
    setStyle(feature) {
      return {
        fillColor: this.perc2color(this.averagePerc(feature.properties)),
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
      this.currentIris = layer.feature.properties
    },
    resetHighlight(e) {
      geojson.resetStyle(e.target)
      info.update()
      // this.currentIris = null
    },
    zoomToFeature(e) {
      map.fitBounds(e.target.getBounds())
      geojson.resetStyle()
      this.highlightFeature(e)
    }
  }
}
</script>
