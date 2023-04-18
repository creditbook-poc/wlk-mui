import {
  Avatar,
  Box,
  Button,
  Icon,
  Input,
  InputAdornment,
  TextField,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import cbLogo from "../assets/creditbook.png";
import { Search } from "@mui/icons-material";
import { Header } from "../components/Header/Header";
import { HorizontalCard } from "../components/HorizontalCard/HorizontalCard";
import { OfferBanner } from "../components/OfferBanner/OfferBanner";
import { Loan, LoanDto } from "../models";

export function PayNow() {
  const theme = useTheme();

  const RoundedTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: 100,
    },
  }));

  const loan = new Loan({} as LoanDto);

  return (
    <>
      <Header text="Adaiyagi Karein" isHelpButtonEnabled />
      <Box display="flex" flexDirection="column" pt={2} px={2}>
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
      </Box>
    </>
  );
}
