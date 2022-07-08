import React from "react";

import { Grid } from "@mui/material";

import NavBar from "../../Components/NavBar/NavBar";
import { useStyles } from "./Main.styles";
import JanaButton from "../../Components/NavBar/JanaButton/JanaButton";

const Main = () => {
  const classes = useStyles();

  const click = () => {
    alert("clicou");
  };

  return (
    <Grid className={classes.mainContainer}>
      <NavBar />
      <Grid className={classes.hero}>
        <Grid container className={classes.heroAndPhotoContainer}>
          <Grid item xs={5.5} classes={{ root: classes.heroContainer }}>
            <Grid className={classes.heroImg}>
              <img
                src="/assets/roblox-studio.png"
                alt="Aprenda a programar roblox studio do zero ao primeiro jogo"
              />
            </Grid>
            <Grid className={classes.heroBtn}>
              <JanaButton buttonText="comece agora" handleClick={click} />
            </Grid>
          </Grid>
          <Grid item xs={5.5} classes={{ root: classes.photoContainer }}></Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Main;
