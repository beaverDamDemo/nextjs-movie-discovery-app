import Image from 'next/image';
import styles from './page.module.css';
import { fetchPopularMovies } from '@/lib/tmdb';
import Link from 'next/link';

export default async function Page() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div>
          <h1 className="text-2xl font-bold">Popular Movies</h1>
          <ul className="mt-5 space-y-4">
            {popularMovies.results.map((movie: any) => (
              <li
                key={movie.id}
                className="bg-white shadow rounded-lg p-4 flex flex-col md:flex-row gap-4"
              >
                <div className="w-full md:w-1/4">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                    className="rounded-md"
                  />
                </div>

                <div className="flex-1 space-y-2">
                  <h2 className="text-xl font-bold">
                    <Link
                      href={`/movie/${movie.id}`}
                      className="inline-flex items-center gap-2 py-1 transition-colors duration-100 ease-in-out hover:underline"
                    >
                      {movie.title}{' '}
                    </Link>
                  </h2>
                  <p className="text-sm text-gray-600 italic">
                    Original title: {movie.original_title} (
                    {movie.original_language})
                  </p>
                  <p className="text-gray-700">{movie.overview}</p>

                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-sm text-gray-600">
                    <p>
                      <span className="font-semibold">Release date:</span>{' '}
                      {movie.release_date}
                    </p>
                    <p>
                      <span className="font-semibold">Popularity:</span>{' '}
                      {movie.popularity}
                    </p>
                    <p>
                      <span className="font-semibold">Vote average:</span>{' '}
                      {movie.vote_average}/10
                    </p>
                    <p>
                      <span className="font-semibold">Votes:</span>{' '}
                      {movie.vote_count}
                    </p>
                    <p>
                      <span className="font-semibold">Adult:</span>{' '}
                      {movie.adult ? 'Yes' : 'No'}
                    </p>
                    <p>
                      <span className="font-semibold">Video:</span>{' '}
                      {movie.video ? 'Yes' : 'No'}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={`styles.challenge mt-7`}>
          <h1 className={styles.title}>
            Next.js Frontend Challenge: Movie Discovery App
          </h1>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Objective</h2>
            <p>
              Build a Next.js application that allows users to browse popular
              movies and search for specific titles using the TMDB API.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>The Task</h2>
            <div className={styles.taskItem}>
              <h3>Home page</h3>
              <p>Display a grid of “Popular Movies” fetched from the API.</p>
            </div>
            <div className={styles.taskItem}>
              <h3>Search</h3>
              <p>
                Implement a search bar that filters results or queries the API.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.subtitle}>Extra credit</h2>
            <ul>
              <li>
                <strong>TypeScript:</strong> Using strict typing throughout the
                application.
              </li>
              <li>
                <strong>Responsiveness:</strong> A grid system that adapts
                gracefully to mobile, tablet, and desktop screens.
              </li>
              <li>
                <strong>Dockerize:</strong> Dockerize the whole application.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
