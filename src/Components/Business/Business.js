import React from "react";
import { Container, Paper, Chip } from "@material-ui/core";

const Business = (props) => {
  const id = props.match.params.id;
  const business = props.business.find((c) => c.id == id);

  return (
    <Container maxWidth="sm" className="car-container">
      <Paper className="car-paper">
        <h2>{business.name}</h2>
        {Object.keys(business).map((key, idx) => {
          return <Chip label={`${key}: ${business[key]}`}></Chip>;
        })}
      </Paper>
    </Container>
  );
};

export default Business;
