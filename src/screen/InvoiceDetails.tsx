import { Download, InfoOutlined } from "@mui/icons-material";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { CbButton } from "../components/Primitive/CbButton/CbButton";
import { Header } from "../components/Header/Header";
import { InfoBanner } from "../components/InfoBanner/InfoBanner";
import { PaymentInvoice, PaymentInvoiceDto } from "../models";

export const InvoiceDetails = () => {
  const theme = useTheme();

  const paymentInvoice = new PaymentInvoice({} as PaymentInvoiceDto);
  const { consumerNumber, consumerName } = paymentInvoice;

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      height="100vh"
      overflow="hidden"
    >
      <Header isHelpButtonEnabled text="Adayigi Karein" />
      <Box marginX={3} marginTop={2}>
        <InfoBanner
          text={`Yeh 1Bill invoice ${paymentInvoice.getExpiryDate()} par expire hojaye gi, jiskay baad
        aapko dobara nayi invoice banani hogi`}
        />
      </Box>
      <Box
        bgcolor={theme.background.surfaceBasic}
        borderRadius={3}
        marginX={3}
        my={2}
      >
        <Box ml={3} my={2} height="100%">
          <Typography variant="h5" color="primary.dark">
            IBill Invoice Voucher
          </Typography>
          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.foreground.highEmphasis}
            >
              Consumer Invoice Number:
            </Typography>
            <Typography
              variant="bodyMedium"
              color={theme.foreground.highEmphasis}
            >
              {consumerNumber}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.foreground.highEmphasis}
            >
              Payment Due Date
            </Typography>
            <Typography
              variant="bodyMedium"
              color={theme.foreground.highEmphasis}
            >
              {paymentInvoice.getDueDate().toString()}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.foreground.highEmphasis}
            >
              Bill Title:
            </Typography>
            <Typography
              variant="bodyMedium"
              color={theme.foreground.highEmphasis}
            >
              {consumerName}
            </Typography>
          </Box>

          <Box display="flex" flexDirection="column" mt={3}>
            <Typography
              variant="bodyMediumBold"
              color={theme.foreground.highEmphasis}
            >
              Billed Amount:
            </Typography>
            <Typography
              variant="bodyMedium"
              color={theme.foreground.highEmphasis}
            >
              Payment: Rs. {paymentInvoice.invoiceAmount}
            </Typography>
            <Typography
              variant="bodyMedium"
              color={theme.foreground.highEmphasis}
            >
              Transaction Fee: Rs. {paymentInvoice.getTransactionFee()}
            </Typography>
            <Box mt={1}>
              <Typography
                variant="bodyMediumBold"
                color={theme.foreground.highEmphasis}
              >
                Total: Rs. {paymentInvoice.amountWithinDueDate}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        spacing={1}
        paddingBottom={2}
        paddingX={3}
        height="100%"
        alignItems="flex-end"
      >
        <Grid item xs={6}>
          <CbButton fullWidth variant="outlined" size="large">
            <Typography variant="buttonMedium">Instructions</Typography>
          </CbButton>
        </Grid>
        <Grid item xs={6}>
          <CbButton
            fullWidth
            variant="contained"
            size="large"
            startIcon={<Download />}
          >
            <Typography variant="buttonMedium">Download</Typography>
          </CbButton>
        </Grid>
      </Grid>
    </Box>
  );
};
