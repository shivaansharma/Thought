import { mongoose } from "mongoose";
import userModel from "./user.schema.js";
const { Schema } = mongoose;

const ThoughtSchema = new Schema ({
    image :{
        type : String
    },
    name :{
        type : String,
        required: true
    },
    topic : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    }
},
{
    timestamps : true
}
)
const ThoughtModel = mongoose.model('Thought',ThoughtSchema);

export default ThoughtModel