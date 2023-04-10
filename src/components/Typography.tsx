import { Box, Typography as MuiTypography } from "@mui/material";

export function Typography() {
  return (
    <>
      <Box my={5} textAlign="center">
        <MuiTypography variant="h1">Typography</MuiTypography>
      </Box>
      <Box textAlign="center">
        <Box>
          <MuiTypography variant="h1">h1</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="h2">h2</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="h3">h3</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="h4">h4</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="h5">h5</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="h6">h6</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="h7">h7</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="h8">h8</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodyLarge">Body Large</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodyLargeBold">Body Large Bold</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodyMedium">Body Medium</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodyMediumBold">
            Body Medium Bold
          </MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodySmall">Body Small</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodySmallBold">Body Small Bold</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodyXSmall">Body X Small</MuiTypography>
        </Box>
        <Box>
          <MuiTypography variant="bodyXSmallBold">
            Body X Small Bold
          </MuiTypography>
        </Box>
      </Box>
    </>
  );
}
