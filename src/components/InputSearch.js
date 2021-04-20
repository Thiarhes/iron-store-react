import React from 'react';

export const InputSearch = ({ searchValue, handleInput }) => {
    return (
        <input
            onChange={handleInput}
            value={searchValue}
            type='search'
            placeholder='Type your search'
        />
    )
}