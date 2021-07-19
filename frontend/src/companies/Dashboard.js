import React from "react";
import { Divider, Typography, Paper, Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import BasicInfo from "./BasicInfo";
import LineChart from "./LineChart";
import DoughnutChart from "./Doughnut";
import Crazy from "./Crazy";
import { selectprofile } from "./companiesSlice";
import {
  getWatchlist,
  putWatchlist,
  deleteWatchlist,
  selectWatchlist,
} from "../users/usersSlice";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUser } from "../users/usersSlice";
import IncomeStatement from "./IncomeStatement";

const useStyles = makeStyles({
  div: { width: "100%", boxSizing: "border-box", padding: "2rem" },
  heading: { fontSize: "2.5rem" },
  subheading: { fontSize: "1.5rem" },
  button: { fontSize: "1rem", color: "primary" },
});

const onRemove = (dispatch, companyId, username) => {
  dispatch(() => deleteWatchlist({ username, companyId }));
  dispatch(getWatchlist);
};
const onAdd = (dispatch, companyId, username) => {
  dispatch(() => putWatchlist({ username, companyId }));
  dispatch(() => getWatchlist({ username }));
};
const onRisk = (history) => {
  history.push("/riskanalysis");
};

const Dashboard = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  let username = useSelector(selectUser);
  dispatch(() => getWatchlist({ username }));
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
                  onClick={() => onRemove(dispatch, profile.id, username)}
                >
                  Remove from watchlist
                </Button>
              ) : (
                <Button
                  variant="contained"
                  className={classes.button}
                  color="primary"
                  onClick={() => onAdd(dispatch, profile.id, username)}
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
                onClick={() => onRisk(history)}
              >
                Risk Analysis
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
                <LineChart
                  title="Line Chart"
                  labels={["1", "2", "3", "4", "5", "6"]}
                  label={["# of Votes", "# of sth"]}
                  data={[
                    [12, 19, 3, 5, 2, 3],
                    [5, 2, 8, 1, 12, 3],
                  ]}
                />
              </Paper>
            </Grid>

            <Grid item xs={5}>
              <Paper className={classes.div}>
                <DoughnutChart
                  title="Doughnut"
                  labels={["1", "2", "3"]}
                  label={["# of Votes"]}
                  data={[12, 19, 3]}
                />
              </Paper>
            </Grid>

            <Grid item xs={7}>
              <Paper className={classes.div}>
                <LineChart
                  title="Line Chart"
                  labels={["1", "2", "3", "4", "5", "6"]}
                  label={["# of Votes"]}
                  data={[[12, 19, 3, 5, 2, 3]]}
                />
              </Paper>
            </Grid>

            <Grid item xs={12}>
              <Paper className={classes.div}>
                <Crazy
                  title="Line Bar"
                  type={["line", "bar"]}
                  labels={["1", "2", "3", "4", "5", "6"]}
                  label={["# of Votes", "# of sth"]}
                  data={[
                    [12, 19, 3, 5, 2, 3],
                    [5, 2, 8, 1, 12, 3],
                  ]}
                />
              </Paper>
            </Grid>
          </Grid>

          <Grid
            item
            xs={8}
            md={4}
            container
            spacing={2}
            alignContent="flex-start"
          >
            <Grid item xs={12}>
              <Paper>
                <BasicInfo
                  entid={profile.entid}
                  ENTTYPE={profile.ENTTYPE}
                  INDUSTRYPHY={profile.INDUSTRYPHY}
                  REGCAPCUR={profile.REGCAPCUR}
                  REGCAP={profile.REGCAP}
                  PARNUM={profile.PARNUM}
                  LIMPARNUM={profile.LIMPARNUM}
                  PARFORM={profile.PARFORM}
                  EXENUM={profile.EXENUM}
                  EMPNUM={profile.EMPNUM}
                  tax_type={profile.tax_type}
                  tax_state={profile.tax_state}
                  region_id={profile.region_id}
                  industry_tax={profile.industry_tax}
                  registertype={profile.registertype}
                  economic_type={profile.economic_type}
                  incometax_rate={profile.incometax_rate}
                  collection_type={profile.collection_type}
                />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper>
                <IncomeStatement
                  revenue={profile.revenue}
                  main_business_income={profile.main_business_income}
                  other_business_income={profile.other_business_income}
                  VENDINC={profile.VENDINC}
                  non_operating_income={profile.non_operating_income}
                  sales_cost={profile.sales_cost}
                  main_business_cost={profile.main_business_cost}
                  other_operating_cost={profile.other_operating_cost}
                  gross_profit={profile.gross_profit}
                  main_business_gross={profile.main_business_gross}
                  sales_expense={profile.sales_expense}
                  payrol_expense={profile.payrol_expense}
                  welfare_expenses={profile.welfare_expenses}
                  education_expenses={profile.education_expenses}
                  ad_expenses={profile.ad_expenses}
                  non_operating_expense={profile.non_operating_expense}
                  G_expense={profile.G_expense}
                  finance_expense={profile.finance_expense}
                  RATGRO={profile.RATGRO}
                  retained_profits={profile.retained_profits}
                />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Dashboard;
