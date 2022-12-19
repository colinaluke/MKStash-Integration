import { connectToDatabase } from "../../lib/mongodb";

const handler = async (req, res) => {
    const { db } = await connectToDatabase();
    const { body: { token }, method } = req;

    if (method.toUpperCase() !== "POST") {
        res.status(405).json({ message: "Method is not allowed" })
    } else {
        const filterTok = await db.collection("passwordResetTokens").find({ token: token }).toArray(); 
        if(filterTok.length > 0) {
            const currentTime = Date.now().valueOf() / 1000;
            const tokenTime = filterTok[0].createdAt.valueOf() / 1000;
            let timeDiff = currentTime / tokenTime;
            timeDiff = timeDiff / (1000 * 60 * 60);
            if(timeDiff > 1) {
                res.status(400).json({ msg:'Password reset token has expired', err: 1 })
            } else if(filterTok[0].used == 1) {
                res.status(400).json({ msg:'Password reset token has already been used', err: 1 })
            } else {
                res.status(200).json({ msg: token, err: 0 })
            }
        } else {
            res.status(400).json({ msg: "Password reset token is invalid", err: 1})
        }
    }
}

export default handler