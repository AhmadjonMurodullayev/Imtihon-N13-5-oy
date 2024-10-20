import { Container, Grid, Stack, Typography, Rating, useMediaQuery } from "@mui/material";
import React from "react";
import data from "../../data/data";
import styled from "styled-components";
import { SecondaryButtons } from "../ui/button/style";

const NewCardBadge = styled.div`
  background-color: #274c5b;
  border-radius: 10px;
  color: #fff;
  padding: 5px 12px;
  position: absolute;
  top: 8px;
  left: 10px;
`;

export default function Frued() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isSmallTablet = useMediaQuery("(min-width:481px) and (max-width:768px)");

  return (
    <Stack m={"auto"} maxWidth={"1550px"} bgcolor={"#274C5B"} height={isMobile ? "auto" : "750px"}>
      <Container maxWidth="Sm">
        <Stack my={isMobile ? 4 : 10}>
          <Stack
            direction={isMobile || isSmallTablet ? "column" : "row"}
            justifyContent={"space-between"}
            alignItems={isMobile ? "center" : "center"}
            textAlign={isMobile ? "center" : "left"}
          >
            <Stack my={isMobile ? 2 : 4}>
              <Typography variant="logo">Offer</Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "700",
                  color: "#fff",
                  fontSize: isMobile ? "30px" : isSmallTablet ? "40px" : "50px",
                }}
              >
                We Offer Organic For You
              </Typography>
            </Stack>
            <SecondaryButtons
              sx={{
                width: isMobile ? "120px" : "140px",
                height: isMobile ? "45px" : "55px",
                borderRadius: "16px",
                mt: isMobile ? 2 : 0,
              }}
            >
              Shop Now
            </SecondaryButtons>
          </Stack>

          <Stack>
            <Grid container spacing={isMobile ? 2 : 3}>
              {data.food.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
                  <Stack
                    spacing={1}
                    sx={{
                      height: isMobile ? "auto" : "400px",
                      padding: 2,
                      position: "relative",
                      backgroundColor: "#FAFAFA",
                      boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                      borderRadius: "12px",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
                      },
                    }}
                  >
                    <NewCardBadge>{item.buttontitle}</NewCardBadge>

                    <img
                      src={item.img}
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: isMobile ? "200px" : "80%",
                        objectFit: "cover",
                        borderRadius: "8px",
                      }}
                    />

                    <Typography
                      borderBottom={"1px solid #ccc"}
                      variant="h6"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>

                    <Stack direction="row" justifyContent="space-between">
                      <Stack direction="row" spacing={1}>
                        <Typography
                          variant="body2"
                          color="primary"
                          sx={{ textDecoration: "line-through" }}
                        >
                          {item.price}
                        </Typography>
                        <Typography
                          variant="h6"
                          fontSize={isMobile ? "16px" : "18px"}
                          fontWeight={"700"}
                        >
                          {item.price2}
                        </Typography>
                      </Stack>
                      <Rating name="size-small" defaultValue={5} size="small" />
                    </Stack>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
