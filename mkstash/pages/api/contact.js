import { connectToDatabase } from "../../libs/mongodb";

async function handler(req, res){

    if(req.method !== 'POST') return

    const {fname, lname, email, contactnum, message} = req.body;

    const { db } = await connectToDatabase();
    const collection = db.collection("feedback");
    const result = await collection.insertOne({fname, lname, email, contactnum, message});

    res.status(200).json({ message: "is invalid!"});

}

export default handler;