import { Box, Typography } from "@mui/material";
import { theme } from "../../theme";
import { OfferBannerProps } from "./OfferBannerProps";

export const OfferBanner: React.FC<OfferBannerProps> = ({
  totalAmount,
  discount,
}: OfferBannerProps) => {
  return (
    <Box
      display="flex"
      flexDirection={"column"}
      paddingX={1.5}
      paddingY={1.5}
      boxShadow={1}
      borderRadius={2}
      sx={{ background: "linear-gradient(to right, #267755, #339F71)" }}
    >
      <Box flexDirection={"column"}>
        <Typography variant="h6" color={theme.background.appBg}>
          Order aaj clear kar ke
        </Typography>
        <Typography
          variant="h6"
          sx={{
            background: "linear-gradient(-100deg, #24AE00, #C7FF29)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Rs. {discount.toLocaleString()} bachayen!
        </Typography>
      </Box>
      <Box
        display={"flex"}
        alignSelf={"flex-end"}
        flexDirection={"row"}
        alignItems={"center"}
      >
        <Typography
          variant="bodyXSmall"
          color={theme.background.appBg}
          mr={0.3}
          mt={0.6}
        >
          Pay only
        </Typography>
        <Typography variant="h5" color={theme.background.appBg}>
          Rs. {(totalAmount - discount).toLocaleString()}*
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="bodyXSmall" color={theme.background.appBg}>
          *only valid for today
        </Typography>
        <Typography
          variant="h8"
          color={theme.background.appBg}
          sx={{
            textDecorationLine: "line-through",
            textDecorationStyle: "solid",
            textDecorationColor: "#000000",
          }}
        >
          Rs. {totalAmount.toLocaleString()}
        </Typography>
      </Box>
    </Box>
  );
};
