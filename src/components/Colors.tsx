import { Box, Stack, Typography, useTheme } from "@mui/material";

export function Colors() {
  const theme = useTheme();

  return (
    <>
      <Box mt={5} textAlign="center">
        <Typography variant="h1">Colors</Typography>
      </Box>
      <Stack marginTop={5} marginX={5} direction="row" spacing={5}>
        <Typography variant="h3">Primary</Typography>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "primary.dark",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "primary.main",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "primary.light",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "primary.extraLight",
          }}
        ></Box>
      </Stack>

      <Stack marginTop={5} marginX={5} direction="row" spacing={5}>
        <Typography variant="h3">State</Typography>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "success.dark",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "success.main",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "success.light",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "error.dark",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "error.main",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "error.light",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "info.dark",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "info.main",
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "info.light",
          }}
        ></Box>
      </Stack>

      <Stack marginTop={5} marginX={5} direction="row" spacing={5}>
        <Typography variant="h3">Background</Typography>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.cardDanger}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.cardImportant}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.cardSuccess}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.cardWarning}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.overlayBlack}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.surfaceBasic}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.surfaceDisabled}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.surfacePrimary}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.background.surfaceSelected}`,
          }}
        ></Box>
      </Stack>

      <Stack margin={5} direction="row" spacing={5}>
        <Typography variant="h3">Foreground</Typography>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.foreground.border}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.foreground.highEmphasis}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.foreground.lowEmphasis}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.foreground.mediumEmphasis}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.foreground.placeholder}`,
          }}
        ></Box>
        <Box
          sx={{
            width: 100,
            height: 100,
            backgroundColor: `${theme.foreground.reversedEmphasis}`,
          }}
        ></Box>
      </Stack>
    </>
  );
}
