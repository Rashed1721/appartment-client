import {
  Alert,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Shared/Spinner/Spinner";

const Register = () => {
  const [loginData, setLoginData] = useState({});
  const history = useHistory();

  const { user, registerUser, isLoading, authError } = useAuth();

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.password2) {
      alert("Your Password Did not match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);

    e.preventDefault();
  };
  return (
    <Container>
      <Paper sx={{ my: "100px" }}>
        <Typography variant="h3" color="secondary">
          Register
        </Typography>

        <form onSubmit={handleLoginSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Name"
            variant="standard"
            name="name"
            type="text"
            onBlur={handleOnBlur}
            color="secondary"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Email"
            variant="standard"
            name="email"
            type="email"
            onBlur={handleOnBlur}
            color="secondary"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="filled-basic"
            label="Your Password"
            variant="filled"
            type="password"
            name="password"
            onBlur={handleOnBlur}
            color="secondary"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="filled-basic"
            label="Re-Type Your Password"
            variant="filled"
            type="password"
            name="password2"
            color="secondary"
            onBlur={handleOnBlur}
          />
          <Button type="submit" sx={{ width: "75%", m: 1 }} variant="contained">
            Register
          </Button>
          {/* go to register component  */}
          <Link style={{ textDecoration: "none" }} to="/login">
            <Button color="secondary" variant="contained" sx={{ my: "20px" }}>
              All Ready Registered? Please Log in
            </Button>
          </Link>
          {/* Spinner  */}
          {isLoading && <Spinner />}
        </form>

        {user?.email && (
          <Alert severity="success">User Created Successfully</Alert>
        )}
        {authError && <Alert severity="error">{authError}</Alert>}
      </Paper>
    </Container>
  );
};

export default Register;
