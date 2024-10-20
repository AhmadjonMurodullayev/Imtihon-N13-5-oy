import React from "react";
import { Box, Typography, Link, Grid, IconButton, Container } from "@mui/material";
import logo from "../../assets/logo.svg";
export default function Footer() {
  return (
    <Container maxWidth="Xs">
    <Box
      component="footer"
      sx={{
        padding: "40px 0",
        color: "#333",
      }}
    >
      <Grid container spacing={4} sx={{ maxWidth: "1200px", margin: "0 auto" }}>
        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="primary" gutterBottom>
            Contact Us
          </Typography>
          <Typography>Email: needhelp@organia.com</Typography>
          <Typography>Phone: 666 888 888</Typography>
          <Typography>Address: 88 road, borklyn street, USA</Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img src={logo} alt="" />
          <Typography>
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "start",
              gap: "10px",
              marginTop: "20px",
            }}
          >
            <IconButton color="primary"></IconButton>
            <IconButton color="primary"></IconButton>
            <IconButton color="primary"></IconButton>
            <IconButton color="primary"></IconButton>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Typography variant="h6" color="primary" gutterBottom>
            Utility Pages
          </Typography>
          <Box gap={"15px"} sx={{ display: "flex", flexDirection: "column" }}>
            <Link
              href="#"
              color="inherit"
              sx={{ display: "block", textDecoration: "none" }}
            >
              Style Guide
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ display: "block", textDecoration: "none" }}
            >
              404 Not Found
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ display: "block", textDecoration: "none" }}
            >
              Password Protected
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ display: "block", textDecoration: "none" }}
            >
              Licenses
            </Link>
            <Link
              href="#"
              color="inherit"
              sx={{ display: "block", textDecoration: "none" }}
            >
              Changelog
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Box sx={{ textAlign: "center", marginTop: "40px", color: "#777" }}>
        <Typography variant="body2">
          Copyright © Organick | Designed by VictorFlow Templates - Powered by
          Webflow
        </Typography>
      </Box>
    </Box>

    </Container>
  );
}
