// dependencies 
const express= require('express');
const app = express();
const mongoose=require("mongoose")
require('dotenv').config()
const path = require('path')


//serve the static file from React JS

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"))
}
// app.use(express.static(path.join(__dirname, 'client/build')));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// mongoDB database setup


const MONGODB=process.env.MONGODB_URI || "mongodb://localhost/icebooks";
mongoose.connect(MONGODB,{useNewUrlParser:true})
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/icebooks", {useNewUrlParser:true})
.then(()=>console.log("successfuly connected to database"))
.catch((err)=>console.log(`Error connecting to database ${err}`))




require("./routes/api-routes.js")(app)


//local host port setup
const PORT = process.env.PORT || 8080;
app.listen(PORT);

console.log(`app is listening on port:${PORT}`)