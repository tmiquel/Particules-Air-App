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
          mobile: "0.9rem", // SourcesCard & DefinitionsCard
          desktop: "1.1rem"
        },
        fontSizeCardText: {
          mobile: "0.8rem", // SourcesCard & DefinitionsCard
          desktop: "1rem"
        },
        fontSizeHeading: {
          mobile: "1.25rem", // AppHeading
          desktop: "1.7rem"
        },
        fontSizeFooter: {
          mobile: "0.7rem", // TheFooter
          desktop: "1rem"
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
