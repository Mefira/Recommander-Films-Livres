import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { updateProfile } from '../store/userSlice';

const UserProfile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state: RootState) => state.user.profile);
  const [username, setUsername] = useState(profile?.username || '');
  const [email, setEmail] = useState(profile?.email || '');
  const [preferences, setPreferences] = useState<string[]>(profile?.preferences || []);

  if (!profile) return <div className="bg-white p-6 rounded shadow-md w-full max-w-md mx-auto mt-10 border border-gray-300">Aucun profil utilisateur.</div>;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(updateProfile({ ...profile, username, email, preferences }));
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2 text-center">Profil utilisateur</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" className="border border-gray-300 p-2 rounded" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border border-gray-300 p-2 rounded" />
        {/* Ajoute ici la gestion des préférences si besoin */}
        <button type="submit" className="bg-blue-600 text-white p-2 rounded">Mettre à jour</button>
      </form>
    </div>
  );
};

export default UserProfile; 