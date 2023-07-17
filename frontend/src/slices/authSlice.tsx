import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userInfo: localStorage?.getItem('userInfo')
    ? JSON.parse(localStorage?.getItem('userInfo') as string)
    : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    clearLocalStorage: (state) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

export const { setCredentials, clearLocalStorage } = authSlice.actions; //action -- functions

export default authSlice.reducer; //change the state
