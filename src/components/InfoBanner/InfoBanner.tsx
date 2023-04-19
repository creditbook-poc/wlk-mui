import { InfoOutlined } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { InfoBannerProps } from "./InfoBannerProps";

export const InfoBanner: React.FC<InfoBannerProps> = ({ text }) => {
  const theme = useTheme();

  return (
    <Box
      alignItems="center"
      bgcolor={theme.background.cardImportant}
      borderRadius={3}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingY={2}
    >
      <InfoOutlined color="info" />
      <Typography variant="bodyXSmall" textAlign="center">
        {text}
      </Typography>
    </Box>
  );
};
