import { Typography } from "@material-ui/core";
import React from "react";
import { Line } from "react-chartjs-2";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  title: { fontSize: "2rem" },
});

const chartData = (labels, label1, data1, label2, data2) => ({
  labels,
  datasets: [
    {
      label: label1,
      data: data1,
      fill: false,
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgba(255, 99, 132, 1)",
    },
    {
      label: label2,
      data: data2,
      fill: false,
      backgroundColor: "rgba(54, 162, 235, 1)",
      borderColor: "rgba(54, 162, 235, 1)",
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

const TwoLinesChart = (props) => {
  const classes = useStyles();
  const { labels, label1, data1, label2, data2 } = props;
  return (
    <>
      <Typography className={classes.title}>Two Lines Chart</Typography>
      <Line
        data={chartData(labels, label1, data1, label2, data2)}
        options={options}
      />
    </>
  );
};

export default TwoLinesChart;
