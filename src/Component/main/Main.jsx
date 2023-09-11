import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid, Paper, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import {Card, CardHeader,CardContent} from '@mui/material/'
import { useNavigate } from "react-router-dom";

const Main = (user) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const handleProfileClick = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyapi.io/data/v1/user/",
          {
            headers: {
              "app-id": "64f80cc1b1fe5f13f06ddeae",
            },
          }
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
     <Grid container spacing={4} direction='column'  mt={5}>
    {
      posts.map(row => (
        <Grid item xs={6}>
          <Card >
            <CardContent >
              <Grid container spacing={1} >
                <Grid item xs={12} sm={6}>
                  <Grid container>
                    <Grid container justify="space-evenly" sx={{width:40, height:50}}>
                      <img src={row.picture} />
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={6} mt={3}>
                  <Grid container onClick={()=>navigate('/userfulldetail')} >
                    <Grid container justify="space-evenly">
                      <label>{row.id}</label>
                      
                    </Grid>
                    <Grid container justify="space-evenly">
                    <label >{row.firstName}</label>
                      
                    </Grid>
                    
                  </Grid>
                  
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      ))
    }
    </Grid>
      {/* <Grid container spacing={1} sx={{ border: "solid", ml: 50, mt: 10 }}>
        {posts.map((post1) => (
          <>
            <Grid item xs={6} key={post1.id}>
              <img
                src={post1.picture}
                alt="Profile"
                style={{ maxWidth: "30%", height: "auto" }}
              />
              <Divider />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">{post1.firstName}</Typography>
              <Divider />
            </Grid>
            
          </>
        ))}
      </Grid>
      <Grid container direction="column" textAlign="center" sx={{ ml: 50 }}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={14} sm={8} sx={{ mr: 20, height: 50 }}>
            <Paper elevation={3}>
              <img src={post.picture} alt={post.firstName} />
              <Typography variant="subtitle1">
                
                {post.firstName}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid> */}
    </>
  );
};

export default Main;
