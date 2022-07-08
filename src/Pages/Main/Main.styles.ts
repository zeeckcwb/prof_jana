import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  mainContainer: {
    width: "100vw",
    height: "100vh",
    padding: "0px 80px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: "url(assets/teste.png)",
  },
  hero: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "calc(100vh - 120px)",
  },
  heroAndPhotoContainer: {
    height: "70%",
    display: "flex",
    justifyContent: "space-between",
  },
  heroContainer: {
    "&.MuiGrid-root": {
      width: "90%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-between",
    },
  },
  heroImg: {
    width: "100%",
    "& > img": {
      width: "100%",
    },
  },
  heroBtn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  photoContainer: {
    "&.MuiGrid-root": {
      width: "90%",
      display: "flex",
      borderRadius: 20,
      alignItems: "center",
      backgroundSize: "cover",
      justifyContent: "center",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundImage: "url(assets/prof-jana.jpg)",
    },
  },
}));

export { useStyles };
