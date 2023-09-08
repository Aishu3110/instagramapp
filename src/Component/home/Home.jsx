// import Feed from "../feed/Feed";
import Main from "../main/Main";
import Sidebar from "../sidebar/Sidebar";
import React from 'react'
import Grid from '@mui/material/Grid'
import Pfeed from "../pfeed/Pfeed";

export default function Home() {
  return (
    <>
    <Grid rowSpacing={2} direction="row" sx={{display: 'flex'}} >
        <Grid Item xs={4} sx={{width:400}}>
        <Sidebar/>
        </Grid>
    </Grid>
    <Grid Item xs={4} sx={{width:700}}>
    <Main/>
        </Grid>
        <Grid Item sx={4}>
<>2</>
        </Grid>
        <Pfeed/>
    
    {/* <Feed/> */}
    </>
  )
}
