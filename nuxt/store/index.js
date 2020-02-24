export const state = () => ({
  darkMode: true,
  stakeHolderSlider: {
    visible: false,
    slug: null
  },
  definitionSlider: {
    visible: false,
    slug: null
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
