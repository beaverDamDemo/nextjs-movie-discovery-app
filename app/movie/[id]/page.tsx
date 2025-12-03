import { fetchMovieById } from '@/lib/tmdb';
import Image from 'next/image';
import styles from './singleMovie.module.css';

export default async function SingleMovie({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const movie: SingleMovie = await fetchMovieById(id);

  return (
    <div className={styles.page}>
      <div className="relative h-72 w-full">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
          alt={`${movie.title} backdrop`}
          fill
          className="object-cover brightness-75"
        />
        <div className={styles.backdropOverlay}>
          <h1 className="text-4xl font-bold">{movie.title}</h1>
          <p className={styles.backdropTagline}>{movie.tagline}</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={400}
            height={600}
            className="rounded shadow"
          />
        </div>

        <div className="md:col-span-2 space-y-6">
          <p className={styles.overview}>{movie.overview}</p>

          <div className={styles.details}>
            <p>
              <span className="font-semibold">Release date:</span>{' '}
              {movie.release_date}
            </p>
            <p>
              <span className="font-semibold">Runtime:</span> {movie.runtime}{' '}
              min
            </p>
            <p>
              <span className="font-semibold">Budget:</span> $
              {movie.budget.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Revenue:</span> $
              {movie.revenue.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Rating:</span>{' '}
              {movie.vote_average}/10 ({movie.vote_count} votes)
            </p>
            <p>
              <span className="font-semibold">Popularity:</span>{' '}
              {movie.popularity}
            </p>
            <p>
              <span className="font-semibold">Status:</span> {movie.status}
            </p>
            <p>
              <span className="font-semibold">IMDB ID:</span> {movie.imdb_id}
            </p>
          </div>

          {movie.homepage && (
            <a
              href={movie.homepage}
              target="_blank"
              className={styles.homepageLink}
            >
              Official Homepage
            </a>
          )}

          <div>
            <h2 className="font-semibold">Genres</h2>
            <div className="flex flex-wrap gap-2 mt-1">
              {movie.genres?.map((g: any) => (
                <span key={g.id} className={styles.genreBadge}>
                  {g.name}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-semibold">Production Companies</h2>
            <ul className={styles.listMuted}>
              {movie.production_companies?.map((c: any) => (
                <li key={c.id}>
                  {c.name} ({c.origin_country})
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Production Countries</h2>
            <ul className={styles.listMuted}>
              {movie.production_countries?.map((c: any) => (
                <li key={c.iso_3166_1}>{c.name}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-semibold">Spoken Languages</h2>
            <ul className={styles.listMuted}>
              {movie.spoken_languages?.map((l: any) => (
                <li key={l.iso_639_1}>
                  {l.english_name} ({l.name})
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
