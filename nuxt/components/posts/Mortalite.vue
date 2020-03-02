<template>
  <div>
    <app-sub-heading>Mortalité</app-sub-heading>
    <p
      class="text-justify"
    >2500 décès par an, c’est que représente aujourd’hui la pollution de l’Air dans la ville de Marseille.</p>
    <p
      class="text-justify"
    >48000 personnes sur le pays entier. A titre de comparaison la grippe en 2018 a tué 9 900 personnes sur tout le territoire.</p>
    <p
      class="text-justify"
    >A Marseille cette fois-ci, entre la proximité du Grand port maritime et les autoroutes, 170.000 habitants vivraient dans un environnement pollué.</p>
    <p class="text-justify">
      En 2017, 54 % des habitants de Provence-Alpes-Côte d’Azur sont exposés, sur leur lieu de résidence, à une concentration annuelle moyenne en PM10 supérieure à la ligne directrice de l’OMS.
      <a
        href="https://www.insee.fr/fr/statistiques/4250618"
      >
        <i>Voir ici</i>
      </a>
    </p>
    <div>
      <!-- Single button triggers two "<b-collapse>" components -->
      <AppButton v-b-toggle.collapse-a.collapse-b>Sujet Relatifs</AppButton>
      <!-- Elements to collapse -->
      <b-collapse id="collapse-a" class="mt-2">
        <b-card>
          <a href="/posts/enfants">
            <strong>
              <i>Les enfants durement impactés par la pollution de l’air</i>
            </strong>
          </a>
        </b-card>
      </b-collapse>
      <b-collapse id="collapse-b" class="mt-2">
        <b-card>
          <a href="/posts/femmes-enceintes">
            <strong>
              <i>Femmes enceintes : les impacts de la qualité de l’air sur le foetus</i>
            </strong>
          </a>
        </b-card>
      </b-collapse>
    </div>
  </div>
</template>
