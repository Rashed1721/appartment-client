import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";

const SearchResult = ({ pd }) => {
  const { title, description } = pd;
  return (
    <Card key={pd._id} sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia component="img" image={pd.image} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SearchResult;
