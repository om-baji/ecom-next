import mongoose from "mongoose";

type ConnectionString = {
    isConnected? : number
}

const connection : ConnectionString = {};

export const connectDb = async () => {

    try {

        if(connection.isConnected) {
            console.log("Already connected to DB")
            return
        }

        const db = await mongoose.connect(process.env.MONGODB_URI as string)

        connection.isConnected = db.connections[0].readyState

        console.log("Connected to DB")

        
    } catch (error) {
        console.log("Connection to DB Failed", error)   
        process.exit(1)    
    }
}