import { connectToDatabase } from "../../lib/mongodb";
import jwt from 'jsonwebtoken';

const handler = async (req, res) => {
    const { db } = await connectToDatabase();
    const { email } = req.body;
    const { method } = req;
    const name = process.env.NAME
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const token = jwt.sign({ email: email }, process.env.SECRET_KEY, {
        expiresIn: '1h'
    });

    const passwordResetToken = {
        token,
        email: email,
        createdAt: new Date(),
        used: 0
    };
    
    if (method.toUpperCase() !== "POST") {
        res.status(405).json({ message: "Method is not allowed" })
    } else {
        const users = await db.collection("users").find({ email: email }).toArray();
        if(users.length > 0) {
            let transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: process.env.EMAIL, // generated ethereal user
                    pass: process.env.PASSWORD, // generated ethereal password
                },
            });

            // save reset token to database
            const passwordResetTokens = db.collection('passwordResetTokens');
            await passwordResetTokens.insertOne(passwordResetToken);
            // send mail with defined transport object

            const resetLink = `http://localhost:3000/reset?token=${token}`;

            await transporter.sendMail({
                from: process.env.EMAIL, // sender address
                to: email, // list of receivers
                subject: `Reset Your Password`, // Subject line
                html:
                    `
                <p> Hi there! </p>
                <p>Click <a href="${resetLink}">here</a> to reset your password.</p>
                <p>If you did not request a password reset, you can safely ignore this email.</p>
                <p>Best regards,</p>
                <p>${name}</p>
            `
            }, (err, info) => {
                if (err) {
                    console.log(err)
                    console.log(info)
                    res.status(400).json({ message: "Error sending email. Please try again later.", err: 1 })
                } else
                    res.status(200).json({ message: "Email sent successfully.", err: 0 })
            });
        } else {
            res.status(200).json({ message: "Email not found", err: 1 })
        }
    }
}

export default handler;