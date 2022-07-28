import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./StylezedButton.styles";

interface ButtonInterface {
  buttonText?: string;
  buttonTheme?: string;
  handleClick?: () => void;
}

const StylezedButton = ({
  buttonText,
  handleClick,
  buttonTheme = "primary",
}: ButtonInterface) => {
  const classes = useStyles({ buttonTheme });
  return (
    <Button  onClick={handleClick} classes={{ root: classes.stylezedButton }} >
      {buttonText}
    </Button>
  );
};

export default StylezedButton;
