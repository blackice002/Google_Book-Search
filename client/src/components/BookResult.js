import React from 'react';
import API from '../utils/API';
// import { BrowserRouter as Router } from 'react-router-dom'

class BookResult extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            saved: false,
            deleted: false
        }

    }
//function for the save button
    handleSave(e) { 
        this.setState({
            saved:true
        });
        const bookData ={
            title:this.props.title,
            authors:this.props.authors,
            link:this.props.link,
            img:this.props.img,
            description:this.props.description
        }
        e.preventDefault();
        API.addBook(bookData)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))

    };

 //this one handle book delete   
    handleDelete(e) {
        this.setState({deleted:true})
        e.preventDefault();
        API.deleteBook(this.props.id)
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    };
    render() {
        return (
            <div className="bookResult"
            //if there is a book data is aviable then show it otherwise  show null or (N/A)
                id={(this.props.id) ? this.book.id : null}
                style={{ display: this.state.deletd } ? "none" : "block"}>
                <div className="row">
                    <div className="aboutBook">
                        <h4>{this.props.title}</h4>
                        
                        <p>By:{(this.props.authors) ? 
                        this.props.authors.join(",") : "N/A"}</p>
                    </div>
                    <div className="btnDiv">
                        {
                            (this.props.link) ?
                                <a href={this.props.link} target="_blank" 
                                rel="noopener noreferrer">
                                <button type="button" name="view"> View</button>
                                </a> : null
                        }
                        {
                            (this.props.path === "/") ?
                                <button type="button" name="save"
                                    onClick={this.handleSave}
                                    disabled={this.state.saved}>
                                    {(this.state.saved) ? "saved" : "Save"}
                                </button> : <button type="button" name="Delete"
                                    onClick={this.handleDelete}
                                    disabled={this.state.deleted}>
                                    Delete
                                </button>
                        }
                    </div>
                </div>
                <div className="row">
                {(this.props.img)?
                    <img src={(this.props.img.smallThumnail)?
                     this.props.img.smallThumnail: 
                     (this.props.img.thumbnail) ?
                    this.props.img.thumbnail:""} 
                    alt="book cover"/>
                    :null
                }
                <p>{(this.props.description)?
                this.props.description
                :"N/A"}</p>

                </div>
            </div>
        )
    }
}
export default BookResult;