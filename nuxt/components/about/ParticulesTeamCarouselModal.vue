<template>
  <a-modal
    title=""
    centered
    :visible="state.visible"
    @ok="$store.commit('CLOSE_TEAM_CAROUSEL')"
    @cancel="$store.commit('CLOSE_TEAM_CAROUSEL')"
    :maskClosable="true"
    :footer="null"
    :destroyOnClose="true"
    width="70%"
  >
    <a-carousel arrows class="h-100">
      <div slot="prevArrow" slot-scope="props" class="custom-slick-arrow" style="left: 30px;zIndex: 1">
        <a-icon type="left" />
      </div>
      <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 55px">
        <a-icon type="right" />
      </div>
      <b-container v-for="(particulesTeamMemberId, index) in sortedParticulesTeamMembers" :key="index">
        <b-row class="row-cols-2 py-5" id="carousel-content">
          <b-col cols="5" class="pl-5">
            <cld-image
              class="d-flex justify-content-center"
              responsive="width"
              :publicId="imgPublicIds[particulesTeamMemberId]"
              :alt="particulesTeamMembers[particulesTeamMemberId].name"
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
              <b>{{ particulesTeamMembers[particulesTeamMemberId].squad }}</b>
            </h5>
            <span class="text-left py-3 text-capitalize" :style="{ fontSize: '25px' }">
              <b v-html="particulesTeamMembers[particulesTeamMemberId].name"></b>
            </span>
            <div class="blueline mr-auto">&nbsp;</div>
            <p class="text-left" :style="{ fontSize: '22px' }">
              {{ particulesTeamMembers[particulesTeamMemberId].jobtitle }}
            </p>
            <p
              :style="{ fontSize: '22px' }"
              class="text-left pt-3"
              v-html="particulesTeamMembers[particulesTeamMemberId].description"
            ></p>

            <span :style="{ width: '55%' }" class="d-inline-flex justify-content-between">
              <div
                :style="{ cursor: 'pointer' }"
                v-b-hover="handleHoverEmail"
                v-if="particulesTeamMembers[particulesTeamMemberId].email"
              >
                <a target="_blank" :href="'mailto:' + particulesTeamMembers[particulesTeamMemberId].email">
                  <a-icon type="mail" :theme="isEmailHovered ? 'filled' : 'outlined'" :style="{ fontSize: '30px' }" />
                </a>
              </div>
              <div
                :style="{ cursor: 'pointer' }"
                v-b-hover="handleHoverLinkedin"
                v-if="particulesTeamMembers[particulesTeamMemberId].linkedin"
              >
                <a target="_blank" :href="particulesTeamMembers[particulesTeamMemberId].linkedin">
                  <a-icon
                    type="linkedin"
                    :theme="isLinkedinHovered ? 'outlined' : 'filled'"
                    :style="{ fontSize: '30px', color: '#0e76a8' }"
                    fill="#0e76a8"
                  />
                </a>
              </div>
              <div
                :style="{ cursor: 'pointer' }"
                v-b-hover="handleHoverTwitter"
                v-if="particulesTeamMembers[particulesTeamMemberId].twitter"
              >
                <a target="_blank" :href="particulesTeamMembers[particulesTeamMemberId].twitter">
                  <a-icon type="twitter" :style="{ fontSize: '30px', color: '#00acee' }" fill="#00acee" />
                </a>
              </div>
              <div
                :style="{ cursor: 'pointer' }"
                v-b-hover="handleHoverFacebook"
                v-if="particulesTeamMembers[particulesTeamMemberId].facebook"
              >
                <a target="_blank" :href="particulesTeamMembers[particulesTeamMemberId].facebook">
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
  </a-modal>
</template>


<script>
import particulesTeamMembers from '~/data/particules-team.yml'
import { Carousel, Modal, Icon } from 'ant-design-vue'
import { Button } from 'ant-design-vue'
import { mapState } from 'vuex'
import { VBHover } from 'bootstrap-vue'

export default {
  directives: {
    'b-hover': VBHover
  },
  data() {
    return {
      particulesTeamMembers: particulesTeamMembers,
      isTwitterHovered: false,
      isFacebookHovered: false,
      isLinkedinHovered: false,
      isEmailHovered: false
    }
  },
  components: {
    AModal: Modal,
    AIcon: Icon,
    ACarousel: Carousel
  },
  computed: {
    ...mapState({
      state: state => state.teamCarousel,
      selected: state => {
        if (state.teamCarousel.slug) {
          if (state.teamCarousel.slug in particulesTeamMembers) {
            return particulesTeamMembers[state.teamCarousel.slug]
          }
        } else return null
      }
    }),
    sortedParticulesTeamMembers() {
      const teamNamesArray = Object.keys(particulesTeamMembers)
      const nameIndexInParticulesTeamMembers = teamNamesArray.findIndex(name => name === this.state.slug)
      return teamNamesArray.slice(
        nameIndexInParticulesTeamMembers
      ).concat(teamNamesArray.slice(0,nameIndexInParticulesTeamMembers))
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
    },

  }
}
</script>

<style scoped>
/* Second style tag because deep selector don't work with scss */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 160px; */
  /* line-height: 160px; */
  background: whitesmoke;
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




<style lang="scss" scoped>
.ant-modal-content {
  button:focus {
    outline: 0;
  }
}

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

<style>
</style>


<style scoped>
/* Second style tag because deep selector don't work with scss */
.ant-carousel >>> .slick-slide {
  text-align: center;
  /* height: 160px; */
  /* line-height: 160px; */
  background: white;
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

.ant-carousel >>> .slick-slide.slick-active.slick-current {
  height: 60vh;
}
.slick-slide.slick-active.slick-current > div {
  height: 60vh;
}
</style>

<style lang="scss">
.ant-modal-content {
  button:focus {
    outline: 0;
  }

  .ant-modal-close-x {
    font-size: 48px;
    font-style: bold;
    width: 150px;
    line-height: 68px;
  }
}
</style>
