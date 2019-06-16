import axios from "axios"

export default{
    getbooks:()=>{
        return axios.get("/api/books")
    },
    searchBooks:()=>{
        return axios.post('/search',{title:title})
    },
    addBook:()=>{
        return axios.post('/api/books',bookData);
    },
    deleteBook:(id)=>{
        return axios.delete(`/api/books/${id}`)
    }
}