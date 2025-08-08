import { ACTION_TYPES } from '../../constants/action-type';
import { FILTERS } from '../../constants/filter';
import { useState } from 'react';


export const filterReducer = (state = FILTERS.all, action) => {
  switch (action.type) {
    case ACTION_TYPES.selectFilter:
      return action.filter;
    default:
      return state;
  }
};
