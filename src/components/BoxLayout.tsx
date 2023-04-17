import { Box, Typography } from "@mui/material";

export const BoxLayout = () => {
  return (
    <>
      <Typography variant="h2">Simple flex layout (row)</Typography>
      <Box display="flex" height={"25vh"} columnGap={2} ml={2} mt={2} border='dashed' >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">Simple flex layout (column)</Typography>
      <Box
        display="flex"
        flexDirection="column"
        height={"25vh"}
        rowGap={2}
        ml={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - justify content center)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems='center'
        height={"25vh"}
        columnGap={2}
        ml={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - justify content space b/w)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - justify content space evenly)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - flex end)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-end"
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - align items center)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems='center'
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - align items flex end)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems='flex-end'
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (column - align items center)
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='center'
        height={"25vh"}
        rowGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (column - align items start)
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='start'
        height={"25vh"}
        rowGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (column - align items end)
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='end'
        height={"25vh"}
        rowGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - align items start with flex)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems='start'
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box flexGrow={1} width={100} height={100} bgcolor="primary.dark" />
        <Box width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - align items center with flex)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems='center'
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box flex={1} width={100} height={100} bgcolor="primary.dark" />
        <Box flex={1} width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - align items end with flex)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems='end'
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box flex={1} width={100} height={100} bgcolor="primary.dark" />
        <Box flex={2} width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (column - align items end with flex)
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='end'
        height={"25vh"}
        rowGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box flex={1} width={100} height={100} bgcolor="primary.dark" />
        <Box flex={2} width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (column - align items center with flex)
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='center'
        height={"25vh"}
        rowGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box flex={4} width={100} height={100} bgcolor="primary.dark" />
        <Box flex={2} width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (column - align items start with flex)
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='start'
        height={"25vh"}
        rowGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box flex={1} width={100} height={100} bgcolor="primary.dark" />
        <Box flex={4} width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (row - align self)
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        alignItems='start'
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box alignSelf='center' width={100} height={100} bgcolor="primary.dark" />
        <Box alignSelf='end' width={100} height={100} bgcolor="primary.dark" />
      </Box>

      <Typography variant="h2">
        Simple flex layout (column - align self)
      </Typography>
      <Box
        display="flex"
        flexDirection="column"
        alignItems='start'
        height={"25vh"}
        columnGap={2}
        marginX={2}
        mt={2}
        border='dashed' 
      >
        <Box alignSelf='center' width={100} height={100} bgcolor="primary.dark" />
        <Box alignSelf='end' width={100} height={100} bgcolor="primary.dark" />
      </Box>
    </>
  );
};
