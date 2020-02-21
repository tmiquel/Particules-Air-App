export const state = () => ({
  darkMode: true,
  stakeHolderSlider: {
    visible: false,
    slug: null
  },
  sourceSlider: {
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
  OPEN_SOURCE_SLIDER(state, slug) {
    state.sourceSlider.visible = true;
    state.sourceSlider.slug = slug;
  },
  CLOSE_SOURCE_SLIDER(state) {
    state.sourceSlider.visible = false;
    state.sourceSlider.slug = null;
  }
};
