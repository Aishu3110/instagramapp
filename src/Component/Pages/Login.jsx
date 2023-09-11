import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/system";
import TextField from '@mui/material/TextField';
import { Container,  Button, Link, Grid, ImageListItem, ImageList } from '@mui/material';
import { useNavigate } from "react-router-dom";
import { useState} from 'react';
import Carousel from 'react-material-ui-carousel';
import Paper from '@mui/material/Paper';
import vector from './images/social1.png';
import Divider from '@mui/material/Divider';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Login() {
  const [firstName, setfirstName] = useState("");
const [email, setemail] = useState("");
  
  const navigate = useNavigate();

  const handleLogin = (e) => { 
    e.preventDefault();
    let localdata = JSON.parse(localStorage.getItem("formData"));
    console.log(localdata);
    if (localdata) {
      console.log("formData")
      let user = localdata.find((item) => item.firstName === firstName);
      if (user.firstName === firstName && user.email === email) {
        navigate("/home");
      } else {
        alert("Invaild firstName or email");
      }
    } else {
      alert("Please signup and login");
    }
    
  };

    const Background = styled("div")({
        position: "absolute",
        width: "100%",
        height: "100%",
        backgroundImage: `url(https://static.cdninstagram.com/images/instagram/xig/homepage/phones/home-phones.png?__makehaste_cache_breaker=HOgRclNOosk)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
      // const images = [
      //   {src:"https://s3-alpha.figma.com/hub/file/1205046201/da31dff6-8779-4da8-99ae-83070e87295e-cover.png"},
      // {src:'https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot2.png?__d=www'},
      // {src:"https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot3.png?__d=www"},
      // {src:"https://www.instagram.com/images/instagram/xig/homepage/screenshots/screenshot4.png?__d=www"}
      // ];

      // const images = [
      //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSijkCqWRW2PE5wg-DZEcHNR-zALHniFF9krxDTtoPil8uaDlbAB6y5JBFULrkYY4-5ivc&usqp=CAU',
      //   'https://static.vecteezy.com/system/resources/previews/022/588/833/original/instagram-home-page-interface-with-smartphone-post-mockup-free-png.png',
      //   'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWNg-X4C8V1Wcg_aZrHWdKFUQEzt5uBTqDeInBP2ESaXrz2niKFo_9h9UKIlYv6By6ulc&usqp=CAU',
      //   'https://business.trustedshops.es/hs-fs/hubfs/1-TS_B2B/content/ES/20200819-Blogimage-Insta_Reels/reel%20smartphone.png?width=287&name=reel%20smartphone.png',
      // ];

      const Background1 = styled("div")({
        position: "absolute",
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv1J2U9a7vhuWo-LTkNIyVAWYiiTxYkPbq0A&usqp=CAU)`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      });
      const images=[{vector},{vector},{vector}]
      console.log(images)


      const [activeIndex, setActiveIndex] = useState(0);

  const handleChange = (index) => {
    setActiveIndex(index);
  };
     
  return (
    <>
    <Grid container rowSpacing={2} direction="row">
    <Grid item xs={2}>
    <></>
  </Grid>
  <Grid item xs={6}>
    <Card sx={{ display: 'flex',justifyContent:'center',width:1000,height:800, mt:-3}}>
      <CardMedia sx={{ height:700, width:500,justifyContent:'flex-start'}}>
      <Background component="img" sx={{ width: 500, height: 700,mt:7,mr:200 }}>
      <div style={{ position: 'absolute', width: '100%', height: '100%', objectFit: 'contain' }}>
      <Carousel
        animation="slide"
        index={activeIndex}
        autoPlay={true} 
        timeout={3000} 
        onChange={handleChange}
      >
        {images.map((image, index) => (
          <Paper key={index} elevation={3} style={{  width: '70%', 
          height: '70%', 
          marginLeft: '25%',
          position: 'relative',
          top: '70%',
          transform: 'translateY(0%)', }}>
            <img src={image.vector} alt={`Slide ${index}`} style={{ width: '100%', height: '100%', objectFit: 'contain'  }} />
          </Paper>
        ))}
      </Carousel>
    </div>
      </Background></CardMedia>
      <CardMedia sx={{height:700,width:400,justifyContent:'flex-end', mt:7}}>
      <CardMedia sx={{height:500,width:400,justifyContent:'flex-end', border:1,borderColor:'gray'}}>
      <ImageListItem sx={{width:250,height:100,justifyContent:'center',ml:5}}>
        <Background1 component='img' sx={{ width: 250, height: 120,mt:5,}}/></ImageListItem>
      <CardMedia sx={{height:500,width:300,justifyContent:'flex-end', mt:20,ml:5}}>
      <form onSubmit={handleLogin}>
      <Container maxWidth="xs">
      <div>
        {/* <Image/>  */}
      </div>
      <TextField
      placeholder="Enter an firstname"
      fullWidth
      margin="normal"
      value={firstName} 
      required
      onChange={(e) => setfirstName(e.target.value)}/>
      <TextField
      placeholder="Enter an email address"
      fullWidth
      margin="normal"
      value={email} 
          required
          onChange={(e) => setemail(e.target.value)}
      />
<Button fullWidth variant='contained' type="submit"  >Login</Button>     
<Grid container direction="row" xs={24} mt={3} mr={3} sx={{ width: '100%',alignItems: 'center'}}>
<Grid item xs >
<Divider  />
</Grid>
<Grid item xs>
<Typography>OR</Typography>
</Grid>
<Grid item xs>
<Divider/>
</Grid>
{/* <Divider>OR</Divider> */}
</Grid>

<Grid container sx={{ display: 'flex', alignItems: 'center', mt:3}}>
      <Grid item xs>
        <FacebookIcon />
        <Link href="https://www.facebook.com/" underline="none"  style={{ verticalAlign: 'top' }}>
          Log in with Facebook
        </Link>
      </Grid>
    </Grid>

<div style={{ textAlign: 'center' }}>
        <Link href="#" color="secondary">
          Forgotten your password?
        </Link>
</div>
    </Container>
      </form>
      </CardMedia>
      </CardMedia>
      <CardMedia sx={{height:70,width:400, border:1, mt:1,borderColor:'gray'}}>
    <Grid item sx={{mt:2}}>
              <Typography >
                "Don't have an account? <Button onClick={()=>navigate('/Signup')} >{"Sign Up"}</Button>
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
             
          
      
      
    </Card>
    </Grid>
    <Grid item xs={4}>
    <></>
  </Grid>
    </Grid>
    
    
    </>
  )
}
