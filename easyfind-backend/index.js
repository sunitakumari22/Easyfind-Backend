const express = require('express');
require('./config');
const user=require('./users');

const app=express();
app.use(express.json());

app.post("/create",async (req,res)=>{
    let data=new user(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})
app.listen(5000);


