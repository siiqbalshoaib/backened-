import mongoose,{Schema} from "mongoose";

const userSchema = new Schema({
    username:{
        type: String,
        unique: true,
        lowerCase: true,
        required: true

    },
    email:{
        type: String,
        unique: true,

    },
    password:{
        type: String,
        
    }
})


export const User = mongoose.model("User", userSchema);