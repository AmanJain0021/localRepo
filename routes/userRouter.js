const express=require('express')
const {getUser,register}=require('../controller/userController')

const userRoute=express.Router();

userRoute.post('/register',register)
userRoute.get('/get-user',getUser)

module.exports={userRoute}