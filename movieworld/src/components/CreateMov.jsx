import React, { useState } from 'react'
import { saveOnStorage } from '../helper/SaveOnStorage';

export const CreateMov = () => {
  const title = 'Add Movie';

  const [movieState,setMovieState] = useState({
    title: '',
    description: ''
  })

  const getFormValues = e =>{
    e.preventDefault(); 
   
    //Get date form
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //Create Object and save
    let movie = {
      id: new Date().getTime,
      title,
      description
    };
    //save state
    setMovieState(movie);
    //Save  local storage
    saveOnStorage('movies',movie);
  }

  
  
  return (
     <div className="add">
            <h3 className="title">{title}</h3>
            <strong>
                {(movieState.title && movieState.description) && "the movie was created: "+ movieState.title}
            </strong>
            <form onSubmit={getFormValues}>
                <input type="text" 
                       id="title"
                       name="title"
                       placeholder="Title"/> 

                <textarea id="description" 
                          name="description"
                          placeholder="Description"></textarea>

                <input type="submit" 
                       id="save" 
                       value="Save"/>
            </form>
        </div>
  )
}
