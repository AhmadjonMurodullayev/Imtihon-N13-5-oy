import React from "react";
import Header from "../../layout/header/header";
import Footer from "../../layout/footer/footer";
import {
  Button,
  Container,
  Grid,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import single from "../../assets/singil.png";
import data from "../../data/data";
import styled from "styled-components";
import CardFooter from "../../layout/footer/card-footer";

const NewCardBadge = styled.div`
  background-color: #274c5b;
  border-radius: 10px;
  color: #fff;
  padding: 5px 12px;
  position: absolute;
  top: 8px;
  left: 10px;
`;

export default function ShopSingleLayout() {
  const { id } = useParams();
  const prodacts = data.products.find((item) => item.id == id);
  let item = prodacts ? prodacts : <h2>Topilmadi</h2>;

  return (
    <Stack>
      <Header />

      <Stack maxWidth={"1550px"} mx="auto" my={4}>
        <img src={single} alt="" style={{ width: "100%", height: "auto" }} />
      </Stack>

      <Container maxWidth="Sm">
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack sx={{ flex: 1, maxWidth: "591px", height: "auto" }}>
            <img
              src={item.img}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </Stack>

          <Stack sx={{ flex: 1, width: "100%", maxWidth: { md: "50%" } }}>
            <Typography variant="h6" fontWeight={700} fontSize={{ xs: 28, md: 40 }}>
              Health Pistachios
            </Typography>
            <Rating name="size-small" defaultValue={5} size="small" />
            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Typography
                variant="h5"
                fontWeight={700}
                color={"#B8B8B8"}
                fontSize={"20px"}
              >
                {item.price}
              </Typography>
              <Typography variant="h6" fontWeight={700} fontSize={{ xs: 18, md: 25 }}>
                {item.price2}
              </Typography>
            </Stack>
            <Typography variant="body1" width={"100%"} my={2}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </Typography>

            <Stack direction={"row"} alignItems={"center"} gap={2}>
              <Typography variant="h6" fontWeight={700} fontSize={"20px"}>
                Quantity:
              </Typography>
              <Button
                sx={{
                  width: { xs: "100px", sm: "134px" },
                  height: { xs: "44px", sm: "52px" },
                  borderRadius: "10px",
                  bgcolor: "inherit",
                  border: "1px solid #274C5B",
                  color: "#274C5B",
                }}
              >
                1
              </Button>
              <Button
                sx={{
                  width: { xs: "160px", sm: "204px" },
                  height: { xs: "44px", sm: "52px" },
                  borderRadius: "10px",
                  bgcolor: "#274C5B",
                  color: "#ffff",
                }}
              >
                Add To Cart
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <Container maxWidth="Sm">
        <Stack
          textAlign={"center"}
          direction={"column"}
          alignItems={"center"}
          gap={2}
          justifyContent={"center"}
          my={4}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent={{md:"center"}}
            alignItems={"center"}
            gap={2}
            width={"100%"}
          >
            <Button
              sx={{
                width: { xs: "100%", sm: "304px" },
                height: { xs: "44px", sm: "52px" },
                borderRadius: "10px",
                bgcolor: "#274C5B",
                color: "#ffff",
              }}
            >
              Product Description
            </Button>
            <Button
              sx={{
                width: { xs: "100%", sm: "284px" },
                height: { xs: "44px", sm: "52px" },
                borderRadius: "10px",
                bgcolor: "inherit",
                border: "1px solid #274C5B",
                color: "#274C5B",
              }}
            >
              Additional Info
            </Button>
          </Stack>
          <Typography>
            Welcome to the world of natural and organic. Here you can discover
            the bounty of nature. We aim to give our customers a healthy
            chemical-free meal for perfect nutrition. It offers about 8–10%
            carbs. Simple sugars make up 70% and 80% of the carbs in raw.
          </Typography>
        </Stack>
      </Container>

      <Container maxWidth="Sm">
        <Typography textAlign={"center"} variant="h6" fontSize={{ xs: 32, sm: 40, md: 50 }} my={4}>
          Related Products
        </Typography>
        <Grid container spacing={3}>
          {data.products.slice(0, 4).map((item, index) => (
            <Grid item xs={12} sm={12} md={4} lg={3} key={index}>
              <Link
                to={`/shop-single/${item.id}`}
                style={{ textDecoration: "none" }}
              >
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
      </Container>

      <CardFooter />
      <Footer />
    </Stack>
  );
}
