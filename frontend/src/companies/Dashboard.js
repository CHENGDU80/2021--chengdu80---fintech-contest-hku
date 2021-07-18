import React from "react";
import { Divider, Typography, Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import News from "./News";
import LineChart from "./LineChart";
import DoughnutChart from "./Doughnut";
import TwoLinesChart from "./TwoLinesChart";

const useStyles = makeStyles({
  div: { width: "100%", boxSizing: "border-box", padding: "2rem" },
  heading: { fontSize: "2.5rem" },
  subheading: { fontSize: "1.5rem" },
  button: { fontSize: "1rem", color: "primary" },
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.div}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography className={classes.heading}>
              The Coca Cola Company
            </Typography>
            <Typography className={classes.subheading}>K O</Typography>
          </Grid>

          <Grid item xs={4} container justifyContent="flex-end">
            <Grid item xs={5}>
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
              >
                Add to watchlist
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid
            item
            xs={12}
            md={8}
            container
            spacing={2}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Paper className={classes.div}>
                <TwoLinesChart
                  labels={["1", "2", "3", "4", "5", "6"]}
                  label1={"# of Votes"}
                  data1={[12, 19, 3, 5, 2, 3]}
                  label2={"# of sth"}
                  data2={[5, 2, 8, 1, 12, 3]}
                />
              </Paper>
            </Grid>

            <Grid item xs={5}>
              <Paper className={classes.div}>
                <DoughnutChart
                  labels={["1", "2", "3"]}
                  label={"# of Votes"}
                  data={[12, 19, 3]}
                />
              </Paper>
            </Grid>

            <Grid item xs={7}>
              <Paper className={classes.div}>
                <LineChart
                  labels={["1", "2", "3", "4", "5", "6"]}
                  label={"# of Votes"}
                  data={[12, 19, 3, 5, 2, 3]}
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={8} md={4}>
            <Grid item xs={12}>
              <Paper>
                <News />
              </Paper>
            </Grid>
          </Grid>

          {/* <Grid item xs={12}>
            <CustomPaginationActionsTable />
          </Grid> */}
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
