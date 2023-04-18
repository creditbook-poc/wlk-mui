import { Button, ButtonProps, Typography, styled } from "@mui/material";
import { CbButtonProps } from "./CbButtonProps";

const SmallButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: 24,
  paddingLeft: 18,
  paddingRight: 18,
  minWidth: 64,
}));

const MediumButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: 32,
  minWidth: 128,
}));

const LargeButton = styled(Button)<ButtonProps>(({ theme }) => ({
  height: 40,
  minWidth: 128,
}));

export const CbButton: React.FC<CbButtonProps> = ({
  size,
  children,
  ...buttonProps
}) => {
  const buttonSizeMap = {
    small: SmallButton,
    medium: MediumButton,
    large: LargeButton,
  };

  const ButtonComponent = buttonSizeMap[size ?? 'medium'] || MediumButton;

  return (
    <ButtonComponent {...buttonProps}>
      {children}
    </ButtonComponent>
  );
};
