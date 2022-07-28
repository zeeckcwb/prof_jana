import { makeStyles } from "@mui/styles";

interface ButtonStyle {
  buttonTheme?: string;
}

const useStyles = makeStyles(() => ({
  stylezedButton: ({ buttonTheme }: ButtonStyle) => ({
    "&.MuiButton-root": {
      height: 64,
      fontSize: 24,
      minWidth: 280,
      borderRadius: 20,
      color: "#5271FF",
      padding: "0 24px",
      fontFamily: "Inter",
      textTransform: "uppercase",
      backgroundColor: buttonTheme === "primary" ? "#B7DBEA" : "#D3ABFF",
      "&:hover": {
        backgroundColor: buttonTheme === "primary" ? "#86CFED" : "#CA9EFD",
      },
    },
  }),
}));

export { useStyles };
