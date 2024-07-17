import jwt from 'jsonwebtoken'

export const auth = function (req,res,next){
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];

   if(!token){
    res.status(400).json({message:"you don't have access"})
   }
   jwt.verify(token,'babu laal batak chod',(err,username)=>{
    if(err) return res.status(403).json({err:err.message})
        req.username = username;
        
       
    next()
   })

}