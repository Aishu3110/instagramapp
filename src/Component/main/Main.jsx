

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Paper, Typography } from '@mui/material';
import Userprofile from '../viewprofile/Viewprofile';

const Main = (user) => {
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleProfileClick = (user) => {
    setSelectedUser(user);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://dummyapi.io/data/v1/user?limit=10',
          {
            headers: {
              'app-id': '64f80cc1b1fe5f13f06ddeae', 
            },
          }
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Grid container direction='column' textAlign='center' sx={{ml:50}}>
    {posts.map((post) => (
      <Grid item key={post.id} xs={14} sm={8} sx={{mr:20,height:50}}>
        <Paper elevation={3}> 
          <img src={post.picture} alt={post.firstName} />
          <Typography variant="subtitle1" ><Userprofile onClick={()=>(user.firstName  )}/>{post.firstName}</Typography>
        </Paper>
      </Grid>
    ))}
  </Grid>
  </>
  );
};

export default Main;