import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const N10419 = () => {
  const [color, setColor] = useState<string>('black');
  const colors = [
    'black',
    'aqua',
    'red',
    'purple',
    'blue',
    'green',
    'yellow',
    'skyblue',
    'beige',
    'gray',
  ];

  useEffect(() => {
    setInterval(() => {
      const selectedColor = colors[Math.floor(Math.random() * colors.length)];
      setColor(selectedColor);
    }, 500);
  }, []);

  return (
    <Stack>
      <Typography variant='h1'>이은상</Typography>
      <Typography variant='h3'>여기서부터 재밌는거!! 히히</Typography>
      <Typography variant='h1'>아이유</Typography>
      <Typography variant='h1'>이휘재</Typography>
      <Typography variant='h1'>유재석</Typography>
      <Typography variant='h3'>해석::</Typography>
      <Typography variant='h5'>가로로 읽어도 아이유 이휘재 유재석</Typography>
      <Typography variant='h5'>세로로 읽어도 아이유 이휘재 유재석</Typography>
    </Stack>
  );
};

export default N10419;
