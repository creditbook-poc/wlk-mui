import {
  Avatar,
  Box,
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

export function LedgerHome() {
  const theme = useTheme();

  const RoundedTextField = styled(TextField)(() => ({
    "& .MuiOutlinedInput-root": {
      borderRadius: 100,
    },
  }));

  return (
    <Box display="flex" flexDirection="column" flex={1} height="100vh">
      <Box
        paddingX={2}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        color={theme.background.cardSuccess}
        bgcolor="primary.dark"
        height="8%"
      >
        <Box display="flex">
          <img height={20} width={20} src={cbLogo} alt="logo" />
          <Typography ml={1} variant="h6">
            Khushamdeed Hassan!
          </Typography>
        </Box>
        <Box>
          <Icon sx={{ marginRight: 1 }}>language</Icon>
          <Icon>helpOutlineIcon</Icon>
        </Box>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        bgcolor={theme.background.cardSuccess}
        height="12%"
      >
        <Avatar sx={{ width: 45, height: 45, marginLeft: 2}} src={theme.images?.logo} />
        <Box marginX={1} display="flex" justifyContent="space-between" flex={1}>
          <Box>
            <Typography variant="h7">RetailPay</Typography>
            <Typography
              variant="bodyXSmall"
              bgcolor={theme.background.cardImportant}
              component="div"
            >
              FSO ID #03563457696
            </Typography>
          </Box>
          <Box>
            <Typography variant="h8">Total Collected Today</Typography>
            <Typography variant="h5" align="right">
              Rs. 21,800
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box height="80%" margin={2}>
        <RoundedTextField
          fullWidth
          placeholder="Retailer search karain"
          size="small"
          variant="outlined"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar sx={{ width: 45, height: 45 }} />
          <Box
            marginX={1}
            display="flex"
            justifyContent="space-between"
            flex={1}
          >
            <Box>
              <Typography variant="h7">Ahmedullah</Typography>
              <Typography
                variant="bodyXSmall"
                bgcolor={theme.background.surfaceBasic}
                color={theme.foreground.mediumEmphasis}
                paddingX={0.5}
                paddingY={0.25}
                component="div"
              >
                Payment Due
              </Typography>
            </Box>
            <Box>
              <Typography color="error.main" variant="bodySmall">
                Pending Amount
              </Typography>
              <Typography
                color="error.main"
                variant="h7"
                align="right"
                component="h6"
              >
                Rs. 21,800
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar sx={{ width: 45, height: 45 }} />
          <Box
            marginX={1}
            display="flex"
            justifyContent="space-between"
            flex={1}
          >
            <Box>
              <Typography variant="h7">Ghulam Rasool</Typography>
              <Typography
                variant="bodyXSmall"
                bgcolor={theme.background.surfaceBasic}
                color={theme.foreground.mediumEmphasis}
                paddingX={0.5}
                paddingY={0.25}
                component="div"
              >
                Payment Due
              </Typography>
            </Box>
            <Box>
              <Typography color="error.main" variant="bodySmall">
                Pending Amount
              </Typography>
              <Typography
                color="error.main"
                variant="h7"
                align="right"
                component="h6"
              >
                Rs. 4,000
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mt={2}>
          <Avatar sx={{ width: 45, height: 45 }} />
          <Box
            marginX={1}
            display="flex"
            justifyContent="space-between"
            flex={1}
          >
            <Box display='flex' flexDirection='column'>
              <Typography variant="h7">Ahmedullah</Typography>
              <Typography
                variant="bodyXSmall"
                bgcolor={theme.background.surfaceBasic}
                color={theme.foreground.mediumEmphasis}
                paddingX={0.5}
                paddingY={0.25}
              >
                Paid
              </Typography>
            </Box>
            <Box>
              <Typography color="success.main" variant="bodySmall">
                Clear
              </Typography>
              <Typography
                color="success.main"
                variant="h7"
                align="right"
                component="h6"
              >
                Rs. 0
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
