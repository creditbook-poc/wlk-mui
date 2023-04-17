import { Box, Button, Icon, Typography } from "@mui/material";
import { HorizontalCardProps } from "./HorizontalCardProps";
import { theme } from "../../theme";

export const HorizontalCard: React.FC<HorizontalCardProps> = ({
  iconName,
  text,
  isSelected,
  ...boxProps
}: HorizontalCardProps) => {
  return (
    <Box
      display="flex"
      paddingX={2}
      paddingY={1.5}
      alignItems={"center"}
      boxShadow={1}
      borderRadius={2}
      bgcolor={
        isSelected ? theme.background.surfaceSelected : theme.background.appBg
      }
      {...boxProps}
    >
      <Icon sx={{ color: "primary.dark" }}>{iconName}</Icon>
      <Typography variant="h7" ml={1}>
        {text}
      </Typography>
    </Box>
  );
};
