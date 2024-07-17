import ThoughtModel from "../schema/Thought.schema.js";
import userModel from "../schema/user.schema.js";


export const createThought = async function (req,res){
        const{name,topic,description} = req.body
        
        try {
            if(!name){
                throw new Error("name not found")
            }
            if(!topic){
                throw new Error ("topic not found")
            }
            if(!description){
                throw new Error("description not found")
            }
            const thought = new ThoughtModel({
                name,
                topic,
                description
            })
            await thought.save()
            const userName = req.username
            if(!userName) throw new Error("username not found");

            const user = await userModel.findOne({username:userName})

            if(!user) throw new Error("create user login or signup")
            
            user.thoughts.list.push(thought);
            console.log( user.thoughts.list.length)
            await user.save()
            
         
            res.status(200).json({message:"thought created sucessfully"})
        } catch (error) {
            res.status(400).json({message:"trouble in creating thought",err:error.message})
        }
}

export const getThought = async function (req, res){
    const thoughts = await ThoughtModel.find();
    try {
        if(!thoughts){
            throw new Error("no thoughts exist")
        }
        res.status(200).json({thoughts})
    } catch (error) {
        res.status(200).json({message:"trouble in getting thoughts",err:error.message})
    }
}