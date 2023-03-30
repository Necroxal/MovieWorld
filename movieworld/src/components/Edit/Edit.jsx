import React from 'react'
import './Edit.css';
export const Edit = () => {
  const title_component = 'Edit Movie';
  return (
    <div className='edit_form'>
        <hr />
        <h3 className='title'>{title_component}</h3>
        <form>
            <input  type="text"
                    name='title'
                    className='title_edit'
                    defaultValue='title_original' />
            <textarea name="description" 
                      defaultValue="description_original"
                      className='description_edit'/>
            <input type="submit"className='edit' value='update'  />
        </form>
    </div>
  )
}
