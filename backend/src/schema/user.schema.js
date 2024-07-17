import mongoose from "mongoose";
import ThoughtModel from "./Thought.schema.js";
import bcrypt from "bcrypt"

const { Schema } = mongoose;

const userSchema = new Schema(
  {     
    avatar : {
      type : String,
    },
    email : {
      type : String,
      required: true,
      unique : true
    },
    password : {
      type : String,
      required : true
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique : true
    },
    thoughts:{
        list :  [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "Thought", 
            },
          ],
    },
    comrads:{
      list :  [
            {
              type: mongoose.Schema.Types.ObjectId,
              ref: "user", 
            },
          ]
    }
  },
  {
    timestamps: true,
  }
);
userSchema.pre('save',async function(next){
  try {
    if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password,10)
    }
    next()
  } catch (error) {
    next (error)
  }
})

const userModel = mongoose.model("user", userSchema);

export default userModel;
