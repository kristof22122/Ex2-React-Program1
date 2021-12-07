import React from 'react';
import { createTheme, Pagination, ThemeProvider } from '@mui/material';

import CustomPaginationCSS from './CustomPagination.module.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const CustomPagination = (props) => {
  const {
    setPage,
    numberOfPages = 10,
  } = props;

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <div
      className={CustomPaginationCSS.pagination}
    >
      <ThemeProvider
        theme={darkTheme}
      >
        <Pagination
          count={numberOfPages}
          color="primary"
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
      
    </div>
  )
}
