import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";

interface PropsType {
  bgColor?: string;
}

const MyComponent = styled("div")<PropsType>(({ bgColor }) => ({
  backgroundColor: bgColor ?? "pink",
  marginTop: 10,
}));

export const CustomComponent = () => {
  return (
    <>
      <Typography variant="h2" mt={2}>
        Styled div with prop
      </Typography>
      <MyComponent bgColor="yellow">Styled Div</MyComponent>
      <Typography variant="h2" mt={2}>
        Styled div without prop
      </Typography>
      <MyComponent>Styled Div</MyComponent>
    </>
  );
};
