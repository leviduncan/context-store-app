import React from 'react'

function Search(props) {
    const { onSearchChange } = props
    return (
        <div className="search form-control">
            <input placeholder="Search for products" onChange={onSearchChange} />
        </div>
    )
}

export default Search