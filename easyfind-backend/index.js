// const dbConnect=require('./mongodb') 


// // first step to handle promises
//  dbConnect().then((resp)=>{
//     resp.find({}).toArray().then((data)=>{
//         console.log(data)
//     })
//  })

// //  second step to handle promises
// // const main= async()=>{
// //     console.log("main function called");
// //     let data=  await dbConnect();
// //     data= await data.find().toArray();
// //     console.warn(data);   
    
// // }
// // main();

const mongoose=require('mongoose');


const main= async()=>{
    await mongoose.connect("mongodb://localhost:27017/easyfind-backend");
     const userSch=new mongoose.Schema({
        name:String,
        email:String,
        mobile:String,
        password:String
     });

 const usersModel=mongoose.model('users',userSch);
 let data =new   usersModel({name:"siya",email:'siya@gmail.com'})  ;
 let result = await data.save();
 console.log(result);
 

}

main()

