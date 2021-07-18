import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Button from "@material-ui/core/Button";
import Logo from "../img/logo1.png";

import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import HomePage from "../companies/HomePage";
import Dashboard from "../companies/Dashboard";
import RiskAnalysisPage from "../companies/RiskAnalysisPage";
import Watchlist from "../companies/Watchlist";
import RegisterPage from "../users/RegisterPage";
import LoginPage from "../users/LoginPage";
import LogoutPage from "../users/LogoutPage";

const drawerWidth = 75;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  logo: {
    width: "10rem",
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img className={classes.logo} src={Logo} alt="logo" />
          <Typography variant="h6" className={classes.title}></Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button key="Home">
              <ListItemIcon>
                <HomeIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key="Watchlist">
              <ListItemIcon>
                <ListIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
            </ListItem>
            <ListItem button key="Logout">
              <ListItemIcon>
                <AccountBoxIcon style={{ fontSize: 40 }} />
              </ListItemIcon>
            </ListItem>
            <Divider />
          </List>
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {
          {
            HomePage: <HomePage />,
            Dashboard: <Dashboard />,
            RiskAnalysisPage: <RiskAnalysisPage />,
            Watchlist: <Watchlist />,
            RegisterPage: <RegisterPage />,
            LoginPage: <LoginPage />,
            LogoutPage: <LogoutPage />,
          }[props.page]
        }
      </main>
    </div>
  );
}
