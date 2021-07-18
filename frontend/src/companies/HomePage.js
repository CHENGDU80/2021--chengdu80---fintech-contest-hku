import React, { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Paper, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { search } from "./companiesSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [searchValue, setsearchValue] = useState("");
  const onChange = (e) => setsearchValue(e.target.value);
  const onSubmit = async () => {
    await dispatch(search({ id: "123" }));
  };

  return (
    <div className={classes.search}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Paper component="form" className={classes.root}>
            <InputBase
              className={classes.input}
              placeholder="Company ID"
              onChange={onChange}
            />
            <IconButton
              type="submit"
              className={classes.iconButton}
              aria-label="search"
              onClick={onSubmit}
            >
              <SearchIcon />
            </IconButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
