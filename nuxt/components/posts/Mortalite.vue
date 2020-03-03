<template>
  <div>
    <app-sub-heading>Mortalité</app-sub-heading>
    <p
      class="text-justify"
    >2500 décès par an, c’est que représente aujourd’hui la pollution de l’Air dans la ville de Marseille.</p>
    <p
      class="text-justify"
    >48000 personnes sur le pays entier. A titre de comparaison la grippe en 2018 a tué 9 900 personnes sur tout le territoire.</p>
    <p
      class="text-justify"
    >A Marseille cette fois-ci, entre la proximité du Grand port maritime et les autoroutes, 170.000 habitants vivraient dans un environnement pollué.</p>
    <p class="text-justify">
      En 2017, 54 % des habitants de Provence-Alpes-Côte d’Azur sont exposés, sur leur lieu de résidence, à une concentration annuelle moyenne en PM10 supérieure à la ligne directrice de l’OMS.
      <a
        href="https://www.insee.fr/fr/statistiques/4250618"
      >
        <i>Voir ici</i>
      </a>
    </p>
    <App-sub-heading>LES THÉMATIQUES</App-sub-heading>
    <div class="container">
      <div class="row row-cols-2">
        <div class="col">
          <b-img
            @click="showDrawer(article)"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/Enfants-bulles.png"
          ></b-img>
        </div>

        <div class="col">
          <b-img
            @click="showDrawer(article)"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/Femmes-enceintes-bulles.png"
          ></b-img>
        </div>
        <div class="col">
          <b-img
            @click="showDrawer(article)"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/Personnes-agées-bulles.png"
          ></b-img>
        </div>
        <div class="col">
          <b-img
            @click="showDrawer(article)"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/sportifs-bulle.png"
          ></b-img>
        </div>
        <drawer placement="right" @close="onClose" :visible="visible" width="80vw">
          <template v-if="article">
            <img
              :src="require('~/assets/images/banners/posts'+ article.img)"
              :alt="article.img"
              class="mx-auto img-fluid mt-5"
            />

            <h2 class="mt-4" v-html="article.title"></h2>
            <p>test test</p>

            <p v-html="article.description"></p>
          </template>
        </drawer>
      </div>
    </div>
  </div>
</template>


<script>
import Drawer from 'ant-design-vue/lib/drawer'
import { BCardTitle } from 'bootstrap-vue'

export default {
  components: { Drawer },
  data() {
    return {
      visible: false,
      mainProps: { width: 300, height: 300 },
      article: null,
      articles: [
        {
          img: 'personnes-agees.png',
          title: 'Les personnes âgées : les plus fragiles en danger à cause de l’air dégradé',
          description: 'test'
        },
        {
          img: 'enfants.png',
          title: 'Les enfants durement impactés par la pollution de l’air',
          description: 'test'
        },
        {
          img: 'femmes-enceintes.png',
          title: 'Femmes enceintes : les impacts de la qualité de l’air sur le foetus',
          description: 'test'
        },
        {
          img: 'sportifs.png',
          title: 'Les sportifs ne sont pas épargnés par la pollution',
          description: 'test'
        }
      ]
    }
  },

  methods: {
    showDrawer(article) {
      this.article = article
      this.visible = true
    },
    onClose() {
      this.visible = false
    }
  }
}
</script>
