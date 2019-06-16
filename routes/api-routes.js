const axios = require("axios");
const db = require("../models");
const path = require("path");

module.exports = app =>{
//  routes to get all book from  database
app.get('/api/books',(req,res)=>{
    db.Book.find()
    .then(bookData=>res.json(bookData))
    .catch(err=>console.log(err))
});

// route to fetch book from google an post ne books from googlebook api with search parameters
app.post('/search',(req,res)=>{
    
     const GBOOKS_KEY=AIzaSyBPCjX3rX1tumtGB5v4mvQ_LCeCav50JLY;
    let booktitle = req.body.title.replace(/\s/g,"+");
    axios.get(`http://www.googleapis.com/books/v1/volumes?q=${booktitle}&key=${GBOOKS_KEY}`)
    .then(searchBook=>res.json(searchBook.data.items))
    .catch(err=>console.log(err))
})

//  route to post book item to the database
app.post("/api/books",(req,res)=>{
    db.Book.create(req.body)
    .then(createBook=>res.json(createBook))
    .catch(err=>console.log(err))
})

// routes for delete book from database
app.delete("/api/books/:id",(req,res)=>{
    db.Book.findByIdAndDelete(req.params.id)
    .then(bookDeleted=>res.json(bookDeleted))
    .catch(err=>console.log(err))
})

// **
}