import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Nav from "../Nav";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function FormPropsTextFields({ Login, error }) {
  const classes = useStyles();

  const [details, setDetails] = useState({ name: "", Password: "" });

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
      </div>
    </form>
  );
}
