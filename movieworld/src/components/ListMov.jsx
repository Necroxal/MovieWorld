import React, { useEffect} from 'react'

export const ListMov = ({listState,setlistState}) => {

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
                <button className="edit">Edit</button>
                <button className="delete" onClick={()=>deleteMovie(movie.id)}>Delete</button>

            </article>
          );
        })
        : <h2>Not found Movies</h2>
      }
    
    </>
  )
}
