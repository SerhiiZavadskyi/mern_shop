import mongoose from 'mongoose';

const connection = {};

async function connectDb(){
 const db =  await mongoose.connect(process.env.MONGO_SRV, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true
    });

    console.log('DB is connected');
    
    connection.isConnected = db.connections[0].readyState; 

}


export default connectDb;
