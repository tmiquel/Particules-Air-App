<template>
  <div id="map-menu" class="position-fixed mt-4 px-4">
    <!-- MAPS NAVIGATION -->
    <b-list-group class="rounded-pill">
      <b-list-group-item
        v-b-toggle.map-menu-navigation
        class="rounded d-flex justify-content-between align-items-center text-primary"
        :style="{cursor: 'pointer'}"
      >
        <h6 class="font-weight-bold m-0">MENU DES CARTES</h6>
        <BIconList class="when-closed h4 m-0" />
        <BIconX class="when-opened h4 m-0" />
      </b-list-group-item>
      <b-collapse id="map-menu-navigation" visible accordion="my-accordion" role="tabpanel">
        <b-list-group-item v-for="(url, label) in mapListing" :key="url" :to="url">{{label}}</b-list-group-item>
      </b-collapse>
    </b-list-group>

    <!-- MAP PANEL -->
    <b-list-group class="rounded-pill mt-2">
      <b-list-group-item
        v-b-toggle.map-menu-control
        class="rounded d-flex justify-content-between align-items-center text-primary"
        :style="{cursor: 'pointer'}"
      >
        <h6 class="font-weight-bold m-0">PANNEAU DE CONTRÔLE</h6>
        <BIconChevronDown class="when-closed h4 m-0" />
        <BIconChevronUp class="when-opened h4 m-0" />
      </b-list-group-item>
      <b-collapse id="map-menu-control" accordion="my-accordion" role="tabpanel">
        <portal-target name="map-menu"></portal-target>
      </b-collapse>
    </b-list-group>
  </div>
</template>

<script>
import { BIcon, BIconX, BIconList, BIconChevronDown, BIconChevronUp } from 'bootstrap-vue'

export default {
  components: { BIcon, BIconX, BIconList, BIconChevronDown, BIconChevronUp },
  data: () => ({
    mapListing: {
      'Carte des populations suréxposées': '/maps/pollution-par-iris',
      'Carte Atmosud': '/maps/pollution-2018'
      // 'Carte Flow - Plume Lab': '/maps/?????'
    }
  })
}
</script>
<style lang="scss">
#map-menu {
  z-index: 999;
  width: 30vw;
}
.list-group-item.nuxt-link-exact-active {
  border-left: var(--primary) solid 3px;
  font-weight: bold;
  color: var(--primary);
}

.collapsed > .when-opened,
:not(.collapsed) > .when-closed {
  display: none;
}
</style>
