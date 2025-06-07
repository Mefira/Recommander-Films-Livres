import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import PreferencesForm from './components/PreferencesForm';
import RecommendationList from './components/RecommendationList';
import RegisterForm from './components/RegisterForm';
import LoginForm from './components/LoginForm';
import UserProfile from './components/UserProfile';
import AddMovieForm from './components/AddMovieForm';
import AddBookForm from './components/AddBookForm';
import MovieList from './components/MovieList';
import BookList from './components/BookList';
import logo from './logo.png';

function App() {
  const [page, setPage] = useState<'register' | 'login' | 'profile' | 'reco' | 'addMovie' | 'addBook' | 'listMovies' | 'listBooks'>('reco');

  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <nav className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-600 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex-shrink-0 flex items-center gap-3">
                <img src={logo} alt="Logo" className="h-10 w-10" />
                <h1 className="text-white text-3xl font-bold tracking-tight flex items-center">
                  Recommander
                  <span className="text-amber-400 ml-1">.</span>
                </h1>
              </div>
              <div className="flex gap-4">
                <button onClick={() => setPage('reco')} className="text-white hover:text-amber-400">Recommandations</button>
                <button onClick={() => setPage('register')} className="text-white hover:text-amber-400">Inscription</button>
                <button onClick={() => setPage('login')} className="text-white hover:text-amber-400">Connexion</button>
                <button onClick={() => setPage('profile')} className="text-white hover:text-amber-400">Profil</button>
                <button onClick={() => setPage('addMovie')} className="text-white hover:text-amber-400">Ajouter Film</button>
                <button onClick={() => setPage('addBook')} className="text-white hover:text-amber-400">Ajouter Livre</button>
                <button onClick={() => setPage('listMovies')} className="text-white hover:text-amber-400">Liste Films</button>
                <button onClick={() => setPage('listBooks')} className="text-white hover:text-amber-400">Liste Livres</button>
              </div>
            </div>
          </div>
        </nav>

        <main className="max-w-8xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          {page === 'register' && <RegisterForm />}
          {page === 'login' && <LoginForm />}
          {page === 'profile' && <UserProfile />}
          {page === 'reco' && (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="sticky top-8">
                  <PreferencesForm />
                </div>
              </div>
              <div className="lg:w-2/3">
                <RecommendationList />
              </div>
            </div>
          )}
          {page === 'addMovie' && <AddMovieForm />}
          {page === 'addBook' && <AddBookForm />}
          {page === 'listMovies' && <MovieList />}
          {page === 'listBooks' && <BookList />}
        </main>
      </div>
    </Provider>
  );
}

export default App;
