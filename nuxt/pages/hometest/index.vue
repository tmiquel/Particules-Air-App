<template>
  <b-container fluid>
    <b-row>
      <b-col cols="6" class="pl-5">
        <h1 id="titre1">
          Comprendre
          <br />la santé publique
          <br />avec Particules
        </h1>
        <p id="art1">
          Nous utilisons publications scientifique
          <br />et données publiques pour vous proposer
          <br />des contenus ludiques, éducatifs et
          <br />vous donner les clés de votre santé.
        </p>

        <button
          type="button"
          class="btn rounded-pill font-weight-bold border-0 text-white video-btn"
          tag="button"
          @click="() => (modal2Visible = true)"
        >
          Lancer la vidéo
          <img src="~/assets/images/icons/desktop/fleche.svg" class="fleche" />
        </button>
        <img src="~/assets/images/icons/desktop/texture.svg" class="texture" />
        <a-modal
          v-model="modal2Visible"
          centered
          @ok="() => (modal2Visible = false)"
          :footer="null"
          :destroyOnClose="true"
          :bodyStyle="{padding: 0}"
          width="760px"
        >
          <div class="embed-responsive embed-responsive-16by9">
            <LazyYoutubeVideo
              autoplay
              class="embed-responsive-item"
              src="https://www.youtube.com/embed/MBMk1uoP5Ao"
            />
          </div>
        </a-modal>
      </b-col>
      <b-col cols="6" class="pr-0">
        <div>
          <img
            src="~/assets/images/icons/desktop/video.svg"
            class="vid"
            @click="() => (modal2Visible = true)"
          />
          <img src="~/assets/images/icons/desktop/Rectangle.svg" class="rectangle" />
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="pl-5">
        <h1 id="titre2">
          Visualisez
          <br />les données
          <br />en temps réel
        </h1>
        <p id="art2">
          Nous développons un outil cartographique puissant et configurable. Une compilation et une fusion de données libres totalement partageable.
          <br />
          <br />
          <a href="#" id="linkk">
            Voir nos cartes
            <img src="~/assets/images/icons/desktop/arrowright.svg" class="arrow" />
          </a>
        </p>
      </b-col>
      <b-col>
        <div>
          <!--
            <img src="~/assets/images/icons/desktop/Rectangle52.svg" class="rec" />
      <img src="~/assets/images/icons/desktop/Rectangle53.svg" class="rec2" />
      pour les traits en background
          -->
          <img src="~/assets/images/icons/desktop/carte.svg" class="carte" />
          <img src="~/assets/images/icons/desktop/encart.svg" class="encart" />
        </div>
      </b-col>
    </b-row>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />

    <b-row>
      <b-col>
        <img src="~/assets/images/icons/desktop/illus.svg" class="illus" />
      </b-col>
      <b-col>
        <h1 id="titre3">Des notions claires</h1>
        <p
          class="art3"
        >Un récit ponctué par des points de repères chiffrés pour vous aider à quantifier et comprendre les enjeux de santé publique.</p>
        <a href="#" id="linkk4">
          Quelques chiffres en vidéo
          <img
            src="~/assets/images/icons/desktop/arrowright.svg"
            class="arrow"
          />
        </a>
      </b-col>
    </b-row>
    <br />
    <br />
    <br />
    <b-row class="blue">
      <b-col>
        <div>
          <img src="~/assets/images/icons/desktop/icone-simple.svg" class="icone1" />
          <h1 id="titre4">Apprenez simplement</h1>
          <p
            id="art4"
          >Des articles interactifs et ludiques ponctué d’infographies et d’illustration, pour comprendre des sujets pointus et complexes.</p>
          <a href="#" id="linkk2">
            Lire notre 1er article
            <img
              src="~/assets/images/icons/desktop/arrowright.svg"
              class="arrow"
            />
          </a>
        </div>
      </b-col>
      <b-col>
        <div>
          <img src="~/assets/images/icons/desktop/icone-transparence.svg" class="icone2" />
          <h1 id="titre5">En toute transparence</h1>
          <p
            id="art5"
          >Notre travail est scrupuleusement référencé et nos sources sont triées, catégorisées et accessibles en un clic depuis chaque article.</p>
          <a href="#" id="linkk3">
            Voir les sources de notre 1er article
            <img
              src="~/assets/images/icons/desktop/arrowright.svg"
              class="arrow"
            />
          </a>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { BIcon, BIconPlay, BIconArrowRight } from 'bootstrap-vue'
import { Carousel, Modal, Icon } from 'ant-design-vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'
import { Button } from 'ant-design-vue'
export default {
  data() {
    return {
      modal2Visible: false
    }
  },
  components: {
    BIcon,
    BIconPlay,
    BIconArrowRight,
    AModal: Modal,
    LazyYoutubeVideo
  }
}
</script>


<style lang="scss" scoped>
@import './assets/_custom.scss';
@import 'vue-lazy-youtube-video/dist/style.css';

#titre1 {
  @include maintitle;
  width: 563px;
  //height: 204px;
  left: 144px;
  top: 254px;
}
#art1 {
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
button {
  background: linear-gradient(89.87deg, #1680a5 -79.71%, #62bad9 167.69%);
  //position: relative;
  left: 144px;
  right: 75.83%;
  top: 420px;
  bottom: 81.14%;
  font-family: source sans pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
  mix-blend-mode: multiply;
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
  left: 7.64%;
  right: 85%;
  top: 570px;
  bottom: 70.45%;
}
.rectangle {
  position: relative;
  float: right;
  background: #f3f7f9;
}
.vid {
  position: absolute;
  z-index: 3;
}
#titre2 {
  @include maintitle;
  width: 333px;
  height: 154px;
  left: 149px;
  top: 1313px;
}
#art2 {
  //position: absolute;
  width: 402px;
  height: 100px;
  left: 149px;
  top: 1450px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133.3%;
  /* or 27px */

  color: #454545;
}
#linkk {
  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  /* or 20px */

  color: #1680a5;
}
.carte {
  position: absolute;

  //box-shadow: 0px 15px 25px #e5e5e5;
  border-radius: 0px 0px 3px 3px;
}
.encart {
  position: absolute;

  z-index: 1;
  //box-shadow: 0px 15px 25px #e6e6e6;
  border-radius: 10px;
}
.illus {
  //position: absolute;

  left: 150px;
  top: 1954px;
}
#titre3 {
  @include maintitle;
  width: 467px;
  height: 47px;
  left: 823px;
  top: 2113px;
}
.art3 {
  //position: absolute;
  width: 417px;
  height: 89px;
  left: 829px;
  top: 2194px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133.3%;
  /* or 27px */

  color: #454545;
}
.blue {
  background: #f3f7f9;
  height: 690px;
}
#titre4 {
  @include maintitle;
  width: 365px;
  height: 27px;
  left: 276px;
  top: 3002px;
  font-size: 35px;
}
#art4 {
  width: 397px;
  height: 81px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133.3%;
  /* or 27px */

  color: #454545;
}
#titre5 {
  @include maintitle;
  width: 380px;
  height: 27px;
  left: 767px;
  top: 3002px;
  font-size: 35px;
}
#art5 {
  width: 391px;
  height: 78px;
  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133.3%;
  /* or 27px */
  color: #454545;
}
</style>
