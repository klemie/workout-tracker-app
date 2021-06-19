const express = require("express");
const app = express();
const pool = require("./database");

app.use(express.json())

//get

//Create
app.post("/exercise", async(req,res) =>{
    try{
         const{description}
    }catch(err){
          console.log(err.message());
    }
})