import mongoose from "mongoose";
import { dbName } from "./dbname.js";
import dotenv from "dotenv"
dotenv.config()
const url ="mongodb+srv://shivaansharma16:Shivaan1234@thoughtsbackend.8grmpdi.mongodb.net/?retryWrites=true&w=majority&appName=ThoughtsBackend"
console.log(url)
const dbConnect = async ()=>{
   try {
        const conObj= await mongoose.connect(`${url}/${dbName}`)
        console.log("mongo db connected")
   } catch (error) {
       throw new Error(error)
   }
}
export default dbConnect