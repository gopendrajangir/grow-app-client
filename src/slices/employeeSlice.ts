import { createSlice } from '@reduxjs/toolkit';

const employeeSlice = createSlice({
  name: 'employee',
  initialState: {
    loading: false,
    data: [],
    error: null
  },
  reducers: {},
  extraReducers: (builder) => { }
})

export default employeeSlice.reducer;