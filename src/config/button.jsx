import { Button } from "@mui/material";

const CustomButton = ({
  value = 3,
  color = "#EFD372",
  title = "Explore Now",
  onClick,
}) => {
  return (
    <Button
      sx={{ width: "200px", height: "52px", borderRadius: "10px",bgcolor: "#EFD372" }}
      variant="contained"
      color={color}
      onClick={() => onClick(value)}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
