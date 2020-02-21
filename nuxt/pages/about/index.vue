<template>
  <div class="about-page">
    <div>
      <h1 class="text-center mt-5 mb-5">À PROPOS</h1>
      <p class="mx-auto">
        Open Air est un projet porté par 5 développeurs provençaux conseillés par 'a Lab in the AIR'. Beaucoup d'informations sur la Qualité de l'Air sont disponibles en ligne. Ces bases de données sont dispersées entre plusieurs portails d'accès, parfois impossibles à lire sans logiciel spécifique, parfois difficile à comprendre.
        Un particulier doit également trouver un cheminement adapté entre ces informations, pour obtenir toutes les réponses recherchées avec un niveau de compréhension suffisant et sans oublier des parties importantes.
        Open Air est un portail où des experts publient des articles sur les centres d'intérêt des particuliers pour la thématique Qualité de l'Air. Ces articles référencent les bases de données concernées, et apportent une visualisation immédiate de cette base de donnée là où c'est utile.
      </p>
    </div>

    <div class="team">
      <h1 class="text-center mt-5 mb-5">L'ÉQUIPE</h1>
      <div class="text-center">
        <b-img
          class="mx-3"
          src="https://picsum.photos/250/250/?image=54"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
        <b-img
          class="mx-3"
          src="https://picsum.photos/250/250/?image=54"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
        <b-img
          class="mx-3"
          src="https://picsum.photos/250/250/?image=54"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
      </div>

      <div class="text-center">
        <b-img
          class="mx-3 my-4"
          src="https://picsum.photos/250/250/?image=54"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
        <b-img
          class="mx-3 my-4"
          src="https://picsum.photos/250/250/?image=54"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
        <b-img
          class="mx-3 my-4"
          src="https://picsum.photos/250/250/?image=54"
          v-bind="mainProps"
          rounded="circle"
          alt="image1"
        ></b-img>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainProps: { width: 110, height: 110 }
    }
  }
}
</script>



<style scoped>
p {
  width: 345.9px;
  height: 382.47px;
  left: 34.05px;
  top: 241.54px;

  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: justify;

  color: #454545;
}
</style>
