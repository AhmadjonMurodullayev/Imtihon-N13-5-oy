import { Container, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import abouts from "../../assets/abouts.png";
import data from "../../data/data";
import KamazIcon from "../../assets/icons/kamaz-icons";
import UyIcon from "../../assets/icons/uy-icons";
import catigory from "../../assets/catigory2.png";

export default function AboutCards() {
  const isMobile = useMediaQuery("(max-width:480px)");
  const isSmallTablet = useMediaQuery("(min-width:481px) and (max-width:768px)");
  const isMediumTablet = useMediaQuery("(min-width:769px) and (max-width:1024px)");

  return (
    <Stack>
      <Stack maxWidth={"1500px"} m={"auto"}>
        <img src={abouts} alt="" style={{ width: "100%", height: "auto" }} />
      </Stack>

      <Stack my={10}>
        <Container maxWidth="Sm">
          <Stack>
            {data.aboutcatigory.map((item) => {
              return (
                <Stack key={item.id} gap={"38px"} mb={8}>
                  <Stack
                    direction={isMobile || isSmallTablet ? "column" : "row"}
                    gap={isMobile ? 4 : 0}
                    alignItems={isMobile ? "center" : "flex-start"}
                  >
                    <Stack sx={{ width: isMobile ? "100%" : "50%" }}>
                      <img
                        src={item.img}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Stack>
                    <Stack gap={3} sx={{ width: isMobile ? "100%" : "50%" }}>
                      <Typography variant="logo">{item.logo}</Typography>
                      <Typography
                        variant="h6"
                        fontSize={isMobile ? 24 : isSmallTablet ? 30 : 45}
                        fontWeight={700}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body1">{item.disc}</Typography>
                      <Typography variant="body1">{item.disc}</Typography>

                      <Stack
                        direction={isMobile || isSmallTablet ? "column" : "row"}
                        gap={5}
                      >
                        <Stack direction={"row"} alignItems={"center"} gap={2}>
                          <KamazIcon />
                          <Typography variant="h6">
                            Modern Agriculture Equipment
                          </Typography>
                        </Stack>
                        <Stack direction={"row"} alignItems={"center"} gap={2}>
                          <UyIcon />
                          <Typography variant="h6">
                            No growth hormones are used
                          </Typography>
                        </Stack>
                      </Stack>
                    </Stack>
                  </Stack>

                  <Stack
                    direction={isMobile || isSmallTablet ? "column" : "row"}
                    gap={isMobile ? 4 : 0}
                    alignItems={isMobile ? "center" : "flex-start"}
                  >
                    <Stack sx={{ width: isMobile ? "100%" : "50%" }}>
                      <Typography variant="logo">Why Choose us?</Typography>
                      <Typography variant="h6" fontSize={isMobile ? 24 : isSmallTablet ? 30 : 45}>
                        We do not buy from the open market & traders.
                      </Typography>
                      <Typography variant="p">
                        Simply dummy text of the printing and typesetting
                        industry. Lorem had ceased to been the industry's
                        standard the 1500s, when an unknown
                      </Typography>

                      <Stack my={3}>
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#ECECEC",
                            width: "100%", 
                            maxWidth: "320px", 
                            height: "60px",
                            borderRadius: "20px",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            fontSize={18}
                          >
                            100% Natural Product
                          </Typography>
                        </Stack>
                        <Typography
                          variant="body1"
                          width={"100%"} 
                          // mx={6}
                        >
                          Simply dummy text of the printing and typesetting
                          industry Lorem Ipsum
                        </Typography>
                      </Stack>

                      <Stack>
                        <Stack
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#ECECEC",
                            width: "100%", 
                            maxWidth: "320px", 
                            height: "60px",
                            borderRadius: "20px",
                          }}
                        >
                          <Typography
                            variant="h6"
                            fontWeight={700}
                            fontSize={18}
                          >
                            100% Natural Product
                          </Typography>
                        </Stack>
                        <Typography
                          variant="body1"
                          width={"100%"}
                          // mx={6}
                        >
                          Simply dummy text of the printing and typesetting
                          industry Lorem Ipsum
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack
                      sx={{ width: isMobile ? "100%" : "50%" }}
                      mt={isMobile ? 4 : 0}
                    >
                      <img
                        src={catigory}
                        alt=""
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Stack>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Stack>

      <Stack>
        <Container maxWidth="Sm">
          <Stack
            justifyContent={"center"}
            alignItems={"center"}
            direction={isMobile || isSmallTablet ? "column" : "row"}
            gap={isMobile || isSmallTablet ? 6 : 10}
          >
            {data.aboutservize.map((item) => {
              return (
                <Stack
                  key={item.id}
                  gap={2}
                  justifyContent={"center"}
                  alignItems={"center"}
                  textAlign={"center"}
                >
                  <img
                    src={item.img}
                    alt=""
                    style={{
                      width: isMobile ? "60px" : isSmallTablet ? "80px" : "100px",
                      height: isMobile ? "60px" : isSmallTablet ? "80px" : "100px",
                    }}
                  />
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography
                    variant="body1"
                    width={isMobile ? "100%" : isSmallTablet ? "150px" : "180px"}
                  >
                    {item.disc}
                  </Typography>
                </Stack>
              );
            })}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
