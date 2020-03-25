import React from 'react'

const Movie = () => {
  const posterURL = `https://image.tmdb.org/t/p/w185_and_h278_bestv2/"${props.poster_path}`
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
  const movies = [
    {
      vote_count: 4300,
      id: 89,
      video: false,
      vote_average: 7.7,
      title: 'Indiana Jones and the Last Crusade',
      popularity: 18.43,
      poster_path: '/4p1N2Qrt8j0H8xMHMHvtRxv9weZ.jpg',
      original_language: 'en',
      original_title: 'Indiana Jones and the Last Crusade',
      genre_ids: [12, 28],
      backdrop_path: '/vfvVuu1JdnEGcyZUj7VHrhhbeMj.jpg',
      adult: false,
      overview:
        "When Dr. Henry Jones Sr. suddenly goes missing while pursuing the Holy Grail, eminent archaeologist Indiana must team up with Marcus Brody, Sallah and Elsa Schneider to follow in his father's footsteps and stop the Nazis from recovering the power of eternal life.",
      release_date: '1989-05-24',
    },
  ]

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?primary_release_year=1989&sort_by=popularity.desc&api_key=a6d1cf27a5747141f1db754bed4bc307`
    )
      .then((response) => response.json())
      .then((apiData) => {
        // console.log(apiData)
        const movies = apiData.results
        console.log(movies)
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
      <footer>Made to shower the power of REACT</footer>
    </main>
  )
}

export default App
