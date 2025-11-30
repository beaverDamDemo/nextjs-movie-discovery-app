import { fetchMovieById } from "@/lib/tmdb";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const movie = await fetchMovieById(id);
  console.log("⚠️ ~ movie:", movie);

  return (
    <div className="p-6 space-y-2">
      <p className="text-lg font-bold">Movie ID: {movie.id}</p>
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="italic text-gray-600">{movie.tagline}</p>
      <p className="mb-2 text-gray-700">{movie.overview}</p>

      <p className="text-sm text-gray-500">
        Original title: {movie.original_title}
      </p>
      <p className="text-sm text-gray-500">
        Original language: {movie.original_language}
      </p>
      <p className="text-sm text-gray-500">
        Origin countries: {movie.origin_country?.join(", ")}
      </p>

      <p className="text-sm text-gray-500">
        Release date: {movie.release_date}
      </p>
      <p className="text-sm text-gray-500">Status: {movie.status}</p>
      <p className="text-sm text-gray-500">Runtime: {movie.runtime} minutes</p>

      <p className="text-sm text-gray-500">
        Budget: ${movie.budget.toLocaleString()}
      </p>
      <p className="text-sm text-gray-500">
        Revenue: ${movie.revenue.toLocaleString()}
      </p>

      <p className="text-sm text-gray-500">Popularity: {movie.popularity}</p>
      <p className="text-sm text-gray-500">
        Rating: {movie.vote_average}/10 ({movie.vote_count} votes)
      </p>

      <p className="text-sm text-gray-500">IMDB ID: {movie.imdb_id}</p>
      {movie.homepage && (
        <p className="text-sm text-blue-600">
          Homepage:{" "}
          <a href={movie.homepage} target="_blank">
            {movie.homepage}
          </a>
        </p>
      )}

      <div>
        <h2 className="font-semibold">Genres</h2>
        <ul className="list-disc list-inside">
          {movie.genres?.map((g: any) => (
            <li key={g.id}>{g.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Production Companies</h2>
        <ul className="list-disc list-inside">
          {movie.production_companies?.map((c: any) => (
            <li key={c.id}>
              {c.name} ({c.origin_country})
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Production Countries</h2>
        <ul className="list-disc list-inside">
          {movie.production_countries?.map((c: any) => (
            <li key={c.iso_3166_1}>{c.name}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Spoken Languages</h2>
        <ul className="list-disc list-inside">
          {movie.spoken_languages?.map((l: any) => (
            <li key={l.iso_639_1}>
              {l.english_name} ({l.name})
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="font-semibold">Poster</h2>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="rounded shadow"
        />
      </div>

      <div>
        <h2 className="font-semibold">Backdrop</h2>
        <img
          src={`https://image.tmdb.org/t/p/w780${movie.backdrop_path}`}
          alt={`${movie.title} backdrop`}
          className="rounded shadow"
        />
      </div>
    </div>
  );
}
