"use client";
import React from "react";
import Box from "@mui/material/Box";
import Image from "next/image";
import google from "../../../public/google.png";
import { Divider, Typography } from "@mui/material";
import Button from "@mui/joy/Button";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useRouter } from 'next/navigation';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import rightimg from '../../../public/image.png'


const schema = yup.object().shape({
  name: yup
    .string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .matches(/[A-Z]/, "Password must have at least one uppercase letter")
    .matches(/[a-z]/, "Password must have at least one lowercase letter")
    .matches(/[0-9]/, "Password must have at least one number")
    .matches(/[@$!%*?&#]/, "Password must have at least one special character")
    .required("Password is required"),
});

const Signuppage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
    function loginHandler(){
      router.push('/login')
    }

  const onSubmit = async(data) => {
    console.log("Submitted Data:", data)
    // const response=await fetch('http://localhost:8080/user')
    const signupUser=await fetch("http://localhost:8080/user", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name:data.name,email:data.email,password:data.password})
    })
    setOpen(true);

    setTimeout(() => {
      router.push('/login'); 
    }, 2000);
    
    

  };
  return (
    <>
      <Box display={"flex"}>
        {/* here is img */}
   
        <Box
  component="section"
  sx={{ width: "50%" }}
>
  <Image
    src={rightimg}
    alt="Signup Banner"
    width={600}
    height={600}
    style={{ objectFit: "cover", width: "100%", height: "100%" }}
  />
</Box>
        {/* here is right part */}
        <Box
          component="section"
          sx={{
            p: 2,
            width: "50%",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* upper box */}
          <Box component="section" sx={{ p: 2 }}>
            {/* <Box component="section" sx={{ p: 2}}> */}
              {/* yaha upper wala image dikha do */}
            {/* </Box> */}

            <Box component="section" sx={{ }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "black",
                  letterSpacing: "1px",
                  textAlign: "center",
                  fontFamily: "Roboto, sans-serif",
                  marginBottom: "16px",
                }}
              >
                Create an account
              </Typography>
            </Box>

            <Box component="section" sx={{ p: 2,  }}>
              <Button
                variant="outlined"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  color: "black",
                  marginLeft: "25%",
                }}
              >
                Create account with Google
                <Image src={google} height={19} width={19} />
              </Button>
            </Box>
          </Box>
          {/* or wala box */}

          <Box display="flex" alignItems="center" width="100%">
            {/* Left line */}
            <Box flex={1} height="1px" bgcolor="grey.400" />

            {/* OR Text */}
            <Typography variant="body2" sx={{ mx: 2, color: "grey.600" }}>
              or
            </Typography>

            {/* Right line */}
            <Box flex={1} height="1px" bgcolor="grey.400" />
          </Box>

          {/* form wala box */}
          <Box component="section" sx={{ p: 2}}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextField
                label="Name"
                fullWidth
                margin="normal"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
              <TextField
                label="Email"
                fullWidth
                margin="normal"
                {...register("email")}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
              <TextField
                label="Password"
                type={showPassword ? "text" : "password"}
                fullWidth
                margin="normal"
                {...register("password")}
                error={!!errors.password}
                helperText={errors.password?.message}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={togglePasswordVisibility} edge="end">
                        {showPassword ? (
                          <VisibilityOffIcon />
                        ) : (
                          <VisibilityIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              
              <Button
              
                type="submit"
                size="lg"
                fullWidth
                sx={{ borderRadius: "25px" }}
              >
                Create an account
              </Button>
              {/* already have an account  */}
              <Box
                display={"flex"}
               
                marginTop={"2%"}
                justifyContent={"center"}
                onClick={loginHandler}
              >
                <Typography variant="body2" sx={{ color: "grey.600" }}>
                  Already have an account?{" "}
                </Typography>
                <Typography color="#3FB6FF">login </Typography>
              </Box>

              <Box
                sx={{
                
                  marginTop: "2%",
                  display: "flex",
                  justifyContent: "center",
                  gap: 3,
                  padding: 2,
                }}
              >
                <FacebookIcon
                  sx={{
                    color: "#555",
                    cursor: "pointer",
                  }}
                />
                <InstagramIcon
                  sx={{
                    color: "#555",
                    cursor: "pointer",
                  }}
                />
                <TwitterIcon
                  sx={{
                    color: "#555",
                    cursor: "pointer",
                  }}
                />
                <LinkedInIcon
                  sx={{
                    color: "#555",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </form>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
  <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
    Signup Successful! Redirecting to Login...
  </Alert>
</Snackbar>
      </Box>
    </>
  );
};

export default Signuppage;
