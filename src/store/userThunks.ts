import { createAsyncThunk } from '@reduxjs/toolkit';
import { UserProfile } from './userSlice';
import { setUserLoading, setUserError, register, login } from './userSlice';

// Exemple d'API fictive
const API_URL = 'https://api.exemple.com/users';

export const registerUser = createAsyncThunk(
  'user/registerUser',
  async (
    userData: { username: string; email: string; preferences: string[]; password: string },
    { dispatch, rejectWithValue }
  ) => {
    dispatch(setUserLoading(true));
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });
      if (!response.ok) throw new Error('Erreur lors de l\'inscription');
      const data = await response.json();
      dispatch(register(data));
      return data;
    } catch (error: any) {
      dispatch(setUserError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setUserLoading(false));
    }
  }
);

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (credentials: { email: string; password: string }, { dispatch, rejectWithValue }) => {
    dispatch(setUserLoading(true));
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });
      if (!response.ok) throw new Error('Erreur lors de la connexion');
      const data = await response.json();
      dispatch(login(data));
      return data;
    } catch (error: any) {
      dispatch(setUserError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setUserLoading(false));
    }
  }
); 