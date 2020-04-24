<template>
  <div>
    <div class="video">
      <h1 id="titre">
        Comprendre
        <br />la santé publique
        <br />avec Particules
      </h1>
      <img src="~/assets/images/icons/desktop/video.svg" class="vid" />
      <p>Nous utilisons publications scientifique et données publiques pour vous proposer des contenus ludiques, éducatifs et vous donner les clés de votre santé.</p>
      <img src="~/assets/images/icons/desktop/texture.svg" class="texture" />
      <button
        type="button"
        class="btn rounded-pill font-weight-bold border-0 text-white"
        tag="button"
      >
        Lancer la vidéo
        <img src="~/assets/images/icons/desktop/fleche.svg" class="fleche" />
      </button>

      <img src="~/assets/images/icons/desktop/Rectangle.svg" class="rectangle" />
      <img src="~/assets/images/icons/desktop/Vector.svg" class="vector" />
    </div>
    <div class="map"></div>
    <div></div>
  </div>
</template>


<script>
import { BIcon, BIconPlay } from 'bootstrap-vue'
export default {
  components: {
    BIcon,
    BIconPlay
  }
}
</script>



<style lang="scss" scoped>
@import './assets/_custom.scss';
#titre {
  @include maintitle;
  width: 563px;
  //height: 204px;
  left: 144px;
  top: 254px;
}
p {
  position: absolute;
  width: 503px;
  height: 126px;
  left: 144px;
  top: 400px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 23px;
  line-height: 133%;
  color: #454545;
}
.rectangle {
  position: absolute;
  width: 633px;
  height: 516px;
  left: 807px;
  top: 515px;

  background: #f3f7f9;
}
.vid {
  position: absolute;
  width: 562px;
  height: 326px;
  left: 878px;
  top: 257px;
  box-shadow: 0px 15px 25px #e8e8e8;
}
button {
  background: linear-gradient(89.87deg, #1680a5 -79.71%, #62bad9 167.69%);
  position: relative;
  left: 10%;
  right: 75.83%;
  top: 420px;
  bottom: 81.14%;
}
.fleche {
  left: 21.94%;
  right: 77.11%;
  top: 17.86%;
  bottom: 81.99%;

  box-sizing: border-box;
  transform: rotate(90);
}
.texture {
  position: absolute;
  left: 7.64%;
  right: 85%;
  top: 570px;
  bottom: 70.45%;
  mix-blend-mode: multiply;
}
.vector {
  position: absolute;
  //left: 54.29%;
  right: 44.75%;
  top: 105.5%;
  bottom: 63.06%;

  //background: #709db6;
  mix-blend-mode: multiply;
  transform: rotate(-101.94);
}
</style>
