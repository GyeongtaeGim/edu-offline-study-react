import { Stack, Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const N10312 = () => {
  const [value, setValue] = useState(1);
  const [left, setLeft] = useState(1);
  const [right, setRight] = useState(1);
  useEffect(() => {
    setInterval(() => {
      const tmp = Math.floor(Math.random() * 300 + 1);
      const tmp1 = Math.floor(Math.random() * 100 + 1);
      const tmp2 = Math.floor(Math.random() * 250 + 1);
      setValue(tmp);
      setLeft(tmp1);
      setRight(tmp2);
    }, 100);
  }, []);
  return (
    <Stack>
      <Typography
        variant='h1'
        style={{ fontSize: `${value}px`, marginLeft: `${value}px`, marginTop: `${value}px` }}
      >
        이정욱
      </Typography>
    </Stack>
  );
};

export default N10312;
