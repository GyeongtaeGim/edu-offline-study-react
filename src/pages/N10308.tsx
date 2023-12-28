import { Box, Divider, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react";

const N10308 = () => {
  const [color, setColor] = useState<string>("black");
  const [size, setSize] = useState<string>("1rem");
  const [width, setWidth] = useState<string>("1rem");

  const colors = ["black", "aqua", "red", "purple", "blue", "green", "yellow", "skyblue", "beige", "gray"]
  const sizes = ["1rem", "2rem", "3rem", "10px", "20px", "30px"]
  const widths = ["100rem", "20rem", "30rem", "40rem"]

  useEffect(() => {
    setInterval(() => {
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];
      const selectedSize = sizes[Math.floor(Math.random() * sizes.length)];
      const selectedWidth = widths[Math.floor(Math.random() * widths.length)];

      setColor(selectedColor);
      setSize(selectedSize);
      setWidth(selectedWidth);
    }, 200);
  }, []);

  return <Stack>
    <Box boxSizing={"border-box"} height={"100px"}>
      <Typography variant="h1" color={color} fontWeight={"bold"} fontSize={size}>윤상지가 세상을 구한다...</Typography>
    </Box>
    <Divider/>
    <Box component="img" src="https://upload.wikimedia.org/wikipedia/commons/9/9f/Otter.png" width={width}/>
    </Stack>
}

export default N10308;