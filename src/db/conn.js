const mongoose = require("mongoose");
const DB = process.env.DATABASE;
mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log("Error Occured While connecting to database");
    console.log(err);
})