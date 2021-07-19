import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";

const useStyles = makeStyles({
  div: { width: "100%", boxSizing: "border-box", padding: "1rem" },
  heading: { fontSize: "1.5rem", variant: "h3", marginBottom: 10 },
  subheading: { fontSize: "1rem", variant: "p", marginBottom: 10 },
  button: { fontSize: "1rem", color: "primary" },
});

const IncomeStatement = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      <Grid container>
        <Grid item xs={12}>
          <Typography className={classes.heading}>Income Statement</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>revenue</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.revenue}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            operating income
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.main_business_income}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            main business income
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.other_business_income}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            Other business income
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.VENDINC}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            Non-operating income
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.non_operating_income}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>Cost</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.sales_cost}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            main business cost
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.main_business_cost}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            Other business costs
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.other_operating_cost}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>GROSS PROFIT</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.gross_profit}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            Gross profit of the company’s main business
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.main_business_gross}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            OPEX (operating expenses)
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.sales_expense}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            wages and salaries
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.payrol_expense}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            welfare expenses
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.welfare_expenses}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            education expenditure
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.education_expenses}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            advertising expenses
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.ad_expenses}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            Non-operating expenses
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.non_operating_expense}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            management expenses
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.G_expense}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>
            Financial expenses
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.finance_expense}
          </Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>total tax</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>{props.RATGRO}</Typography>
        </Grid>
        <Grid item xs={9}>
          <Typography className={classes.subheading}>Net Profit</Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography className={classes.subheading}>
            {props.retained_profits}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default IncomeStatement;
