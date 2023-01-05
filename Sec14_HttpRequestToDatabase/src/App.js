import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  
 
  const fetchMoviesHandler = useCallback(async () =>{
    const statusCodes = [
      {code: 200 , message: 'The request succeeded.' },
      {code: 404 , message: 'The server cannot find the requested resource.' }
    ];
    setIsLoading(true);
   
    try {
      const response = await fetch('https://swapi.dev/api/films/', { mode: 'cors'});
      if(!response.ok){
        let errorMsg = '';
        for(const status of statusCodes){
          if(+response.status === +status.code) {
            errorMsg = status.message;
          } 
          else  errorMsg = "something went wrong!";
        }
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
  }, []);

  useEffect(()=>{
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  let content = <p>🤦‍♀️ Found no movies 🤦‍♂️</p> ;

  if(movies.length > 0){
    content =  <MoviesList movies={movies} />;
  }
  if(error){
    content = <p>{error}</p>;
  }
  if(isLoading){
    content = <p>Loading ... 🙃🙏 please be patient 🙃🙏</p>;
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        { content }
      </section>
    </React.Fragment>
  );
}

export default App;
