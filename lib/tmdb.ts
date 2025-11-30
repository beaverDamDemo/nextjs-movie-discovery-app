const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN = process.env.TMDB_ACCESS_TOKEN;

export async function fetchPopularMovies() {
  const res = await fetch(
    `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
    {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        accept: "application/json",
      },
      next: { revalidate: 3600 }, // Revalidate once an hour
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch popular movies");
  }

  return res.json();
}
