import { Download, InfoOutlined } from "@mui/icons-material";
import { Box, Typography, useTheme } from "@mui/material";
import { CbButton } from "../components/Primitive/CbButton/CbButton";

export const InvoiceDetails = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      flex={1}
      height="100vh"
      paddingTop={2}
      overflow='hidden'
    >
      <Box
        alignItems="center"
        bgcolor={theme.background.cardImportant}
        borderRadius={3}
        display="flex"
        height="15%"
        flexDirection="column"
        justifyContent="center"
        marginX={3}
      >
        <InfoOutlined color="info" />
        <Typography variant="bodyXSmall" textAlign="center">
          Yeh 1Bill invoice 17/02/23 1:32 PM par expire hojaye gi, jiskay baad
          aapko dobara nayi invoice banani hogi
        </Typography>
      </Box>
      <Box
        height="65%"
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
      <Box
        height="15%"
        display="flex"
        sx={{ boxShadow: "0px -4px 4px -4px rgba(0,0,0,0.2)" }}
        marginTop={1}
      >
        <Box width="100%" marginRight={1} paddingLeft={3} marginTop={3}>
          <CbButton fullWidth variant="outlined" size="large">
            <Typography variant="buttonMedium">Instructions</Typography>
          </CbButton>
        </Box>
        <Box width="100%" marginLeft={1} paddingRight={3} marginTop={3}>
          <CbButton
            fullWidth
            variant="contained"
            size="large"
            startIcon={<Download />}
          >
            <Typography variant="buttonMedium">Download</Typography>
          </CbButton>
        </Box>
      </Box>
    </Box>
  );
};
