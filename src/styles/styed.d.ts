import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      secondary: string;

      title: string;
      text: string;
      textButtonFilled: string;

      shadow: string;
    };
    fontSizes: {
      title: string;
      subtitle: string;
      topic: string;
      text: string;

      headerLink: string;
      buttonText: string;

      cardTitle: string;
      cardText: string;
      cardLink: string;

      footerName: string;
      footerLink: string;
      footerRights: string;
    };
    fontWeight: {
      regular: string;
      medium: string;
      semiBold: string;
    };
    lineHeight: {
      title: string;
      subtitle: string;
      topic: string;
      text: string;

      cardText: string;

      footerName: string;
      footerRights: string;
    };
    spacings: {
      stack: {
        extraLarge: string;
        large: string;
        medium: string;
        small: string;
        extraSmall: string;
      };
      inline: {
        large: string;
        medium: string;
        small: string;
      };
    };
  }
}
