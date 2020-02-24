<template>
  <div class="container-fluid banner d-flex my-padding-1px">
    <div class="row flex-column align-items-left">
      <div class="col pl-3 flex-grow-1">
        <h6 class="pt-3 mt-3 mb-0 " id="banner-topic-title" :style="responsiveBannerTopicTitleStyle">
          MON AIR & MA SANTE
        </h6>
      </div>
      <div class="col flex-grow-0">
        <h1 class="pt-2 mb-0" id="banner-title" :style="responsiveBannerTitleStyle">
          L’augmentation de la Mortalité & mon Air Q
        </h1>
      </div>
      <div class="col flex-grow-1">
        <p
          class="text-white pt-1 font-italic"
          :style="this.$mq === 'mobile' ? { fontSize: '0.65rem' } : { fontSize: '1rem' }"
        >
          Le 19 septembre 2019 / Par Jean Jacques Goldman
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    responsiveBannerTopicTitleStyle() {
      if (this.$mq === 'mobile') {
        return {
          fontSize: '0.9rem',
          backgroundSize: '100% 0.2rem'
        }
      } else
        return {
          fontSize: '1.3rem',
          backgroundSize: '100% 0.3rem'
        }
    },
    responsiveBannerTitleStyle() {
      if (this.$mq === 'mobile') {
        return {
          fontSize: '1.6rem',
          backgroundSize: '100% 0.07rem'
        }
      } else
        return {
          fontSize: '2.1rem',
          backgroundSize: '100% 0.1rem',
          paddingRight: '35%'
        }
    }
  }
}
</script>

<style scoped>


.banner {
  background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(39, 39, 39, 0.62) 52.6%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('~assets/img/banner-background-image-crop.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position-x: center;
  background-blend-mode: multiply;
  mix-blend-mode: darken;
  border-radius: 0px;
  height: 25vh;
}


#banner-topic-title {
  /* fontSize and backgroundSize defined in responsiveBannerTopicTitleStyle() */
  background-image: linear-gradient(to right, #fff, #fff 37px, transparent 37px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  font-family: $font-family-sans-serif !important;
  font-weight: bold;
  font-style: normal;
  color: white;
}

#banner-title {
  /* fontSize and backgroundSize defined in responsiveBannerTitleStyle() */
  background-image: linear-gradient(to right, #fff, #fff 57px, transparent 57px);
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.9rem;
  font-family: $font-family-sans-serif !important;
  font-weight: bold;
  font-style: normal;
  color: white;
}

#banner-title span {
  display: table;
}

p {
  line-height: normal;
}
</style>
