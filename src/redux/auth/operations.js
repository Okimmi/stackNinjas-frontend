import { createAsyncThunk } from '@reduxjs/toolkit';
import { $instance } from '../constants';
const setAuthHeader = token => {
  $instance.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  $instance.defaults.headers.common.Authorization = '';
};
export const register = createAsyncThunk(
  'auth/register',
  async (newUser, thunkAPI) => {
    try {
      const res = await $instance.post('/api/auth/signup', newUser);

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
        onUploadProgress: progressEvent => {
          const progress = Math.round(
            (progressEvent.loaded / progressEvent.total) * 100
          );

          console.log(progress);
        },
      });

      return res.data.avatar;
    } catch (error) {
      console.dir(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const setUploadProgress = createAsyncThunk(
  'auth/setUploadProgress',
  async () => {
    console.log('Data was send');
  }
);

export const updateUserData = createAsyncThunk(
  'auth/updateUserData',
  async (data, thunkAPI) => {
    try {
      const res = await $instance.patch('/api/auth/profile', data);

      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const restoreUserPass = createAsyncThunk(
  'auth/restoreUserPass',
  async (data, thunkAPI) => {
    try {
      const res = await $instance.post('/api/auth/restore-password', data);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const newUserPass = createAsyncThunk(
  'auth/restoreUserPass',
  async ({ token, password }, thunkAPI) => {
    try {
      const res = await $instance.patch(`/api/auth/restore-password/${token}`, {
        password,
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const GooglelogIn = () => {
  window.location.href =
    'https://stackninjas-backend.onrender.com/api/auth/google';
};
