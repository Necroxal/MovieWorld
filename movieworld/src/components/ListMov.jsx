import React, { useEffect, useState} from 'react'
import { Edit } from './Edit/Edit.jsx';

export const ListMov = ({listState,setlistState}) => {

  const [edit, setEdit] = useState(0);

    useEffect(()=>{
      getMovies();
  },[]);

  const getMovies = () =>{
      let movies = JSON.parse(localStorage.getItem("movies"));
      setlistState(movies);

      return movies;
  } 

  const deleteMovie = (id) =>{
    //Get stored movies
    let moviesSave = getMovies();
    //Filter the movies to eliminate I don't want from the array
    let newListMovies = moviesSave.filter(movies => movies.id !== parseInt(id));
    //update state of list
    setlistState(newListMovies);
    //Update dates in the local storage
    localStorage.setItem('movies', JSON.stringify(newListMovies));
  }

  return (
    <>
    { listState != null ?
        listState.map(movie =>{
          return (
            <article key={movie.id} className="item-movie">
                <h3 className="title">{movie.title}</h3>
                <p className="description">{movie.description}</p>
                <button className="edit" onClick={() =>{setEdit(movie.id)}}>Edit</button>
                <button className="delete" onClick={()=>deleteMovie(movie.id)}>Delete</button>
                {/* Form to edit*/}
                {edit === movie.id && (
                  <Edit movie ={movie}
                  getMovies={getMovies}
                  setEdit={setEdit}
                  setlistState={setlistState}/>
            )}
            </article>
          );
        })
        : <h2>Not found Movies</h2>
      }
    
    </>
  )
}
