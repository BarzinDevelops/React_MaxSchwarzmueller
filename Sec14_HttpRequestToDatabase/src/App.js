import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () =>{
    setIsLoading(true);
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
    setIsLoading(false);
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
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>🤦‍♀️ Found no movies 🤦‍♂️</p>}
        {isLoading && <p>Loading ... 🙃🙏please be patient 🙃🙏</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
