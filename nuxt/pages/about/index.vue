<template>
  <div>
    <app-landing-banner />
    <div class="about-page mx-2">
      <div class="container">
        <div class="row row-cols-1">
          <div class="col">
            <app-heading>Qui sommes-nous ?</app-heading>
            <p class="mx-auto mb-4">
              Habitants de Marseille et de ses alentours, nous avons toutes et tous été sensibilisés à la pollution de
              l’air que se soit par les média ou des articles scientifiques mais finalement très peu informés des
              dangers sur notre santé que celle-ci pouvait constituer.
            </p>
            <app-sub-heading>Notre Histoire :</app-sub-heading>
            <p class="mx-auto mb-4">
              Après avoir gagné une bourse lors d’un hackathon
              <a href="https://www.dataweek.fr/" target="_self">Dataweek</a>, nous nous sommes rassemblés autour d’un
              objectif : <strong>faire de la qualité de l’air un sujet abordable par tous !</strong> L'équipe Provence
              de <a href="https://dataforgood.fr/" target="_self">Data4Good</a> s'est jointe au projet.
            </p>
            <app-sub-heading>Comment ?</app-sub-heading>
            <p class="mx-auto mb-4">
              En créant des visualisations de données esthétiques et ergonomiques et en concevant un parcours
              utilisateur captivant dès les premiers clics.
            </p>
            <p class="mx-auto mb-4">
              Dans la joie, la bonne humeur, la bienveillance et la détermination, notre équipe de choc est constituée
              de différents parcours de vie et compétences diverses mais complémentaires, ce qui fait notre vraie force.
            </p>
            <app-sub-heading>Notre truc en plus :</app-sub-heading>
            <p class="mx-auto mb-4">
              Notre goût à tous pour les défis qui nous a permis de proposer un projet abouti en un temps (presque)
              record et nous l’espérons qui ira loin !
            </p>

            <app-sub-heading>Envie de nous rejoindre ?</app-sub-heading>
            <p class="mx-auto mb-4">
              <i
                >Peut être que nous irons plus loin grâce à toi derrière ton écran qui a envie de faire partie de cette
                équipe qui ressemble à une hydre à 7 têtes pensantes ! N’hésite pas à nous parler de toi, de tes envies,
                de ton projet, ou de ton chat Chaussette.... <nuxt-link to="/contact">écris-nous !</nuxt-link>
              </i>
            </p>
          </div>
          <app-heading class="mt-5">LA FINE ÉQUIPE</app-heading>
          <b-container class="team">
            <b-row class="row-cols-3">
              <b-col
                v-for="(particulesTeamMember, particulesTeamMemberId, index) in particulesTeamMembers"
                :key="index"
              >
                <particules-team-member-card
                  :stakeholder-id="particulesTeamMemberId"
                  :stakeholder="particulesTeamMember"
                />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Drawer from 'ant-design-vue/lib/drawer'
import ParticulesTeamMemberCard from '@/components/about/ParticulesTeamMemberCard'
import particulesTeamMembers from '~/data/particules-team.yml'

export default {
  components: { Drawer },
  data() {
    return {
      particulesTeamMembers: particulesTeamMembers,
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
  },
  components: {
    ParticulesTeamMemberCard
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
