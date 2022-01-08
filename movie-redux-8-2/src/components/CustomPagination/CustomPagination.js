import React from 'react';
import { useDispatch } from 'react-redux';

import { createTheme, Pagination, ThemeProvider } from '@mui/material';

import CustomPaginationCSS from './CustomPagination.module.css';

import { actions as pageAction } from '../../store/page';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export const CustomPagination = (props) => {
  const dispatch = useDispatch();

  const {
    // setPage,
    numberOfPages = 10,
  } = props;

  const {
    setPage,
  } = pageAction;

  const handlePageChange = (page) => {
    dispatch(setPage(page));
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
