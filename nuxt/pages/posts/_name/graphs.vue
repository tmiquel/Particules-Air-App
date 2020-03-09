<template>
  <div>
    <maps-list />
    <div class="container">
      <div class="row">
        <div class="col">
          <back-to-post-link></back-to-post-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import MapsList from '@/components/maps/MapsList'

export default {
  components: {
    MapsList
  }
}
</script>
