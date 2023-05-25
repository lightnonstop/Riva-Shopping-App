const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendEmail = asyncHandler(async (data, req, res) => {
    let transporter = nodemailer.createTransport({
      auth: {
        user: process.env.MAIL_ID, 
        pass: process.env.MP, 
      },
      service: "gmail",
    });

    const mailOptions = {
        from: '"Hey👻" <abc@gmail.com>',
        to: data.to,
        subject: data.subject,
        text: data.text,
        html: data.htm
    }

    transporter.sendMail(mailOptions, (e, info) => {
        if (e) console.log(e);
        else console.log("mail sent: " + info.response);
    })
});

module.exports = sendEmail;
