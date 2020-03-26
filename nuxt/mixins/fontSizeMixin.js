export default {
  methods: {
    responsiveFontSize(context) {
      const fontSizeEnvVar = {
        fontSizeTopicTitle: {
          mobile: "0.9rem", // appPostBanner
          desktop: "1.3rem"
        },
        fontSizePostTitle: {
          mobile: "1.6rem", // appPostBanner
          desktop: "2.1rem"
        },
        fontSizePostAuthorDate: {
          mobile: "0.8rem", // appPostBanner
          desktop: "1rem"
        },
        fontSizeLandingBannerTitle: {
          mobile: "1.75rem", // AppLandingBanner /!\
          desktop: "2.5rem"
        },
        fontSizeLandingBannerSubtitle: {
          mobile: "0.8rem", // AppLandingBanner
          desktop: "1.5rem"
        },
        fontSizeCardTitle: {
          mobile: "0.9rem", // SourcesCard & DefinitionsCard & StakeholderCard
          desktop: "1.1rem"
        },
        fontSizeParticulesMemberCardTitle: {
          mobile: "0.9rem", // Particules Member Card
          desktop: "25px"
        },
        fontSizeCardText: {
          mobile: "0.8rem", // SourcesCard & DefinitionsCard & BackToPostLink
          desktop: "1rem"
        },
        fontSizeHeading: {
          mobile: "1.25rem", // AppHeading
          desktop: "1.7rem"
        },
        fontSizeFooter: {
          mobile: "0.7rem", // ThePostsMenu & PostCard
          desktop: "1rem"
        },
        fontSizeLateralSliderTitle: {
          mobile: "1.1rem", // SourcesCard & DefinitionsCard & Mortalite
          desktop: "1.6rem"
        },
        fontSizeLateralSliderText: {
          mobile: "0.9rem", // SourcesCard & DefinitionsCard & Mortalite
          desktop: "1.2rem"
        }
      };
      if (this.$mq === "mobile") {
        return {
          fontSize: fontSizeEnvVar[context].mobile
        };
      } else
        return {
          fontSize: fontSizeEnvVar[context].desktop
        };
    }
  }
};
