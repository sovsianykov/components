import React from "react";
import { Box, Typography } from "@material-ui/core";

const Home = () => {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      sx={{ alignItems: "center", justifyContent: "center" }}
    >
      <Typography variant="h5">Commit 1</Typography>
      <Typography variant="h5">Commit 2</Typography>
      <Typography variant="h5">Commit 3</Typography
      <Typography variant="body1">first changes from develop-1</Typography>
    </Box>
  );
};

export default Home;
