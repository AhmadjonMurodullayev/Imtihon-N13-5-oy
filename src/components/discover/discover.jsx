import { Container, Stack, Typography, Grid } from "@mui/material";
import React from "react";
import UserIcon from "../../assets/icons/users-icon";
import data from "../../data/data";
import { SecondaryButtonn, SecondaryButtons } from "../ui/button/style";

export default function Discover() {
  return (
    <Stack sx={{ py: 5 }}>
      <Container maxWidth="Sm">
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Stack spacing={1}>
            <Typography variant="logo" sx={{ fontWeight: 700 }}>
              News
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 700 }}>
              Discover weekly content about organic food, & more
            </Typography>
          </Stack>
          <Stack>
            <SecondaryButtonn
              sx={{ padding: "15px 20px", borderRadius: "10px" }}
            >
              More News
            </SecondaryButtonn>
          </Stack>
        </Stack>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {data.discover.map((item) => {
            return (
              <Grid item xs={12} md={6} key={item.id}>
                <Stack spacing={3}>
                  <Stack
                    sx={{
                      backgroundImage: `url(${item.img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: "100%",
                      height: "424px",
                      borderRadius: "12px",
                      overflow: "hidden",
                      position: "relative",
                      padding: "30px ",
                      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Stack
                      sx={{
                        bgcolor: "#FFF",
                        width: "52px",
                        height: "52px",
                        borderRadius: "50%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        padding: "25px",
                        position: "absolute",
                        top: 20,
                        left: 20,
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Typography variant="h6" fontWeight={700}>
                        {item.buttons}
                      </Typography>
                    </Stack>

                    <Stack
                      sx={{
                        margin: "0 auto",
                        bgcolor: "#FFF",
                        width: { xs: "90%", sm: "75%", lg: "553px" },
                        height: { xs: "auto", sm: "300px" },
                        px: { xs: 2, sm: "46px" },
                        py: { xs: 2, sm: "57px" },
                        position: "absolute",
                        bottom: { xs: 0, sm: -50 },
                        left: 0,
                        right: 0,
                        borderRadius: "12px",
                        boxShadow: "0px 0px 5px 5px #FFF",
                        zIndex: 1,
                      }}
                    >
                      <Stack
                        direction={"row"}
                        alignItems={"center"}
                        spacing={1}
                      >
                        <UserIcon />
                        <Typography variant="h6" fontWeight={600}>
                          {item.disc}
                        </Typography>
                      </Stack>

                      <Stack spacing={1} sx={{ mt: 2 }}>
                        <Typography variant="h5" fontWeight={700}>
                          {item.title}
                        </Typography>
                        <Typography variant="body1" color={"#555"}>
                          {item.info}
                        </Typography>
                        <SecondaryButtons
                          sx={{
                            width: "135px",
                            height: "45px",
                            borderRadius: "10px",
                          }}
                        >
                          {item.btn}
                        </SecondaryButtons>
                      </Stack>
                    </Stack>
                  </Stack>
                </Stack>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Stack>
  );
}
