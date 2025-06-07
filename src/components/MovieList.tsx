import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeMovieAsync, updateMovieAsync } from '../store/mediaThunks';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.media.movies);
  const loading = useSelector((state: RootState) => state.media.loading);
  const error = useSelector((state: RootState) => state.media.error);
  // Pour la modification, on peut ajouter un état local pour l'id du film à modifier
  const [editId, setEditId] = useState<number | null>(null);
  const [editMovie, setEditMovie] = useState<any>(null);

  const handleEdit = (movie: any) => {
    setEditId(movie.id);
    setEditMovie({ ...movie, genre: movie.genre.join(','), actors: movie.actors.join(',') });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditMovie({ ...editMovie, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...editMovie,
      genre: editMovie.genre.split(',').map((g: string) => g.trim()),
      actors: editMovie.actors.split(',').map((a: string) => a.trim()),
      rating: Number(editMovie.rating),
      year: Number(editMovie.year)
    };
    dispatch(updateMovieAsync(updated) as any);
    setEditId(null);
    setEditMovie(null);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Liste des films</h2>
      {loading && <div>Chargement...</div>}
      {error && <div className="text-red-600">{error}</div>}
      <ul className="space-y-4">
        {movies.map(movie => (
          <li key={movie.id} className="border-b pb-2 flex justify-between items-center">
            {editId === movie.id ? (
              <div className="flex justify-center items-center w-full">
                <form onSubmit={handleEditSubmit} className="w-full max-w-md bg-white border border-gray-300 p-6 rounded-lg shadow-md flex flex-col gap-2">
                  <h3 className="text-lg font-semibold mb-2 text-center">Modifier le film</h3>
                  <input name="title" value={editMovie.title} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <input name="genre" value={editMovie.genre} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" placeholder="Genres (séparés par des virgules)" />
                  <input name="rating" value={editMovie.rating} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" type="number" />
                  <input name="year" value={editMovie.year} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" type="number" />
                  <input name="director" value={editMovie.director} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <input name="actors" value={editMovie.actors} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" placeholder="Acteurs (séparés par des virgules)" />
                  <textarea name="description" value={editMovie.description} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <input name="imageUrl" value={editMovie.imageUrl} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <div className="flex gap-2 mt-2 justify-center">
                    <button type="submit" className="bg-green-600 text-white px-2 py-1 rounded">Valider</button>
                    <button type="button" onClick={() => { setEditId(null); setEditMovie(null); }} className="bg-gray-400 text-white px-2 py-1 rounded">Annuler</button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div>
                  <span className="font-semibold">{movie.title}</span> ({movie.year})
                </div>
                <div className="flex gap-2">
                  <button onClick={() => dispatch(removeMovieAsync(movie.id) as any)} className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
                  <button onClick={() => handleEdit(movie)} className="bg-yellow-500 text-white px-2 py-1 rounded">Modifier</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList; 