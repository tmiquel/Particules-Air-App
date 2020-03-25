<template>
  <div>
    <app-landing-banner v-if="$mq === 'mobile'" />
    <div class="about-page mx-2 pt-md-5">
      <div class="container pb-5">
        <div class="row row-cols-1">
          <div class="col text-center">
            <h6 v-if="$mq==='desktop'" class="my-column-heading text-uppercase py-3 text-center"><b>L'équipe</b></h6>
            <app-heading>Qui sommes nous ?</app-heading>

            <b-container v-if="$mq === 'desktop'">
              <b-row>
                <b-col offset="2" cols="8">
                  <p class="mx-auto mb-4" :class="[$mq, $mq === 'mobile' ? 'text-left' : 'text-center']">
                    {{ introText }}
                  </p>
                </b-col>
              </b-row>
            </b-container>

            <p
              v-if="$mq === 'mobile'"
              class="mx-auto mb-4"
              :class="[$mq, $mq === 'mobile' ? 'text-left' : 'text-center']"
            >
              {{ introText }}
            </p>

            <b-container class='px-0'>
              <app-sub-heading :isCenteredOnDesktop="true" class="mt-5 text-center">côté tech et data visualisation</app-sub-heading>
              <b-row class="row-cols-2 row-cols-md-4">
                <b-col v-for="(particulesTeamMember, particulesTeamMemberId, index) in techTeam" :key="index">
                  <particules-team-member-card :member-id="particulesTeamMemberId" :member="particulesTeamMember" />
                </b-col>
              </b-row>
            </b-container>

            <b-container class="pb-md-5 px-0">
              <app-sub-heading :isCenteredOnDesktop="true"  class="mt-5 text-center">côté produit, design et marketing</app-sub-heading>
              <b-row class="row-cols-2 row-cols-md-4">
                <b-col v-for="(particulesTeamMember, particulesTeamMemberId, index) in productTeam" :key="index">
                  <particules-team-member-card :member-id="particulesTeamMemberId" :member="particulesTeamMember" />
                </b-col>
              </b-row>
            </b-container>

            <app-blue-centered-line class="mb-5 pb-1" v-if="$mq === 'desktop'" />

            <b-container class="pt-md-5 mb-5 px-0">
              <b-row>
                <b-col cols="12" md="4" class='px-md-4'>
                  <app-sub-heading>Notre Histoire</app-sub-heading>
                  <p :class="$mq" class="mx-auto mb-4 text-left">
                    Après avoir gagné une bourse lors d’un hackathon
                    <a href="https://www.dataweek.fr/" target="_self">Dataweek</a>, nous nous sommes rassemblés autour
                    d’un objectif : faire de la qualité de l’air un sujet abordable par tous! L'équipe Provence de
                    <a href="https://dataforgood.fr/" target="_self">Data4Good</a> s'est jointe au projet.
                  </p>
                </b-col>
                <b-col cols="12" md="4" class='px-md-4'>
                  <app-sub-heading>Comment ?</app-sub-heading>
                  <p :class="$mq" class="mx-auto mb-4 text-left">
                    En créant des visualisations de données esthétiques et ergonomiques et en concevant un parcours
                    utilisateur captivant dès les premiers clics.
                  </p>
                  <p :class="$mq" class="mx-auto mb-4 text-left">
                    Dans la joie, la bonne humeur, la bienveillance et la détermination, notre équipe de choc est
                    constituée de différents parcours de vie et compétences diverses mais complémentaires, ce qui fait
                    notre vraie force.
                  </p>
                </b-col>
                <b-col cols="12" md="4" class='px-md-4'>
                  <app-sub-heading>Notre truc en plus</app-sub-heading>
                  <p :class="$mq" class="mx-auto mb-4 text-left">
                    Notre goût à tous pour les défis qui nous a permis de proposer un projet abouti en un temps
                    (presque) record et nous l’espérons qui ira loin !
                  </p>
                  <p :class="$mq" class="mx-auto mb-4 text-left">
                    Peut être que nous irons plus loin grâce à toi derrière ton écran qui a envie de faire partie de
                    cette équipe qui ressemble à une hydre à 7 têtes pensantes ! N’hésite pas à nous parler de toi, de
                    tes envies, de ton projet, ou de ton chat Chaussette....
                  </p>
                </b-col>
              </b-row>
            </b-container>
            <b-button :class="$mq" class="d-inline-flex mx-auto px-4 my-5" variant="primary" size="lg" pill to="/contact"><b>Rejoins-nous :)</b></b-button>
          </div>
        </div>
      </div>
    </div>
    <ParticulesTeamMemberSlider />
  </div>
</template>

<script>
import Drawer from 'ant-design-vue/lib/drawer'
import ParticulesTeamMemberCard from '@/components/about/ParticulesTeamMemberCard'
import particulesTeamMembers from '~/data/particules-team.yml'
import ParticulesTeamMemberSlider from '~/components/about/ParticulesTeamMemberSlider.vue'

export default {
  components: { Drawer },
  data() {
    return {
      particulesTeamMembers: particulesTeamMembers,
      introText:
        'Habitants de Marseille et de ses alentours, \
      nous avons toutes et tous été sensibilisés à la pollution de l’air \
      que se soit par les média ou des articles\
       scientifiques mais finalement très peu informés des dangers sur notre santé \
       que celle-ci pouvait constituer.'
    }
  },
  components: {
    ParticulesTeamMemberCard,
    ParticulesTeamMemberSlider
  },
  computed: {
    techTeam() {
      const techTeam = {}
      ;['Amine', 'Kevin', 'Thibaut', 'Elise'].forEach(member => {
        techTeam[member] = particulesTeamMembers[member]
      })
      return techTeam
    },
    productTeam() {
      const productTeam = {}
      ;['Emilie', 'Raphael', 'Claire', 'Luciana'].forEach(member => {
        console.log('productTeam', member)
        console.log('productTeam', particulesTeamMembers[member])
        productTeam[member] = particulesTeamMembers[member]
      })
      return productTeam
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  &.desktop {
    font-size: 1.5rem;
  }
}

a {
  &.desktop {
    font-size: 23px;
  }
  &.mobile {
    font-size: 1rem;
  }
}
// inspiration: https://alligator.io/vuejs/vue-media-queries/, #Responsive Class

.my-column-heading {

  font-size: 25px;
  color: var(--dark-grey);
}

</style>
