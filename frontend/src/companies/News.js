import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import NewsCard from "./NewsCard";

const useStyles = makeStyles({
  div: { width: "100%", boxSizing: "border-box", padding: "1rem" },
  heading: { fontSize: "1.5rem" },
  subheading: { fontSize: "1rem" },
  button: { fontSize: "1rem", color: "primary" },
});

const News = () => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.heading}>
            Industry Latest News
          </Typography>
          <Typography className={classes.subheading}>
            Consumer Staples
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
