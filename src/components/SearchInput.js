import React from 'react'

function SearchInput(props) {
    return (
        <>
            <input 
            name= "search"
            placeholder="search" 
            className="form-control-lg" 
            onChange={(e)=>props.startFilter(e)} 
            type= "text"/> 
            <p>Filter employees by their name</p>
        </>
    )
}

export default SearchInput
