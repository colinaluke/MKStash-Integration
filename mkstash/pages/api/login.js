import { connectToDatabase } from "../../libs/mongodb";

const handler = async (req, res) => {
    const { body: { email, password }, method } = req;

    if (method.toUpperCase() !== "POST") {
        res.status(405).json({ message: "Method is not allowed" })
    } else {
        const { db } = await connectToDatabase();
        const users = await db.collection("users").find({ email: email }).toArray();
        users.length > 0 ?
            users[0].password === password ?
                res.status(200).json({ message: "Successully logged in", err: 0 })
                : res.status(200).json({ message: "Invalid password", err: 1 })
            : res.status(200).json({ message: "User not found", err: 1 })
    }
}

export default handler;