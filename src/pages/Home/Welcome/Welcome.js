import { Button, Paper, Typography } from "@mui/material";
import React from "react";

const Welcome = () => {
  return (
    <Paper elevation={3} sx={{ m: "20px" }}>
      <Typography variant="h5">Welcome To The</Typography>
      <Typography variant="h2" color="secondary">
        Best Real Estate Agency
      </Typography>
      <Typography variant="h6" color="primary">
        Array Apartments is a full-service, luxury real estate brokerage and
        lifestyle company representing clients worldwide in a broad spectrum of
        classes, including residential, new development, resort real estate,
        residential leasing and luxury vacation rentals. Since our inception in
        2011, we have redefined the business of real estate, modernizing and
        advancing the industry by fostering a culture of partnership, in which
        all clients and listings are represented by our agents.
      </Typography>
      <Button variant="outlined" color="secondary" sx={{ my: "40px" }}>
        More About Us
      </Button>
    </Paper>
  );
};

export default Welcome;
