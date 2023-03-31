import React from 'react'
import './Edit.css';
export const Edit = ({movie, getMovies, setEdit, setlistState}) => {
  const title_component = 'Edit Movie';

  const saveUpdate = (e, id) =>{
    e.preventDefault();
    //get event target
     let target = e.target;
    //find object index
    const moviesStored = getMovies();
    const index = moviesStored.findIndex(movie => movie.id === id);

    //Save Object  new with index
    let movie_update = {
      id,
      title: target.title.value,
      description: target.description.value
    };
    
    //update the element with those object
    moviesStored[index] = movie_update;

    //sabe new array in the local stage
    localStorage.setItem("movies", JSON.stringify(moviesStored));
    //update state
    setlistState(moviesStored);
    setEdit(0);
  };



  return (
    <div className='edit_form'>
        <hr />
        <h3 className='title'>{title_component}</h3>
        <form onSubmit={e => saveUpdate(e,movie.id)}>
            <input  type="text"
                    name='title'
                    className='title_edit'
                    defaultValue={movie.title} />
            <textarea name="description" 
                      defaultValue={movie.description}
                      className='description_edit'/>
            <input type="submit"className='edit' value='update'  />
        </form>
    </div>
  )
}
