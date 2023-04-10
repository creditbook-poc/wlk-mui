import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

function Layout() {
  return (
    <>
      <Typography marginY={2} variant="h5">
        Box - A wrapper component for most of CSS utility needs
      </Typography>
      <Box bgcolor="yellow">
        <Typography variant="h5">This is a simple box</Typography>
      </Box>

      <Typography marginY={2} variant="h5">
        Box with flex
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          bgcolor: "aqua",
        }}
      >
        <Typography bgcolor="grey" variant="h5">
          item1
        </Typography>
        <Typography bgcolor="grey" variant="h5">
          item2
        </Typography>
        <Typography bgcolor="grey" variant="h5">
          item3
        </Typography>
      </Box>

      <Typography marginY={2} variant="h5">
        Container - The most basic mui layout element, it centers the content
        horizontally
      </Typography>
      <Container sx={{ backgroundColor: "orange" }}>
        <Typography variant="h5">I'm inside a container</Typography>
      </Container>

      <Typography marginY={2} variant="h5">
        Grid - mui grid
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 sm={4}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            4
          </Typography>
        </Grid2>
        <Grid2 sm={4}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            4
          </Typography>
        </Grid2>
        <Grid2 sm={4}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            4
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2}>
        <Grid2 sm={2}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            2
          </Typography>
        </Grid2>
        <Grid2 sm={2}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            2
          </Typography>
        </Grid2>
        <Grid2 sm={2}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            2
          </Typography>
        </Grid2>
        <Grid2 sm={2}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            2
          </Typography>
        </Grid2>
        <Grid2 sm={2}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            2
          </Typography>
        </Grid2>
        <Grid2 sm={2}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            2
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2 container spacing={2}>
        <Grid2 sm={8}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            8
          </Typography>
        </Grid2>
        <Grid2 sm={4}>
          <Typography variant="h5" bgcolor="tomato" textAlign="center">
            4
          </Typography>
        </Grid2>
      </Grid2>

      <Typography marginY={2} variant="h5">
        Stack - The Stack component manages layout of immediate children along
        the vertical or horizontal axis with optional spacing and/or dividers
        between each child.
      </Typography>
      <Stack spacing={2}>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 1
        </Typography>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 2
        </Typography>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 3
        </Typography>
      </Stack>

      <Typography marginY={2} variant="h5">
        By default, stack arranges the items in column direction, however, the
        direction prop can be used to position items in row direction
      </Typography>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 1
        </Typography>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 2
        </Typography>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 3
        </Typography>
      </Stack>

      <Typography marginY={2} variant="h5">
        With divider
      </Typography>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        justifyContent="center"
        spacing={2}
      >
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 1
        </Typography>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 2
        </Typography>
        <Typography textAlign="center" bgcolor="pink" variant="h5">
          Item 3
        </Typography>
      </Stack>
    </>
  );
}

export default Layout;
