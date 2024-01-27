import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '3e52e2f5350ae60de5e2fc58e818d2a0';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&page=`;

function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies(currentPage);
  }, [currentPage]);

  const fetchMovies = async (page) => {
    try {
      const response = await fetch(`${API_URL}${page}`);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Lista e Filma</h1>
      <div className="row">
        {movies.map((movie) => (
          <div key={movie.id} className="col-md-3 mb-4">
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p>ID: {movie.id}</p>
                <p>Kohegjatesia: {movie.runtime} min</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-4">
        <button className="btn btn-primary" onClick={handlePrevPage}>
          Faqja e meparshme
        </button>
        <button className="btn btn-primary" onClick={handleNextPage}>
          Faqja e ardhshme
        </button>
      </div>
    </div>
  );
}

export default Movies;
