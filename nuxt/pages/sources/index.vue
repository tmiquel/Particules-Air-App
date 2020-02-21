<template>
  <div class="w-100">
    <div class="banner">
      <p>Mon beau contenu</p>
      <!-- <div class="container">
        <h1>Le Wagon brings <strong>tech skills</strong> to <strong>creative people</strong>!</h1>
        <p>Change your life and learn to code at one of our campuses around the world.</p>
        <a class="btn btn-flat" href="#">Apply now</a>
      </div> -->
    </div>

    <app-heading>LES SOURCES</app-heading>
  </div>
</template>

<script>
export default {
  computed: {
    // responsiveBannerStyle() {
    //   return this.$mq === 'mobile'? '{height: 5px}' : '{height: 100px}'
    // }
  }
}
</script>

<style scoped>
#app-title {
  background-image: linear-gradient(
    to right,
    var(--left-gradient-color),
    var(--right-gradient-color) 37px,
    transparent 37px
  );
  background-size: 100% 0.2rem;
  background-repeat: no-repeat;
  background-position: 0 100%;
  padding-bottom: 0.5rem;
  font-family: var(--headings-font-family);
  font-weight: bold;
  font-style: normal;

  color: var(--font-headers-color);
}

.banner {
  background-image: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(39, 39, 39, 0.62) 52.6%, rgba(0, 0, 0, 0.6) 100%),
    url('~assets/img/banner-background-image-crop.jpg');
  background-size: cover;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-position-x: center;
  background-position-y: top;
  background-blend-mode: multiply;
  mix-blend-mode: darken;
  border-radius: 0px;
  height: 25vh;

}

/* mobile display as defined in nuxt.config.js and based on -md bootstrap breakpoint */
@media screen and (min-width: 768px) {
  .banner {
    /* display: none; */
    /* margin-top: 10px; */
    /* background-position: 50% bottom 10px; */

  }
}

.banner h1 {
  margin: 0;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
  font-size: 32px;
  font-weight: bold;
}

/* .banner p {
  font-size: 20px;
  color: white;
  opacity: 0.7;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
} */
</style>


