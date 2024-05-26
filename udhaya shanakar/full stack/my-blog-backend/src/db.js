import { MongoClient } from "mongodb"

let db;

async function connectToDb(cb){
    const client = new MongoClient('mongodb+srv://udhaya1208aravind:Udhaya123@cluster0.xn7yah2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    await client.connect();
    db = client.db("react-blog-db");
    cb()
}

export {db,connectToDb}