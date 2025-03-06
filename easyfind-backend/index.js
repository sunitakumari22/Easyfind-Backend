const express =require('express');
const fs=require('fs');
const users =require('./assets/user.json');
const doctors =require('./assets/doctors.json');
const app=express();


const PORT =8000;

app.use(express.urlencoded({extended:false}));

app.use((req,res,next)=>{
    console.log("hello from middleware 1");
     //  return res.json({msg:"hello from Middleware"})
    next();
   
})
app.use((req,res,next)=>{
    console.log("hello from middleware 2");
     return res.end('Hey');
    
   
})


app.get('/api/users',(req,res)=>{
    return res.json(users)
})
app.get('/doctors',(req,res)=>{
    return res.json(doctors)
})

app.route("/api/users/:id")
.get(
    (req,res)=>{
        const id =Number(req.params.id);
        const user=users.find((user)=>user.id===id);   
        return res.json(user)
    }
)
.patch((req, res) => {
    const id = Number(req.params.id);
    const body = req.body;
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    users[userIndex] = { ...users[userIndex], ...body };
    fs.writeFile('./assets/user.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to update user' });
        }
        res.json({ status: 'success', user: users[userIndex] });
    });
})
.delete((req, res) => {
    const id = Number(req.params.id);
    const userIndex = users.findIndex(user => user.id === id);
    if (userIndex === -1) {
        return res.status(404).json({ status: 'error', message: 'User not found' });
    }
    users.splice(userIndex, 1);
    fs.writeFile('./assets/user.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to delete user' });
        }
        res.json({ status: 'success', message: 'User deleted successfully' });
    });
})
app.get("/api/users/:id",(req,res)=>{
    const id =Number(req.params.id);
    const user=users.find((user)=>user.id===id);   
    return res.json(user)
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    console.log("Body", body);

    users.push({ ...body, id: users.length + 1 });

    fs.writeFile('./assets/user.json', JSON.stringify(users), (err) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Failed to save data' });
        }
        res.json({ status: 'success', id: users.length });
    });
});


app.listen(PORT,()=>console.log(`server Started at port:${PORT}`))