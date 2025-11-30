import { fetchMovieById } from "@/lib/tmdb";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const movie = await fetchMovieById(id);

  return (
    <div className="p-6">
      <p className="text-lg font-bold">Movie ID: {id}</p>
      <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
      <p className="mb-2 text-gray-700">{movie.overview}</p>
      <p className="text-sm text-gray-500">
        Release date: {movie.release_date}
      </p>
      <p className="text-sm text-gray-500">Rating: {movie.vote_average}/10</p>
    </div>
  );
}
