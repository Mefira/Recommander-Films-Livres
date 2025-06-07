import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieAsync } from '../store/mediaThunks';
import { RootState } from '../store/store';

const AddMovieForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.media.loading);
  const error = useSelector((state: RootState) => state.media.error);

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [rating, setRating] = useState(0);
  const [year, setYear] = useState(new Date().getFullYear());
  const [director, setDirector] = useState('');
  const [actors, setActors] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addMovieAsync({
      id: Date.now(), // Remplacer par l'id du backend si besoin
      title,
      genre: genre.split(',').map(g => g.trim()),
      rating,
      year,
      director,
      actors: actors.split(',').map(a => a.trim()),
      description,
      imageUrl
    }) as any);
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2 text-center">Ajouter un film</h2>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Titre" className="border border-gray-300 p-2 rounded" />
        <input value={genre} onChange={e => setGenre(e.target.value)} placeholder="Genres (séparés par des virgules)" className="border border-gray-300 p-2 rounded" />
        <input value={rating} onChange={e => setRating(Number(e.target.value))} placeholder="Note" type="number" className="border border-gray-300 p-2 rounded" />
        <input value={year} onChange={e => setYear(Number(e.target.value))} placeholder="Année" type="number" className="border border-gray-300 p-2 rounded" />
        <input value={director} onChange={e => setDirector(e.target.value)} placeholder="Réalisateur" className="border border-gray-300 p-2 rounded" />
        <input value={actors} onChange={e => setActors(e.target.value)} placeholder="Acteurs (séparés par des virgules)" className="border border-gray-300 p-2 rounded" />
        <input value={description} onChange={e => setDescription(e.target.value)} placeholder="Description" className="border border-gray-300 p-2 rounded" />
        <input value={imageUrl} onChange={e => setImageUrl(e.target.value)} placeholder="URL de l'image" className="border border-gray-300 p-2 rounded" />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white p-2 rounded">Ajouter</button>
        {error && <div className="text-red-600 text-center">{error}</div>}
      </form>
    </div>
  );
};

export default AddMovieForm; 