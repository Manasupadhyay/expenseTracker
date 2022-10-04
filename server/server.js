import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
const PORT = 4000;

app.use(cors)
app.get('/', (req,res)=>{
    res.send('hello world')
})

mongoose.connect('mongodb://localhost:27017/expenseTracker').then(mes=> {
console.log('mongodb connected successfully')
}).catch(e=>{
    console.log(e.message)
})


app.listen(PORT, (err)=>{
    console.log(`server is running at http://localhost:4000`)
})