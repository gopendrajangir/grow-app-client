import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getAllEmployees } from '../apis';
import { FormValues } from '../containers/SearchForm';

type FetchEmployeesArgs = {
  page?: number;
  limit?: number;
  searchData?: FormValues
}

export const fetchEmployees = createAsyncThunk('employees', async ({ page = 1, limit = 10, searchData = {} }: FetchEmployeesArgs) => {
  console.log("Hello", page, limit);
  const response = await getAllEmployees(page, limit, searchData);
  console.log(response.data);
  return response.data;
})

export interface Employee {
  _id: string,
  firstname: string,
  lastname: string,
  dob: Date,
  dateEnrolled: Date,
  department: string
}

export interface EmployeesState {
  loading: boolean;
  data: [];
  total: null | number;
  error?: null | string;
}

const initialState: EmployeesState = {
  loading: false,
  data: [],
  total: null,
  error: null
}

const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEmployees.pending, (state, action) => {
      state.loading = true;
      state.error = null;
    }).addCase(fetchEmployees.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.data.employees;
      state.total = action.payload.data.total;
      state.error = null;
    }).addCase(fetchEmployees.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message
    })
  }
})

export default employeesSlice.reducer;