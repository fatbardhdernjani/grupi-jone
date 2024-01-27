import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_KEY = '3e52e2f5350ae60de5e2fc58e818d2a0';
const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-4 text-center">Filmat</h1>
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
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="btn btn-primary mt-4" onClick={fetchMovies}>
        Shiko më shumë filma
      </button>
    </div>
  );
}

export default Home;