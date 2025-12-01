import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { fetchPopularMovies } from '@/lib/tmdb';
import MovieGrid from './MovieGrid';
import { FaSearch } from 'react-icons/fa';

export default async function Page() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-2xl font-bold">Popular Movies</h1>
        <div className={styles.searchWrapper}>
          <FaSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search movies..."
            className={styles.searchInput}
          />
        </div>
        <MovieGrid movies={popularMovies.results} />
      </main>
    </div>
  );
}
