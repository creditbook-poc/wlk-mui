import { Box, InputAdornment, Typography, useTheme } from "@mui/material";
import { Header } from "../components/Header/Header";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { OfferBanner } from "../components/OfferBanner/OfferBanner";
import { Loan, LoanDto } from "../models";
import RupeeImage from "../assets/Rs.png";
import { TextInput } from "../components/Primitive/TextInput/TextInput";
import { CbButton } from "../components/Primitive/CbButton/CbButton";

export function PayNow() {
  const theme = useTheme();

  const loan = new Loan({} as LoanDto);

  return (
    <Box height="90vh">
      <Header isHelpButtonEnabled text="Adaiyagi Karein" />
      <Box pt={2} px={2} display="flex" flexDirection="column" height="100%">
        <OfferBanner loan={loan} />
        <Typography
          variant="bodySmall"
          color={theme.foreground.mediumEmphasis}
          my={2}
        >
          Baraye meherbani tafseelat shamil karein takay aapki adayigi record ki
          ja sakey
        </Typography>
        <Typography
          variant="bodySmallBold"
          color={theme.foreground.mediumEmphasis}
          mb={1}
        >
          Payment Method
        </Typography>
        <Box display={"flex"}>
          <HorizontalCard
            iconName="phonelink_ring"
            text="1Bill"
            isSelected={false}
            onClick={() => console.log("1Bill Clicked")}
            mr={1}
          />
          <HorizontalCard
            iconName="money"
            text="Cash via FSO"
            isSelected={true}
            onClick={() => console.log("CashViaFSO clicked")}
          />
        </Box>
        <Box marginTop={3}>
          <TextInput
            fullWidth
            placeholder="Raqam*"
            label="Raqam"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <img src={RupeeImage} width={20} height={12} />
                </InputAdornment>
              ),
            }}
          />
        </Box>
        <Box marginTop={3}>
          <TextInput fullWidth label="Name*" placeholder="Name*" />
        </Box>
        <Box display="flex" alignItems="flex-end" height="100%">
          <CbButton
            fullWidth
            size="large"
            variant="contained"
          >
            <Typography variant="buttonMedium">
              Generate 1Bill Invoice
            </Typography>
          </CbButton>
        </Box>
      </Box>
    </Box>
  );
}
