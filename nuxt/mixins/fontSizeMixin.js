export const fontSizeMixin = {
  methods: {
    responsiveFontSize(fontSizeEnvVar) {
      if (this.$mq === "mobile") {
        return {
          fontSize: fontSizeEnvVar.mobile
        };
      } else
        return {
          fontSize: fontSizeEnvVar.desktop
        };
    }
  }
};
