import { useEffect, useState } from 'react';
import { Box, Pagination } from '@mui/material';
import service from '../../utils/servise';
import { pageSize } from '../../constants/global';

export default function PaginationBar({ setCardsToShow }: any) {
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    // @ts-ignore
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        // @ts-ignore
        setPagination({ ...pagination, count: response.count });
        // @ts-ignore
        setCardsToShow(response.data);
      });
    // eslint-disable-next-line
  }, [pagination.from, pagination.to]);

  const handlePageChange = (event: any, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;

    setPagination({ ...pagination, from: from, to: to });
  };

  return (
    <Box
      justifyContent={'center'}
      alignItems="center"
      display={'flex'}
      sx={{ margin: '20px 0px' }}
    >
      <Pagination
        color="primary"
        count={Math.ceil(pagination.count / pageSize)}
        onChange={handlePageChange}
      />
    </Box>
  );
}
