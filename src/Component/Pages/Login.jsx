import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { styled } from "@mui/system";

import { ImageList } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Container,  Button, Link, Grid } from '@mui/material';
// import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
// import Carousel from 'react-material-ui-carousel'
import { useNavigate } from "react-router-dom";
import { useState,useEffect,useRef } from 'react';
import axios from "axios";

export default function Login() {
  const [firstname, setfirstname] = useState("");
const [email, setemail] = useState("");
  


  const navigate = useNavigate();

  const handleLogin = (e) => { 
    e.preventDefault();
    let localdata = JSON.parse(localStorage.getItem("formData"));
    console.log(localdata);
    if (localdata) {
      console.log("user")
      let user = localdata.find((item) => item.firstname === firstname);
      if (user.firstname === firstname && user.email === email) {
        navigate("/home");
      } else {
        alert("Invaild firstname or email");
      }
    } else {
      alert("Please signup and login");
    }
    // try {
    //   const res = await axios.get("https://dummyapi.io/data/v1/user/",{
    //     headers: {
    //       'app-id': '64f80cc1b1fe5f13f06ddeae',
    //     },
    //   }, {
    //     firstName: firstName.current.value,
    //     email: email.current.value,
    //   });
    //   navigate('/home');
    // } catch (err) {
    //   console.log(err.response.data.message, "Warning", 3000);
    // }
  };
  // useEffect(() => {
  //   const data = axios
  //     .get("https://dummyapi.io/data/v1/user?limit=10", {
  //       headers: { "app-id": "64d37bc2da1a1ec838917663" },
  //     })
  //     .then((response) => setusers(response.data.data));
  //   console.log(data);
  // }, []);
    const Background = styled("div")({
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
      // const Image= styled("div1")({
      //   height:'25ch',
      //   backgroundImage:`url(https://static.cdninstagram.com/rsrc.php/v3/yx/r/WtxJZZ3-9ZP.png)`,
      //   backgroundSize: "cover",
      //   backgroundRepeat: "no-repeat",
      //   alt:"insta image"
      // })
  return (
    <>
    <Grid container rowSpacing={2} direction="row">
    <Grid item xs={2}>
    <></>
  </Grid>
  <Grid item xs={6}>
    <Card sx={{ display: 'flex',justifyContent:'center',width:1000,height:800}}>
      <CardMedia sx={{ height:700, width:500,justifyContent:'flex-start'}}>
      <Background component="img" sx={{ width: 500, height: 700,mt:7,mr:200 }}>
      </Background></CardMedia>
      <CardMedia sx={{height:700,width:300,justifyContent:'flex-end', mt:20}}>
      <form onSubmit={handleLogin}>
      <Container maxWidth="xs">
      <div>
        {/* <Image/>  */}
      </div>
      <TextField
      placeholder="firstName"
      fullWidth
      margin="normal"
      value={firstname} 
          required
          onChange={(e) => setfirstname(e.target.value)}/>

      <TextField
      placeholder="email"
      fullWidth
      margin="normal"
      value={email} 
          required
          onChange={(e) => setemail(e.target.value)}
        
      />
<Button type="submit" variant='outlined' >Login</Button>     
 <div style={{ marginTop: '4rem', textAlign: 'center' }}>
        <Link href="#" color="secondary">
          Forgot password?
        </Link>
      </div>
    </Container>
    <Typography variant="body2" color="textSecondary" align="center">
            By signing up, you agree to our <Link href="#">Terms</Link> and <Link href="#">Privacy Policy</Link>.
          </Typography>
    <Grid item sx={{mt:7}}>
              <h1 href="#" variant="body2" onClick={()=>navigate('/Signup')}>
                "Don't have an account? <Button  variant='outlined'>{"Sign Up"}</Button>
              </h1>
      </Grid>
      </form>
              </CardMedia>
              
      
      
    </Card>
    </Grid>
    <Grid item xs={4}>
    <></>
  </Grid>
    </Grid>
    
    
    </>
  )
}
