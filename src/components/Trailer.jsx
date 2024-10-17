import React from 'react'
import { useParams } from 'react-router-dom'
import ReactStars from "react-rating-stars-component";
import './Trailer.css'

function Trailer({movies}) {
    const params=useParams()
    const movie=movies.filter((el)=>el.name===params.name)[0]
  return (
    <div className='trailer'>
       <figure className="movie">
  <div className="movie__hero">
    <img
      src={movie.posterurl}
      alt="#"
      className="movie__img"
    />
  </div>
  <div className="movie__content">
    <div className="movie__title">
      <h1 className="heading__primary">
        {movie.name} <i className="fas fa-fire" />
      </h1>
      <div className="movie__tag movie__tag--1">#action</div>
      <div className="movie__tag movie__tag--2">#thriller</div>
    </div>
    <p className="movie__description">
      {movie.description}
    </p>
    <div className="movie__details">
      <p className="movie__detail">
        <span className="icons icons-red">
          <i className="fas fa-camera-retro" />{" "}
        </span>
        Buzz Feitshans
      </p>
      <p className="movie__detail">
        <span className="icons icons-grey">
          <i className="fas fa-clock" />{" "}
        </span>
        1h 33m
      </p>
      <p className="movie__detail">
        <span className="icons icons-yellow">
          <i className="fas fa-file-invoice-dollar" />
        </span>
        $12.52 crores
      </p>
      
      <ReactStars
    count={5}
    edit={false}
    size={24}
    value={movie.rating}
    activeColor="#ffd700"
  />
    </div>
  </div>
  <div className="movie__price">$12.56</div>
</figure>
      

    </div>
  )
}

export default Trailer