import { Container, Stack, Typography, Grid, Rating } from "@mui/material";
import React from "react";
import { SecondaryButton } from "../ui/button/style";
import data from "../../data/data";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NewCardBadge = styled.div`
  background-color: #274c5b;
  border-radius: 10px;
  color: #fff;
  padding: 5px 12px;
  position: absolute;
  top: 8px;
  left: 10px; 
`;

export default function Products() {
  return (
    <Container maxWidth="Sm"> 
      <Stack spacing={2}>
        <Typography textAlign={"center"} variant="logo">
          Categories
        </Typography>
        <Typography textAlign={"center"} variant="products">
          Our Products
        </Typography>
        <Grid container spacing={3}>
          {data.products.map((item, index) => (
            <Grid item xs={12} sm={12} md={4} lg={3} key={index}>
              <Link  to={`/shop-single/${item.id}`} style={{ textDecoration: "none" }} >
              <Stack
                sx={{
                  height: "400px",
                  padding: 2,
                  position: "relative",
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
                      height: "80%",
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
                      fontSize={"18px"}
                      fontWeight={"700"}
                      >
                      {item.price2}
                    </Typography>
                  </Stack>
                  <Rating name="size-small" defaultValue={5} size="small" />
                </Stack>
              </Stack>
                      </Link>
            </Grid>
          ))}
        </Grid>

        <Stack direction={"row"} justifyContent={"center"} margin={"0px auto"}>
          <SecondaryButton
            sx={{
              width: "140px",
              height: "55px",
              borderRadius: "16px",
            }}
          >
            Shop Now
          </SecondaryButton>
        </Stack>
      </Stack>
    </Container>
  );
}
