<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <app-heading>Pourquoi la qualité de l’air devrait-elle être si difficile à comprendre ? </app-heading>

        <!-- <cld-image publicId="sensitive-publics/sportifs_xtjvfx" /> -->




        <p class="text-justify">
          Se réapproprier les données de la qualité de l’air n’a jamais été aussi simple. Vous allez trouver des cartes
          interactives, des infographies explicatives, un lexique, des sources étayées sur des sujets pointus, vous
          aurez toutes les clés pour devenir un “quasi” expert de la qualité de l’air.
        </p>

        <p class="text-justify">
          Tout d’abord commençons par l’essentiel :
          <strong> Quelle est la qualité de l'air dans votre quartier? </strong>
        </p>

        <map-preview name="pollution-par-iris"></map-preview>

        <app-button class="d-flex ml-auto flex-shrink-1 align-self-end" to="/posts/mortalite"
          >Article suivant ></app-button
        >

        <app-heading>La pollution de l’air en quelques chiffres : vues du monde vers notre ville</app-heading>

        <app-sub-heading>Échelle Mondiale (icône Carte monde)</app-sub-heading>

        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>91%</strong> de la population mondiale vivaient dans des endroits où les lignes directrices de l’OMS
            relatives à la qualité de l’air n’étaient pas respectées en 2016.
          </p>

          <footer class="blockquote-footer">
            <cite title="Source Title">OMS - Principaux repères sur la qualité de l'air</cite>
          </footer>
        </blockquote>

        <app-sub-heading>Echelle européeenne</app-sub-heading>

        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>400 000 morts</strong> prématurées par an en Europe. Ces dernières sont causées par des maladies
            cardiaques, des attaques cardiaques, des maladies des poumons ou encore des cancers du poumon imputables à
            la pollution de l'air, selon l'Organisation mondiale de la santé (OMS).
          </p>
          <footer class="blockquote-footer">
            <cite title="Source Title">OMS - Principaux repères sur la qualité de l'air</cite>
          </footer>
        </blockquote>

        <p class="text-justify">
          L’info en plus : neufs États membres considérés comme mauvais élèves pour leurs dépassements réguliers des
          limites d'émissions de polluants, ont été convoqués à Bruxelles le 30 janvier 2018 pour un sommet sur la
          qualité de l'air.
        </p>

        <p class="text-justify">
          Parmi eux, l<strong>'Allemagne</strong>, la <strong>France</strong>, le <strong>Royaume-Uni</strong>,
          l'<strong>Italie</strong>, la<strong> Hongrie</strong> et la <strong>Roumanie</strong> ont été renvoyés par la
          Commission européenne devant la Cour de justice de l'UE pour non-respect de la législation européenne.
          <strong>En France, en Allemagne et au Royaume-Uni</strong>, cela concerne les dépassements de plafonds de
          dioxyde d'azote (voir plus bas). L'Espagne, la Slovaquie et la République tchèque échappent pour l'instant à
          la procédure.
        </p>

        <p class="text-justify">
          La <strong>Bulgarie</strong> et la <strong>Pologne</strong> ont quant à elles été condamnées par la CJUE en
          2017 et 2018 pour non-respect des valeurs limites applicables aux particules fines PM10 dans l'air ambiant.
        </p>

        <app-sub-heading>Echelle nationale (icone carte France)</app-sub-heading>

        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>2nd.</strong> Après le dérèglement climatique, la pollution de l’air arrivent en seconde position
            parmis les préoccupations des Français (publication de 2018 étude sur un panel de 1000 personnes) et devant
            la pollution de l’eau et la disparition des espèces animales.
          </p>

          <footer class="blockquote-footer">
            <cite title="Source Title"
              >INSEE Analyses - En 2017, le seuil de l’OMS dépassé pour la moitié des résidents de la région</cite
            >
          </footer>
        </blockquote>

        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>1900</strong> décès environ pourraient être évités si si les niveaux moyens annuels de PM10 étaient
            ramenés à 20 μg/m3.
          </p>

          <footer class="blockquote-footer">
            <cite title="Source Title"
              >Ministères des Solidarités et de la Santé - Direction de la recherche, des études, de l'évaluation et des
              statistiques</cite
            >
          </footer>
        </blockquote>
        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>7 mois</strong>, c’est la perte d’espérance de vie moyenne pouvant être atteintes sur certaines
            communes
          </p>
          <footer class="blockquote-footer">
            <cite title="Source Title">AFSP 2016, Aphékom 2013</cite>
          </footer>
        </blockquote>

        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>27 associations</strong> agréées pour la surveillance de la qualité de l’air : elles sont regroupées
            au sein de la fédération ATMO France
          </p>

          <footer class="blockquote-footer">
            <cite title="Source Title">ATMO France</cite>
          </footer>
        </blockquote>

        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>70 à 100 milliard d’€ /an</strong> en dépenses de santé, perte de productivité, perte de qualité de
            vie
          </p>
          <footer class="blockquote-footer">
            <cite title="Source Title">Sénat 2015</cite>
          </footer>
        </blockquote>

        <app-sub-heading>Echelle régionale</app-sub-heading>

        <blockquote class="blockquote">
          <p class="mb-0">
            <strong>19 900 tonnes</strong>, c’est la production de PM10 en Provence-Alpes-Côte d’Azur atteint en 2017
            selon l’inventaire d’émissions. Avec 8 500 tonnes, les Bouches-du-Rhône sont le plus gros émetteur (figure
            3), à l’inverse des Alpes-de-Haute-Provence (1 200 tonnes) et des Hautes-Alpes (900 tonnes).
          </p>

          <footer class="blockquote-footer">
            <cite title="Source Title"
              >INSEE Analyses - En 2017, le seuil de l’OMS dépassé pour la moitié des résidents de la région</cite
            >
          </footer>
        </blockquote>

        <app-sub-heading>Echelle ville</app-sub-heading>

        <blockquote class="blockquote">
          <p class="mb-0"><strong>2500</strong> décès prématurés par an uniquement à Marseille.</p>
        </blockquote>

        <app-button class="d-flex ml-auto flex-shrink-1" to="/posts/mortalite">Article suivant ></app-button>
      </div>
    </div>
  </div>
</template>
