import { BoxProps } from "@mui/material";

export interface HorizontalCardProps extends BoxProps {
  iconName: string;
  text: string;
  isSelected: boolean;
}
