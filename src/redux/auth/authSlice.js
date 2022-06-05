import { createSlice } from '@reduxjs/toolkit';
import authOperations from 'redux/auth/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogged = true;
    },
    [authOperations.logOut.fulfilled](state, action) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogged = false;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = { ...action.payload };
      state.isLogged = true;
    },
    [authOperations.fetchCurrentUser.pending](state, _) {
      state.isRefreshing = true;
    },
    [authOperations.fetchCurrentUser.rejected](state, _) {
      state.isRefreshing = false;
    },
  },
});

// const authReducer = authSlice.reducer;
export default authSlice.reducer;
