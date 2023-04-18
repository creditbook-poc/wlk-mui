import { ButtonProps, TypographyProps } from "@mui/material";

export interface CbButtonProps extends ButtonProps {
  /**
   * text to be displayed inside the button
   */
  text: TypographyProps;
}
