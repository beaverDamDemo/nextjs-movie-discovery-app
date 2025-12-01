import Image from 'next/image';
import Link from 'next/link';
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

      <div className={`styles.challenge mt-7 text-center mb-7 text-purple-800`}>
        <p>Implement a search bar that filters results or queries the API.</p>
        <p>
          <strong>Dockerize:</strong> Dockerize the whole application.
        </p>
      </div>
    </div>
  );
}
