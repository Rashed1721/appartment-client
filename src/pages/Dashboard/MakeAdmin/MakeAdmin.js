import {
  Alert,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();

  const handleAdminInput = (e) => {
    setEmail(e.target.value);
  };

  const handleAdminSubmit = (e) => {
    const user = { email };

    fetch("https://mighty-hollows-24584.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${token}`,
        "content-type": "application/json",
      },

      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("You Want to make this user admin");
          console.log(data);

          setSuccess(true);
        }
      });

    e.preventDefault();
  };

  return (
    <Container>
      <Paper elevation="4">
        <Typography variant="h3" color="secondary">
          Make New Admin
        </Typography>
        <form onSubmit={handleAdminSubmit}>
          <TextField
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Email"
            type="email"
            variant="standard"
            color="secondary"
            onBlur={handleAdminInput}
          />
          <br />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            sx={{ width: "60%", my: "20px" }}
          >
            Make Admin
          </Button>
        </form>
        {/* Login Alert  */}
        {success && <Alert severity="success">Made Admin Successfully</Alert>}
      </Paper>
    </Container>
  );
};

export default MakeAdmin;
