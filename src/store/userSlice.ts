import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  preferences: string[];
}

interface UserState {
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  profile: UserProfile | null;
}

const initialState: UserState = {
  isAuthenticated: false,
  loading: false,
  error: null,
  profile: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    register: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    login: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.profile = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    updateProfile: (state, action: PayloadAction<UserProfile>) => {
      state.profile = action.payload;
    },
    setUserLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setUserError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  register,
  login,
  logout,
  updateProfile,
  setUserLoading,
  setUserError,
} = userSlice.actions;

export default userSlice.reducer; 