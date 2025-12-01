import styles from './page.module.css';
import { fetchPopularMovies } from '@/lib/tmdb';
import MovieGrid from './MovieGrid';

export default async function Page() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className="text-3xl font-bold mt-2">Popular Movies</h1>
        <MovieGrid movies={popularMovies.results} />
      </main>
    </div>
  );
}
