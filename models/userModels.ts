import mongoose, { Document, Schema } from "mongoose";

interface User extends Document {
    username : string;
    email : string;
    password : string;
    createdAt : Date;
    refreshToken : string | null;
    isSeller : boolean;
}

const userSchema : Schema<User> = new Schema({
    username : {
        type : String,
        lowercase : true,
        required : [true,"Required field"]
    },
    email : {
        type : String,
        required : [true,"Required field"]
    },
    password : {
        type : String,
        required : [true,"Required field"]
    },
    createdAt : {
        type : Date,
        default : () => Date.now()
    },
    isSeller : {
        type : Boolean,
        default : false
    },
    refreshToken : {
        type : String,
        default : null
    }
})

const userModel = mongoose.model("Users",userSchema);

export default userModel;