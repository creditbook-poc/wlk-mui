import { Box, Button, Typography } from "@mui/material";
import { theme } from "../../theme";
import Modal from "@mui/material/Modal";
import { InstructionsModalProps } from "./InstructionsModalProps";

export const InstructionsModal: React.FC<InstructionsModalProps> = ({
  isVisible,
  onClose,
  onOkClick,
}: InstructionsModalProps) => {
  return (
    <Modal open={isVisible} onClose={onClose} disableAutoFocus>
      <Box sx={style}>
        <Typography variant="h5">Instructions</Typography>
        <Typography
          variant="bodyMedium"
          color={theme.foreground.mediumEmphasis}
        >
          1Bill Invoice Voucher ke zariye adayigi:
          <ol style={{ marginTop: 0, paddingLeft: 20 }}>
            <li>
              Apnay Banking App mein log in karein, yaqeeni bana lein ke aapka
              balance kaafi hai
            </li>
            <li>
              Biller ke taur par 1Bill (Invoice/Voucher) ka intekhaab karein
            </li>
            <li>Consumer Invoice Number paste karein</li>
            <li>Maloomat ki tasdeeq kar ke Submit karein</li>
          </ol>
        </Typography>
        <Box display={"flex"} justifyContent={"flex-end"}>
          <Button
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={onOkClick}
          >
            Okay
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  bgcolor: theme.background.appBg,
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
};
