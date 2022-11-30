import { connectToDatabase } from "../../libs/mongodb";

const handler = async (req, res) => {
    console.log("connecting...");

       /*
    try {
        const { db } = await connectToDatabase();
        const users = await db.collection("users").find({}).toArray();
        res.status(200).json({ message: "OK", data: users });
    } catch (err) {
        console.log(err);
        res.status(400).json({ message: "Error connecting to db" + err })
    }
    */
}

export default handler;