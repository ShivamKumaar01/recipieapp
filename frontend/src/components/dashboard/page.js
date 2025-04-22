"use client";
import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  image: yup.string().required("image is required"),
  category: yup.string().required("category is required"),
  description: yup.string().required("description is required"),
  title: yup.string().required("category is required"),
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
const DashboardPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onSubmit = async (data) => {
    console.log("Submitted Data:", data);
    // const response=await fetch('http://localhost:8080/user')
    // const signupUser=await fetch("http://localhost:8080/user", {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({name:data.name,email:data.email,password:data.password})
    // })
    // setOpen(true);

    // setTimeout(() => {
    //   router.push('/login');
    // }, 2000);
  };
  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Recipie App
            </Typography>
            <Button color="inherit" onClick={handleOpen}>
              Add product
            </Button>
            <Modal
              keepMounted
              open={open}
              onClose={handleClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}>
                <h1>add product</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    label="Image"
                    fullWidth
                    margin="normal"
                    {...register("image")}
                    error={!!errors.image}
                    helperText={errors.image?.message}
                  />
                  <TextField
                    label="Title"
                    fullWidth
                    margin="normal"
                    {...register("title")}
                    error={!!errors.title}
                    helperText={errors.title?.message}
                  />
                  <TextField
                    label="Category"
                    fullWidth
                    margin="normal"
                    {...register("category")}
                    error={!!errors.category}
                    helperText={errors.category?.message}
                  />

                  <TextField
                    label="Desctiption"
                    fullWidth
                    margin="normal"
                    {...register("description")}
                    error={!!errors.description}
                    helperText={errors.description?.message}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    sx={{
                      borderRadius: "25px",
                      backgroundColor: "#1976d2",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                  >
                    Add Product
                  </Button>
                </form>
              </Box>
            </Modal>
          </Toolbar>
        </AppBar>
        <h1>here is your card</h1>
        <Box>
          
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
