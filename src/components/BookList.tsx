import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeBookAsync, updateBookAsync } from '../store/mediaThunks';

const BookList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.media.books);
  const loading = useSelector((state: RootState) => state.media.loading);
  const error = useSelector((state: RootState) => state.media.error);
  const [editId, setEditId] = useState<number | null>(null);
  const [editBook, setEditBook] = useState<any>(null);

  const handleEdit = (book: any) => {
    setEditId(book.id);
    setEditBook({ ...book, genre: book.genre.join(',') });
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEditBook({ ...editBook, [e.target.name]: e.target.value });
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = {
      ...editBook,
      genre: editBook.genre.split(',').map((g: string) => g.trim()),
      rating: Number(editBook.rating),
      year: Number(editBook.year)
    };
    dispatch(updateBookAsync(updated) as any);
    setEditId(null);
    setEditBook(null);
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Liste des livres</h2>
      {loading && <div>Chargement...</div>}
      {error && <div className="text-red-600">{error}</div>}
      <ul className="space-y-4">
        {books.map(book => (
          <li key={book.id} className="border-b pb-2 flex justify-between items-center">
            {editId === book.id ? (
              <div className="flex justify-center items-center w-full">
                <form onSubmit={handleEditSubmit} className="w-full max-w-md bg-white border border-gray-300 p-6 rounded-lg shadow-md flex flex-col gap-2">
                  <h3 className="text-lg font-semibold mb-2 text-center">Modifier le livre</h3>
                  <input name="title" value={editBook.title} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <input name="author" value={editBook.author} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <input name="genre" value={editBook.genre} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" placeholder="Genres (séparés par des virgules)" />
                  <input name="rating" value={editBook.rating} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" type="number" />
                  <input name="year" value={editBook.year} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" type="number" />
                  <textarea name="description" value={editBook.description} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <input name="imageUrl" value={editBook.imageUrl} onChange={handleEditChange} className="border border-gray-300 p-2 rounded" />
                  <div className="flex gap-2 mt-2 justify-center">
                    <button type="submit" className="bg-green-600 text-white px-2 py-1 rounded">Valider</button>
                    <button type="button" onClick={() => { setEditId(null); setEditBook(null); }} className="bg-gray-400 text-white px-2 py-1 rounded">Annuler</button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div>
                  <span className="font-semibold">{book.title}</span> ({book.year})
                </div>
                <div className="flex gap-2">
                  <button onClick={() => dispatch(removeBookAsync(book.id) as any)} className="bg-red-500 text-white px-2 py-1 rounded">Supprimer</button>
                  <button onClick={() => handleEdit(book)} className="bg-yellow-500 text-white px-2 py-1 rounded">Modifier</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList; 