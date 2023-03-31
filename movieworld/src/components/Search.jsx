import React, { useState } from 'react'

export const Search = ({listState,setlistState}) => {

  const [search, setSearch] = useState('');


  const searchMovies = (e) =>{

    //create state and update
    setSearch(e.target.value);
   
    //filter for matches
   let found_movies = listState.filter(movieS =>{
      return movieS.title.toLowerCase().includes(search.toLocaleLowerCase); 
   });

   if(search.length <= 1 ){
      found_movies = JSON.parse(localStorage.getItem("movies"));
   }
   
   if(found_movies <= 0 ){
    found_movies = JSON.parse(localStorage.getItem("movies"));
  }
   
    //update state the list main with filter
    setlistState(found_movies);
  }


  return (
    <div className="search">
            <h3 className="title">Search</h3>
            <form>
                <input
                      type="text" 
                      id='search_field'
                      name='search' 
                      autoComplete='off'
                      value={search}
                      onChange={searchMovies}/>
                <button 
                      id='search'>Search</button>
            </form>
        </div>
  )
}
