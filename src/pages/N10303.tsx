import { Stack, Typography } from '@mui/material';
import { Helmet } from 'react-helmet-async';

const N10303 = () => {
  return (
    <>
    <Helmet>
      <title>내 이름</title>
    </Helmet>
    <Stack >
      <Typography variant='h1'>김지윤</Typography>
    </Stack>
    </>
    
  );
};

export default N10303;