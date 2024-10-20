import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import data from "../../data/data";
import React from "react";
import CustomButton from "../../config/button";

export default function Hero() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isSmallTablet = useMediaQuery("(min-width:481px) and (max-width:768px)");
  const isMediumTablet = useMediaQuery("(min-width:769px) and (max-width:1024px)");

  return (
    <Stack my={10}>
      <Stack
        sx={{
          bgcolor: "#FAFAFA",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "800px",
        }}
      >
        <Container maxWidth="Sm">
          {data.hero.map((item) => {
            return (
              <Stack
                direction={isMobile || isSmallTablet ? "column" : "row"}
                spacing={4}
                key={item.id}
                alignItems="center"
              >
                <Stack
                  textAlign={isMobile || isSmallTablet ? "center" : "left"}
                  spacing={2}
                >
                  <Typography
                    variant="logo"
                    fontSize={isMobile ? 16 : isSmallTablet ? 18 : 20}
                  >
                    {item.disc}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "700",
                      color: "#274C5B",
                      fontSize: isMobile ? "42px" : isSmallTablet ? "60px" : "76px",
                    }}
                  >
                    {item.title}
                  </Typography>
               
                </Stack>
                <Stack maxWidth={isMobile ? "100%" : isSmallTablet ? "80%" : "650px"}>
                  <img
                    src={item.img}
                    alt="hero"
                    style={{ width: "100%", height: "auto" }}
                  />
                </Stack>
              </Stack>
            );
          })}
        </Container>
      </Stack>
    </Stack>
  );
}
