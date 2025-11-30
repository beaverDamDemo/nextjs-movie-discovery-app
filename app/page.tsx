import Image from "next/image";
import styles from "./page.module.css";
import { fetchPopularMovies } from "@/lib/tmdb";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default async function Page() {
  const popularMovies = await fetchPopularMovies();

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <h1 className="mt-7 text-3xl font-bold text-blue-500">
          This will be the home page
        </h1>

        <div>
          <h1 className="text-2xl font-bold">Popular Movies</h1>
          <ul className="mt-5">
            {popularMovies.results.map((movie: any) => (
              <li
                key={movie.id}
                className="odd:bg-gray-100 even:bg-blue-100 odd:text-black even:text-blue-900 p-2 flex items-center justify-between"
              >
                <span>{movie.title}</span>
                <Link
                  href={`/movie/${movie.id}`}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Details <FaArrowRight />
                </Link>
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
