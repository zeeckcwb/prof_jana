import React from "react";
import { Button } from "@mui/material";
import { useStyles } from "./JanaButton.styles";

interface JanaButtonInterface {
  buttonText?: string;
  handleClick?: () => void;
};

const JanaButton = ({ buttonText, handleClick }: JanaButtonInterface) => {
  const classes = useStyles();
  return (
    <Button onClick={handleClick} classes={{root: classes.janaButtonStyle}}>{buttonText}</Button>
  )
};

export default JanaButton;
