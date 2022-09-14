import { combineReducers } from '@reduxjs/toolkit';

import employeesReducer from './employeesSlice';
import employeeReducer from './employeesSlice';

export default combineReducers({
  employees: employeesReducer,
  employee: employeeReducer,
});
