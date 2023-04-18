import {
  backgroundColorPaletteType,
  foregroundColorPaletteType,
} from "./colors";
import { Images } from "./images";

declare module "@mui/material/styles" {
  interface Theme {
    background: backgroundColorPaletteType;
    foreground: foregroundColorPaletteType;
    images: Images;
  }

  interface ThemeOptions {
    background: backgroundColorPaletteType;
    foreground: foregroundColorPaletteType;
    images: Images;
  }

  interface PaletteColor {
    extraLight?: string;
    gradientDark?: string;
    gradientLight?: string;
  }

  interface SimplePaletteColorOptions {
    extraLight?: string;
    gradientDark?: string;
    gradientLight?: string;
  }

  interface TypographyVariants {
    h7: React.CSSProperties;
    h8: React.CSSProperties;
    bodyLarge: React.CSSProperties;
    bodyLargeBold: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodyMediumBold: React.CSSProperties;
    bodySmall: React.CSSProperties;
    bodySmallBold: React.CSSProperties;
    bodyXSmall: React.CSSProperties;
    bodyXSmallBold: React.CSSProperties;
    buttonLarge: React.CSSProperties;
    buttonMedium: React.CSSProperties;
    buttonSmall: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    h7?: React.CSSProperties;
    h8?: React.CSSProperties;
    bodyLarge?: React.CSSProperties;
    bodyLargeBold?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodyMediumBold?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodySmallBold?: React.CSSProperties;
    bodyXSmall?: React.CSSProperties;
    bodyXSmallBold?: React.CSSProperties;
    buttonLarge?: React.CSSProperties;
    buttonMedium?: React.CSSProperties;
    buttonSmall?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    h7: true;
    h8: true;
    bodyLarge: true;
    bodyLargeBold: true;
    bodyMedium: true;
    bodyMediumBold: true;
    bodySmall: true;
    bodySmallBold: true;
    bodyXSmall: true;
    bodyXSmallBold: true;
    buttonLarge: true;
    buttonMedium: true;
    buttonSmall: true;
  }
}
