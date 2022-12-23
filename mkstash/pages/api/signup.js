import { connectToDatabase } from "../../lib/mongodb";
import bcrypt from 'bcrypt'

async function handler(req, res){

    if(req.method !== 'POST') return

    const {fname, lname, email, contactnum, gender, pass} = req.body;

    const { db } = await connectToDatabase();
    const collection = db.collection("users");
    const saltRounds = 10;

    const password = await bcrypt.hash(pass, saltRounds);
    const result = await collection.insertOne({fname, lname, email, contactnum, gender, password});

    res.status(200).json({ message: "Success!"});


}

export default handler;