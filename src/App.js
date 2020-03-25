import React, { useEffect, useState } from 'react'

const Movie = (props) => {
  const posterURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`
  return (
    <li>
      <p>{props.title}</p>
      <div class="movie-image-and-caption">
        <img src={posterURL}></img>
        <p>{props.overview}</p>
      </div>
    </li>
  )
}

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a6d1cf27a5747141f1db754bed4bc307`
    )
      .then((response) => response.json())
      .then((apiData) => {
        // console.log(apiData)
        const newMovies = apiData.results
        console.log(newMovies)

        setMovies(newMovies)
      })
  }, [])

  return (
    <main>
      <header>
        <h1>Party Like It is 1989</h1>
        <p>Made for SDG</p>
      </header>
      {/* some list of movies */}
      <ul class="movies">
        {movies.map((movie) => {
          return (
            <Movie
              title={movie.title}
              poster_path={movie.poster_path}
              overview={movie.overview}
            />
          )
        })}
      </ul>
      <footer>Made to demonstrate the POWER of React</footer>
    </main>
  )
}

export default App
