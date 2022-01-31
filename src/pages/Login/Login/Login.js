import {
  Alert,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Spinner from "../../Shared/Spinner/Spinner";

const Login = () => {
  // google signin
  const [loginData, setLoginData] = useState({});
  const { user, loginUser, authError, isLoading, signInUsingGoogle } =
    useAuth();

  //  redirect the private route
  const location = useLocation();
  const history = useHistory();

  const handleOnChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  // Handling Google Sign in
  const handleGoogleSignIn = () => {
    signInUsingGoogle(location, history);
  };
  return (
    <Container>
      <Paper sx={{ my: "100px" }}>
        <Typography variant="h3" color="secondary">
          Login
        </Typography>
        <form onSubmit={handleLoginSubmit}>
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="standard-basic"
            label="Your Email"
            variant="standard"
            type="email"
            name="email"
            onBlur={handleOnChange}
            color="secondary"
          />
          <TextField
            sx={{ width: "75%", m: 1 }}
            id="filled-basic"
            label="Your Password"
            variant="filled"
            type="password"
            name="password"
            onChange={handleOnChange}
            color="secondary"
          />
          <Button
            type="submit"
            sx={{ width: "75%", m: 1 }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
          <br />
          {/* go to register component  */}
          <Link style={{ textDecoration: "none" }} to="register">
            <Button variant="outlined" color="secondary">
              New User? Please Register
            </Button>
          </Link>

          {/* Spinner  */}
          {isLoading && <Spinner />}

          {/* Login Alert  */}
          {user?.email && (
            <Alert severity="success">You Logged in Successfully</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </form>

        <Button
          onClick={handleGoogleSignIn}
          variant="contained"
          sx={{ my: "20px" }}
          color="secondary"
        >
          Google Sign In
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
