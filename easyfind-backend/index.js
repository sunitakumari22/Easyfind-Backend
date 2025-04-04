require('dotenv').config();
const express = require('express');
require('./config');
const cors = require('cors');
const user=require('./users');
const doctors=require('./doctors');
const realstates=require('./realstate');
const hotels=require('./hotels')
const restro=require('./restro')

const app=express();
app.use(cors());
app.use(express.json());


app.get("/", async (req, res) => {
    res.send("EasyFind - Backend project Working Fine");
});
//  Api for users
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
app.get("/list/:email/:password", async (req, res) => {
    const { email, password } = req.params;

    try {
        let data = await user.findOne({ email: email, password: password });
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});

app.get("/api/adminList",async (req,res)=>{
    let data= await user.find();
    res.send(data);
})
app.get("/api/adminList/:email/:password", async (req, res) => {
    const { email, password } = req.params;

    try {
        let data = await user.findOne({ email: email, password: password });
        if (data) {
            res.send(data);
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error.message });
    }
});
app.post("/api/newAdmin",async (req,res)=>{
    let data=new user(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
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

// Api for doctars
app.post("/api/newDoctors",async (req,res)=>{
    let data=new doctors(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})

app.get("/api/doctorsList",async (req,res)=>{
    let data= await doctors.find();
    res.send(data);
})
// Api for real State

app.post("/api/newRealState",async (req,res)=>{
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
// Api for Hotels
app.post("/api/newHotels",async (req,res)=>{
    let data=new hotels(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})

app.get("/api/hotelList",async (req,res)=>{
    let data= await hotels.find();
    res.send(data);
    console .log("data",data)

})
// Api for Restaurants
app.post("/api/newRestro",async (req,res)=>{
    let data=new hotels(req.body)
    let result= await data.save()
    console.log(req.body);    
    res.send(req.body)
})

app.get("/api/restroList",async (req,res)=>{
    let data= await hotels.find();
    res.send(data);
    console .log("data1",data)

})

app.listen(5000);


