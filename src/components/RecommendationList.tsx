import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Movie } from '../data/movies';
import { Book } from '../data/books';
import { motion } from 'framer-motion';

const RecommendationList: React.FC = () => {
  const { results, loading, error, type } = useSelector(
    (state: RootState) => state.recommendation
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-400 p-6 bg-red-900/20 backdrop-blur-lg rounded-2xl border border-red-500/20">
        {error}
      </div>
    );
  }

  if (results.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {results.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden group hover:bg-white/20 transition-all duration-300"
        >
          <div className="relative">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <div className="space-y-3">
              {type === 'movies' ? (
                <>
                  <p className="text-sm text-white/80">
                    <span className="text-purple-400">Réalisateur:</span> {(item as Movie).director}
                  </p>
                  <p className="text-sm text-white/80">
                    <span className="text-purple-400">Acteurs:</span> {(item as Movie).actors.join(', ')}
                  </p>
                </>
              ) : (
                <p className="text-sm text-white/80">
                  <span className="text-purple-400">Auteur:</span> {(item as Book).author}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {item.genre.map((g) => (
                  <span
                    key={g}
                    className="px-2 py-1 text-xs rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30"
                  >
                    {g}
                  </span>
                ))}
              </div>
              <p className="text-sm text-white/80">
                <span className="text-purple-400">Année:</span> {item.year}
              </p>
              <div className="flex items-center">
                <span className="text-purple-400 text-sm">Note:</span>
                <div className="ml-2 px-3 py-1 bg-yellow-500/20 text-yellow-300 rounded-full text-sm border border-yellow-500/30">
                  {item.rating.toFixed(1)}/10
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm text-white/70 line-clamp-3">
              {item.description}
            </p>
            <button
              className="mt-6 w-full bg-gradient-to-r from-purple-600/80 to-indigo-600/80 text-white py-2 px-4 rounded-xl hover:from-purple-600 hover:to-indigo-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200"
              onClick={() => {
                // TODO: Implémenter la vue détaillée
                alert('Vue détaillée à venir !');
              }}
            >
              Voir plus
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RecommendationList; 