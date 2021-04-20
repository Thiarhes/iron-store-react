import React from 'react';
import 'bulma/css/bulma.css';

export const InputSearch = ({ searchValue, handleInput }) => {
    return (
        <div className="field">
          <div className="control">
             <input 
             className="input" 
             onChange={handleInput} 
             value={searchValue}
             type="search" 
             placeholder="Type your Search" 
             />
          </div>
        </div>
    )
}