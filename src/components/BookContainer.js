import React from 'react'
import Bookresult from '../components/Bookresult'


const BookContainer = (props) => {
    if (props.path === "/") {
        return (
            <div id="bookcontainer">
            <h3> result Found</h3>
            {props.bookData.map((book)=>{
                const bookInfo = book.volumeInfo;
                return(
                    <Bookresult
                        title={bookInfo.title}
                        key={book._id}
                        authors={bookInfo.authors}
                        description={bookInfo.discription}
                        link={bookInfo.link}
                        img={bookInfo.img}
                        path={props.path}
                        />
                )
            })}
            </div>
        )
    } else if (props.path === "/saved") {
        if (props.savebooks.length > 0) {
            return (
            <div id="bookcontainer">
                <h3> Saved Books</h3>
                {props.savedBooks.map((book) => {
                    return <Bookresult
                        title={book.title}
                        key={book._id}
                        authors={book.authors}
                        description={book.discription}
                        link={book.link}
                        img={book.img}
                        id={book.id}
                        path={props.path}
                    />
                })}
            </div>)
        }
    }
    else{
        return(
            <div id= "bookContainer">
            <h3> Saved books</h3>
            <p> No results found</p>
            </div>
        )
    }
}

export default BookContainer;