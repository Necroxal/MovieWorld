import React, { useEffect, useState } from 'react'

export const ListMov = () => {

    useEffect(()=>{
      getMovies();
  },[]);

  const [listState, setlistState] = useState([]);

  const getMovies = () =>{
      let movies = JSON.parse(localStorage.getItem("movies"));
      setlistState(movies);
  } 


  return (
    <>
    { listState != null ?
        listState.map(movie =>{
          return (
            <article key={movie.id} className="item-movie">
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.description}</p>
                <button className="edit">Edit</button>
                <button className="delete">Delete</button>

            </article>
          );
        })
        : <h2>Not found Movies</h2>
      }
    
    </>
  )
}
