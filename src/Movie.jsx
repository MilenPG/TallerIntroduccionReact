import classes from './style.module.css'

function Movie({ movie }) {
  return (
    <>
      <div className={classes.card}>
        <img src={movie.poster} alt="imágen de la película" />
        <h2>{movie.title}</h2>
        <dialog className={classes.modal} id={movie.id}>
          <div id="cuadro"></div>
          <h3>Director: {movie.director}</h3>
          <p>Release Date:  {movie.release_date}</p>
          <p>Rate:  {movie.rt_score}</p>
          <p2>{movie.description}</p2>
          <div id="charactersgender"></div>
          <form method="dialog">
            <button className={classes.close}>Close</button>
          </form>
        </dialog>
      </div>
    </>
  )
}

export default Movie
