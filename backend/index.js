import express from "express"
import dotenv from "dotenv"
import dbConnect from "./src/db/dbConnect.js"
import userRoutes from './src/routes/userRoutes.js'
import cors from 'cors'
const app = express()
dotenv.config()
console.log(process.env.PORT)
app.use(express.json())
app.use(cors())
app.use('/api',userRoutes)
const port = 4000
dbConnect()
.then(()=>{
    app.listen(port,()=>{
        console.log("app is running on port : ",port)
    })
}).catch((err)=>{
    throw err
})

console.log(port)

