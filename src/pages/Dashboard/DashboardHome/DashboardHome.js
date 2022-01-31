import { Container, Typography } from "@mui/material";
import React from "react";

const DashboardHome = () => {
  return (
    <Container>
      <Typography variant="h6" color="secondary">
        Welcome To
      </Typography>
      <Typography variant="h3" color="secondary">
        Array Apartments Dashboard
      </Typography>
      <Typography variant="h7" color="primary">
        You Can Check All Your Activities Here
      </Typography>
    </Container>
  );
};

export default DashboardHome;
