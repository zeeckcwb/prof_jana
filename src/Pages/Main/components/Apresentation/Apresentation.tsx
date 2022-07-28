import React from "react";
import ReactPlayer from "react-player";

import { Grid, Typography } from "@mui/material";

import { useStyles } from "./Apresentation.styles";
import StylezedButton from "../../../../Components/NavBar/StylezedButton/StylezedButton";

const Apresentation = () => {
  const classes = useStyles();

  return (
    <Grid container classes={{ root: classes.apresentationContainer }}>
      <Grid item xs={12} classes={{ root: classes.textContainer }}>
        <Typography>
          Se você quer ser uma pessoa desenvolvedora de jogos, aqui é seu lugar!
          Feito para todas as idades, as aulas são preparadas com muito carinho
          para aprender todos os detalhes dessa ferramenta poderosa: o Roblox
          Studio, e iniciar no mundo da programação para jogos utilizando a
          linguagem de programação LUA.
        </Typography>
      </Grid>
      <div className={ classes.videoContainer }>
        <ReactPlayer
          className={classes.reactPlayer}
          width="100%"
          height="100%"
          controls={false}
          url="https://www.youtube.com/embed/eAvXhNlO-rA"
        />
      </div>
      <Grid item xs={12}>
        <StylezedButton
          buttonText="Quero me tornar GAME DEV"
          handleClick={() => alert("teste")}
          buttonTheme="secondary"
        />
      </Grid>
    </Grid>
  );
};

export default Apresentation;
