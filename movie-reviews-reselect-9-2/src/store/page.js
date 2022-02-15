import { createSelector } from "reselect";

const SET_PAGE = 'page/SET_PAGE';

export const actions = {
  setPage: (value) => ({ type: SET_PAGE, value }), 
};

const pageReducer = (
  page = 1,
  action,
) => {
  switch (action.type) {
    case SET_PAGE:
      return action.value;
  
    default:
      return page;
  };
};

export function selectPage(state) {
  const {
    page,
  } = state;

  return page;
};

export const reselectPage = createSelector(
  selectPage,
  (page) => {
    return page;
  }
);

export default pageReducer;
