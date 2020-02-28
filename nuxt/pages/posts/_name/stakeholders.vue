<template>
  <div class="stakeholders-page">
        <app-post-banner
      :post-title="postsTitle[$route.params.name]"
      :background-img-url="require('~/assets/images/banners/posts/' + $route.params.name + '.png')"
    />
    <h1 class="text-center mt-5 mb-5">LES ACTEURS</h1>
    <div class="row justify-content-center">
      <div class="col-4 my-3 text-center" v-for="(member, id) in members" :key="id">
        <b-img
          class="mx-auto"
          :src="require('~/assets/images/stakeholders/'+ member.img)"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
        <h4 v-html="member.name"></h4>
      </div>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    postsTitle: state => state.postsTitle,
  }),
  data() {
    return {
      mainProps: { width: 90, height: 90 },
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
        },
        {
          img: 'monique.png',
          name: 'Raphaël',
          description: ' test'
        }
      ]
    }
  }
}
</script>
