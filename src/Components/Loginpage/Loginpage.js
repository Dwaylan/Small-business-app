import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Nav from "../Nav";
import { Route, Redirect, useHistory } from "react-router-dom";

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
  const [user, setUser] = useState({ name: "", Password: "" });
  const [details, setDetails] = useState({ name: "", Password: "" });
  let history = useHistory();

  const Login = (details) => {
    console.log(details);

    if (user.Password && user.name)
      // console.log("logged in");
      return history.push("/listings");
    else {
      console.log("credential errors");
    }
    setUser({
      name: details.name,
      Password: details.Password,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    Login(details);
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
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
          value={details.name}
        />
        <TextField
          required
          id="Password"
          label="Password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setDetails({ ...details, Password: e.target.value })}
          value={details.Password}
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
