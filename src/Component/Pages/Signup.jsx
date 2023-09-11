import React from 'react'
import { useState } from 'react';
import {Container,CssBaseline,TextField,Button,Grid,Link,Typography, CardMedia,ImageListItem} from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { styled } from "@mui/system";
import FacebookIcon from '@mui/icons-material/Facebook';
import Divider from '@mui/material/Divider';
// import { NotificationManager } from "react-notifications";


export default function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
});

// const handleChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({
//     ...formData,
//     [name]: value,
//   });
// };
    const handleSubmit = (e) => {
      e.preventDefault();
      let localdata = localStorage.getItem("formData");
        if (localdata) {
            let userArray = JSON.parse(localdata);
            console.log(localdata)
            if (userArray.find((item) => item.email === formData.email)) {
                alert("Email already exsist");
            } else {
                userArray.push(formData);
                localStorage.setItem("formData", JSON.stringify(userArray));
                navigate('/')
            }
        } else {
            localStorage.setItem("formData", JSON.stringify([formData]));
        }
      // try {
      //   const response=await axios.post("https://dummyapi.io/data/v1/user/create", formData, {
      //     headers: {
      //       'app-id': '64f80cc1b1fe5f13f06ddeae',
      //     },
      //   });
      //   if (response.status === 201) {
      //     localStorage.setItem('user', JSON.stringify(formData));
      //     alert('Registration successful!');
      //      navigate('/Login')
      //   }
      // } catch (error) {
      //   console.log(error.response.userdata, 3000);
      // }
    
      // let localdata = localStorage.getItem("userdata");
      // if (localdata) {
      //     let userArray = JSON.parse(localdata);
      //     console.log(localdata)
      //     if (userArray.find((item) => item.email === userdata.email)) {
      //         alert("Email already exsist");
      //     } else {
      //         userArray.push(userdata);
      //         localStorage.setItem("userdata", JSON.stringify(userArray));
      //         navigate('/login')
      //     }
      // } else {
      //     localStorage.setItem("userdata", JSON.stringify([userdata]));
      // }
  };
  const Background1 = styled("div")({
    position: "absolute",
    backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1J2U9a7vhuWo-LTkNIyVAWYiiTxYkPbq0A&usqp=CAU)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  });
    const navigate = useNavigate()
  return (
    <>
    <Container component="main" maxWidth="xs">
      <CardMedia sx={{height:900,width:400,justifyContent:'flex-end', mt:2}}>
      <CardMedia sx={{height:670,width:400,justifyContent:'flex-end', border:1,borderColor:'gray'}}>
      <ImageListItem sx={{width:250,height:100,justifyContent:'center',ml:5}}>
        <Background1 component='img' sx={{ width: 250, height: 120,mt:5,}}/></ImageListItem>
        <CardMedia sx={{height:500,width:300,justifyContent:'flex-end', mt:20,ml:5}}>
        <Grid container sx={{ display: 'flex', alignItems: 'center', mt:3}}>
        <CardMedia >
          <Typography sx={{fontSize:18,color:'gray'}}>Sign up to see photos and videos from your friends.</Typography>
          
        </CardMedia>
      <Grid item xs mt={1}>
        <Button variant='contained'>
        <FacebookIcon />
        <Typography href="https://www.facebook.com/" underline="none"  style={{ verticalAlign: 'top' }}>
          Log in with Facebook
        </Typography>
        </Button>
      </Grid>
    </Grid>
    <Grid container direction="row" xs={24} mt={1} mr={3} sx={{ width: '100%',alignItems: 'center'}}>
<Grid item xs >
<Divider  />
</Grid>
<Grid item xs>
<Typography>OR</Typography>
</Grid>
<Grid item xs>
<Divider/></Grid>
{/* <Divider>OR</Divider> */}
</Grid>
        <form onSubmit={handleSubmit} >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} size='small'>
                <TextField 
                fullWidth
                placeholder="Enter username"
                        type="text"
                        required
                        value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })}/>
            </Grid><br></br>
            <Grid item xs={12} sm={12}>
            <TextField fullWidth placeholder="Enter lastName" type="text" required value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })} />
            </Grid>
            <Grid item xs={12}>
            <TextField fullWidth placeholder="Enter mail id" type="email"
                    required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })}  />
            </Grid>
          </Grid>
          <Typography sx={{fontSize:13,color:'gray',mt:2}}>
          People who use our service may have uploaded your contact information to Instagram. Learn more
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center" sx={{mt:1}}>
            By signing up, you agree to our <Link href="#">Terms</Link> and <Link href="#">Privacy Policy</Link>.
          </Typography>
          <Button
          fullWidth
            type="submit"
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
            // onClick={() => navigate('/')}
          >
            Sign Up
          </Button>
        </form>
      </CardMedia>
      </CardMedia>
      <CardMedia sx={{height:70,width:400, border:1, mt:1,borderColor:'gray'}}>
    <Grid item sx={{mt:2}}>
              <Typography >
                Have an account? <Button onClick={()=>navigate('/')} >{"Log in"}</Button>
              </Typography>
      </Grid>
      </CardMedia>
      <CardMedia>
        <Typography sx={{mt:2}}>Get the app</Typography>
        <Grid container spacing={1} direction='row' alignItems='center'justifyContent='center' sx={{mt:1,mr:3}} >
          <Grid sx>
            <CardMedia sx={{ width: 160 }} component="img" image="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png"/>
          </Grid>
          <Grid sx>
          <CardMedia sx={{ width: 140 }} component="img" image="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png"/>
          </Grid>
        </Grid>
      </CardMedia>
      </CardMedia>
    </Container>
   
    </>
  )
}
