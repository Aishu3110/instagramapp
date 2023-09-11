import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon  from '@mui/icons-material/Search';
import ExploreIcon from '@mui/icons-material/Explore';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CreateIcon from '@mui/icons-material/Create';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import MessageIcon from '@mui/icons-material/Message';
import { CardMedia } from '@mui/material';
import { styled } from "@mui/system";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

  export default function Sidebar(){

    const Background1 = styled("div")({
    position: "absolute",
    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1J2U9a7vhuWo-LTkNIyVAWYiiTxYkPbq0A&usqp=CAU)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  });

return(
    <>
      <Grid container xs direction='column' spacing={2} sx={{borderRight:"1px solid gray",mt:0,height:830,width:300,position:'fixed'}}>
    <Grid  >
        <Background1 itemcomponent='img' sx={{ width: 280, height: 150,mt:2}}/>
    </Grid>
    <Grid item variant="h3" direction="column" spacing={2} sx={{mt:20,fontSize: 12,fontWeight: 500}}>
      <Grid sx={{mr:35,mt:5}}>
        <Button  startIcon={<HomeIcon />}fullWidth>Home</Button></Grid>
        <Grid sx={{mr:33,mt:1}}><Button  startIcon={<SearchIcon />}fullWidth>Search</Button></Grid>
        <Grid sx={{mr:32, mt:1}}><Button startIcon={<ExploreIcon />}fullWidth>Explore</Button></Grid>
        <Grid sx={{mr:34, mt:1}}><Button startIcon={<SmartDisplayIcon />}fullWidth>Reels</Button></Grid>
        <Grid sx={{mr:32, mt:1}}><Button startIcon={<MessageIcon />}fullWidth>Message</Button></Grid>
        <Grid sx={{mr:29, mt:1}}><Button startIcon={<NotificationsIcon  />}fullWidth>Notification</Button></Grid>
        <Grid sx={{mr:34, mt:1}}><Button startIcon={<CreateIcon  />}fullWidth>Create</Button></Grid>
        <Grid sx={{mr:33, mt:1}}><Button startIcon={<AccountCircleIcon />}fullWidth>Profile</Button></Grid>
    </Grid>
    <Grid item sx={{border:"1px solid pink",width:338,height:230}}>
        <>1</>
    </Grid> 
    </Grid>
     <List sx={{fontSize:100, width:300}} >
            
            </List>
    </>
)
}