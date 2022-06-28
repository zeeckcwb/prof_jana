import React from "react";

import { Grid } from "@mui/material";

import NavBar from "../../Components/NavBar/NavBar";
import { useStyles } from "./Main.styles";

const Main = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.mainContainer}>
      <NavBar />
    </Grid>
  );
};

export default Main;
