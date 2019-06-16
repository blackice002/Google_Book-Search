// dependencies 
const express= require('express');
const app = express();
const mongoose=require("mongoose")
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended:true}))
app.use(express.json());

// mongoDB database setup


// const mongoURI=process.env.MONGODB || "mongodb://localhost/icebooks";

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/icebooks", {useNewUrlParser:true})
.then(()=>console.log("successfuly connected to database"))
.catch((err)=>console.log(`Error connecting to database ${err}`))

require("./routes/api-routes.js")(app)
app.listen(PORT,()=>console.log(`server running on port : ${PORT}`))