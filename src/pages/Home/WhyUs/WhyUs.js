import AssessmentIcon from "@mui/icons-material/Assessment";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import PublicIcon from "@mui/icons-material/Public";
import SecurityIcon from "@mui/icons-material/Security";
import { Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import "./WhyUs.css";

const useStyles = makeStyles((theme) => ({
  whyUsImg: {
    [theme.breakpoints.down("md")]: {
      width: "260px",
      height: "260px",
    },
  },
}));

const WhyUs = () => {
  const classes = useStyles();
  return (
    <Grid container className="whyUs">
      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={2}></Grid>
      <Grid item xs={12} md={4}>
        <img
          className={classes.whyUsImg}
          src="https://image.freepik.com/free-photo/breakup-marriage-couple-with-divorce-certification_53876-14774.jpg"
          alt=""
          height="100%"
        />
      </Grid>
      <Grid item xs={12} md={4} sx={{ ml: "40px" }}>
        <div>
          <Typography variant="h1" color="secondary">
            Why Us
          </Typography>
          <Typography variant="h4" color="primary">
            Every Time We Provide Best Services
          </Typography>
        </div>
        <div className="whyUsPoints">
          <div className="whyUsPointsItem">
            <div className="whyUsPointsInnerItem">
              <IconButton color="secondary">
                <AssessmentIcon />
              </IconButton>
              <Typography>Exclusive Packages</Typography>
            </div>
            <div>
              <IconButton color="secondary">
                <PublicIcon />
              </IconButton>
              <Typography>World Class Service</Typography>
            </div>
          </div>
          <div className="whyUsPointsItem">
            <div className="whyUsPointsInnerItem">
              <IconButton color="secondary">
                <EmojiPeopleIcon />
              </IconButton>

              <Typography>Best Buying Guide</Typography>
            </div>
            <div>
              <IconButton color="secondary">
                <SecurityIcon />
              </IconButton>
              <Typography>100% Secure</Typography>
            </div>
          </div>
        </div>
      </Grid>

      {/* this line is for side space of the page  */}
      <Grid item xs={false} md={2}></Grid>
    </Grid>
  );
};

export default WhyUs;
