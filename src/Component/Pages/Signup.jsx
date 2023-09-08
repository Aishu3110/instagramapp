import React from 'react'
import { useState } from 'react';
import {Container,CssBaseline,TextField,Button,Grid,Link,Typography} from '@mui/material';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
// import { NotificationManager } from "react-notifications";


export default function Signup() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
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
    const navigate = useNavigate()
  return (
    <>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div style={{width:'500px' ,height:'600px', display: 'flex', flexDirection: 'column', alignItems: 'center',marginTop:'100px', border:'2px solid black'}}>
        <form onSubmit={handleSubmit}  style={{ width: '400px', marginTop: '50px' ,flexDirection: 'column'}}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
                <TextField placeholder="Enter username"
                        type="text"
                        required
                        value={formData.firstname}
                onChange={(e) =>
                  setFormData({ ...formData, firstname: e.target.value })}/>
            </Grid><br></br>
            <Grid item xs={12} sm={12}>
            <TextField placeholder="lastname" type="text" required value={formData.lastname}
                onChange={(e) =>
                  setFormData({ ...formData, lastname: e.target.value })} />
            </Grid>
            <Grid item xs={12}>
            <TextField placeholder="Enter mail id" type="email"
                    required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })}  />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            // onClick={() => navigate('/')}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
          <Typography variant="body2" color="textSecondary" align="center" sx={{mt:5}}>
            By signing up, you agree to our <Link href="#">Terms</Link> and <Link href="#">Privacy Policy</Link>.
          </Typography>
          <Grid item sx={{mt:7}}>
              <h1 href="#" variant="body2" >
                "Don't have an account? <Button onClick={()=>navigate('/')} variant='outlined'>{"Login"}</Button>
              </h1>
      </Grid>
          </Grid>
        </form>
      </div>
    </Container>
   
    </>
  )
}
