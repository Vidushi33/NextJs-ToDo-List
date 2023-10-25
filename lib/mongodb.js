import mongoose from "mongoose";

const ConnectToMongoDb = async() => {
    try{
       await mongoose.connect(process.env.MONGODB_URI)
        console.log("CONNECTION ESTABLISHED")
    } catch(error){
        console.log(error)
    }
}

export default ConnectToMongoDb