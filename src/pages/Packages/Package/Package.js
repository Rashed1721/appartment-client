import ShareIcon from "@mui/icons-material/Share";
import {
  Avatar,
  Button,
  CardActionArea,
  CardActions,
  CardHeader,
  Grid,
  IconButton,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

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

const Package = ({ pd, handleDelete }) => {
  const { _id, title, cost, image, description } = pd;
  const { admin } = useAuth();
  const classes = useStyles();

  return (
    <Grid item xs={12} md={5} sx={{ m: "20px" }}>
      <Card className={classes.card}>
        <CardHeader
          avatar={<Avatar aria-label="recipe" src={image}></Avatar>}
          action={
            <IconButton aria-label="settings" color="secondary">
              <ShareIcon></ShareIcon>
            </IconButton>
          }
          title={title}
        />
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="h6" color="secondary">
              BDT : {cost}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardButton}>
          {/* dynamic routing for every service  */}
          <Link to={`/packageDetails/${_id}`} className={classes.buttonText}>
            <Button variant="outlined" color="secondary">
              Book {title.toLowerCase()}{" "}
            </Button>
          </Link>

          {admin && (
            <Button
              onClick={() => handleDelete(pd._id)}
              variant="contained"
              color="secondary"
            >
              Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Package;
