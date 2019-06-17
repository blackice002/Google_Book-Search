import React from 'react'

const SearchForm =(props)=>{
return(
    <div className="container">
    <h4> Book Search</h4>
    <form id="booksearch" >
        <label htmlFor="bookInput" form="bookSearch"> Enter a book to search</label>
        <input
            type='text'
            name='bookInput'
            id='bookInput'
            placeholder='Book Name'
            onChange= {props.handleChange}
            required
        />
        <button type ='submit'
        onClick = {()=>props.handleSearch()}
        > Search</button>
    </form>

    </div>
)
}
export default SearchForm;