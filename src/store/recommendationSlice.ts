import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../data/movies';
import { Book } from '../data/books';

interface RecommendationState {
  type: 'movies' | 'books';
  genres: string[];
  creator: string;
  minRating: number;
  loading: boolean;
  results: (Movie | Book)[];
  error: string | null;
}

const initialState: RecommendationState = {
  type: 'movies',
  genres: [],
  creator: '',
  minRating: 0,
  loading: false,
  results: [],
  error: null,
};

export const recommendationSlice = createSlice({
  name: 'recommendation',
  initialState,
  reducers: {
    setType: (state, action: PayloadAction<'movies' | 'books'>) => {
      state.type = action.payload;
    },
    setGenres: (state, action: PayloadAction<string[]>) => {
      state.genres = action.payload;
    },
    setCreator: (state, action: PayloadAction<string>) => {
      state.creator = action.payload;
    },
    setMinRating: (state, action: PayloadAction<number>) => {
      state.minRating = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setResults: (state, action: PayloadAction<(Movie | Book)[]>) => {
      state.results = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setType,
  setGenres,
  setCreator,
  setMinRating,
  setLoading,
  setResults,
  setError,
} = recommendationSlice.actions;

export default recommendationSlice.reducer; 