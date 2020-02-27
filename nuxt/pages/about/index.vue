<template>
  <div class="about-page">
    <app-landing-banner />
    <div>
      <app-heading>À PROPOS</app-heading>
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
        <div class="col-4 my-3 text-center" v-for="(member, id) in members" :key="id">
          <b-img
            @click="showDrawer(member)"
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
    <drawer placement="right" @close="onClose" :visible="visible" width="300">
      <template v-if="member">
        <img
          :src="require('~/assets/images/stakeholders/'+ member.img)"
          :alt="member.img"
          rounded="circle"
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
      mainProps: { width: 90, height: 90 },
      member: null,
      members: [
        {
          img: 'monique.png',
          name: 'Amine Sanhaji',
          description:
            'Notre développeur junior à la bonne humeur communicative, il n’hésite pas à participer ardemment au projet tout en se consacrant à ses études.  Et nous l’admirons pour ça !'
        },
        {
          img: 'Thibaut.png',
          name: 'Thibaut Miquel',
          description:
            'bi-coordinateur du projet, tombé dans la marmite de la gestion de projets quand il était petit, Thibaut coordonne avec brillo l’équipe technique. Ingénieur dans le spatial de formation,  il s’est lancé un nouveau défi avec le projet Particules.'
        },
        {
          img: 'KEVIN.jpg',
          name: 'Kévin Berthier',
          description:
            'Le super sage de l’équipe et surtout un développeur de talent, il transmet son savoir à Thibaut et Amine et conçoit les cartes du projet. '
        },
        {
          img: 'Emilie.jpg',
          name: 'Emilie Rembert',
          description:
            'Le lancement de nouveaux produits, elle connaît par coeur, elle en a fait son coeur de métier. Pourquoi Particules ? Parce qu`il fait écho à ses engagements personnels dans l’écologie et le bien être du vivant (et ceux qui veulent le rester).'
        },
        {
          img: 'monique.png',
          name: 'Elise Blanc',
          description:
            'Prévenante, multi-tâches et brillante,  Elise est notre spécialiste des données en tout genre ! Une vraie magicienne qui transforme d’obscurs Excel en carte animées !'
        },
        {
          img: 'monique.png',
          name: 'Clair Méduse',
          description:
            'Dernière arrivée dans l’équipe mais celle dont nous avions besoin. Claire fait des merveilles en design et sa formation scientifique nous permet à la fois de créer des contenus exacts mais surtout vulgarisés.'
        },
        {
          img: 'monique.png',
          name: 'Raphaël',
          description:
            ' Le designer engagé de l’équipe, il a conçu graphiquement l’application particules avec précision et style ! What else !?'
        }
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
