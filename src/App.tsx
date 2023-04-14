import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <Typography mt={5} textAlign="center" variant="h1">
        WLK MUI demo
      </Typography>
      <Stack mt={5} textAlign='center'>
        <Link to={"/layout"}>Layout system</Link>
        <Link to={"/colors"}>Colors</Link>
        <Link to={"/typography"}>Typography</Link>
        <Link to={"/example"}>Example</Link>
        <Link to={"/boxLayout"}>Layout Using Box</Link>
        <Link to={"/gridLayout"}>Layout Using Grid</Link>
      </Stack>
    </>
  );
}

export default App;
