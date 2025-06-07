import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../data/movies';
import { Book } from '../data/books';

interface MediaState {
  movies: Movie[];
  books: Book[];
  loading: boolean;
  error: string | null;
}

const initialState: MediaState = {
  movies: [],
  books: [],
  loading: false,
  error: null,
};

export const mediaSlice = createSlice({
  name: 'media',
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<Movie>) => {
      state.movies.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<number>) => {
      state.movies = state.movies.filter(movie => movie.id !== action.payload);
    },
    updateMovie: (state, action: PayloadAction<Movie>) => {
      const index = state.movies.findIndex(m => m.id === action.payload.id);
      if (index !== -1) state.movies[index] = action.payload;
    },
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<number>) => {
      state.books = state.books.filter(book => book.id !== action.payload);
    },
    updateBook: (state, action: PayloadAction<Book>) => {
      const index = state.books.findIndex(b => b.id === action.payload.id);
      if (index !== -1) state.books[index] = action.payload;
    },
    setMediaLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setMediaError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  addMovie,
  removeMovie,
  updateMovie,
  addBook,
  removeBook,
  updateBook,
  setMediaLoading,
  setMediaError,
} = mediaSlice.actions;

export default mediaSlice.reducer; 