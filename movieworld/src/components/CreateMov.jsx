import React, { useState } from 'react'
import { saveOnStorage } from '../helper/SaveOnStorage';

export const CreateMov = ({setlistState}) => {
  const titleComponent = 'Add Movie';

  const [movieState,setMovieState] = useState({
    title: '',
    description: ''
  });
  const  {title, description} = movieState;

  const getFormValues = e =>{
    e.preventDefault(); 
   
    //Get date form
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    //Create Object and save
    let movie = {
      id: new Date().getTime(),
      title,
      description
    };
    //save state
    setMovieState(movie);
    //update main list
    setlistState(items =>{
      return [movie, ...items];
    });
    //Save  local storage
    saveOnStorage("movies",movie);

  }

  return (
     <div className="add">
            <h3 className="title">{titleComponent}</h3>
            <strong>
                {(title && description) && "the movie was created: "+ title}
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
