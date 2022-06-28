import React from "react";
import { Grid, Link } from "@mui/material";

import { menuList } from "./NavBar.utils";
import { useStyles } from "./NavBar.styles";

const NavBar = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.menuListContainer}>
      <Grid item className={classes.menuLogo}>
        <img src="/assets/logo.svg" alt="Logo prof jana" />
      </Grid>
      {menuList.map((item) => {
        return (
          <Link classes={{ root: classes.menuItem }} href={item.link}>
            {item.menuItem}
          </Link>
        );
      })}
    </Grid>
  );
};

export default NavBar;
