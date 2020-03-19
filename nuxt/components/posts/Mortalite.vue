<template>
  <b-container>
    <b-row>
      <b-col>
        <app-heading>Mortalité</app-heading>
        <p class="text-justify">
          2500 décès par an, c’est que représente aujourd’hui la pollution de l’Air dans la ville de Marseille.
        </p>
        <p class="text-justify">
          48000 personnes sur le pays entier. A titre de comparaison la grippe en 2018 a tué 9 900 personnes sur tout le
          territoire.
        </p>
        <p class="text-justify">
          A Marseille cette fois-ci, entre la proximité du Grand port maritime et les autoroutes, 170.000 habitants
          vivraient dans un environnement pollué.
        </p>
        <p class="text-justify">
          En 2017, 54 % des habitants de Provence-Alpes-Côt:bodyStyle="antBodyStyleProp"e d’Azur sont exposés, sur leur lieu de résidence, à une
          concentration annuelle moyenne en PM10 supérieure à la ligne directrice de l’OMS.
          <a href="https://www.insee.fr/fr/statistiques/4250618">
            <i>Voir ici</i>
          </a>
        </p>
      </b-col>
    </b-row>

    <App-heading class="pt-3">LES THÉMATIQUES</App-heading>

    <b-row class="row row-cols-2 row-cols-md-4 justify-content-center">
      <b-col class="col-6 my-3" v-for="(sensitivePublic, sensitivePublicId, index) in sensitivePublics" :key="index">
        <div @click="showDrawer(sensitivePublicId)" :style="{ cursor: 'pointer' }">
          <cld-image
            dpr="auto"
            ar="1"
            responsive="width"
            width="auto:40:400"
            fetchFormat="auto"
            crop="fit"
            quality="auto:best"
            :publicId="getImgPublicId(sensitivePublicId)"
          >
            <!-- https://cloudinary.com/documentation/image_transformation_reference -->
            <!-- https://cloudinary.com/documentation/vue_image_manipulation -->
          </cld-image>
        </div>

        <drawer
          :bodyStyle="antBodyStyleProp"
          placement="right"
          @close="onClose"
          :visible="visiblePublic === sensitivePublicId"
          :width="respDrawerWidth"
        >
          <b-container class="mt-4 px-0" fluid>
            <cld-image
              class="d-flex justify-content-center"
              responsive="width"
              :publicId="getImgPublicId('banners/posts/' + sensitivePublicId)"
              :alt="sensitivePublicId"
            >
              <cld-transformation width="1600" height="900" gravity="auto" crop="fill" />
              <cld-transformation width="auto" gravity="auto" dpr="auto" fetchFormat="auto" quality="auto:best" />
            </cld-image>
          </b-container>
          <b-container>
            <b-row class="row-cols-1">
              <b-col>
                <h2 class="mt-4" v-html="sensitivePublic.sliderTitle"></h2>
                <p v-html="sensitivePublic.description"></p>
              </b-col>
            </b-row>
          </b-container>
        </drawer>
      </b-col>
    </b-row>
  </b-container>
</template>


<script>
import Drawer from 'ant-design-vue/lib/drawer'
import sensitivePublics from '~/data/publics.yml'
import PublicCard from '@/components/publics/PublicCard'

export default {
  components: { Drawer, PublicCard },
  data() {
    return {
      visiblePublic: '',
      publicsImgsLayout: { width: 300, height: 300 },
      sensitivePublics: sensitivePublics,
      antBodyStyleProp: { padding: '2rem 0' }
    }
  },
  methods: {
    showDrawer(publicName) {
      this.visiblePublic = publicName
    },
    onClose() {
      this.visiblePublic = ''
    },
    getImgPublicId(sensitivePublicId) {
      return this.$store.getters.getImgPublicID(sensitivePublicId)
    }
  },
  computed: {
    respDrawerWidth() {
      return this.$mq === 'mobile' ? '80vw' : '65vw'
    }
  }
}
</script>
