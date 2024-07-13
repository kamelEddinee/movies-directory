const MovieCard = ({ movie }) => {
  return (
    <div className=" w-64 mx-auto bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative">
        <img
          src={movie.posterUrl}
          alt={`${movie.title} poster`}
          className="w-full h-96 object-cover"
        />
        <div className="absolute top-2 right-2 bg-yellow-400 text-black font-bold px-2 py-1 rounded">
          Rating {movie.rating}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 truncate">
          {movie.title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
