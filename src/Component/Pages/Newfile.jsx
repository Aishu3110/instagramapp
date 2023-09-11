import React from 'react'
import { Grid } from '@mui/material'

export default function Newfile() {
  return (
 <>
 <Grid container xs={24} direction='row' spacing={2} sx={{border:"1px solid red"}}>
    <Grid item xs={3} sx={{border:"5px solid blue"}}>
        <>1</>
    </Grid>
    <Grid item xs={6} sx={{border:"5px solid blue"}}>
        <>1</>
    </Grid>
    <Grid item xs={3} sx={{border:"5px solid blue"}}>
        <>1</>
    </Grid>
 </Grid>
 </>
  )
}

