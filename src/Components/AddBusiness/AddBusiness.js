import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogContent,
  DialogTitle,
} from "@material-ui/core";

const initialValues = {
  id: 0,
  businessName: "",
  description: "",
  hours: "",
  address: "",
};

const AddBusiness = (props) => {
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState(initialValues);

  const toggleDialog = () => setOpen((open) => !open);

  const handleTextChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    // const { name, value } = e.target
    // setValues({
    //   ...values,
    //   [name]:value,
    //})
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = { ...values };
    payload.id = props.businessTotal + 1;
    console.log("THE business", payload);
    // add this.props.addCar function here
    props.addBusiness(payload);
    setValues({ open: false });
  };

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <Button
          variant="contained"
          className="add-business"
          onClick={toggleDialog}
        >
          Add Business
        </Button>
      </div>
      <div>
        <Dialog open={open} onClose={toggleDialog}>
          <DialogTitle>Add New Business</DialogTitle>
          <DialogContent>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                width: "350px",
              }}
            >
              <TextField
                id="businessName"
                placeholder="Name"
                name="businessName"
                value={values.businessName}
                onChange={handleTextChange}
                required
              />
              <TextField
                id="description"
                placeholder="Description"
                name="description"
                value={values.description}
                onChange={handleTextChange}
                required
              />
              <TextField
                id="hours"
                placeholder="Hours"
                name="hours"
                value={values.hours}
                onChange={handleTextChange}
                required
              />
              <TextField
                id="address"
                placeholder="Address"
                name="address"
                value={values.address}
                onChange={handleTextChange}
                required
              />
              <br />
              <Button variant="contained" color="primary" type="submit">
                Submit
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default AddBusiness;
