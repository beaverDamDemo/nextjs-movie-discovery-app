import React from 'react';

export default function MovieInfoPopover({ movie }: { movie: any }) {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-gray-100 text-gray-700 text-sm rounded shadow-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
      <p>
        <span className="font-semibold">Release date:</span>{' '}
        {movie.release_date}
      </p>
      <p>
        <span className="font-semibold">Popularity:</span> {movie.popularity}
      </p>
      <p>
        <span className="font-semibold">Vote average:</span>{' '}
        {movie.vote_average}/10
      </p>
      <p>
        <span className="font-semibold">Votes:</span> {movie.vote_count}
      </p>
      <p>
        <span className="font-semibold">Adult:</span>{' '}
        {movie.adult ? 'Yes' : 'No'}
      </p>
      <p>
        <span className="font-semibold">Video:</span>{' '}
        {movie.video ? 'Yes' : 'No'}
      </p>
    </div>
  );
}
