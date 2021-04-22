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
            <p className="text-primary mt-3">Filter employees by their Firstname or LastName or email</p>
        </>
    )
}

export default SearchInput
