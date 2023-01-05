import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const statusCodes = [
    {code: 200 , message: 'The request succeeded.' },
    {code: 404 , message: 'The server cannot find the requested resource.' }
  ];
 
  const fetchMoviesHandler = useCallback(async () =>{
    setIsLoading(true);
    setError(true);
    try {
      const response = await fetch('https://swapi.dev/api/films');
      if(!response.ok){
        let errorMsg = '';
        for(const status of statusCodes){
          if(+response.status === +status.code) {
            errorMsg = status.message;
          } 
          else  errorMsg = "something went wrong!";
        }
        errorMsg = "something went wrong!";
        throw new Error(errorMsg);
      }

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
      
    } catch (error) {
      setError(error.message);
    }
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
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>🤦‍♀️ Found no movies 🤦‍♂️</p>}
        {!isLoading && error && <p>{error}</p>}
        {isLoading && <p>Loading ... 🙃🙏 please be patient 🙃🙏</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
