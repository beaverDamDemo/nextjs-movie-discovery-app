import styles from './page.module.css';
import { fetchPopularMovies } from '@/lib/tmdb';
import MovieGrid from './MovieGrid';
import Image from 'next/image';

export default async function Page() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="relative w-full h-[438px]">
          <Image
            src="/tinified/hero-short-438.png"
            alt="Hero background"
            width={1200}
            height={438}
            priority
            className="w-full h-full object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-6xl font-bold text-white">
            Popular Movies
          </h1>
        </div>
        <MovieGrid movies={popularMovies.results} />
      </main>
    </div>
  );
}
