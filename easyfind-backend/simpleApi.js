const express = require('express');
const dbConnect = require('./mongodb')
const app = express();
const { ObjectId } = require('mongodb');


app.use(express.json())

app.get('/', async (req, res) => {
    let data =await dbConnect();
    data= await data.find().toArray();
    console.log(data)
    res.send(data)
})

app.post('/', async  (req, res) => {
    console.log(req.body)
    let data= await dbConnect();
    let result= await data.insertOne(req.body);
    res.send(result)
})
app.put('/:name', async  (req, res) => {
    let data =await dbConnect();
    let result= await data.updateOne(
        { name:req.params.name},
        {$set:req.body}
    )
    res.send("result coming");
})
app.delete('/:id', async (req, res) => {
    console.log(req.params.id);
    const data = await dbConnect();
    let result = await data.deleteOne({ _id: new ObjectId(req.params.id) }); 
    res.send(result);
});
app.listen(5000);