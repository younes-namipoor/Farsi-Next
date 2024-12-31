import { getLocalData } from "@/lib/localdata";
import {
  Actors,
  EachMovieBanner,
  EachMovieComment,
  EachMovieStoryAndTrailer,
  SuggestedMovies,
  Factors,
} from "@/components";

export const metadata = {
  title: "تماشای هر فیلم",
};

// تولید مسیرهای استاتیک
export async function generateStaticParams() {
  const data = await getLocalData();

  if (!data || !Array.isArray(data.movies)) {
    throw new Error("مشکل در داده‌های فیلم‌ها.");
  }

  return data.movies.map((movie) => ({
    movieId: `${movie.id}`,
  }));
}

const EachMovie = async ({ params }) => {
  const data = await getLocalData();

  if (!data || !data.movies) {
    throw new Error("مشکلی در دریافت داده‌ها وجود دارد.");
  }

  const movies = data.movies;

  return (
    <div className="text-white">
      <EachMovieBanner mark={params.movieId} movies={movies} />
      <EachMovieStoryAndTrailer mark={params.movieId} movies={movies} />
      <SuggestedMovies mark={params.movieId} movies={movies} />
      <Actors mark={params.movieId} movies={movies} />
      <Factors mark={params.movieId} movies={movies} />
      <EachMovieComment mark={params.movieId} movies={movies} />
    </div>
  );
};

export default EachMovie;