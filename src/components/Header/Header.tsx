import { Box, Button, Icon, Typography } from "@mui/material";
import { HeaderProps } from "./HeaderProps";
import { CbButton } from "../CbButton/CbButton";

export const Header: React.FC<HeaderProps> = ({
  text,
  isHelpButtonEnabled,
}) => {
  return (
    <Box
      display="flex"
      paddingX={2}
      paddingY={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow={2}
    >
      <Box display="flex">
        <Icon sx={{ marginRight: 1, color: "primary.dark" }}>arrow_back</Icon>
        <Typography variant="h4">{text}</Typography>
      </Box>
      {isHelpButtonEnabled && (
        <CbButton variant='outlined' size='small' text={{ children: 'Help', variant: 'bodyXSmallBold' }} />
      )}
    </Box>
  );
};
