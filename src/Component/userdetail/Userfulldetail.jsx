import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const Userfulldetail = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async (id) => {
      try {
        const response = await axios.get(
          `https://dummyapi.io/data/v1/user/64f80cc1b1fe5f13f06ddeae/${id}`,
          {
            headers: {
              "app-id": "64f80cc1b1fe5f13f06ddeae",
            },
          }
        );
        setUserData(response.data.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchData();
}, []);

  return (
    <Grid container justifyContent="center" spacing={4}>
      {userData && (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={3}>
            <Grid container spacing={2} alignItems="center" justifyContent="center">
              {/* Profile Picture */}
              <Grid item xs={12}>
                <Avatar
                  alt={`${userData.firstName} ${userData.lastName}`}
                  src={userData.picture}
                  sx={{ width: 200, height: 200 }}
                />
              </Grid>
              {/* User Info */}
              <Grid item xs={12}>
                <Typography variant="h4">
                  {userData.title} {userData.firstName} {userData.lastName}
                </Typography>
                <Typography variant="body1">{userData.email}</Typography>
                <Typography variant="body2">{userData.gender}</Typography>
                <Typography variant="body2">{userData.dateOfBirth}</Typography>
                <Typography variant="body2">{userData.phone}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default Userfulldetail;


// import React from 'react'
// import { styled } from "@mui/system";
// import Sidebar from "../sidebar/Sidebar";
// import { Grid } from '@mui/material';
// import Stack from '@mui/material';
// import Avatar from '@mui/material';
// import { useState,useEffect } from 'react';
// import axios from 'axios'

// const style1 = styled({
//     container: {
//       height: "100%", 
//       minHeight: 150, 
//       border: "1px solid black",
//     },
//     containerTall: {
//       minHeight: 250 
//     }
//   });
// export default function Userfulldetail() {
//     const classes = style1();
//     const [posts, setPosts] = useState([]);

//     useEffect(() => {
//         const fetchData = async (id) => {
//           try {
//             const response = await axios.get(
//               `https://dummyapi.io/data/v1/user/64f80cc1b1fe5f13f06ddeae/${id}`,
//               {
//                 headers: {
//                   "app-id": "64f80cc1b1fe5f13f06ddeae",
//                 },
//               }
//             );
//             setPosts(response.data.data);
//           } catch (error) {
//             console.error("Error fetching data: ", error);
//           }
//         };
//         fetchData();
//   }, []);
//   return (
//     <>
//     <Grid container direction="row" spacing={1}>
//       <Grid item xs>
//       <Sidebar/>
//       </Grid>
//         <Grid item xs>
//         <Stack direction="row" spacing={2}>
//       <Avatar alt="Remy Sharp" src={posts.picture} />
//     </Stack>
//         </Grid>
//         <Grid item xs>
//         <div className={classes.container}>4</div>
//       </Grid>
//     </Grid>
//     </>
//   )
// }
