import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Button,
  CardActionArea,
  CardHeader,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useFirebase from "../../../hooks/useFirebase";
import "./PackageDetails.css";
const useStyles = makeStyles((theme) => ({
  card: {
    height: "600px",
    [theme.breakpoints.down("md")]: {
      width: "300px",
    },
  },
  cardButton: {
    display: "flex",
    justifyContent: "center",
  },
  buttonText: {
    textDecoration: "none",
  },
}));

const PackageDetails = () => {
  // custom css classes
  const classes = useStyles();
  const { user } = useFirebase();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm(
      "Are you Sure You Want to Confirm The Tour ?"
    );
    if (proceed) {
      alert("Tour Confirmed Check My Bookings");
      data.email = user?.email;
      data.status = "Pending";
      fetch("https://mighty-hollows-24584.herokuapp.com/addNewBooking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => console.log(result));
    }
  };

  // ------------------
  const { packageId } = useParams();
  const [packageDetail, setPackageDetail] = useState({});
  useEffect(() => {
    fetch(
      `https://mighty-hollows-24584.herokuapp.com/packageDetails/${packageId}`
    )
      .then((res) => res.json())
      .then((data) => setPackageDetail(data));
  });
  return (
    <Grid container sx={{ mt: "200px" }} className="itemSpacing">
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={1}></Grid>

      <Grid item xs={12} md={4}>
        {/* Selected Package Info  */}
        <Grid item>
          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" src={packageDetail.image}></Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <ShareIcon></ShareIcon>
                </IconButton>
              }
              title={packageDetail.title}
            />
            <CardActionArea>
              <CardMedia
                component="img"
                height="400px"
                image={packageDetail.image}
                alt="green iguana"
              />
              <CardContent></CardContent>
            </CardActionArea>
            <Typography variant="body2" color="text.secondary">
              {packageDetail.description} {packageDetail.date}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {packageDetail.cost}
            </Typography>
          </Card>
        </Grid>
      </Grid>

      {/* form area  */}
      <Grid item xs={12} md={4} className="packageDetailForm">
        <Typography variant="h4" color="primary">
          Package Details
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          {packageDetail.title && (
            <input
              {...register("title", { required: true })}
              defaultValue={packageDetail.title}
              className="inputField"
            />
          )}

          {packageDetail.date && (
            <input
              {...register("date", { required: true })}
              defaultValue={packageDetail.date}
              className="inputField"
            />
          )}
          {packageDetail.description && (
            <input
              {...register("description", { required: true })}
              defaultValue={packageDetail.description}
              className="inputField"
            />
          )}
          {packageDetail.packageType && (
            <input
              {...register("packageType", { required: true })}
              defaultValue={packageDetail.packageType}
              className="inputField"
            />
          )}
          <br />

          <Button type="submit" variant="contained" className="button">
            Confirm Tour
          </Button>
        </form>
      </Grid>
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={1}></Grid>
    </Grid>
  );
};

export default PackageDetails;
