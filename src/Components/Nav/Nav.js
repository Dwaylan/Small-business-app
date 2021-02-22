import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Loginpage from "../Loginpage";
import Listingspage from "../Listingspage";

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
          <Button
            color="inherit"
            onClick={() => {
              // props.history.push("/listings");
              console.log("Listings button was clicked");
            }}
          >
            Listings
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              // props.history.push("/login");
              console.log("Login button was clicked");
            }}
          >
            Login
          </Button>
          {/* <Route path="/login" component={LoginPage} /> */}
        </Toolbar>
      </AppBar>
    </div>
  );
}
