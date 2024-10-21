import React, { useState } from "react";
import {
  Container,
  Stack,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import header from '../../assets/headerlogo.png'
import { Link } from "react-router-dom";
import HeaderKorzinkaIcon from "../../assets/icons/header-korzinka-icons";
import HeaderSorchIcons from "../../assets/icons/herader-sorch-icons";
import { Btns, Buttons, Inputs, InputsWrapper, KorzinkaIcon } from "./style";
import { useMediaQuery } from "@mui/material";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:900px)");
  const isTablet = useMediaQuery("(max-width:990px)");

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderLinks = () => (
    <>
      <Link
        to="/"
        style={{
          fontWeight: "600",
          fontSize: "20px",
          color: "#274C5B",
          textDecoration: "none",
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          fontFamily: "Roboto",
          fontWeight: "600",
          fontSize: "20px",
          color: "#274C5B",
          textDecoration: "none",
        }}
      >
        About
      </Link>
      <Link
        to="/"
        style={{
          fontWeight: "600",
          fontSize: "20px",
          color: "#274C5B",
          textDecoration: "none",
        }}
      >
        Pages
      </Link>
      <Link
        to="/shop"
        style={{
          fontWeight: "600",
          fontSize: "20px",
          color: "#274C5B",
          textDecoration: "none",
        }}
      >
        Shop
      </Link>
      <Link
        to="/"
        style={{
          color: "#274C5B",
          fontSize: "20px",
          fontWeight: "600",
          textDecoration: "none",
        }}
      >
        Projects
      </Link>
      <Link
        to="/"
        style={{
          fontWeight: "600",
          fontSize: "20px",
          color: "#274C5B",
          textDecoration: "none",
        }}
      >
        News
      </Link>
    </>
  );

  return (
    <Container maxWidth="xl">
      <Stack
        my={2}
        direction="row"
        justifyContent="space-between"
        alignItems={"center"}
        gap={isTablet ? 0 : "130px"}
      >
        <Stack maxWidth={198}>
          <img src={header} alt="Logo" />
        </Stack>

        {isMobile ? (
          <>
            <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={handleDrawerToggle}>
              <List onClick={handleDrawerToggle}>
            <Stack my={2} textAlign={"center"} gap={3}>
            {renderLinks()}
            </Stack>
                <Box sx={{ padding: "16px" }}>
                  <InputsWrapper>
                    <Inputs />
                    <Buttons>
                      <HeaderSorchIcons />
                    </Buttons>
                  </InputsWrapper>
                  <Btns>
                    <KorzinkaIcon>
                      <HeaderKorzinkaIcon />
                    </KorzinkaIcon>
                    <Typography variant="h6">Cart(0)</Typography>
                  </Btns>
                </Box>
              </List>
            </Drawer>
          </>
        ) : (
          <Stack direction="row" gap={6}>
            {renderLinks()}
          </Stack>
        )}

        {!isMobile && (
          <Stack direction="row" gap={"18px"} alignItems={"center"}>
            <InputsWrapper>
              <Inputs />
              <Buttons>
                <HeaderSorchIcons />
              </Buttons>
            </InputsWrapper>
            <Btns>
              <KorzinkaIcon>
                <HeaderKorzinkaIcon />
              </KorzinkaIcon>
              <Typography variant="h6">Cart(0)</Typography>
            </Btns>
          </Stack>
        )}
      </Stack>
    </Container>
  );
}
