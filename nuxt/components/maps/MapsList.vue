<template>
  <div class="mt-5">
    <app-heading>Les graphes</app-heading>
    <b-container>
      <b-row :class="{'row-cols-1' : (this.$mq === 'mobile'), 'row-cols-2' : (this.$mq === 'desktop')}">
        <b-col v-for="(graph, index) in graphs" :key="index">
          <map-card :graph="graph"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>


<script>
import graphs from '~/data/graphs.yml'

export default {
  components: {
    MapCard
  },
  data() {
    return {
      graphs: graphs
    }
  },
}
</script>
