const express = require('express');
require('./config');
const cors = require('cors');
const user=require('./users');
const doctors=require('./doctors');
const realstates=require('./realstate');

const app=express();
app.use(cors());
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
//         req.params,
//         {$set:req.body}
//     )
//     res.send(result);
// })
app.post("/newDoctors",async (req,res)=>{
    let data=new doctors(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})

app.get("/api/doctorsList",async (req,res)=>{
    let data= await doctors.find();
    res.send(data);
})
app.post("/newRealState",async (req,res)=>{
    let data=new realstates(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})

app.get("/api/realStateList",async (req,res)=>{
    let data= await realstates.find();
    res.send(data);
    console .log("data",data)

})
app.listen(5000);


