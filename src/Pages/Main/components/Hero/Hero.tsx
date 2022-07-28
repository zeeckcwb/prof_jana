import React from "react";

import { Grid } from "@mui/material";

import { useStyles } from "./Hero.styles";
import StylezedButton from "../../../../Components/NavBar/StylezedButton/StylezedButton";

const Hero = () => {
  const classes = useStyles();

  const click = () => {
    alert("clicou");
  };

  return (
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
              <StylezedButton buttonText="comece agora" handleClick={click} buttonTheme="primary" />
            </Grid>
          </Grid>
          <Grid item xs={5.5} classes={{ root: classes.photoContainer }}></Grid>
        </Grid>
      </Grid>
  )
}

export default Hero;