import { Stack, Typography } from "@mui/material";
import Layout from "./components/Layout";
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
      </Stack>
    </>
  );
}

export default App;
