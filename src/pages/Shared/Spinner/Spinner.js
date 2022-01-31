import { Container } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

const Spinner = () => {
  return (
    <Container>
      <div sx={{ display: "flex", width: "100%" }}>
        <LinearProgress color="secondary"></LinearProgress>
      </div>
    </Container>
  );
};

export default Spinner;
