'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaInfo } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import styles from './movieGrid.module.css';

export default function MovieGrid({ movies }: { movies: any[] }) {
  const [selectedMovie, setSelectedMovie] = useState<any | null>(null);
  const [query, setQuery] = useState('');
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-96 relative">
            <button
              onClick={() => setSelectedMovie(null)}
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-2">{selectedMovie.title}</h2>
            <p className="text-sm text-gray-700 mb-2">
              {selectedMovie.overview}
            </p>
            <p className="text-sm text-gray-600">
              Release date: {selectedMovie.release_date}
            </p>
            <p className="text-sm text-gray-600">
              Popularity: {selectedMovie.popularity}
            </p>
            <p className="text-sm text-gray-600">
              Rating: {selectedMovie.vote_average}/10 (
              {selectedMovie.vote_count} votes)
            </p>
            <p className="text-sm text-gray-600">
              Adult: {selectedMovie.adult ? 'Yes' : 'No'}
            </p>
            <p className="text-sm text-gray-600">
              Video: {selectedMovie.video ? 'Yes' : 'No'}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
