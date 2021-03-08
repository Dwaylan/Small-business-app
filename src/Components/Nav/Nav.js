import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
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
    background: "#3f51b5",
    variant: "contained",
  },
  listingsInButton: {
    marginRight: theme.spacing(2),
    color: "inherit",
    background: "#3f51b5",
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

function HomeButton() {
  let history = useHistory();
  function handleClick() {
    history.push("/");
  }
  return <HomeIcon onClick={handleClick} />;
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
            <HomeButton />
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
