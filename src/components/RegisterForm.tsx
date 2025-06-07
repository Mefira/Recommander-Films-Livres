import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../store/userThunks';
import { RootState } from '../store/store';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [preferences, setPreferences] = useState<string[]>([]);
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(registerUser({ username, email, preferences, password }) as any);
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2 text-center">Inscription</h2>
        <input value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" className="border border-gray-300 p-2 rounded" />
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="border border-gray-300 p-2 rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" type="password" className="border border-gray-300 p-2 rounded" />
        {/* Ajoute ici la gestion des préférences si besoin */}
        <button type="submit" disabled={loading} className="bg-blue-600 text-white p-2 rounded">S'inscrire</button>
        {error && <div className="text-red-600 text-center">{error}</div>}
      </form>
    </div>
  );
};

export default RegisterForm; 