import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import {
  setType,
  setGenres,
  setCreator,
  setMinRating,
  setLoading,
  setResults,
  setError,
} from '../store/recommendationSlice';
import { Movie, movies } from '../data/movies';
import { Book, books } from '../data/books';

const movieGenres = ['Action', 'Aventure', 'Comédie', 'Drame', 'Thriller', 'Science-Fiction'];
const bookGenres = ['Aventure', 'Fantasy', 'Romance', 'Science-Fiction', 'Thriller', 'Dystopie'];

type MediaItem = Movie | Book;

const PreferencesForm: React.FC = () => {
  const dispatch = useDispatch();
  const { type, genres, creator, minRating } = useSelector(
    (state: RootState) => state.recommendation
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(setLoading(true));
    dispatch(setError(null));

    // Simuler un délai d'API
    setTimeout(() => {
      const data: MediaItem[] = type === 'movies' ? movies : books;
      const filteredResults = data.filter((item) => {
        const matchesGenres = genres.length === 0 || genres.some(g => item.genre.includes(g));
        
        let matchesCreator = false;
        if (type === 'movies' && item.hasOwnProperty('director')) {
          const movieItem = item as Movie;
          matchesCreator = !creator || 
            movieItem.director.toLowerCase().includes(creator.toLowerCase()) ||
            movieItem.actors.some(actor => actor.toLowerCase().includes(creator.toLowerCase()));
        } else if (type === 'books' && item.hasOwnProperty('author')) {
          const bookItem = item as Book;
          matchesCreator = !creator || bookItem.author.toLowerCase().includes(creator.toLowerCase());
        }

        const matchesRating = item.rating >= minRating;

        return matchesGenres && matchesCreator && matchesRating;
      });

      if (filteredResults.length === 0) {
        dispatch(setError('Aucune recommandation trouvée. Essayez d\'élargir vos critères !'));
      }
      dispatch(setResults(filteredResults));
      dispatch(setLoading(false));
    }, 1000);
  };

  return (
    <form onSubmit={handleSearch} className="space-y-6 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20">
      <div>
        <label className="block text-sm font-medium text-white/90">Type</label>
        <select
          value={type}
          onChange={(e) => dispatch(setType(e.target.value as 'movies' | 'books'))}
          className="mt-1 block w-full rounded-xl border-purple-500/30 bg-white/10 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500"
        >
          <option value="movies">Films</option>
          <option value="books">Livres</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/90">Genres</label>
        <div className="mt-3 grid grid-cols-2 gap-3">
          {(type === 'movies' ? movieGenres : bookGenres).map((genre) => (
            <label key={genre} className="relative flex items-start">
              <div className="flex h-6 items-center">
                <input
                  type="checkbox"
                  checked={genres.includes(genre)}
                  onChange={(e) => {
                    const newGenres = e.target.checked
                      ? [...genres, genre]
                      : genres.filter((g) => g !== genre);
                    dispatch(setGenres(newGenres));
                  }}
                  className="h-4 w-4 rounded border-purple-500/30 bg-white/10 text-purple-500 focus:ring-purple-500 focus:ring-offset-0"
                />
              </div>
              <div className="ml-3 text-sm leading-6">
                <span className="text-white/80">{genre}</span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-white/90">
          {type === 'movies' ? 'Acteur/Réalisateur' : 'Auteur'}
        </label>
        <input
          type="text"
          value={creator}
          onChange={(e) => dispatch(setCreator(e.target.value))}
          className="mt-1 block w-full rounded-xl border-purple-500/30 bg-white/10 text-white placeholder-white/50 shadow-sm focus:border-purple-500 focus:ring-purple-500"
          placeholder={type === 'movies' ? 'Ex: Tom Cruise' : 'Ex: Frank Herbert'}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-white/90">
          Note minimale
        </label>
        <div className="mt-2">
          <input
            type="range"
            min="0"
            max="10"
            step="0.1"
            value={minRating}
            onChange={(e) => dispatch(setMinRating(parseFloat(e.target.value)))}
            className="w-full accent-purple-500"
          />
          <div className="mt-1 flex justify-between text-xs text-white/60">
            <span>0</span>
            <span className="text-purple-400 font-medium">{minRating.toFixed(1)}</span>
            <span>10</span>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-3 px-4 rounded-xl font-medium shadow-lg hover:from-purple-700 hover:to-indigo-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
      >
        Rechercher
      </button>
    </form>
  );
};

export default PreferencesForm; 