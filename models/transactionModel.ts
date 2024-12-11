import mongoose, { Document, mongo, Schema } from "mongoose";

interface Transaction extends Document {
    amount : number;
    createdAt : Date;
    order_id : mongoose.Types.ObjectId;
    user_id : mongoose.Types.ObjectId;
}

const transactionSchema : Schema<Transaction> = new Schema({
    amount : {
        type : Number,
        required : [true,"Required field"],
        validate : ((amount : number) => amount > 0)
    },
    createdAt : {
        type : Date,
        default : () => Date.now()
    },
    order_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "orders",
        required : [true,"Required field"],
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users",
        required : [true,"Required field"],
    }
})

const transactionsModel = mongoose.model("transactions", transactionSchema);

export default transactionsModel;