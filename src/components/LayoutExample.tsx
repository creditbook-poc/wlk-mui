import { Box, Typography } from "@mui/material";

export const LayoutExample = () => {
  return (
    <>
      <Box display='flex' justifyContent='space-evenly' alignItems='center' textAlign='center' height={'100vh'}>
        <Box width={100} height={100} bgcolor="primary.dark" alignSelf='start'>
          <Typography>Box</Typography>
        </Box>
        <Box width={100} height={100} bgcolor="primary.dark">
          <Typography>Box</Typography>
        </Box>
      </Box>
    </>
  );
};
