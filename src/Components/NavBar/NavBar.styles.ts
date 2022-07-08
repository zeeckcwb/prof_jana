import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  menuListContainer: {
    height: 120,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuLogo: {
    width: 110,
    "& > img": {
      width: "100%"
    },
  },
  menuItem: {
    color: "#2C2C2C!important",
    fontSize: 24,
    transition: "300ms",
    textDecoration: "underline",
    textDecorationColor: "transparent!important",
    "&:hover": {
      color: "#7900FF!important",
      textDecorationColor: "#7900FF!important",
    }
  },
}));

export { useStyles };
