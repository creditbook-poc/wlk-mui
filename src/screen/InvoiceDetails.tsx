import { Download, InfoOutlined } from "@mui/icons-material";
import { Box, Grid, Typography, useTheme } from "@mui/material";
import { CbButton } from "../components/Primitive/CbButton/CbButton";
import { Header } from "../components/Header/Header";

export const InvoiceDetails = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      height="100vh"
      overflow="hidden"
    >
      <Header isHelpButtonEnabled text="Adayigi Karein" />
      <Box
        alignItems="center"
        bgcolor={theme.background.cardImportant}
        borderRadius={3}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        marginX={3}
        marginTop={2}
        paddingY={2}
      >
        <InfoOutlined color="info" />
        <Typography variant="bodyXSmall" textAlign="center">
          Yeh 1Bill invoice 17/02/23 1:32 PM par expire hojaye gi, jiskay baad
          aapko dobara nayi invoice banani hogi
        </Typography>
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
              12433494392220405
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
              17/02/2023
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
              Ahmed Khan
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
              Payment: Rs. 3000
            </Typography>
            <Typography
              variant="bodyMedium"
              color={theme.foreground.highEmphasis}
            >
              Transaction Fee: Rs. 15
            </Typography>
            <Box mt={1}>
              <Typography
                variant="bodyMediumBold"
                color={theme.foreground.highEmphasis}
              >
                Total: Rs. 3015
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Grid
        container
        spacing={2}
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
