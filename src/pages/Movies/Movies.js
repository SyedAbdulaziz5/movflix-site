import React, { useContext } from "react";
import { AppContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

const Movies = () => {
  const { movies, query, setQuery } = useContext(AppContext);

  if (!Array.isArray(movies)) {
    return <p>No movies found.</p>;
  }

  return (
    <section className="movie-page px-4 lg:px-28 py-5 bg-[#110F18]">
      <div className="movie-header flex flex-col sm:flex-row items-start sm:items-center justify-between py-14 px-4">
        <h1 className="text-[#FFFFFF] lg:text-4xl xl:text-4xl sm:text-2xl font-bold mb-4 sm:mb-0">
          Top Online <span className="text-[#e4d804]">Movies</span> Watch
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="relative flex items-center w-full sm:w-[18rem] max-w-sm"
        >
          <input
            type="text"
            placeholder="Find Favorite Movie"
            className="w-full p-3 pl-4 text-[0.9rem] rounded-full bg-gray-800 text-white focus:outline-none"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 bg-gray-800 rounded-full flex items-center justify-center text-[#e4d804]"
          >
            <IoSearch />
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center">
        {movies.length > 0 ? (
          movies.map((curMovie) => {
            const { imdbID, Title, Poster, Year } = curMovie;
            return (
              <NavLink to={`/movie/${imdbID}`} key={imdbID}>
                <div className="card w-full h-auto rounded-lg overflow-hidden">
                  <div className="card-info">
                    <img
                      className="card-img w-full object-cover h-[26rem] transition-transform duration-300 ease-in-out hover:scale-105"
                      src={Poster}
                      alt={Title}
                    />
                    <h2 className="movie-title mt-4 text-base font-semibold text-white">
                      {Title}
                    </h2>
                    <div className="flex justify-between py-1">
                      <h2 className="font-semibold text-[#e4d804]">{Year}</h2>
                      <p className="font-semibold text-sm text-[#e4d804] border-2 border-white px-2">
                        HD
                      </p>
                    </div>
                  </div>
                </div>
              </NavLink>
            );
          })
        ) : (
          <p className="text-white">No movies found.</p>
        )}
      </div>
    </section>
  );
};

export default Movies;