import { createTheme } from "@mui/material";
import {
  backgroundColorPalette,
  backgroundColorPaletteType,
  dangerColorPalette,
  foregroundColorPalette,
  foregroundColorPaletteType,
  infoColorPalette,
  primaryColorPalette,
  successColorPalette,
  warningColorPalette,
} from "./colors";
import { variants } from "./typography";

declare module "@mui/material/styles" {
  interface Theme {
    background: backgroundColorPaletteType;
    foreground: foregroundColorPaletteType;
  }

  interface ThemeOptions {
    background: backgroundColorPaletteType;
    foreground: foregroundColorPaletteType;
  }

  interface PaletteColor {
    extraLight?: string;
  }

  interface SimplePaletteColorOptions {
    extraLight?: string;
  }

  interface TypographyVariants {
    bodyLarge: React.CSSProperties;
    bodyLargeBold: React.CSSProperties;
    bodyMedium: React.CSSProperties;
    bodyMediumBold: React.CSSProperties;
    bodySmall: React.CSSProperties;
    bodySmallBold: React.CSSProperties;
    bodyXSmall: React.CSSProperties;
    bodyXSmallBold: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    bodyLarge?: React.CSSProperties;
    bodyLargeBold?: React.CSSProperties;
    bodyMedium?: React.CSSProperties;
    bodyMediumBold?: React.CSSProperties;
    bodySmall?: React.CSSProperties;
    bodySmallBold?: React.CSSProperties;
    bodyXSmall?: React.CSSProperties;
    bodyXSmallBold?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    bodyLarge: true;
    bodyLargeBold: true;
    bodyMedium: true;
    bodyMediumBold: true;
    bodySmall: true;
    bodySmallBold: true;
    bodyXSmall: true;
    bodyXSmallBold: true;
  }
}

export const theme = createTheme({
  background: backgroundColorPalette,
  foreground: foregroundColorPalette,
  palette: {
    primary: primaryColorPalette,
    success: successColorPalette,
    warning: warningColorPalette,
    error: dangerColorPalette,
    info: infoColorPalette,
  },
  typography: {
    fontFamily: ["Roboto", "Gilmer"].join(","),
    ...variants,
  },
});
