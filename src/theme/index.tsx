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
});
