import React, { Component } from 'react'
import BookContainer from "../components/BookContainer"
import API from "../utils/API"


export default class Saved extends Component {
constructor(props){
    super(props);
    this.state={
        savedBooks:[]
    }
}
componentDidMount() {
    API.getbooks()
    .then(response=>{this.setState({savedBooks: response.data})})
    .catch(err=>console.log(err))
}
    render() {
        return (
            <div>
                <BookContainer
                    savedBooks={this.state.savedBooks}
                    path={this.props.match.path}
                />
            </div>
        )
    }
}
