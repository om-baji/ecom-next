import mongoose, { Document, Schema } from "mongoose";

type orderStatus = "pending" | "done";

interface Order extends Document {
    total_price : number;
    orderedAt : Date;
    user_id : mongoose.Types.ObjectId;
    products : mongoose.Types.ObjectId[];
    status : orderStatus;
    isPaid : boolean;
}

const orderSchema : Schema<Order> = new Schema({
    total_price : {
        type : Number,
        required : [true,"Required field"]
    },
    orderedAt : {
        type : Date,
        default : () => Date.now()
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : [true,"Required field"],
        ref : "Users"
    },
    products : {
        type : Array(mongoose.Schema.Types.ObjectId),
        required : [true,"Required field"],
        ref : "products"
    },
    status : {
        type : String,
        enum : ["pending", "done"],
        default : "pending"
    },
    isPaid : {
        type : Boolean,
        default : false
    }
})

const orderModels = mongoose.model("orders",orderSchema);
export default orderModels;