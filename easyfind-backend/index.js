const dbConnect=require('./mongodb') 


// first step to handle promises
 dbConnect().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data)
    })
 })

//  second step to handle promises
// const main= async()=>{
//     console.log("main function called");
//     let data=  await dbConnect();
//     data= await data.find().toArray();
//     console.warn(data);   
    
// }
// main();

