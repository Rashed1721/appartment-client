import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://mighty-hollows-24584.herokuapp.com/allReviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div>
      <Typography variant="h2" color="secondary" sx={{ mt: "120px" }}>
        Customer Reviews
      </Typography>
      <Grid item container xs={12} spacing={4}>
        {/* this line is for side space of the page  */}
        <Grid item xs={false} md={1}></Grid>
        <Grid
          item
          container
          xs={false}
          md={10}
          justifyContent="space-around"
          sx={{ my: "20px" }}
        >
          {reviews.map((pd) => (
            <Review key={pd._id} pd={pd}></Review>
          ))}
        </Grid>

        <Grid item xs={false} md={1}></Grid>
      </Grid>
    </div>
  );
};

export default Reviews;
