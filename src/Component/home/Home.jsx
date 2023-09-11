// import Feed from "../feed/Feed";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import React from 'react'
import Grid from '@mui/material/Grid'
// import Pfeed from "../pfeed/Pfeed";
import { styled } from "@mui/system";
// import clsx from "clsx";
import Postfeed from "../Post/Postfeed";
import Homeprofile from "../homepro/Homeprofile";
const style1 = styled({
  container: {
    height: "100%", 
    minHeight: 150, 
    border: "1px solid black",
  },
  containerTall: {
    minHeight: 250 
  }
});

export default function Home() {
  const classes = style1();
 
  return (
    <>
     <Grid container direction="row" spacing={2}>
      <Grid item xs>
      <Sidebar/>
      </Grid>
        <Grid item xs>
        {/* <Main /> */}
<Postfeed/>
        </Grid>
      <Grid item xs>
      <Homeprofile/>
        <div className={classes.container}></div>
      </Grid>
    </Grid>
    {/* <Grid container rowSpacing={2} direction="row">
        <Grid Item xs={3} sx={{width:400}}>
        <Sidebar/>
        </Grid>
    </Grid>
    <Grid Item xs={5} sx={{width:500}}>
    <Main/>
        </Grid>
        <Grid Item sx={3}>
<></>
        </Grid>
        <Pfeed/>
    
    <Feed/> */}
    </>
  )
}
