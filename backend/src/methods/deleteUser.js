import userModel from "../schema/user.schema.js";

export const deleteUser = async function (req,res){
    const {username}= req.params;
    try {
        if(!username) throw new Error("username not found")
        
            const user = userModel.findOne({username:username});
            if(!user ) throw new Error("trouble in getting user");

           await userModel.deleteOne({_id:user._id});

           res.send(200).json({message:"user sucessfully deleted"});

    } catch (error) {
        res.status(400).json({message:"error in deleting",err:error.message})
    }
}