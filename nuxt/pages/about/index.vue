<template>
  <div>
    <app-landing-banner v-if="$mq === 'mobile'" />
    <!-- <div class="about-page mx-2 pt-md-5"> -->

    <b-container class="pt-md-5">
      <b-row class="row-cols-1">
        <b-col class="text-center">
          <h6 v-if="$mq === 'desktop'" class="my-column-heading text-uppercase py-3 text-center">
            <div class="py-5 my-4"></div>
            <b>L'équipe</b>
          </h6>
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
        </b-col>
      </b-row>
    </b-container>
    <b-container>
      <a-carousel arrows>
        <div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 30px;zIndex: 1">
          <a-icon type="left" />
        </div>
        <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 55px">
          <a-icon type="right" />
        </div>
        <b-container v-for="(particulesTeamMember, particulesTeamMemberId, index) in techTeam" :key="index">
          <b-row class="row-cols-2 py-5" id="carousel-content">
            <b-col cols="5" class="pl-5">
              <cld-image
                class="d-flex justify-content-center"
                responsive="width"
                :publicId="imgPublicIds[particulesTeamMemberId]"
                :alt="particulesTeamMember.name"
              >
                <!-- https://github.com/cloudinary/cloudinary-vue/blob/master/src/components/CldImage/CldImage.md -->
                <!-- https://cloudinary.com/documentation/image_transformation_reference -->

                <cld-transformation width="646" height="772" crop="fill" effect="improve" />
                <cld-transformation
                  width="auto"
                  gravity="face:center"
                  dpr="auto"
                  fetchFormat="auto"
                  quality="auto:best"
                />
              </cld-image>
            </b-col>
            <b-col cols="7" class="pl-md-5 d-flex flex-column justify-content-start align-items-left">
              <h5 :style="{ fontSize: '18px' }" class="text-primary text-left text-uppercase">
                <b>{{ particulesTeamMember.squad }}</b>
              </h5>
              <span class="text-left py-3" :style="{ fontSize: '25px' }">
                <b v-html="particulesTeamMember.name"></b>
              </span>
              <div class="blueline mr-auto">&nbsp;</div>
              <p class="text-left" :style="{ fontSize: '22px' }">{{ particulesTeamMember.jobtitle }}</p>
              <p :style="{ fontSize: '22px' }" class="text-left pt-3" v-html="particulesTeamMember.description"></p>

              <span :style="{ width: '55%' }" class="d-inline-flex justify-content-between">
                <div :style="{cursor: 'pointer'}" v-b-hover="handleHoverEmail" v-if="particulesTeamMember.email">
                  <a target="_blank" :href="'mailto:'+particulesTeamMember.email">
                  <a-icon type="mail" :theme="isEmailHovered ? 'filled' : 'outlined'" :style="{ fontSize: '30px' }" />
                  </a>
                </div>
                <div :style="{cursor: 'pointer'}" v-b-hover="handleHoverLinkedin" v-if="particulesTeamMember.linkedin">
                  <a target="_blank" :href="particulesTeamMember.linkedin">
                  <a-icon
                    type="linkedin"
                    :theme="isLinkedinHovered ? 'outlined' : 'filled'"
                    :style="{ fontSize: '30px', color: '#0e76a8' }"
                    fill="#0e76a8"
                  />
                  </a>
                </div>
                <div :style="{cursor: 'pointer'}" v-b-hover="handleHoverTwitter" v-if="particulesTeamMember.twitter">
                  <a target="_blank" :href="particulesTeamMember.twitter">
                  <a-icon
                    type="twitter"
                    :style="{ fontSize: '30px', color: '#00acee' }"
                    fill="#00acee"
                  />
                  </a>
                </div>
                <div :style="{cursor: 'pointer'}" v-b-hover="handleHoverFacebook" v-if="particulesTeamMember.facebook">
                  <a target="_blank" :href="particulesTeamMember.facebook">
                  <a-icon
                    type="facebook"
                    :theme="isFacebookHovered ? 'outlined' : 'filled'"
                    :style="{ fontSize: '30px', color: '#3b5998' }"
                    fill="#3b5998"
                  />
                  </a>
                </div>
              </span>
            </b-col>
          </b-row>
        </b-container>
      </a-carousel>
    </b-container>

    <b-container>
      <app-sub-heading :isCenteredOnDesktop="true" class="mt-5 mb-md-5 text-center"
        >côté tech et data visualisation</app-sub-heading
      >
      <b-row class="row-cols-2 row-cols-md-4 justify-content-around">
        <b-col v-for="(particulesTeamMember, particulesTeamMemberId, index) in techTeam" :key="index">
          <particules-team-member-card :member-id="particulesTeamMemberId" :member="particulesTeamMember" />
        </b-col>
      </b-row>
    </b-container>

    <b-container class="pb-md-5">
      <app-sub-heading :isCenteredOnDesktop="true" class="mt-5 mb-md-5 text-center"
        >côté produit, design et marketing</app-sub-heading
      >
      <b-row class="row-cols-2 row-cols-md-4 justify-content-around">
        <b-col v-for="(particulesTeamMember, particulesTeamMemberId, index) in productTeam" :key="index">
          <particules-team-member-card :member-id="particulesTeamMemberId" :member="particulesTeamMember" />
        </b-col>
      </b-row>
    </b-container>
    <app-blue-centered-line class="mb-5 pb-1" v-if="$mq === 'desktop'" />

    <b-container class="pt-md-5 mb-5">
      <b-row>
        <b-col cols="12" md="4" class="px-md-4 py-4 pt-5 pt-md-4">
          <app-sub-heading>Notre Histoire</app-sub-heading>
          <p :class="$mq" class="mx-auto mb-4 text-left">
            Après avoir gagné une bourse lors d’un hackathon
            Dataweek, nous nous sommes rassemblés autour d’un
            objectif : faire de la qualité de l’air un sujet abordable par tous! L'équipe Provence de
            <a href="https://dataforgood.fr/" target="_blank">Data4Good</a> s'est jointe au projet.
          </p>
        </b-col>
        <b-col cols="12" md="4" class="px-md-4 py-4">
          <app-sub-heading>Comment ?</app-sub-heading>
          <p :class="$mq" class="mx-auto mb-4 text-left">
            En créant des visualisations de données esthétiques et ergonomiques et en concevant un parcours utilisateur
            captivant dès les premiers clics.
          </p>
          <p :class="$mq" class="mx-auto mb-4 text-left">
            Dans la joie, la bonne humeur, la bienveillance et la détermination, notre équipe de choc est constituée de
            différents parcours de vie et compétences diverses mais complémentaires, ce qui fait notre vraie force.
          </p>
        </b-col>
        <b-col cols="12" md="4" class="px-md-4 py-4">
          <app-sub-heading>Notre truc en plus</app-sub-heading>
          <p :class="$mq" class="mx-auto mb-4 text-left">
            Notre goût à tous pour les défis qui nous a permis de proposer un projet abouti en un temps (presque) record
            et nous l’espérons qui ira loin !
          </p>
          <p :class="$mq" class="mx-auto mb-4 text-left">
            Peut être que nous irons plus loin grâce à toi derrière ton écran qui a envie de faire partie de cette
            équipe qui ressemble à une hydre à 7 têtes pensantes ! N’hésite pas à nous parler de toi, de tes envies, de
            ton projet, ou de ton chat Chaussette....
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="pb-5">
      <b-row>
        <b-col class="text-center">
          <b-button
            :class="$mq"
            class="d-inline-flex mx-auto px-4 my-0 my-md-5"
            variant="primary"
            size="lg"
            pill
            to="/contact"
            ><b>Rejoins-nous :)</b></b-button
          >
        </b-col>
      </b-row>
    </b-container>
    <!-- </div> -->
    <ParticulesTeamMemberSlider />
  </div>
