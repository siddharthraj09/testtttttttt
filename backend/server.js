const express = require('express')
const app=express()
require('dotenv').config()
const routes =require('./route/routes')
const PORT=process.env.PORT ||8000
const {connectDB} =require('./db/connect')
const {errorHandler} =require('./middleware/errorMiddleware')


app.use(express.json())
app.use(express.urlencoded({extended:false}))

connectDB();

app.get('/',(req,res)=>{
    res.send('Helllo There')
})


app.use('/api/v1',routes)

app.use(errorHandler)

app.listen(PORT,()=>{
    console.log(`App is listening to port ${PORT}`);
})