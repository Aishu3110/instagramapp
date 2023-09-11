
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from "react";
import axios from "axios";
const Homeprofile = () => {
    const [posts, setPosts] = useState([]);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const user = {
    username: 'johndoe',
    name: 'John Doe',
    avatarUrl: 'https://www.example.com/avatar.jpg', 
    followers: 1000,
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dummyapi.io/data/v1/user?limit=5",
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
    <Grid container  mr={5} alignItems="center">
      <Grid item>
        <Avatar
          alt="Profile Picture"
          src={user.avatarUrl}
          sx={{ width: 70, height: 70 }}
        />
      </Grid>
      <Grid item xs>
        {showUserDetails ? (
          <>
            <Typography variant="h5">{user.name}</Typography>
            <Typography variant="body1">@{user.username}</Typography>
            <Typography variant="body2">Followers: {user.followers}</Typography>
            <Button variant="outlined" size="small">
              Follow
            </Button>
          </>
        ) : (
          <Typography variant="h5">@{user.username}</Typography>
        )}
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          size="small"
          onClick={() => setShowUserDetails(!showUserDetails)}
        >
          {showUserDetails ? 'Switch to Username' : 'Switch to Details'}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Homeprofile;