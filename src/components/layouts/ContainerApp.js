import React from "react";

// import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

export default function ContainerApp() {
  return (
    <Box
      sx={{ flexGrow: 1 }}
      style={{opacity: '0.9'}}
    >
      <Grid container xs={4}>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid> */}
        sdasd
      </Grid>
      <Grid container xs={8}>
        {/* <Grid item xs={4}>
          <Item>xs=4</Item>
        </Grid> */}
      </Grid>
    </Box>
  );
}
