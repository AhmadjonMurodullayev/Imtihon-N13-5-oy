import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import data from "../../data/data";

export default function Firdlat() {
  return (
    <Stack sx={{ maxWidth: "1550px", margin: "auto" }}>
      <Grid container spacing={5}>
        {data.friendly.map((item) => {
          return (
            <Grid key={item.id} item xs={12} md={6} lg={6}>
              <Stack direction={"row"} position={"relative"} sx={{ mb: 5, alignItems: "center" }}>
                <Stack
                  width={"100%"}
                  height={"730px"}
                  sx={{
                    overflow: "hidden",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <img
                    width={"100%"}
                    height={"100%"}
                    src={item.img}
                    alt={item.title}
                    style={{ objectFit: "cover" }}
                  />
                </Stack>

                <Stack
                  width={{ xs: "90%", sm: "80%", md: "700px", lg: "780px" }}
                  p={{ xs: "30px 40px", sm: "40px 60px", md: "60px 80px" }}
                  bgcolor={"#ffffff"}
                  position={"absolute"}
                  left={{ xs: 10, sm: 30, md: 200, lg: 600 }}
                  top={{ xs: 50, sm: 80, md: 100 }}
                  sx={{
                    borderRadius: "12px",
                    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
                    zIndex: 2,
                  }}
                >
                  <Typography variant="logo" fontWeight={600}>
                    {item.logo}
                  </Typography>

                  <Typography
                    variant="h4"
                    fontWeight={700}
                    color={"#274C5B"}
                    sx={{ mb: 3 }}
                  >
                    {item.title}
                  </Typography>

                  {[item.disc1, item.disc2, item.disc3].map((disc, idx) => (
                    <Stack key={idx} sx={{ mb: 3 }}>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        color={"#274C5B"}
                        sx={{ mb: 1 }}
                      >
                        {disc}
                      </Typography>
                      <Typography variant="body1" color={"#4A4A4A"}>
                        {item.info}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>

      <Grid container spacing={4} sx={{ mt: 5 }}>
        {data.friendlycard.map((item) => {
          return (
            <Grid key={item.id} item xs={12} md={6} lg={4}>
              <Stack
                sx={{
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: "100%",
                  height: "503px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "12px",
                }}
              >
                <Stack bgcolor={"#fff"} p={"30px 80px"} borderRadius={"15px"}>
                  <Typography variant="h6">{item.title}</Typography>
                </Stack>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}
