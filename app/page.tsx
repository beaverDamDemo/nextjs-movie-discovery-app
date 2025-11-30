import Image from "next/image";
import styles from "./page.module.css"; // CSS module for styling

export default function Page() {
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
            <div className={styles.taskItem}>
              <h3>Details</h3>
              <p>
                Clicking a movie should take the user to a detailed view (new
                page/route) with more information about that specific movie.
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
