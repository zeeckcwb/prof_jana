import React from "react";

import { Grid } from "@mui/material";

import Hero from "./components/Hero/Hero";
import { useStyles } from "./Main.styles";
import NavBar from "../../Components/NavBar/NavBar";
import Apresentation from "./components/Apresentation/Apresentation";

const Main = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.mainContainer}>
      <NavBar />
      <Hero />
      <Apresentation />
    </Grid>
  );
};

export default Main;
