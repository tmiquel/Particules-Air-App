export const state = () => ({
  darkMode: true,
  stakeHolderSlider: {
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
  }
};
