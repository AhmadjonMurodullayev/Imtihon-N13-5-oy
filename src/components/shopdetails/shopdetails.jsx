import { Container, Stack, Typography, Card, CardContent } from "@mui/material";
import React from "react";
import Foods from "../../assets/icons/foods";
import Quality from "../../assets/icons/quality";
import data from "../../data/data";
import { SecondaryButton } from "../ui/button/style";

export default function ShopDetails() {
  return (
    <Container maxWidth="Sm">
      <Stack spacing={4} my={10}>
        {data.shopdeteils.map((item) => {
          return (
            <Card key={item.id} sx={{ borderRadius: "8px", boxShadow: 3 }}>
              <Stack direction="row" spacing={2} sx={{ padding: 2 }}>
                <Stack
                  sx={{
                    flex: "1",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Stack>

                <CardContent
                  sx={{
                    flex: 1,
                    bgcolor: "#FAFAFA",
                    borderRadius: "0 8px 8px 0",
                  }}
                >
                  <Typography variant="logo">{item.log}</Typography>
                  <Typography variant="h4">{item.title}</Typography>
                  <Typography variant="p" sx={{ color: "#274C5B" }}>
                    {item.info}
                  </Typography>

                  <Stack my={4} gap={2}>
                    <Stack direction={"row"} gap={2} alignItems={"center"}>
                      <Stack>
                        <Foods />
                      </Stack>
                      <Stack gap={'5px'}>
                        <Typography variant="h6">Organic Foods Only</Typography>
                        <Typography variant="p">
                          Simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum
                        </Typography>
                      </Stack>
                    </Stack>
                    <Stack direction={"row"} gap={2} alignItems={"center"}>
                      <Stack>
                        <Quality/>
                      </Stack>
                      <Stack gap={'5px'}>
                        <Typography variant="h6">Quality Standards</Typography>
                        <Typography variant="p">
                          Simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum
                        </Typography>
                      </Stack>
                    </Stack>
                    <SecondaryButton sx={{ width: "140px", height: "55px", borderRadius: "16px" }}>
                    Shop Now
                    </SecondaryButton>
                  </Stack>
                </CardContent>
              </Stack>
            </Card>
          );
        })}
      </Stack>
    </Container>
  );
}
