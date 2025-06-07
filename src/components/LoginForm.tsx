import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/userThunks';
import { RootState } from '../store/store';

const LoginForm = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.user.loading);
  const error = useSelector((state: RootState) => state.user.error);
  const isAuthenticated = useSelector((state: RootState) => state.user.isAuthenticated);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }) as any);
  };

  return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white border border-gray-300 p-8 rounded-lg shadow-md flex flex-col gap-4">
        <h2 className="text-xl font-bold mb-2 text-center">Connexion</h2>
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" type="email" className="border border-gray-300 p-2 rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" type="password" className="border border-gray-300 p-2 rounded" />
        <button type="submit" disabled={loading} className="bg-blue-600 text-white p-2 rounded">Se connecter</button>
        {error && <div className="text-red-600 text-center">{error}</div>}
        {isAuthenticated && <div className="text-green-600 text-center">Connecté !</div>}
      </form>
    </div>
  );
};

export default LoginForm; 