import mongoose, { Document, Schema } from "mongoose";

interface Product extends Document {
  name: string;
  price: number;
  description : string;
  seller_id : mongoose.Types.ObjectId;  
}

const productSchema : Schema<Product> = new Schema({
    name  : {
        type : String,
        required : [true,"Required field"]
    },
    price : {
        type : Number,
        required : [true,"Required field"]
    },
    description : {
        type : String,
        required : [true,"Required field"]
    },
    seller_id : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "Users"
    }

})

const productModel = mongoose.model("products", productSchema);

export default productModel;
