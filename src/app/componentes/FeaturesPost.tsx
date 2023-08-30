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
    <div className="grid grid-cols-5 lg:grid-cols-8 w-full">
      <div
        style={{
          flex: 1,
          backgroundColor: "#C26641",
          textAlign: "center",
          alignItems: "center",
        }}
        className="col-span-5 md:col-span-4 lg:col-span-5"
      >
        <p style={{ fontSize: '55px'}} className={"text-white py-10 md:py-0 md:mt-[56px] " + post.className}>
          {post.title}
        </p>
      </div>
      <div>
        <img
          src={post.image}
          alt={post.imageLabel}
          className="bg-[#C26641] col-span-1 lg:col-span-2 hidden md:block"
          style={{
            maxWidth: 200,
          }}
        />
      </div>
    </div>
  );
}
