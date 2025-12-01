'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaInfo, FaSearch } from 'react-icons/fa';
import styles from './movieGrid.module.css';

export default function MovieGrid({ movies }: { movies: any[] }) {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setSelectedMovie(null);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(query.toLowerCase())
  );

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

      <ul className="mt-5 grid gap-4 grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8">
        {filteredMovies.map((movie) => (
          <li
            key={movie.id}
            className="bg-white shadow rounded-lg p-4 flex flex-col relative"
          >
            <div className="w-full relative">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="rounded-md w-full"
              />

              <button
                onClick={() => setSelectedMovie(movie)}
                className="absolute top-2 right-2 flex items-center justify-center w-8 h-8 rounded-full border border-black bg-white text-black hover:bg-gray-100 cursor-pointer"
              >
                <FaInfo className="w-4 h-4" />
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
              <p className="text-sm text-gray-600 italic">
                Original title: {movie.original_title} (
                {movie.original_language})
              </p>
            </div>
          </li>
        ))}
      </ul>

      {selectedMovie && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
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
