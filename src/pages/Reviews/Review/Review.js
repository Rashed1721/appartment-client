import ShareIcon from "@mui/icons-material/Share";
import {
  CardActionArea,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  card: {
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

const Review = ({ pd }) => {
  const classes = useStyles();
  // const [value, setValue] = React.useState(2);
  const { description, rating, email, displayName } = pd;
  return (
    <Grid item xs={12} md={5} sx={{ m: "20px" }}>
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton aria-label="settings" color="secondary">
              <ShareIcon></ShareIcon>
            </IconButton>
          }
          title={displayName}
        />
        <CardActionArea>
          <CardContent>
            <Typography variant="h6">{description}</Typography>
            <Typography variant="h7" color="secondary">
              {email}
            </Typography>
            <Typography>
              <Rating name="read-only" value={rating} readOnly />
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardButton}></CardActions>
      </Card>
    </Grid>
  );
};

export default Review;
