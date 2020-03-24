import axios from "axios";

export const state = () => ({
         darkMode: true,
         imgReferencesArray: [],
         stakeholderSlider: {
           visible: false,
           slug: null
         },
         definitionSlider: {
           visible: false,
           slug: null
         },
         particulesTeamMemberSlider: {
           visible: false,
           slug: null
         }
       });


export const getters = {
  getImgPublicID: state => stringInID => {
    return state.imgReferencesArray.find(img =>
      img.publicId.includes(stringInID)
    ).publicId;
  }
};

export const mutations = {
  OPEN_STAKEHOLDER_SLIDER(state, slug) {
    state.stakeholderSlider.visible = true;
    state.stakeholderSlider.slug = slug;
  },
  CLOSE_STAKEHOLDER_SLIDER(state) {
    state.stakeholderSlider.visible = false;
    state.stakeholderSlider.slug = null;
  },
  OPEN_DEFINITION_SLIDER(state, slug) {
    state.definitionSlider.visible = true;
    state.definitionSlider.slug = slug;
  },
  CLOSE_DEFINITION_SLIDER(state) {
    state.definitionSlider.visible = false;
    state.definitionSlider.slug = null;
  },
  OPEN_TEAM_MEMBER_SLIDER(state, slug) {
    state.particulesTeamMemberSlider.visible = true;
    state.particulesTeamMemberSlider.slug = slug;
  },
  CLOSE_TEAM_MEMBER_SLIDER(state) {
    state.particulesTeamMemberSlider.visible = false;
    state.particulesTeamMemberSlider.slug = null;
  },
  SET_IMAGES_REF_ARRAY(state, slug) {
    state.imgReferencesArray = slug;
  }
};

export const actions = {
  async cloudinaryInit(vuexContext, payload) {
    await axios
      .get("https://res.cloudinary.com/particules/image/list/particules.json")
      .then(res => {
        vuexContext.commit(
          "SET_IMAGES_REF_ARRAY",
          res.data.resources.map(image => {
            return {
              publicId: image.public_id,
              url: `https://res.cloudinary.com/particules/image/upload/v${image.version}/${image.public_id}.${image.format}`,
              version: image.version,
              defaultResponsiveUrl: `https://res.cloudinary.com/particules/image/upload/w_auto:breakpoints:500/v${image.version}/${image.public_id}.${image.format}`,
              format: image.format,
              width: image.width,
              height: image.height
            };
          })
        );
        //https://res.cloudinary.com/particules/image/upload/w_auto:breakpoints_200_1920_30_15:500,g_auto,c_fill_pad,f_auto/v1583486501/banners/landing/banner-background-image-crop_owtwsk.jpg
      })
      .catch(error => {
        console.log(
          "Error - Axios getting particules list of imgs from Cloudinary:",
          error.response
        );
      });
  }
};
