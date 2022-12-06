const handler = async (req, res) => {
    const { email } = req.body;
    const name = process.env.NAME
    require('dotenv').config()
    let nodemailer = require('nodemailer')

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    await transporter.sendMail({
        from: process.env.EMAIL, // sender address
        to: email, // list of receivers
        subject: `Message From ${name}`, // Subject line
        html:
            `
            <p> Hi there! </p>
            <p> Open the link below to reset your password. </p>
            <p> - ${name} </p>
            <a href="#"> Reset here </a>
        `
    }, (err, info) => {
        if (err) {
            res.status(400).json({ message: "Error sending email. Please try again later."})
        } else
            res.status(200).json({ message: "Email sent successfully."})
    });
}

export default handler;