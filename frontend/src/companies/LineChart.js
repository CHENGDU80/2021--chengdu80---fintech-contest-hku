import { Typography } from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: { fontSize: "2rem" },
});

const chartData = (labels, label, data) => ({
  labels,
  datasets: [
    {
      label,
      data,
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
  ],
});

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = (props) => {
  const classes = useStyles();
  const { labels, label, data } = props;
  return (
    <>
      <Typography className={classes.title}>Line Chart</Typography>
      <Line data={chartData(labels, label, data)} options={options} />
    </>
  );
};

export default LineChart;
