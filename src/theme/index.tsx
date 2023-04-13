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

export const theme = createTheme({
  background: backgroundColorPalette,
  foreground: foregroundColorPalette,
  images: {
    logo: "https://picsum.photos/200"
  },
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
