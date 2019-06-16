// dependencies 
const express= require('express');
const app = express();
const PORT = process.env.PORT || 8080


app.use(express.urlencoded({extended:true}))

// mongoDB database setup
const mongoose=require("mongoose")
const mongoURL=process.env.PROD.MONGODB || "mongodb:localhost:27017/icebooks";

mongoose.connect(mongoURL, {useNewUrlParser:true})
.then(()=>console.log("successfuly connected to database"))
.catch((err)=>console.log(`Error connecting to database ${err}`))

require("./routes/api-routes")(app)
app.listen(PORT,()=>console.log(`server running on port : ${PORT}`))