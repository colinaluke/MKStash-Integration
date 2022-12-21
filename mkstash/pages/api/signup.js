import { connectToDatabase } from "../../lib/mongodb";

async function handler(req, res){

    if(req.method !== 'POST') return

    const {fname, lname, email, contactnum, gender, pass} = req.body;

    const { db } = await connectToDatabase();
    const collection = db.collection("users");
    const result = await collection.insertOne({fname, lname, email, contactnum, gender, pass});

    res.status(200).json({ message: "Success!"});

}

export default handler;