</template>

<script>
import { Carousel, Icon } from 'ant-design-vue'
import ParticulesTeamMemberCard from '@/components/about/ParticulesTeamMemberCard'
import particulesTeamMembers from '~/data/particules-team.yml'
import ParticulesTeamMemberSlider from '~/components/about/ParticulesTeamMemberSlider.vue'
import { VBHover } from 'bootstrap-vue'

export default {
  directives: {
    'b-hover': VBHover
  },
  data() {
    return {
      particulesTeamMembers: particulesTeamMembers,
      introText:
        'Habitants de Marseille et de ses alentours, \
      nous avons toutes et tous été sensibilisés à la pollution de l’air \
      que ce soit par les média ou des articles\
       scientifiques mais finalement très peu informés des dangers sur notre santé \
       que celle-ci pouvait constituer.',
      isTwitterHovered: false,
      isFacebookHovered: false,
      isLinkedinHovered: false,
      isEmailHovered: false
    }
  },
  components: {
    ParticulesTeamMemberCard,
    ParticulesTeamMemberSlider,
    ACarousel: Carousel,
    AIcon: Icon
  },
  computed: {
    techTeam() {
      const techTeam = {}
      ;['Amine', 'Kevin', 'Thibaut', 'Elise'].forEach(member => {
        if (particulesTeamMembers[member]) {
          techTeam[member] = particulesTeamMembers[member]
        }
      })
      return techTeam
    },
    productTeam() {
      const productTeam = {}
      ;['Emilie', 'Raphael', 'Claire', 'Luciana'].forEach(member => {
        if (particulesTeamMembers[member]) {
          productTeam[member] = particulesTeamMembers[member]
        }
      })
      return productTeam
    },
    imgPublicIds() {
      const imgPublicIds = {}
      Object.keys(particulesTeamMembers).forEach(memberId => {
        imgPublicIds[memberId] = this.$store.getters.getImgPublicID(
          particulesTeamMembers[memberId]['start-of-cloudinary-filename']
        )
      })
      return imgPublicIds
    }
  },
  methods: {
    handleHoverTwitter(hovered) {
      this.isTwitterHovered = hovered
    },
    handleHoverFacebook(hovered) {
      this.isFacebookHovered = hovered
    },
    handleHoverLinkedin(hovered) {
      this.isLinkedinHovered = hovered
    },
    handleHoverEmail(hovered) {
      this.isEmailHovered = hovered
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

#carousel-content {
  padding-top: 118px !important;
  padding-left: 165px !important;
  padding-right: 165px !important;
  padding-bottom: 118px !important;
}

.blueline {
  width: 65px;
  height: 8px;
  /* margin: 0px auto; */
  border-bottom: 5px solid var(--primary);
  margin-top: 7px;
  margin-bottom: 18px;
}
</style>

<style scoped>
/* Second style tag because deep selector don't work with scss */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 160px; */
  /* line-height: 160px; */
  overflow: hidden;
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 50px;
  font-size: 50px;
  color: var(--dark-grey);
  /* background-color: rgba(31, 45, 61, 0.11); */
  opacity: 0.7;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 1;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}


</style>
