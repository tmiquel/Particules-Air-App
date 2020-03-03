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
            @click="showDrawer"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/Enfants-bulles.png"
          ></b-img>
          <drawer placement="right" @close="onClose" :visible="visible" width="500">
            <template>
              <h2 class="mt-4">test</h2>
              <p>test</p>
            </template>
          </drawer>
        </div>

        <div class="col">
          <b-img
            @click="showDrawer"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/Femmes-enceintes-bulles.png"
          ></b-img>
        </div>
        <div class="col">
          <b-img
            @click="showDrawer"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/Personnes-agées-bulles.png"
          ></b-img>
        </div>
        <div class="col">
          <b-img
            @click="showDrawer"
            class="mx-auto img-fluid mt-5"
            v-bind="mainProps"
            rounded
            alt="Rounded image"
            src="~/assets/images/themes/sportifs-bulle.png"
          ></b-img>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Drawer from 'ant-design-vue/lib/drawer'

export default {
  components: { Drawer },
  data() {
    return {
      visible: false,
      mainProps: { width: 300, height: 300 }
    }
  },

  methods: {
    showDrawer() {
      this.visible = true
    },
    onClose() {
      this.visible = false
    }
  }
}
</script>
