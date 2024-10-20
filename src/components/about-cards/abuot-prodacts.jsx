import { Container, IconButton, Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import Instagiram from "../../assets/icons/instagiram";
import Facebook from "../../assets/icons/facebook";
import Tiwtter from "../../assets/icons/tiwitter";
import data from "../../data/data";

export default function AbuotProdacts() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isSmallTablet = useMediaQuery("(min-width:481px) and (max-width:768px)");
  const isMediumTablet = useMediaQuery("(min-width:769px) and (max-width:1024px)");

  return (
    <Stack my={20}>
      <Container maxWidth="Sm">
        <Stack spacing={4} textAlign="center">
          <Typography variant="subtitle1">Team</Typography>
          <Typography variant="h6" fontWeight={700} fontSize={isMobile ? 30 : isSmallTablet ? 35 : 45}>
            Our Organic Experts
          </Typography>
          <Typography variant="body1" color="textSecondary" fontSize={isMobile ? 14 : isSmallTablet ? 16 : 18}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </Typography>
        </Stack>

        <Grid container spacing={4} justifyContent="center" mt={6}>
          {data.aboutproducts.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                sx={{
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                  borderRadius: "15px",
                  overflow: "hidden",
                }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "15px",
                  }}
                />
                <Stack
                  direction={isMobile || isSmallTablet ? "column" : "row"}
                  justifyContent="space-between"
                  mt={2}
                  p={2}
                >
                  <Stack>
                    <Typography variant="h6" fontWeight={700}>
                      {item.title}
                    </Typography>
                    <Typography variant="logos" >
                      {item.logo}
                    </Typography>
                  </Stack>
                  <Stack direction={"row"} gap={1}>
                    <IconButton>
                      <Instagiram />
                    </IconButton>
                    <IconButton>
                      <Facebook />
                    </IconButton>
                    <IconButton>
                      <Tiwtter />
                    </IconButton>
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Stack mt={8} bgcolor={"#274C5B"} py={8}>
        <Container maxWidth="Sm">
          <Stack textAlign="center">
            <Typography variant="logo">About Us</Typography>
            <Typography variant="h5" fontWeight={700} fontSize={isMobile ? 30 : isSmallTablet ? 35 : 45} color="#fff">
              What We Offer for You
            </Typography>
          </Stack>

          <Grid container spacing={4} justifyContent="center" mt={6}>
            {data.cards.map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Stack
                  sx={{
                    borderRadius: "15px",
                    overflow: "hidden",
                    textAlign: "center",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                      transform: "scale(1.05)",
                      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
                    },
                  }}
                >
                  <img
                    src={item.img}
                    style={{ width: "100%", height: "auto", borderRadius: "15px 15px 0 0" }}
                  />
                  <Typography variant="h6" fontWeight={700} color="#fff" mt={2}>
                    {item.title}
                  </Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Stack>
    </Stack>
  );
}
