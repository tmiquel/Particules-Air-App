import axios from "axios";

export const state = () => ({
  darkMode: true,
  imgReferencesArray: [],
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
    sportifs: "Les sportifs ne sont pas épargnés par la pollution de l'air"
  }
});

export const getters = {
  getImgRefByID: state => stringInID => {
    return state.imgReferencesArray.find(img =>
      img.publicId.includes(stringInID)
    );
  },
  getImgUrlByID: state => stringInID => {
    return state.imgReferencesArray.find(img =>
      img.publicId.includes(stringInID)
    ).responsiveUrl;
  },
  getImgPublicID: state => stringInID => {
    return state.imgReferencesArray.find(img =>
      img.publicId.includes(stringInID)
    ).publicId;
  }
};

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
                           responsiveUrl: `https://res.cloudinary.com/particules/image/upload/w_auto:breakpoints:500/v${image.version}/${image.public_id}.${image.format}`,
                           format: image.format,
                           width: image.width,
                           height: image.height
                         };
                       })
                     );
                     //https://res.cloudinary.com/particules/image/upload/w_auto:breakpoints_200_1920_30_15:500,g_auto,c_fill_pad,f_auto/v1583486501/banners/landing/banner-background-image-crop_owtwsk.jpg
                   })
      .catch(error => {
        console.log("Error - Axios getting particules list of imgs from Cloudinary:",  error.response);
      });;
  }
};
