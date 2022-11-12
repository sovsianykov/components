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
    </Box>
  );
};

export default Home;
