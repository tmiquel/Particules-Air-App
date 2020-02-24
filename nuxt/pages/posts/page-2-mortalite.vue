<template>
  <div>
    <app-page-banner :postTitle="title" />

    <div class="container">
      <app-heading>2500 décès par an</app-heading>
      <p>
        Je mentionne
        <stakeholder-link to="monique_renaud">Monique Renaud</stakeholder-link> et la remercie pour son soutien. Parlons
        des
        <definition-link to="polluants_atmospheriques">polluants atmosphériques</definition-link>
      </p>

      <p>2500 décès par an, c’est que représente aujourd’hui la pollution de l’Air dans la ville de Marseille.</p>
      <p>
        48000 personnes sur le pays entier. A titre de comparaison la grippe en 2018 a tué 9 900 personnes sur tout le
        territoire.
      </p>
      <p>
        Marseille cette fois-ci, entre la proximité du Grand port maritime et les autoroutes, 170.000 habitants
        vivraient dans un environnement pollué.
      </p>
      <p>
        En 2017, 54 % des habitants de Provence-Alpes-Côte d’Azur sont exposés, sur leur lieu de résidence, à une
        concentration annuelle moyenne en PM10 supérieure à la ligne directrice de l’OMS.
        https://www.insee.fr/fr/statistiques/4250618
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Mon Air en Région Sud : L’augmentation de la mortalité dûe à la qualité de l’air'
    }
  }
}
</script>

<style>
</style>
