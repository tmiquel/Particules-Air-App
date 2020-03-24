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
              <a
                href="https://www.dataweek.fr/"
                target="_self"
              >Dataweek</a>, nous nous sommes rassemblés autour d’un
              objectif :
              <strong>faire de la qualité de l’air un sujet abordable par tous !</strong> L'équipe Provence
              de
              <a
                href="https://dataforgood.fr/"
                target="_self"
              >Data4Good</a> s'est jointe au projet.
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
              <i>
                Peut être que nous irons plus loin grâce à toi derrière ton écran qui a envie de faire partie de cette
                équipe qui ressemble à une hydre à 7 têtes pensantes ! N’hésite pas à nous parler de toi, de tes envies,
                de ton projet, ou de ton chat Chaussette....
                <nuxt-link to="/contact">écris-nous !</nuxt-link>
              </i>
            </p>
          </div>
          <app-heading class="mt-5">LA FINE ÉQUIPE</app-heading>
          <b-container class="team">
            <b-row class="row-cols-3 row-cols-md-4 row-cols-lg-5">
              <b-col
                v-for="(particulesTeamMember, particulesTeamMemberId, index) in particulesTeamMembers"
                :key="index"
              >
                <particules-team-member-card
                  :member-id="particulesTeamMemberId"
                  :member="particulesTeamMember"
                />
              </b-col>
            </b-row>
          </b-container>
        </div>
      </div>
    </div>
    <ParticulesTeamMemberSlider />
    <DesktopFooter v-if="$mq === 'mobile'"></DesktopFooter>
  </div>
</template>

<script>
import Drawer from 'ant-design-vue/lib/drawer'
import ParticulesTeamMemberCard from '@/components/about/ParticulesTeamMemberCard'
import particulesTeamMembers from '~/data/particules-team.yml'
import ParticulesTeamMemberSlider from '~/components/about/ParticulesTeamMemberSlider.vue'
import DesktopFooter from '~/components/SingleInstanceCmp/DesktopFooter.vue'

export default {
  components: { Drawer, DesktopFooter },
  data() {
    return {
      particulesTeamMembers: particulesTeamMembers
    }
  },
  components: {
    ParticulesTeamMemberCard,
    ParticulesTeamMemberSlider,
    DesktopFooter
  }
}
</script>

