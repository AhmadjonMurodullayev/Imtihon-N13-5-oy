import { Container, Rating, Stack, Typography } from "@mui/material";
import costumer from "../../assets/customerbg.png";
import db from "../../assets/db.png";
import React from "react";

export default function Costumer() {
  return (
    <Stack m={"auto"} maxWidth={"1550px"}>
      <Stack
        m={{ xs: "50px 0px", md: "150px 0px" }} 
        sx={{
          backgroundImage: `url(${costumer})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          maxHeight: "120vh",
        }}
      >
        <Stack textAlign={"center"} justifyContent={"center"}>
          <Stack direction={"column"} alignItems={"center"} gap={2}>
            <Typography variant="logo">Testimonial</Typography>
            <Typography variant="products">
              What Our Customer Saying?
            </Typography>
            <Stack direction={"row"} justifyContent={"center"}>
              <img src={db} alt="" />
            </Stack>
            <Rating name="size-medium" defaultValue={5} />
            <Typography
              variant="p"
              sx={{
                textAlign: "center",
                maxWidth: { xs: "90%", sm: "600px", md: "780px" }, 
                fontSize: { xs: "14px", sm: "16px", md: "18px" }, 
                fontWeight: "400",
              }}
            >
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been.
            </Typography>
            <Stack>
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  fontSize: { xs: "18px", sm: "22px", md: "24px" }, // Responsive font size
                  fontWeight: "700",
                }}
              >
                Sara Taylor
              </Typography>
              <Typography variant="p">Consumer</Typography>
            </Stack>
          </Stack>

          <Stack
            my={{ xs: 5, md: 15 }}
            direction={{ xs: "column", md: "row" }} 
            justifyContent={"center"}
            alignItems={"center"} 
            gap={2}
          >
            {[
              { text: "100%", label: "Organic" },
              { text: "285", label: "Active Product" },
              { text: "350+", label: "Organic Orchads" },
              { text: "25+", label: "Years of Farming" },
            ].map((item, idx) => (
              <Stack
                key={idx}
                border={"5px solid #7EB693"}
                sx={{
                  borderRadius: "50%",
                  width: { xs: "120px", sm: "150px", md: "170px" }, 
                  height: { xs: "120px", sm: "150px", md: "170px" }, 
                  backgroundColor: "white",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" fontSize={{ xs: "30px", md: "40px" }}>
                  {item.text}
                </Typography>
                <Typography variant="p">{item.label}</Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
