import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () =>{
    const response = await fetch('https://swapi.dev/api/films');
    const moviesData = await response.json();
  
    const transformedMovies = moviesData.results.map( movie => {
      return {
        id: movie.episode_id,
        title: movie.title,
        releaseDate: movie.release_date,
        openingText: movie.opening_crawl
      }
    })
    setMovies(transformedMovies);

    // Getting same data but using .then() method approach:
    // fetch('https://swapi.dev/api/films')
    //   .then(response=> {
    //     const moviesData = response.json();
    //     return moviesData;
    //   })
    //   .then( moviesData => {
    //     const transformedMovies = moviesData.results.map( movie => {
    //       return {
    //         id: movie.episode_id,
    //         title: movie.title,
    //         releaseDate: movie.release_date,
    //         openingText: movie.opening_crawl
    //       }
    //     })
    //     setMovies(transformedMovies);
    //   });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
