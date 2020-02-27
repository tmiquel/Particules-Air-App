<template>
  <div>
    <CloseIcon id="close-icon" @click="$router.back()" />
    <nuxt />
  </div>
</template>

<script>
import CloseIcon from '~/assets/images/icons/close.svg?inline'
import 'leaflet/dist/images/marker-icon-2x.png'
import 'leaflet/dist/images/marker-shadow.png'
export default { components: { CloseIcon } }
</script>
<style lang='scss'>
@import 'leaflet/dist/leaflet.css';

.leaflet-container {
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
.wms-legend {
  max-height: 160px;
}

#close-icon {
  z-index: 1000;
  cursor: pointer;
  fill: white;
  position: absolute;
  top: 1vw;
  right: 1vw;
  width: 5vw;
  height: 5vw;
  max-width: 40px;
  max-height: 40px;
}
</style>
