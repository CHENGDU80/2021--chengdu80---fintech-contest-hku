import React from "react";
import CustomPaginationActionsTable from "./CustomPaginationActionsTable";
import { Paper, Typography, Box, Divider } from "@material-ui/core";

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0),
];

const Watchlist = () => {
  return (
    <div>
      <Paper>
        <Box p={3}>
          <Typography variant="h4">Watchlist</Typography>
          <Divider />
          <CustomPaginationActionsTable rows={rows} />
        </Box>
      </Paper>
      <br />
    </div>
  );
};

export default Watchlist;
