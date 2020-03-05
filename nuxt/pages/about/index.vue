<template>
  <div class="about-page">
    <app-landing-banner />
    <div class="mx-4">
      <app-heading>Qui sommes-nous ?</app-heading>
      <p
        class="mx-auto mb-4"
      >Implantés sur Marseille et aux alentours, nous avons toutes et tous été sensibilisés à la pollution de l’air que se soient par les médias ou des articles scientifiques mais finalement très peu informés des dangers sur notre santé que celle-ci pouvait constituée.</p>
      <app-sub-heading>Notre Histoire :</app-sub-heading>
      <p class="mx-auto mb-4">
        Après avoir gagné une bourse lors d’un concours, nous nous sommes rassemblés autour d’un objectif :
        <strong>de la qualité de l’air un sujet abordable par tous !</strong>
      </p>
      <app-sub-heading>Comment ?</app-sub-heading>
      <p
        class="mx-auto mb-4"
      >En créant des visualisations de données esthétiques et ergonomiques et en concevant un parcours utilisateur captivant dès les premiers clics.</p>
      <p
        class="mx-auto mb-4"
      >Dans la joie, la bonne humeur, la bienveillance et la détermination, notre équipe de choc est constituée de différents parcours de vie et compétences diverses mais complémentaires, ce qui fait notre vraie force.</p>
      <app-sub-heading>Notre truc en plus :</app-sub-heading>
      <p
        class="mx-auto mb-4"
      >Notre goût à tous pour les défis qui nous a permis de proposer un projet abouti en un temps (presque) record et nous l’espérons qui ira loin !</p>
      <p class="mx-auto mb-4">
        <i>Peut être grâce à toi derrière ton écran qui a envie de faire partie de cette équipe qui ressemble à une hydre à 7 têtes pensantes ! N’hésite pas à nous parler de toi, de tes envies de ton projet, de ton chat Chaussette.... Mailto</i>
      </p>
    </div>

    <div class="team mx-4">
      <App-heading class="text-center mt-5 mb-5">L'ÉQUIPE</App-heading>
      <div class="row justify-content-center">
        <div class="col-4 my-3 text-center" v-for="(member, id) in members" :key="id">
          <div
            class="member-avatar rounded-circle mx-auto"
            @click="showDrawer(member)"
            :style="{backgroundImage: `url(${require('~/assets/images/stakeholders/'+ member.img)})` }"
          ></div>
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

        <h2 class="mt-4" v-html="member.name"></h2>

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
      mainProps: { width: 80, height: 80 },
      member: null,
      members: [
        {
          img: 'Amine.jpg',
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
.member-avatar {
  cursor: pointer;
  height: 90px;
  width: 90px;
  background-size: cover;
  background-position: center;
}
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
