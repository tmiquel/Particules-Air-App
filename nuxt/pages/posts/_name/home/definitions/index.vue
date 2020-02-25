<template>
  <div>
    <br />
    <br />
    <br />
    <div id="title">LE LEXIQUE</div>
    <br />
    <div class="h1">Polluants atmosphériques :</div>

    <p class="text">
      Composés de gaz et de particules ayant un effet néfaste direct ou indirect sur la santé et l’environnement.
      Les principaux polluants atmosphériques sont : les oxydes d’azote (NOx), l’ozone (O₃), les Composés Organiques Volatiles (COV), les particules PM₁₀ et PM2,5, et le dioxyde de soufre (SO₂).
    </p>
    <br />
    <div class="h1">Particules en suspension :</div>

    <p class="text">
      Les particules en suspension sont toutes les particules portées par l'eau ou par l'air, quantifiables par filtration ou par d'autres procédés physiques.
      Les matières particulaires ou PM sont les particules en suspension dans l'atmosphère terrestre.
    </p>
    <br />
    <div class="h1">PM10 et PM2,5 :</div>

    <p class="text">
      Désignent des particules de diamètre inférieur à 10 micromètres (PM10) et inférieur à 2.5 micromètres (PM2,5 ). Généralement issues d’une combustion non totale, ces particules peuvent être d’origine anthropique (agriculture,
      transports, industries, etc.) ou naturelle (volcanisme, feu de forêt, érosion éolienne, etc.). Elles peuvent avoir des effets importants sur la santé, pénétrant profondément dans l’appareil respiratoire.
    </p>
    <br />
    <div class="h1">COV – Composés Organiques Volatiles :</div>

    <p class="text">
      Molécules très volatiles composées d’au moins un élément de carbone. Selon leurs caractéristiques ils peuvent avoir un effet direct sur la santé (toxique, mutagène ou cancérigène). Ils entrent dans la composition de carburants, mais aussi de nombreux produits courants (peintures, encres, colles, détachants, cosmétiques, solvants, etc.) ce qui explique une forte concentration de ces composés dans l’air intérieur. Ce sont des précurseurs de l’O₃, c’est-à-dire qu’au contact d’autres
      composés chimiques, les COV peuvent participer à la formation de l’Ozone « troposphérique ».
    </p>
    <br />
    <div class="h1">NOx – Oxydes d’Azote :</div>

    <p class="text">
      Molécules émises principalement lors d’une combustion (chauffage, production d’électricité, moteurs des véhicules, etc.). À forte concentration et combiné à d’autres polluants, les oxydes d’azote sont des gaz toxiques et irritants pour les yeux et les voies respiratoires. Ce sont, également, des précurseurs de l’O₃, c’est-à-dire qu’au contact d’autres composés chimiques, les NOx peuvent participer à la formation de
      l’Ozone « troposphérique ».
    </p>
    <br />
    <div class="h1">O₃ – Ozone :</div>

    <p class="text">
      Selon sa localisation dans l’atmosphère, l’ozone a des effets très différents :
      - L’ozone « stratosphérique » : Situé en très haute altitude, il a un rôle protecteur contre les rayons ultraviolets du soleil.
      - L’ozone « troposphérique » : Situé en basse altitude, est créé par la combinaison conjointe de conditions d’ensoleillement favorable, d’oxydes d’azote (NOx) et de COV. Il a effet direct sur la santé, provoquant des irritations pour les voies respiratoires, et sur l’environnement, altérant la photosynthèse et la respiration des végétaux. La température, qu’elle soit haute ou basse agit sur la formation des polluants et des particules fines, augmentant de ce fait la concentration en ozone.
    </p>
    <br />
    <div class="h1">Dioxyde de soufre :</div>

    <p class="text">
      Molécule émise principalement lors de la combustion d’énergies fossiles (chauffage, production d’électricité,
      moteurs diesels, etc.). Ayant une forte odeur, ce polluant peut avoir pour effet d’irriter les yeux et les voies respiratoires.
    </p>
    <br />
    <br />
    <nuxt-link to="/" class="link">Retourner à l’article</nuxt-link>
    <br />
    <br />
  </div>
</template>
<style scoped>
#title {
  position: center;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;

  color: #016fbf;
}
.h1 {
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 19px;
  /* identical to box height */
  text-align: justify;
  text-decoration-line: underline;
  color: #454545;
}
.text {
  text-align: justify;
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;

  color: #454545;
}

.link {
  position: absolute;
  font-family: Barlow;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */
  text-decoration-line: underline;
  color: #454545;
}
</style>
