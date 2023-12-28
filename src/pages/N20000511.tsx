import {
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import client from 'utils/client';

const N20000511 = () => {
  const navigate = useNavigate();
  const queryClinet = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: () => client.post('/auth/logout'),
    onSuccess: () => {
      navigate('/');
      queryClinet.resetQueries({ queryKey: ['refresh-token'] });
    },
  });

  const handleLogoutClick = () => {
    mutate();
  };

  return (
    <Stack px={2} py={2}>
      <Typography variant='h4'>김경태</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>제목</TableCell>
            <TableCell>내용</TableCell>
            <TableCell>작성일</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((v) => (
            <TableRow key={v}>
              <TableCell>이것이 제목이여 {v}</TableCell>
              <TableCell>이것은 내용이여 이것은 내용이여 이것은 내용이여</TableCell>
              <TableCell>2000-05-11</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button variant='contained' size='large' sx={{ mt: 3 }} onClick={handleLogoutClick}>
        넌 그냥 나가라
      </Button>
    </Stack>
  );
};

export default N20000511;
