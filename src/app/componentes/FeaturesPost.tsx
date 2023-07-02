import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

interface FeaturedPostProps {
  post: {
    date: string;
    description: string;
    image: string;
    imageLabel: string;
    title: string;
    className: string;
  };
}

export default function FeaturedPost(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: "flex" }}>
          <CardContent
            sx={{
              flex: 1,
              backgroundColor: "#A6161D",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            <Typography
              color="white"
              className={"font-bold mt-7 " + post.className}
              component="h2"
              variant="h3"
            >
              {post.title}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{
              width: 200,
              display: { xs: "none", sm: "block", backgroundColor: "#A6161D" },
            }}
            image={post.image}
            alt={post.imageLabel}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}
