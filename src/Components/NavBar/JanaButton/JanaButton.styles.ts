import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  janaButtonStyle: {
    "&.MuiButton-root": {
      width: 320,
      height: 90,
      fontSize: 24,
      borderRadius: 20,
      color: "#5271FF",
      fontFamily: "Inter",
      textTransform: "uppercase",
      backgroundColor: "#B7DBEA",
      "&:hover": {
        backgroundColor: "#86CFED",
      },
    },
  },
}));

export { useStyles };
