import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Nav from "../Nav";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields() {
  const classes = useStyles();
  const [user, setUser] = useState({ name: "", password: "" });
  let history = useHistory();

  useEffect(() => {
    console.log(user.password.length > 0 && user.name.length > 0);
    console.log(user);
  }, [user]);

  const Login = (user) => {
    console.log(user);
    if (user.password.length > 0 && user.name.length > 0) {
      console.log("logged in");
      history.push("/listings");
    } else {
      console.log("credential errors");
    }
    document.cookie = "loggedIn=true; max-age=60*1000";
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Login(user);
  };
  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      onSubmit={submitHandler}
    >
      <Nav />
      <div>
        <TextField
          required
          id="name"
          label="Username"
          defaultValue="Username*"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          value={user.name}
        />
        <TextField
          required
          id="password"
          label="password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          value={user.password}
        />
        <div className={classes.root}>
          <Button
            variant="contained"
            color="primary"
            onSubmit={Login}
            type="submit"
            value="LOGIN"
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}
