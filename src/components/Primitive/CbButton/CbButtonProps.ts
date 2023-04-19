import { ButtonProps } from "@mui/material";
import React from "react";

export interface CbButtonProps extends ButtonProps {
  /**
   * Component or string passed to button
   */
  children: React.ReactNode;
}
