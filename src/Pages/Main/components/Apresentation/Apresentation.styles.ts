import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  apresentationContainer: {
    width: "100vw",
    height: "100vh",
    padding: "0 80px",
    backgroundColor: "#B7DBEA",
  },
  textContainer: {
    marginTop: "80px!important",
    "& .MuiTypography-root": {
      fontSize: 28,
      fontWeight: 800,
      textAlign: "center",
    },
  },
  videoContainer: {
    width: "100%",
    position: "relative",
    paddingTop: "56.25%",
  },
  reactPlayer: {
    top: 0,
    left: 0,
    position: "absolute",
  },
}));

export { useStyles };
