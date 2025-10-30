const express=require('express')
const dotenv=require('dotenv')
const cors=require('cors')
const cookieParser = require('cookie-parser');
const { log } = require('console');
dotenv.config();
const {userRoute}=require('./routes/userRouter');
const {bookRouter}=require('./routes/bookRouter');

//create app instance
const app=express();

app.use(express.json({
    extended:true
}))
app.use(cors())
app.use(cookieParser());

//routes
// app.use('/',userRoute)
app.use('/v1/api/books',bookRouter)

const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`[server] server is listening on ${8000} port`);
    
})