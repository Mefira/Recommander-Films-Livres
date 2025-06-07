import { createAsyncThunk } from '@reduxjs/toolkit';
import { Movie } from '../data/movies';
import { Book } from '../data/books';
import {
  setMediaLoading,
  setMediaError,
  addMovie,
  removeMovie,
  updateMovie,
  addBook,
  removeBook,
  updateBook,
} from './mediaSlice';

// Exemple d'API fictive
const API_URL = 'https://api.exemple.com/media';

// Thunks pour les films
export const addMovieAsync = createAsyncThunk(
  'media/addMovieAsync',
  async (movie: Movie, { dispatch, rejectWithValue }) => {
    dispatch(setMediaLoading(true));
    try {
      const response = await fetch(`${API_URL}/movies`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      });
      if (!response.ok) throw new Error('Erreur lors de l\'ajout du film');
      const data = await response.json();
      dispatch(addMovie(data));
      return data;
    } catch (error: any) {
      dispatch(setMediaError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setMediaLoading(false));
    }
  }
);

export const removeMovieAsync = createAsyncThunk(
  'media/removeMovieAsync',
  async (id: number, { dispatch, rejectWithValue }) => {
    dispatch(setMediaLoading(true));
    try {
      const response = await fetch(`${API_URL}/movies/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erreur lors de la suppression du film');
      dispatch(removeMovie(id));
      return id;
    } catch (error: any) {
      dispatch(setMediaError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setMediaLoading(false));
    }
  }
);

export const updateMovieAsync = createAsyncThunk(
  'media/updateMovieAsync',
  async (movie: Movie, { dispatch, rejectWithValue }) => {
    dispatch(setMediaLoading(true));
    try {
      const response = await fetch(`${API_URL}/movies/${movie.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(movie),
      });
      if (!response.ok) throw new Error('Erreur lors de la modification du film');
      const data = await response.json();
      dispatch(updateMovie(data));
      return data;
    } catch (error: any) {
      dispatch(setMediaError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setMediaLoading(false));
    }
  }
);

// Thunks pour les livres
export const addBookAsync = createAsyncThunk(
  'media/addBookAsync',
  async (book: Book, { dispatch, rejectWithValue }) => {
    dispatch(setMediaLoading(true));
    try {
      const response = await fetch(`${API_URL}/books`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });
      if (!response.ok) throw new Error('Erreur lors de l\'ajout du livre');
      const data = await response.json();
      dispatch(addBook(data));
      return data;
    } catch (error: any) {
      dispatch(setMediaError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setMediaLoading(false));
    }
  }
);

export const removeBookAsync = createAsyncThunk(
  'media/removeBookAsync',
  async (id: number, { dispatch, rejectWithValue }) => {
    dispatch(setMediaLoading(true));
    try {
      const response = await fetch(`${API_URL}/books/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Erreur lors de la suppression du livre');
      dispatch(removeBook(id));
      return id;
    } catch (error: any) {
      dispatch(setMediaError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setMediaLoading(false));
    }
  }
);

export const updateBookAsync = createAsyncThunk(
  'media/updateBookAsync',
  async (book: Book, { dispatch, rejectWithValue }) => {
    dispatch(setMediaLoading(true));
    try {
      const response = await fetch(`${API_URL}/books/${book.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book),
      });
      if (!response.ok) throw new Error('Erreur lors de la modification du livre');
      const data = await response.json();
      dispatch(updateBook(data));
      return data;
    } catch (error: any) {
      dispatch(setMediaError(error.message));
      return rejectWithValue(error.message);
    } finally {
      dispatch(setMediaLoading(false));
    }
  }
); 