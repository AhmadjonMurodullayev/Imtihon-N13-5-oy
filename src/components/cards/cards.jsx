import { Container, Stack, Typography } from '@mui/material';
import React from 'react';
import data from '../../data/data';

export default function Cards() {
  return (
    <Stack>
      <Container maxWidth="lg"> {/* Adjusting maxWidth for larger layouts */}
        <Stack 
          direction={{ xs: "column", md: "row" }} // Stacks in a column for mobile and in a row for larger screens
          gap={{ xs: "20px", md: "35px" }} // Adjusting gap between cards for mobile and larger screens
        >
          {data.shop.map((item) => {
            return (
              <Stack
                key={item.id} 
                sx={{
                  backgroundImage: `url(${item.img})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  width: { xs: "100%", sm: "500px", md: "682px" }, // Responsive card width
                  height: { xs: "250px", sm: "300px", md: "366px" }, // Responsive card height
                  display: "flex",
                  color: "#fff",
                  borderRadius: "15px", 
                  overflow: "hidden", 
                  padding: { xs: "60px 20px", sm: "90px 40px", md: "120px 54px" }, // Responsive padding for content
                  position: "relative", // For better text alignment
                }}
              >
                <Typography 
                  variant="logo2" 
                  sx={{ fontSize: { xs: "14px", sm: "16px", md: "18px" }, mb: 1 }} // Responsive text size
                >
                  {item.disc}
                </Typography>
                <Typography 
                  variant="logo" 
                  sx={{ fontSize: { xs: "16px", sm: "20px", md: "22px" }, mb: 1 }} // Responsive text size
                >
                  {item.disc2}
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{
                    fontWeight: "800", 
                    fontSize: { xs: "24px", sm: "30px", md: "36px" }, // Responsive title size
                    width: "277px", 
                    color: "#fff", 
                    mb: 1
                  }}
                >
                  {item.title1}
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{
                    fontWeight: "800", 
                    fontSize: { xs: "24px", sm: "30px", md: "36px" }, 
                    width: "277px", 
                    color: "#274C5B"
                  }}
                >
                  {item.title2}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Container>
    </Stack>
  );
}
