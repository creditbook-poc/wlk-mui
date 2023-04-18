import { TextField, TextFieldProps, styled } from "@mui/material"

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 6,
    "&:hover fieldset": {
      borderColor: theme.palette.primary.dark,
    },
  },
}));

export const TextInput: React.FC<TextFieldProps> = ({...textFieldProps}) => {
  return (
    <StyledTextField {...textFieldProps} />
  )
}