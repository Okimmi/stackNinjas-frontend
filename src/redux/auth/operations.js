import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
import { $instance } from '../constants';


import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

// axios.defaults.baseURL = 'https://stackninjas-backend.onrender.com/';

const setAuthHeader = token => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  $instance.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    console.log(newUser);
    try {
      const res = await $instance.post('/api/auth/signup', newUser);
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
    try {
      const res = await $instance.post('/api/auth/signin', credentials);
      setAuthHeader(res.data.token);
      const resUser = await $instance.get('/api/auth/current');

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
      await $instance.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
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
      const res = await $instance.get('/api/auth/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateDailyNormal = createAsyncThunk(
  'auth/updateDailyNormal',
  async (dailyNormal, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await $instance.patch(
        '/api/aquatrack/daily-water-requirement',
        dailyNormal
      );

      return res.data.dailyWaterRequirement;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateAvatar = createAsyncThunk(
  'auth/updateAvatar',
  async (avatar, thunkAPI) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatar);

      const res = await $instance.patch('/api/auth/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return res.data.avatar;
    } catch (error) {
      console.dir(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const updateUserData = createAsyncThunk(
  'auth/updateUserData',
  async (data, thunkAPI) => {
    try {
      const res = await $instance.put('/api/auth/profile', data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const  restoreUserPass = createAsyncThunk(
  'auth/restoreUserPass',
  async (data, thunkAPI) => {
    try {
      const res = await $instance.post('/api/auth/restore-password', data);
   
      if (res.status === 200) {
        toast.success(`${res.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const  newUserPass = createAsyncThunk(
  'auth/restoreUserPass',
  async ({token, password}, thunkAPI) => {
    try {
      const res = await $instance.patch(`/api/auth/restore-password/${token}`, { password });
      if (res.status === 200) {
        toast.success(`${res.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        }
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

