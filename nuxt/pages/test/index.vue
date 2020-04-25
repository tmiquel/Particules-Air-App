<template>
  <div>
    <div class="container">
      <div class="video">
        <h1 id="titre1">
          Comprendre
          <br />la santé publique
          <br />avec Particules
        </h1>
        <img src="~/assets/images/icons/desktop/video.svg" class="vid" />
        <p
          id="art1"
        >Nous utilisons publications scientifique et données publiques pour vous proposer des contenus ludiques, éducatifs et vous donner les clés de votre santé.</p>
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
      <div class="map">
        <h1 id="titre2">Visualisez les données en temps réel</h1>
        <p id="art2">
          Nous développons un outil cartographique puissant et configurable. Une compilation et une fusion de données libres totalement partageable.
          <br />
          <br />
          <a href="#" id="linkk">
            Voir nos cartes
            <img src="~/assets/images/icons/desktop/arrowright.svg" class="arrow" />
          </a>
        </p>
        <img src="~/assets/images/icons/desktop/Rectangle52.svg" class="rec" />
        <img src="~/assets/images/icons/desktop/Rectangle53.svg" class="rec2" />
        <img src="~/assets/images/icons/desktop/carte.svg" class="carte" />
        <img src="~/assets/images/icons/desktop/encart.svg" class="encart" />
      </div>
      <div>
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
        <img src="~/assets/images/icons/desktop/illus.svg" class="illus" />
      </div>
      <div>
        <img src="~/assets/images/icons/desktop/bg.svg" class="bg" />
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
    </div>
  </div>
</template>


<script>
import { BIcon, BIconPlay, BIconArrowRight } from 'bootstrap-vue'
export default {
  components: {
    BIcon,
    BIconPlay,
    BIconArrowRight
  }
}
</script>



<style lang="scss" scoped>
@import './assets/_custom.scss';
#titre1 {
  @include maintitle;
  width: 563px;
  //height: 204px;
  left: 144px;
  top: 254px;
}
#art1 {
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
  //box-shadow: 0px 15px 25px #e8e8e8;
}
button {
  background: linear-gradient(89.87deg, #1680a5 -79.71%, #62bad9 167.69%);
  position: relative;
  left: -5%;
  right: 75.83%;
  top: 420px;
  bottom: 81.14%;
  font-family: source sans pro;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 23px;
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
#titre2 {
  @include maintitle;
  width: 333px;
  height: 154px;
  left: 149px;
  top: 1313px;
}
#art2 {
  position: absolute;
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
.carte {
  position: absolute;
  width: 615px;
  height: 369px;
  left: 675px;
  top: 1329px;
  //box-shadow: 0px 15px 25px #e5e5e5;
  border-radius: 0px 0px 3px 3px;
}
.encart {
  position: absolute;
  width: 159px;
  height: 343px;
  left: 597px;
  top: 1341px;

  //box-shadow: 0px 15px 25px #e6e6e6;
  border-radius: 10px;
}
.arrow {
  //position: absolute;
  width: 16.42px;
  height: 24.15px;
  left: 297px;
  top: 1661.42px;

  transform: rotate(-90);
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
.rec {
  position: absolute;
  width: 1071px;
  height: 437.5px;
  left: 0px;
  top: 1202px;

  //border: 3px solid #f3f7f9;
  box-sizing: border-box;
}
.rec2 {
  position: absolute;
  width: 214.01px;
  height: 176.81px;
  left: 860px;
  top: 1660px;

  //background: #f3f7f9;
  transform: rotate(0.18);
}
#titre3 {
  @include maintitle;
  width: 467px;
  height: 47px;
  left: 823px;
  top: 2113px;
}
.art3 {
  position: absolute;
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
.illus {
  position: absolute;
  width: 580px;
  height: 504.62px;
  left: 150px;
  top: 1954px;
}
.bg {
  position: absolute;
  width: 1518px;
  height: 690px;
  left: 0px;
  right: 0px;
  top: 2674px;

  background: #f3f7f9;
}
.icone1 {
  position: absolute;
  left: 25.01%;
  right: 64.44%;
  top: 350%;
  bottom: 22.33%;
}
.icone2 {
  position: absolute;
  left: 61.88%;
  right: 30.41%;
  top: 350%;
  bottom: 22.45%;

  //background: #1680A5;
  //border: 0.1px solid #1680a5;
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
  position: absolute;
  width: 397px;
  height: 81px;
  left: 276px;
  top: 3057px;

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
  position: absolute;
  width: 391px;
  height: 78px;
  left: 767px;
  top: 3057px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 133.3%;
  /* or 27px */

  color: #454545;
}
#linkk2 {
  position: absolute;
  width: 200px;
  height: 21px;
  left: 276px;
  top: 3157px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  /* or 20px */

  color: #1680a5;
}
#linkk3 {
  position: absolute;
  width: 339px;
  height: 18px;
  left: 769px;
  top: 3157px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  /* or 20px */

  color: #1680a5;
}
#linkk4 {
  position: absolute;
  width: 265px;
  height: 22px;
  left: 830px;
  top: 2301px;

  font-family: Barlow;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;
  /* or 20px */

  color: #1680a5;
}
</style>
