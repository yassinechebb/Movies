import React from 'react'
import MoviesCard from './MoviesCard'

function MoviesCardList({movies , setmovies}) {
  console.log(movies)
  return (
    <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", marginTop:"150px"}}>
        {
        movies.map((el)=><MoviesCard movie={el}/>)
        }

    </div>
  )
}

export default MoviesCardList