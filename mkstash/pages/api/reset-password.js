import { connectToDatabase } from "../../lib/mongodb";
import bcrypt from 'bcrypt'

const handler = async (req, res) => {
    const { body: { token, pass }, method } = req;
    const { db } = await connectToDatabase();
    const saltRounds = 10;
    const passwordResetTokens = db.collection('passwordResetTokens');
    const users = db.collection('users');
    const tokenFilter = {'token': {$eq: token}, 'used': {$ne: 1}}
    const updateTok = {'$set': {'used' : 1}}
    const result = await passwordResetTokens.findOneAndUpdate(tokenFilter, updateTok)
    if(!result) {
        res.status(400).json({ message:'Invalid token', err: 1 })
    } else {
        console.log(result)
        bcrypt.genSalt(saltRounds, function(err, salt) {
            bcrypt.hash(pass, salt, async function(err, hash) {
                const userFilter = {'email': {$eq: result.value.email}}
                const updateUser = {'$set': {'pass': hash} }
                const resUser = await users.findOneAndUpdate(userFilter, updateUser)
                if(resUser) {
                    res.status(200).json({ message:'Successfully changed password', err: 0 })
                } else {
                    res.status(400).json({ message:'Error updating password', err: 1 })
                }
            });
        });

    }
}

export default handler