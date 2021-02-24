import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function LogInButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }
  return (
    <button type="button" color="inherit" onClick={handleClick}>
      Log In
    </button>
  );
}

function ListingsButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/listings");
  }
  return (
    <button type="button" color="inherit" onClick={handleClick}>
      Listings
    </button>
  );
}

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Austin Small Business
          </Typography>
          <ListingsButton />
          <LogInButton />
        </Toolbar>
      </AppBar>
    </div>
  );
}
