import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import 'react-toastify/dist/ReactToastify.css';

axios.defaults.baseURL = 'https://stackninjas-backend.onrender.com/';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
      const res = await axios.post('/api/auth/signup', newUser);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    // console.log(credentials);

    try {
      const res = await axios.post('/api/auth/signin', credentials);
      setAuthHeader(res.data.token);

      const resUser = await axios.get('/api/auth/current');

      return { user: resUser.data, token: res.data.token };
    } catch (AxiosError) {
      console.log(AxiosError);
      throw thunkAPI.rejectWithValue(AxiosError.response.data.message);
    }
  }
);

export const logOut = createAsyncThunk(
  '/api/auth/signout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);