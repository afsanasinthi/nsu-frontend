import React, { useState } from "react";
import Grid from "@mui/material/Grid";
// import { useHistory } from 'react-router-dom';
// import ReactPhoneInput from 'react-phone-input-material-ui';
import {
  Container,
  Typography,
  TextField,
  InputLabel,
  InputAdornment,
  Input,
  IconButton,
  Button,
  MenuItem,
  CircularProgress,
  Alert
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import loginImage from "../../../../img/cartoon-characters-presenting-stop-bullying-concept_23-2148584303.png";
import { NavLink } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
// import Index from "./MobilePhone/MobilePhone";
// import MuiPhoneNumber from 'material-ui-phone-number';
import useAuth from "../../../../hooks/useAuth";
const accounts = [
  {
    value: "Student",
    label: "Student",
  },
  {
    value: "Faculty",
    label: "Faculty",
  },
  {
    value: "Admin Stuff",
    label: "Admin Stuff",
  },
  {
    value: "Non-Faculty Teaching Stuff",
    label: "Non-Faculty Teaching Stuff",
  },
  {
    value: "Helping (Guards, Cleaners etc)",
    label: "Helping (Guards, Cleaners etc)",
  },
];
const Register = () => {


  const [loginData, setLoginData] = useState({});
  const { registerUser, user, isLoading, authError } = useAuth();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  // const { phonenumber, defaultCountry, onChange, classes } = React.useState({});

  // const [account, setCurrency] = React.useState("EUR");
  // const handleChange = (event) => {
  //   setCurrency(event.target.value);
  // };

  // const [phoneData, setPhoneData] = React.useState({
  //   phone: "",
  // });
  // this.handleMobileOnChange = this.handleMobileOnChange.bind(this);
  // const handleMobileOnChange = (e) => {

  //   const field = e.target.name;
  //   const value = e.target.value;

  //   // if (value) {
  //   //   this.setState({ phone: value });
  //   // }
  //   const newPhoneData = { ...phoneData };
  //   newPhoneData[field] = value;
  //   console.log(newPhoneData);
  //   setPhoneData(newPhoneData);

  // }

  // const history = useHistory();
  // const { user, isLoading, authError } = useAuth();
  // const { user, registerUser, isLoading, authError } = useAuth();
  const handleOnBlur = (e) => {
    // setValues({ ...values, [prop]: event.target.value });
    const field = e.target.name;
    const value = e.target.value;

    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    setLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    if (loginData.password !== loginData.repassword) {
      alert('password is not match');
      return
    }
    registerUser(loginData.email, loginData.password);
    e.preventDefault();
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

        <Grid item xs={12} md={6}>
          <img style={{ width: "90%" }} className="mt-5 pt-5" src={loginImage} alt="loginImage" />
        </Grid>
        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
          <Typography variant="body1" gutterBottom>
            Registration
          </Typography>


          <form onSubmit={handleLoginSubmit} variant="standard">
            {/* <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Full Name"
              variant="standard"
              name="FullName"
              type="text"
              required
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="ID number"
              variant="standard"
              name="idnum"
              type="number"
              required
              onBlur={handleOnBlur}
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Phone number"
              variant="standard"
              name="phone"
              type="number"
              required
              onBlur={handleOnBlur}
            /> */}
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              variant="standard"
              name="email"
              type="email"
              required
              onBlur={handleOnBlur}
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
              onBlur={handleOnBlur}
              // helperText="Incorrect password."
              required
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
            <InputLabel
              htmlFor="standard-adornment-password"
              sx={{ width: "45%", m: 1 }}
            >
              Retype-Password
            </InputLabel>
            <Input
              sx={{ width: "75%" }}
              id="standard-adornment-password2"
              type={values.showPassword ? "text" : "password"}
              //   value={values.password}
              name="repassword"
              onBlur={handleOnBlur}
              required
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
              label="Retype password"
            />
            {/* <TextField
              sx={{ width: "75%", m: 1 }}
              //   id="outlined-select-currency"
              id="standard-basic"
              variant="standard"
              select
              label="Account Type"
              name="account"
              required
              // value={account}
              onBlur={handleOnBlur}
              helperText="Please select your Account Type"
            >

              {accounts.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id="standard-basic"
              variant="standard"
              helperText="Upload your Id"
              name="uploadID"
              type="file"
              onBlur={handleOnBlur}
              sx={{ width: "75%", m: 1 }}
              required
            /> */}
            {/* <ReactPhoneInput
              value={phonenumber}
              defaultCountry={defaultCountry || 'BD'}
              onChange={onChange}
              inputClass={classes.field}
              dropdownClass={classes.countryList}
              component={TextField}
            /> */}

            {/* 
            <MuiPhoneNumber
              name="phone"
              defaultCountry={"bd"}
              // variant="outlined"
              data-cy="user-phone"
              value={this.state.phone}
              onChange={this.handlePhoneChange()}
              //  onBlur={handleOnBlur}

              sx={{ width: "75%", m: 1 }}
            // value={value}
            /> */}
            <Button
              variant="contained"
              sx={{ width: "75%", m: 3 }}
              type="submit"
            >
              Register
            </Button>

            <p>
              Already registered? Please
              <NavLink style={{ textDecoration: "none" }} to="/login">
                <Button variant="text">Login</Button>
              </NavLink>
            </p>

            <h2 className="fs-3">Or</h2>
            <p>
              Register with Google
              <Button
                onClick={() => { }}
                variant="contained"
                className="btn bg-danger rounded-1 p-1 ms-1"
              >
                <GoogleIcon />
              </Button>
              <br />
            </p>
          </form>
          {isLoading && <CircularProgress />}
          {user?.email && <Alert severity="success">User Created successfully!</Alert>}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Register;
