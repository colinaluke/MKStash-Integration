import { connectToDatabase } from "../../lib/mongodb";

async function handler(req, res){

    if(req.method !== 'POST') return

    require('dotenv').config();
    const {fname, lname, email, contactnum, message} = req.body;
    
    let nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
        },
        secure: true,
    });

    const { db } = await connectToDatabase();
    const collection = db.collection("feedback");
    const result = await collection.insertOne({fname, lname, email, contactnum, message});

    const mailData = {
        from: process.env.EMAIL, 
        to: process.env.EMAIL, 
        subject: `Feedback From ${fname} ${lname}`, 
        html:
            `
            <p> ${message} </p>
            <hr/>
            <h2>${fname} ${lname}</h2>
            <p>${email}
            <br/>
            ${contactnum} </p>
        `
    }
    
    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
      })


    res.status(200).json({ message: "Success!"});

}

export default handler;