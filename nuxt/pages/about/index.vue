<template>
  <div class="about-page">
    <div>
      <h1 class="text-center mt-5 mb-5">À PROPOS</h1>
      <p
        class="mx-auto mb-4"
      >Open Air est un projet porté par 5 développeurs provençaux conseillés par 'a Lab in the AIR'. Beaucoup d'informations sur la Qualité de l'Air sont disponibles en ligne. Ces bases de données sont dispersées entre plusieurs portails d'accès, parfois impossibles à lire sans logiciel spécifique, parfois difficile à comprendre.</p>
      <p
        class="mx-auto mb-4"
      >Un particulier doit également trouver un cheminement adapté entre ces informations, pour obtenir toutes les réponses recherchées avec un niveau de compréhension suffisant et sans oublier des parties importantes.</p>
      <p
        class="mx-auto mb-4"
      >Open Air est un portail où des experts publient des articles sur les centres d'intérêt des particuliers pour la thématique Qualité de l'Air. Ces articles référencent les bases de données concernées, et apportent une visualisation immédiate de cette base de donnée là où c'est utile.</p>
    </div>

    <div class="team">
      <h1 class="text-center mt-5 mb-5">L'ÉQUIPE</h1>
      <div class="row justify-content-center">
        <div class="col-4 my-3" v-for="(member, id) in members" :key="id">
          <b-img
            @click="showDrawer(member)"
            class="mx-auto"
            :src="require('~/assets/images/stakeholders/'+ member.img)"
            v-bind="mainProps"
            rounded="circle"
            alt="image1"
          ></b-img>
        </div>
      </div>
    </div>
    <drawer placement="right" @close="onClose" :visible="visible" width="300">
      <template v-if="member">
        <img
          :src="require('~/assets/images/stakeholders/'+ member.img)"
          :alt="member.img"
          class="mx-auto img-fluid mt-5"
        />
        <h2 v-html="member.name"></h2>
        <p v-html="member.description"></p>
      </template>
    </drawer>
  </div>
</template>

<script>
import Drawer from 'ant-design-vue/lib/drawer'

export default {
  components: { Drawer },
  data() {
    return {
      visible: false,
      mainProps: { width: 75, height: 75 },
      member: null,
      members: [
        { img: 'monique.png', name: 'Monique', description: 'test test' },
        { img: 'monique.png', name: 'Monique 2', description: 'test test' },
        { img: 'monique.png', name: 'Monique 2', description: 'test test' },
        { img: 'monique.png', name: 'Monique 2', description: 'test test' },
        { img: 'monique.png', name: 'Monique 2', description: 'test test' },
        { img: 'monique.png', name: 'Monique 2', description: 'test test' }
      ]
    }
  },

  methods: {
    showDrawer(member) {
      this.member = member
      this.visible = true
    },
    onClose() {
      this.visible = false
    }
  }
}
</script>



<style scoped>
p {
  width: auto;
  height: auto;
  left: auto;
  top: auto;

  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;

  color: #454545;
}
</style>
