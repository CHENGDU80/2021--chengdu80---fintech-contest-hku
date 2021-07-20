import React from "react";
import { Divider, Typography, Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import LineChart from "./LineChart";
// import DoughnutChart from "./Doughnut";
// import Crazy from "./Crazy";
import { selectprofile, selectrisk } from "./companiesSlice";
import {
  getWatchlist,
  putWatchlist,
  deleteWatchlist,
  selectWatchlist,
} from "../users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RiskTypeCard from "./RiskTypeCard";

const useStyles = makeStyles({
  div: { width: "100%", boxSizing: "border-box", padding: "2rem" },
  heading: { fontSize: "2.5rem" },
  subheading: { fontSize: "1.5rem" },
  button: { fontSize: "1rem", color: "primary" },
});

const onRemove = (dispatch, id) => {
  dispatch(() => deleteWatchlist(id));
  dispatch(getWatchlist);
};
const onAdd = (dispatch, id) => {
  dispatch(() => putWatchlist(id));
  dispatch(getWatchlist);
};
const onDashboard = (history) => {
  history.push("/dashboard");
};

const RiskAnalysisPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let watchlist = useSelector(selectWatchlist);
  let profile = useSelector(selectprofile);
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
            <Grid item xs={7}>
              {watchlist.find((company) => company.id === profile.id) ? (
                <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  onClick={() => onRemove(dispatch, profile.id)}
                >
                  Remove from watchlist
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  onClick={() => onAdd(dispatch, profile.id)}
                >
                  Add to watchlist
                </Button>
              )}
            </Grid>
            <Grid item xs={5}>
              <Button
                variant="contained"
                className={classes.button}
                color="primary"
                onClick={() => onDashboard(history)}
              >
                Dashboard
              </Button>
            </Grid>
          </Grid>

          <Grid item xs={12}>
            <Divider />
          </Grid>

          <Grid item xs={12} container spacing={2} alignContent="flex-start">
            <Grid item xs={3}>
              <Paper className={classes.div}>
                <RiskTypeCard title="Risk 1" data="10%" />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.div}>
                <RiskTypeCard title="Risk 2" data="20%" />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.div}>
                <RiskTypeCard title="Risk 3" data="30%" />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.div}>
                <RiskTypeCard title="Risk 4" data="40%" />
              </Paper>
            </Grid>
          </Grid>

          <Grid item xs={8} md={4}></Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RiskAnalysisPage;
