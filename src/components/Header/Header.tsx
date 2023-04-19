import {
  Box,
  Button,
  Icon,
  IconButton,
  SvgIcon,
  Typography,
  useTheme,
} from "@mui/material";
import { HeaderProps } from "./HeaderProps";
import { CbButton } from "../Primitive/CbButton/CbButton";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export const Header: React.FC<HeaderProps> = ({
  text,
  isHelpButtonEnabled,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      paddingX={2}
      paddingY={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      boxShadow={2}
    >
      <Box display="flex" alignItems="center">
        <Box marginRight={0.5}>
          <IconButton size="small" onClick={() => navigate(-1)}>
            <ArrowBack color="primary" fontSize="medium" />
          </IconButton>
        </Box>
        <Typography variant="h4" color={theme.foreground.highEmphasis}>
          {text}
        </Typography>
      </Box>
      {isHelpButtonEnabled && (
        <CbButton variant="outlined" size="small">
          <Typography variant="bodyXSmallBold">Help</Typography>
        </CbButton>
      )}
    </Box>
  );
};
