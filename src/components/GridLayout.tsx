import { Box, Grid, Paper, Typography, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const GridLayout = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h2" mt={1}>
        Layout using grid - row
      </Typography>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>xs=8</Item>
        </Grid>
      </Grid>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
      </Grid>

      <Typography variant="h2" mt={1}>
        Layout using grid - column
      </Typography>
      <Grid container flexDirection='column' spacing={2} mt={1}>
        <Grid item xs={10}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={8}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>2</Item>
        </Grid>
      </Grid>

      <Typography variant="h2" mt={1}>
        Layout using grid - overflow
      </Typography>
      <Grid container spacing={2} mt={1}>
        <Grid item xs={10}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={9}>
          <Item>2</Item>
        </Grid>
      </Grid>
    </Box>
  );
};
