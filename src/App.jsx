import data from "./data/ghibli/ghibli.js";
import Movie from './Movie';
import classes from './style.module.css'
function App() {
  return (
    <>
      <div className={classes.container}>
        {
          data.films.map((movie) => <Movie key={movie.id} movie={movie} />)
        }
      </div>
    </>
  )
}

export default App
