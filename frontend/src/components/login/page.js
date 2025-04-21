"use client";
import React from "react";
import Box, { flexbox } from "@mui/system/Box";
import { Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/joy/Button";
import Checkbox from '@mui/material/Checkbox';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
import google from "../../../public/google.png";
import facebook from "../../../public/facebook.png";
import leftimage from "../../../public/left-image.png";
import Image from "next/image";


const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
});
const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [showPassword, setShowPassword] = useState(false);

  // const navigate=useNavigate();

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmit = (data) => {
    console.log("Submitted Data:", data);
    
  };
  function forgotPasswordHandler(){
    console.log("Forgot Password Button Clicked");
  }

  return (
    <>
      <Box
        component="section"
        sx={{ p: 2, border: "1px dashed grey", display: "flex", height:'100vh' ,width: "100vw",overflowY: "auto"}}
      >
        {/* left box */}
        <Box
          component="section"
          sx={{
            p: 2,
            border: "1px dashed grey",
            width: "50%",
            backgroundColor: "#F7FAFC",
            overflowY: "auto",
            height:'100vh'
            
          }}
        >
          <Box>
            {/* olara */}
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "#1C4532",
                letterSpacing: 1,
              }}
            >
              Olara
            </Typography>
          </Box>

          {/* olaara ka below part */}
          <Box border={"1px solid black"} marginLeft={"2%"}>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  color: "#171923",
                  letterSpacing: 1,
                }}
              >
                Sign in
              </Typography>
            </Box>

            {/* dont have an account */}
            <Box display={"flex"} border={"1px solid black"} marginTop={"2%"}>
              <Typography variant="body2" sx={{ color: "grey.600" }}>
                Dont have an account?{" "}
              </Typography>
              <Typography color="#3FB6FF">Create now </Typography>
            </Box>

            {/* form */}

            <Box component="section" sx={{ p: 2, border: "1px dashed grey" }}>
              <form onSubmit={handleSubmit(onSubmit)}>
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
                        <IconButton
                          onClick={togglePasswordVisibility}
                          edge="end"
                        >
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

                {/* forgot password */}
                <Box display={"flex"}justifyContent={"space-between"}>
                <Checkbox {...label} />
                    <Typography onClick={forgotPasswordHandler} variant="h6" sx={{  textDecoration: "underline",
    color: "#3FB6FF",
    cursor: "pointer",
    display: "inline-block",
    ml: 1,}}> Forgot password</Typography>
                </Box>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  sx={{ borderRadius: "25px" }}
                >
                  Sign in
                </Button>
              </form>
            </Box>
            {/* or wala part */}
            <Box display="flex" alignItems="center" width="100%">
            {/* Left line */}
            <Box flex={1} height="1px" bgcolor="#A0AEC0" />

            {/* OR Text */}
            <Typography variant="body2" sx={{ mx: 2, color: "grey.600" }}>
              or
            </Typography>

            {/* Right line */}
            <Box flex={1} height="1px" bgcolor="#A0AEC0" />
          </Box>
          {/* continue with google and fb bbutton */}

          <Box component="section" sx={{ p: 2, border: "1px  black" }}>
                        <Button
                          variant="outlined"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            color: "black",
                           width:"100%",
                           borderRadius:"25px"
                          }}
                        >
                         <Image src={google} height={19} width={19} />
                          Continue with Google
                         
                        </Button>
                      </Box>


                      {/* fb */}
                      <Box component="section" sx={{ p: 2, border: "1px  black" }}>
                        <Button
                          variant="outlined"
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 3,
                            color: "black",
                           width:"100%",
                           borderRadius:"25px"
                          }}
                        >
                         <Image src={facebook} height={19} width={19} />
                         Continue with facebook
                         
                        </Button>
                      </Box>

          
          </Box>
        </Box>

        {/* right box */}

        <Box component="section"
          sx={{
            p: 2,
            border: "1px dashed grey",
            width: "50%",
            height: "100vh",
      backgroundImage: `url("/left-image1.png")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      overflowY: "auto",
          }}>
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
