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
    color: "inherit",
    variant: "contained",
  },
  title: {
    flexGrow: 1,
  },
  logInButton: {
    marginRight: theme.spacing(2),
    color: "inherit",
    variant: "contained",
  },
}));

function LogInButton() {
  const classes = useStyles();
  let history = useHistory();

  function handleClick() {
    history.push("/login");
  }
  return (
    <button type="button" className={classes.logInButton} onClick={handleClick}>
      Log In
    </button>
  );
}

function ListingsButton() {
  const classes = useStyles();
  let history = useHistory();

  function handleClick() {
    history.push("/listings");
  }
  return (
    <button
      type="button"
      className={classes.listingsInButton}
      onClick={handleClick}
    >
      Listings
    </button>
  );
}

function homeClick() {
  let history = useHistory;
  history.push("/");
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
            onClick={homeClick}
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
