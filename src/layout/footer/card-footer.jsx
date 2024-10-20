import { Container, Stack, Typography } from "@mui/material";
import subscriber from "../../assets/subscribe.png";
import React from "react";
import { Input } from "../header/style";
import { SecondaryButton } from "../../components/ui/button/style";

export default function CardFooter() {
  return (
    <Stack m={"90px 0px 20px"}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          sx={{
            backgroundImage: `url(${subscriber})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height: { xs: "auto", md: "300px" },
            borderRadius: "25px",
            padding: { xs: "20px", md: "0" },
          }}
          spacing={3}
        >
          <Stack
            width={"100%"}
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            justifyContent={"space-around"}
            spacing={3}
          >
            <Stack direction={"row"} justifyContent={{ xs: "center", md: "flex-start" }}>
              <Typography
                variant="h4"
                sx={{ 
                  fontWeight: 700,
                  color: "white",
                  fontSize: { xs: "30px", sm: "40px", md: "50px" },
                  width: { xs: "100%", md: "357px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                Subscribe to our Newsletter
              </Typography>
            </Stack>

            <Stack
              direction={{ xs: "column", md: "row" }}
              gap={{ xs: 2, md: "10px" }}
              alignItems="center"
            >
              <Stack
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: { xs: "100%", sm: "346px" },
                  height: "60px",
                  borderRadius: "10px",
                  backgroundColor: "white",
                  padding: "10px",
                }}
              >
                <Input placeholder="Your Email Address" sx={{ width: "100%" }} />
              </Stack>
              <SecondaryButton
                sx={{
                  width: { xs: "100%", sm: "140px" },
                  height: "60px",
                  borderRadius: "10px",
                }}
              >
                Shop Now
              </SecondaryButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
