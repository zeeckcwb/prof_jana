import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/teste.png)",
  },
}));

export { useStyles };
