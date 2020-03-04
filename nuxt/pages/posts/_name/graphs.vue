<template>
  <div>
    <app-post-banner
      :post-title="postsTitle[$route.params.name]"
      :background-img-url="require('~/assets/images/banners/posts/' + $route.params.name + '.png')"
    />
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
import { mapState } from 'vuex'

export default {
  components: {
    MapsList
  },
  computed: mapState({
    postsTitle: state => state.postsTitle
  })
}
</script>
