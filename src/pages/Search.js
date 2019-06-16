import React, { Component } from 'react'
import SearchForm from '../components/SearchForm'
import API from "../utils/API"
import BookContainer from "../components/BookContainer"

export default class Search extends Component {
constructor(props){
    super(props)
    this.state={
        bookInput:"",
        bookData:[]
    }
    this.handleChange=this.handleChange.bind(this)
    this.handleSearch= this.handleSearch.bind(this)
}
handleChange(e){
    e.preventDefault();
    this.setState({
        bookInput: e.target.value
    })
};


handleSearch(e){
API.searchBooks(this.state.bookInput)
.then(response=>{this.setState({bookData:response.data})
this.setState({bookInput:""})
})

};


    render() {
        return (
            <div>
                <SearchForm 
                    handleChange={this.handleChange}
                    handleSearch={this.handleSearch}
                />
                {(this.state.bookData.length > 0)
                ?
                <BookContainer
                bookData={this.state.bookData}
                path={this.props.match.path} />
                :null
                }
            </div>
        )
    }
}
