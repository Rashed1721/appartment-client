import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Grid, IconButton, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/system";
import React from "react";
// custom css
const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: "400px",
    backgroundColor: "#424242",
    color: "white",
    position: "sticky",
    top: "100%",
    bottom: "0px",
    width: "100%",
    paddingTop: "40px",
  },
  bottomFooter: {
    backgroundColor: "#8bc34a",

    color: "white",
    marginTop: "20px",
  },
  footerSpacing: {
    marginTop: "400px",
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      flexDirection={"column"}
      color="primary"
      className={classes.footerSpacing}
    >
      <Grid item container flexDirection={"column"} className={classes.footer}>
        {/* top footer area  */}
        <Grid item container>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h3" color="secondary">
              Array Apartments
            </Typography>
          </Grid>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={4}></Grid>
        </Grid>
        {/* middle foter area  */}
        <Grid item container spacing={4}>
          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
          <Grid item xs={12} sm={3} sx={{ mt: "20px" }}>
            <Typography>Contact Us</Typography>
            <Typography>Services</Typography>
            <Typography>Feedback</Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ mt: "20px" }}>
            <Typography>Packages</Typography>
            <Typography>Agents</Typography>
            <Typography>Partners</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Box>
              <IconButton color="secondary">
                <FacebookIcon></FacebookIcon>
              </IconButton>
            </Box>
            <Box>
              <IconButton color="secondary">
                <InstagramIcon></InstagramIcon>
              </IconButton>
            </Box>
            <Box>
              <IconButton color="secondary">
                <GitHubIcon></GitHubIcon>
              </IconButton>
            </Box>
          </Grid>

          {/* this line is for side space of the page  */}
          <Grid item xs={false} sm={1}></Grid>
        </Grid>
        <div className={classes.bottomFooter}>
          <small>&copy; - Array Apartments 2021</small>
        </div>
      </Grid>
    </Grid>
  );
};

export default Footer;
