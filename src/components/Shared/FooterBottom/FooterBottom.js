import React from "react";
// import CssBaseline from '@mui/material/CssBaseline';
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
// import Link from '@mui/material/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      NSU Complaint Box
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const FooterBottom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "10vh",
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "100vh",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            NSU Complaint Lodgement for all member
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
};

export default FooterBottom;
