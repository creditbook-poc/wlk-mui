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
import "./index.d"

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
