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

app.get("/list",async (req,res)=>{
    let data= await user.find();
    res.send(data);
})

app.delete("/delete/:_id",async (req,res)=>{
    console.log(req.params);
    let data= await user.deleteOne(req.params);
    res.send(data);
})
// app.put('/update/:_id', async  (req, res) => {
//     console.log(req.params);
//     let result= await data.updateOne(
//         { _id:req.params._id},
//         {$set:req.body}
//     )
//     res.send(result);
// })
app.listen(5000);


