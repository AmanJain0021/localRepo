const register=(request,response)=>{
    try{

    }catch(error){
        return response.status(500).json({errorMesage:'Internal server error'})
    }
}

const getUser=(request,response)=>{
    try{
  return response.status(200).json({ success: true, statusCode: 200, message: 'User get successfully' })
    }catch(error){
        return response.status(500).json({errorMesage:'Internal server error'})
    }
}


module.exports={register,getUser}