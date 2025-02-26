
const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  service:'gmail',
  
    auth: {
      user:"ranusharma14112003@gmail.com",
      pass: "ilbv nvxu nbkc kmgs"
      
    },
  });
const sendEmail = (to, subject, text) => {
    const mailOptions = {
        from: 'ranusharma14112003@gmail.com',
        to :to,
        subject:subject,
        text:text
    };
    

    return transporter.sendMail(mailOptions);
    
};
const sendSMS = (body,phoneNumber) => {
    const accountSid = "AC62d87b23c3defbde5bbdc67f607c5615";
    const authToken = "57d74b6d6ac72f48a1a3021e22d628e8";
    const client = require("twilio")(accountSid, authToken);
    
    client.messages
      .create({
        body: body ,
        from: "+17604372860",
        to:phoneNumber,
      }) 
      .then((message) => console.log(message.sid));
  };
  

 


module.exports = { sendEmail, sendSMS };