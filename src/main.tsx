import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Layout from "./components/Layout";
import App from "./App";
import { Colors } from "./components/Colors";
import { Typography } from "./components/Typography";
import { LedgerHome } from "./screen/LedgerHome";
import { BoxLayout } from "./components/BoxLayout";
import { GridLayout } from "./components/GridLayout";
import { CustomComponent } from "./components/CustomComponent";
import { PayNow } from "./screen/PayNow";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/layout",
    element: <Layout />,
  },
  {
    path: "/colors",
    element: <Colors />,
  },
  {
    path: "/typography",
    element: <Typography />,
  },
  {
    path: "/example",
    element: <LedgerHome />,
  },
  {
    path: "/boxLayout",
    element: <BoxLayout />,
  },
  {
    path: "/gridLayout",
    element: <GridLayout />,
  },
  {
    path: "/custom",
    element: <CustomComponent />,
  },
  {
    path: "/payNow",
    element: <PayNow />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
