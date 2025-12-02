'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaInfo, FaSearch } from 'react-icons/fa';
import styles from './movieGrid.module.css';

export default function MovieGrid({ movies }: { movies: any[] }) {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [query, setQuery] = useState('');
  const [minRating, setMinRating] = useState(0);
  const [language, setLanguage] = useState('');

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedMovie(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesRating = movie.vote_average >= minRating;
    const matchesLanguage = language
      ? movie.original_language === language
      : true;
    return matchesQuery && matchesRating && matchesLanguage;
  });

  return (
    <div>
      <div className={styles.searchWrapper}>
        <FaSearch className={styles.searchIcon} />
        <input
          type="text"
          placeholder="Search movies..."
          className={styles.searchInput}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="flex gap-4 mt-4 justify-end">
        <div>
          <label className="block text-sm font-medium">Min Rating</label>
          <input
            type="number"
            min="0"
            max="10"
            step="0.5"
            value={minRating}
            onChange={(e) => setMinRating(Number(e.target.value))}
            className="border rounded px-2 py-1 w-20"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="">All</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="es">Spanish</option>
            <option value="ja">Japanese</option>
          </select>
        </div>
      </div>

      <ul className="mt-5 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {filteredMovies.map((movie) => (
          <li
            key={movie.id}
            className="shadow rounded-lg p-4 flex flex-col relative"
          >
            <div className="w-full relative">
              <Link href={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                  alt={movie.title}
                  className="rounded-md w-full"
                />
              </Link>

              <button
                onClick={() => setSelectedMovie(movie)}
                className="absolute top-2 right-2 flex items-center justify-center w-7 h-7 rounded-full border border-black bg-white text-black hover:bg-gray-100 opacity-70 hover:opacity-80 cursor-pointer"
              >
                <FaInfo className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex-1 space-y-2 mt-2">
              <h2 className="text-xl font-bold">
                <Link
                  href={`/movie/${movie.id}`}
                  className="inline-flex items-center gap-2 py-1 transition-colors duration-100 ease-in-out hover:underline"
                >
                  {movie.title}
                </Link>
              </h2>
              <p className="text-sm italic">
                Original title: {movie.original_title} (
                {movie.original_language})
              </p>
              <p className="text-sm">⭐ {movie.vote_average}/10</p>
            </div>
          </li>
        ))}
      </ul>

      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedMovie(null)}
        >
          <div
            className={`${styles.popover}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedMovie(null)}
              className={styles.popoverClose}
            >
              ✕
            </button>
            <h2 className={styles.popoverHeader}>{selectedMovie.title}</h2>
            <p>{selectedMovie.overview}</p>
            <p>
              <strong>Release date:</strong> {selectedMovie.release_date}
            </p>
            <p>
              <strong>Popularity:</strong> {selectedMovie.popularity}
            </p>
            <p>
              <strong>Rating:</strong> {selectedMovie.vote_average}/10 (
              {selectedMovie.vote_count} votes)
            </p>
            <p>
              <strong>Adult:</strong> {selectedMovie.adult ? 'Yes' : 'No'}
            </p>
            <p>
              <strong>Video:</strong> {selectedMovie.video ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
