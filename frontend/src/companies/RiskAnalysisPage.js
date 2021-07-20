import React, { useEffect } from "react";
import {
  Divider,
  Typography,
  Paper,
  Grid,
  Button,
  Box,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { selectCluster, selectprofile, selectrisk } from "./companiesSlice";
import {
  getWatchlist,
  putWatchlist,
  deleteWatchlist,
  selectWatchlist,
  selectUser,
} from "../users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import RiskTypeCard from "./RiskTypeCard";
import CustomPaginationActionsTable from "./CustomPaginationActionsTable";

const useStyles = makeStyles({
  div: { width: "100%", boxSizing: "border-box", padding: "2rem" },
  heading: { fontSize: "2.5rem" },
  subheading: { fontSize: "1.5rem" },
  button: { fontSize: "1rem", color: "primary" },
});

const RiskAnalysisPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let username = useSelector(selectUser);
  let watchlist = useSelector(selectWatchlist);
  let profile = useSelector(selectprofile);
  let risk = useSelector(selectrisk);
  let cluster = useSelector(selectCluster);

  useEffect(() => {
    if (watchlist === null) {
      dispatch(getWatchlist({ username }));
    }
    if (risk === null) {
      dispatch(risk({ companyId: profile.entid }));
    }
    if (cluster === null) {
      dispatch(cluster({ id: profile.entid }));
    }
  });

  const onRemove = (dispatch, companyId, username) => {
    dispatch(deleteWatchlist({ username, companyId }));
    dispatch(getWatchlist({ username }));
  };
  const onAdd = (dispatch, companyId, username) => {
    dispatch(putWatchlist({ username, companyId }));
    dispatch(getWatchlist({ username }));
  };
  const onDashboard = (history) => {
    history.push("/dashboard");
  };

  return (
    <div>
      <div className={classes.div}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Typography className={classes.heading}>{profile.entid}</Typography>
            <Typography className={classes.subheading}>
              {profile.ENTTYPE}
            </Typography>
          </Grid>

          <Grid item xs={4} container justifyContent="flex-end">
            <Grid item xs={7}>
              {username ? (
                !watchlist ||
                watchlist.find((company) => company.entid === profile.entid) ? (
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    onClick={() =>
                      onRemove(dispatch, profile.entid.toString(), username)
                    }
                  >
                    Remove from watchlist
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    className={classes.button}
                    color="primary"
                    onClick={() =>
                      onAdd(dispatch, profile.entid.toString(), username)
                    }
                  >
                    Add to watchlist
                  </Button>
                )
              ) : (
                <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  disabled
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

          <Grid item xs={12}>
            <div>
              <Paper>
                <Box p={3}>
                  <Typography variant="h4">Relevant Company</Typography>
                  <Divider />
                  {cluster.length !== 0 ? (
                    <CustomPaginationActionsTable rows={cluster} />
                  ) : (
                    <Typography>No Relevant Company</Typography>
                  )}
                </Box>
              </Paper>
              <br />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default RiskAnalysisPage;
