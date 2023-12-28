import { Button, Stack, Typography } from '@mui/material';
import { useState } from 'react';

const N10306 = () => {
  const [kill, setKill] = useState<boolean>(false);
  const ClickHandler = () => {
    setKill(!kill);
  };
  return (
    <Stack padding={10}>
      <Button
        fullWidth
        style={{ fontSize: 58, color: 'red', fontWeight: 'bold' }}
        onClick={ClickHandler}
      >
        이선우 죽이기
      </Button>
      {kill ? (
        <Stack position='relative' display='flex' alignItems='center'>
          <img
            src='https://cdn.discordapp.com/attachments/1118078808931700756/1189894357738848316/1703763309663.jpg?ex=659fd27a&is=658d5d7a&hm=dde6832756d8e6c4804b168f65fab52fd9687bb3df5e97a10f60264f1c569b7b&'
            style={{ width: 600, height: 500, margin: '50px auto', filter: 'grayscale(1)' }}
          />
          <Typography variant='h1' color='red' top={220} fontWeight='bold' position='absolute'>
            제거됨.
          </Typography>
        </Stack>
      ) : (
        <img
          src='https://cdn.discordapp.com/attachments/1118078808931700756/1189894357738848316/1703763309663.jpg?ex=659fd27a&is=658d5d7a&hm=dde6832756d8e6c4804b168f65fab52fd9687bb3df5e97a10f60264f1c569b7b&'
          style={{ width: 600, height: 500, margin: '50px auto' }}
        />
      )}
    </Stack>
  );
};

export default N10306;
