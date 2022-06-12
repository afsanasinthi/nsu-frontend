<InputLabel htmlFor="standard-adornment-password">
              Re-Password
            </InputLabel>
            <Input
              sx={{ width: "75%", m: 1 }}
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChangePass("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              //   id="outlined-select-currency"
              id="standard-basic"
              variant="standard"
              select
              label="Select your Ocupation"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {" "}
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-basic"
              variant="standard"
              name="upload-photo"
              type="file"
              sx={{ width: "75%", m: 1 }}
            />



            ///////////////////////////////
            import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import {
  Container,
  Typography,
  TextField,
  InputLabel,
  InputAdornment,
  Input,
  IconButton,
  Button,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import loginImage from "../../../../img/cyber-bullying-illustration-design_23-2148600810.png";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";

// const currencies = [
//   {
//     value: "USD",
//     label: "$",
//   },
//   {
//     value: "EUR",
//     label: "€",
//   },
//   {
//     value: "BTC",
//     label: "฿",
//   },
//   {
//     value: "JPY",
//     label: "¥",
//   },
// ];

const Login = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleLoginSubmit = (e) => {
    alert("login");
    e.preventDefault();
  };
  //   const [currency, setCurrency] = React.useState("EUR");
  //   const handleChange = (event) => {
  //     setCurrency(event.target.value);
  //   };
  const [loginData, setLoginData] = useState({});

  const handleOnChange = (e) => {
    // setValues({ ...values, [prop]: event.target.value });
    const field = e.target.name;
    const value = e.target.value;
    // console.log(field, value);
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLoginSubmit} variant="standard">
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
              name="email"
              onChange={handleOnChange}
            />
            <InputLabel
              htmlFor="standard-adornment-password"
              sx={{ width: "35%", m: 1 }}
            >
              Password
            </InputLabel>
            <Input
              sx={{ width: "75%" }}
              id="standard-adornment-password"
              type={values.showPassword ? "text" : "password"}
              //   value={values.password}
              name="password"
              onChange={handleOnChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="your password"
            />
            <Button
              variant="contained"
              sx={{ width: "75%", m: 3 }}
              type="submit"
            >
              Login
            </Button>
            <Grid container spacing={2}>
              <Grid item xs={8} md={6} sx={{ width: "50%" }}>
                <p>
                  <NavLink
                    to="/forgetpassword"
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="text">Forget password </Button>
                  </NavLink>
                  ?
                </p>
              </Grid>
              <Grid item xs={8} md={6} sx={{ width: "50%" }}>
                <p>
                  New user? Please
                  <NavLink style={{ textDecoration: "none" }} to="/register">
                    <Button variant="text">Register</Button>
                  </NavLink>
                </p>
              </Grid>
            </Grid>
            <h2 className="fs-3">Or</h2>
            <p>
              login with Google
              <Button
                onClick={() => {}}
                variant="contained"
                className="btn bg-danger rounded-1 p-1 ms-1"
              >
                <GoogleIcon />
              </Button>
              <br />
            </p>
          </form>
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "90%" }} src={loginImage} alt="loginImage" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
