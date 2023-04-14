import { createTheme } from "@mui/material";
import {
  backgroundColorPalette,
  dangerColorPalette,
  foregroundColorPalette,
  infoColorPalette,
  primaryColorPalette,
  successColorPalette,
  warningColorPalette,
} from "./colors";
import { variants } from "./typography";
import "./index.d";
import { images } from "./images";

export const theme = createTheme({
  background: backgroundColorPalette,
  foreground: foregroundColorPalette,
  images: images,
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
