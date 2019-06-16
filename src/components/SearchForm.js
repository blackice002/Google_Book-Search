import React from 'react'

const SearchFrom =(props)=>{
return(
    <div>
    <h4> Book Search</h4>
    <from >
        <label htmlFor="bookInput" from="bookSearch"> Enter a book to search</label>
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
    </from>

    </div>
)
}
export default SearchFrom;