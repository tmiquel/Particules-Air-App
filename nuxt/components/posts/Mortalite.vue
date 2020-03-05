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
    <div class="row justify-content-center">
      <div
        class="col-6 my-3 text-center"
        v-for="(sensitivePublic, sensitivePublicId, index) in sensitivePublics"
        :key="index"
      >
        <!-- <div class="col"> -->
        <b-img
          @click="showDrawer(sensitivePublicId)"
          class="mx-auto img-fluid mt-5"
          v-bind="publicsImgsLayout"
          alt="Rounded image"
          :src="require('~/assets/images/sensitive-publics/'+ sensitivePublicId + '.png')"
        ></b-img>
        <!-- </div> -->
        <drawer
          placement="right"
          @close="onClose"
          :visible="visiblePublic === sensitivePublicId"
          width="80vw"
        >
          <template>
            <!-- v-if="sensitivePublic" -->
            <img
              :src="require('~/assets/images/banners/posts/'+ sensitivePublicId + '.png')"
              :alt="sensitivePublicId"
              fluid-grow
              rounded
              class="mx-auto img-fluid mt-5"
            />
            <h2 class="mt-4" v-html="sensitivePublic.sliderTitle"></h2>
            <p v-html="sensitivePublic.description"></p>
          </template>
        </drawer>
      </div>
    </div>
  </div>
</template>


<script>
import Drawer from 'ant-design-vue/lib/drawer'
import { BCardTitle } from 'bootstrap-vue'
import sensitivePublics from '~/data/publics.yml'
import PublicCard from '@/components/publics/PublicCard'

export default {
  components: { Drawer, PublicCard },
  data() {
    return {
      visiblePublic: '',
      publicsImgsLayout: { width: 300, height: 300 },
      sensitivePublics: sensitivePublics
    }
  },
  methods: {
    showDrawer(publicName) {
      this.visiblePublic = publicName
    },
    onClose() {
      this.visiblePublic = ''
    }
  }
}
</script>
