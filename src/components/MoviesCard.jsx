import React from 'react'
import './MoviesCard.css'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function MoviesCard({movie}) {
  console.log(movie)
  return (
   <Link to={`/trailer/${movie.name}`} style={{textDecoration:'none',color:'black'}}>

    <div className="card" style={{width:'18rem', margin:"20px"}}>
      <img src={movie.posterurl} alt='movie' />
      <div className="descriptions">
        <h4>{movie.name}</h4>
        <p>
        {movie.description}
        </p>
        <ReactStars
    count={5}
    edit={false}
    size={24}
    value={movie.rating}
    activeColor="#ffd700"
  />,
        <button>
          <i className="fab fa-youtube" />
          Play trailer on YouTube
        </button>
      </div>
    </div>
  
    </Link>



  )
}

export default MoviesCard