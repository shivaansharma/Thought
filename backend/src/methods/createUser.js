import userModel from "../schema/user.schema.js"
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const createUser = async function (req,res){
    const {name,username,password,email} = req.body
    if(!name){
        res.status(400).json({err:"name not found"})
    }
    if(!username){
        res.status(400).json({err:"username not found"})
    }
    if(!password){
        res.status(400).json({err:"password not found"})
    }
    if(!email){
        res.status(400).json({err:"email not found"})
    }
   try {
    const user = new userModel({
        name,
        username,
        password,
        email
    })
    await user.save()
    const token = jwt.sign(username,'babu laal batak chod');
    res.status(200).json({message : "user created succesfully",token:token})
   } catch (error) {
      res.status(400).json({err:"error in creating user",detail : error.message})
   }
}
export const login =async function(req,res){
    const {password,username}= req.body
    try {
        const user = await userModel.findOne({username:username});
        if(!user){
            throw new Error("user not found")
        }
        const isPass = await bcrypt.compare(password,user.password);

        if(!isPass){
            throw new Error("password incorrect")
        }
        const token = jwt.sign(username,'babu laal batak chod');
        res.status(200).json({message:"login sucessfull",token:token})
        
    } catch (error) {
        res.status(400).json({message:"trouble in logging in",err:error.message})
    }
}