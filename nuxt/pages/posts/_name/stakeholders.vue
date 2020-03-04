<template>
  <div class="stakeholders-page">
    <app-post-banner
      :post-title="postsTitle[$route.params.name]"
      :background-img-url="require('~/assets/images/banners/posts/' + $route.params.name + '.png')"
    />
    <App-heading class="mt-5 mb-2">LES ACTEURS</App-heading>
    <div class="row justify-content-center mr-auto">
      <div class="col-4 my-2 text-center" v-for="(member, id) in members" :key="id">
        <b-img
          class="mx-auto"
          :src="require('~/assets/images/stakeholders/'+ member.img)"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
        <h4 class="mt-2" v-html="member.name"></h4>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    postsTitle: state => state.postsTitle
  }),
  data() {
    return {
      mainProps: { width: 91, height: 91 },
      member: null,
      members: [
        {
          img: 'monique.png',
          name: 'Monique machin',
          description: 'test'
        },
        {
          img: 'Thibaut.png',
          name: 'EDF',
          description: 'test'
        },
        {
          img: 'KEVIN.jpg',
          name: 'Emmanuel Macron',
          description: 'test'
        },
        {
          img: 'Emilie.jpg',
          name: 'Valere Germain',
          description: 'test'
        },
        {
          img: 'monique.png',
          name: 'Elise Blanc',
          description: 'test'
        },
        {
          img: 'monique.png',
          name: 'Clair Méduse',
          description: 'test'
        }
      ]
    }
  }
}
</script>

<style scoped>
h4 {
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
}
</style>
