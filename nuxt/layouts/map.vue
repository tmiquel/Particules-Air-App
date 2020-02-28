<template>
  <div>
    <CloseIcon id="close-icon" class="mt-3 mr-3 d-none d-sm-block" @click="$router.back()" />
    <nuxt />
  </div>
</template>

<script>
import CloseIcon from '~/assets/images/icons/close.svg?inline'
import { Icon } from 'leaflet'
import 'leaflet/dist/leaflet.css'

// this part resolve an issue where the markers would not appear
delete Icon.Default.prototype._getIconUrl

Icon.Default.mergeOptions({
  forceZIndex: 1000,
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})

export default { components: { CloseIcon } }
</script>
<style lang='scss'>
.leaflet-container {
  height: 100vh;
  width: 100vw;
}
.info {
  padding: 6px 8px;
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  margin-right: 10px;
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
.info.legend {
  padding: 5px;
  display: flex;
  align-items: center;
  font-size: 0.66rem;
  flex-shrink: 0;
  flex-wrap: wrap;
  p {
    margin: 0 5px 0 0;
  }
  i {
    width: 0.7rem;
    height: 0.7rem;
    float: left;
    margin-top: 0.2rem;
    margin-right: 5px;
    opacity: 0.7;
  }
}
.wms-legend {
  max-height: 160px;
}

#close-icon {
  z-index: 1000;
  cursor: pointer;
  fill: var(--footer-background-color);
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
}
</style>
