import Image from 'next/image';
import styles from './page.module.css';
import { fetchPopularMovies } from '@/lib/tmdb';
import MovieGrid from './MovieGrid';

export default async function Page() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/favicon.png" alt="App Logo" width={32} height={32} />
          <span className={styles.appName}>Movie Discovery</span>
        </div>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            placeholder="Search movies..."
            className={styles.searchInput}
          />
        </div>
      </header>

      <main className={styles.main}>
        <MovieGrid movies={popularMovies.results} />
      </main>

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
    </div>
  );
}
