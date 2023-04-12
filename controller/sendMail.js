const nodeMailer = require("nodemailer");
require("dotenv").config();
let username = require('../controller/createUser/');
let userPassword = "abcds512";
// let userEmail = require("");

const sendMail = async (req, res) => {
  //using own email as a auth
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;
  try {
    const transporter = await nodeMailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: 'jewell.russel69@ethereal.email',
        pass: '9k8hPFWeQGW8K7pa52'
      },
    });
    // const transporter = await nodeMailer.createTransport({
    //   service: "gmail",
    //   type: "SMTP",
    //   host: "smtp.gmail.com",
    //   secure: true,
    //   auth: {
    //     user: "scoutnischal@gmail.com",
    //     pass: "kxvdnrtingowofls",
    //     // user : email,
    //     // pass : password
    //   },
    // });
    console.log(process.env.EMAIL, process.env.PASSWORD);
    let info = {
      from: '"Ankit 👻 ✔" <ankitmaharjan28@gmail.com>', // sender address
      to: "ankitmaharjan28@gmail.com", // list of receivers
      subject: `Security Alert!`, // Subject line
      text: `Hello Ankit  Successfully SignUp ✔`, // plain text body
      html: `<b>This is Your username and password Infromation:
                <ul>Username:${username} </ul>
                <ul>Password:${userPassword} </ul>
              </b>`, //html body  
    };

    transporter.sendMail(info, (err) => {
      if (err) {
        console.log("It has an error on sendMail", err);
      } else {
        console.log("Email Successfully Send");
        console.log("Message sent :%s", info.messageId);
        res.json(info);
      }
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = sendMail;