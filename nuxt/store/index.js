export const state = () => ({
         darkMode: true,
         stakeHolderSlider: {
           visible: false,
           slug: null
         },
         definitionSlider: {
           visible: false,
           slug: null
         },
         postsTitle: {
           mortalite:
             "Mon Air en Région Sud : L’augmentation de la mortalité dûe à la qualité de l’air",
           home:
             "Comprendre comment l’air impacte votre santé avec des données locales.",
           "sante-air":
             "Tout savoir sur la nocivité et les risques associés à chaque polluant (Particules fines, composés azotés, ozone)",
           enfants: "Les enfants durement impactés par la pollution de l’air",
           "femmes-enceintes":
             "Femmes enceintes : les impacts de la qualité de l’air sur le foetus",
           "particules-fines": "Les particules fines",
           "personnes-agees":
             "Les personnes âgées : les plus fragiles en danger à cause de l’air dégradé",
           sportifs:
             "Les sportifs ne sont pas épargnés par la pollution de l'air"
         }
       });

export const mutations = {
  OPEN_STAKEHOLDER_SLIDER(state, slug) {
    state.stakeHolderSlider.visible = true;
    state.stakeHolderSlider.slug = slug;
  },
  CLOSE_STAKEHOLDER_SLIDER(state) {
    state.stakeHolderSlider.visible = false;
    state.stakeHolderSlider.slug = null;
  },
  OPEN_DEFINITION_SLIDER(state, slug) {
    state.definitionSlider.visible = true;
    state.definitionSlider.slug = slug;
  },
  CLOSE_DEFINITION_SLIDER(state) {
    state.definitionSlider.visible = false;
    state.definitionSlider.slug = null;
  }
};
