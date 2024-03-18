var nodemailer = require("nodemailer");
//-----------------------------------------------------------------------------
export async function sendMail(subject: any, toEmail: any, otpText: any) {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "arjunthakur89096@gmail.com",
      pass: "xdqqeiyilswszsia",
    },
  });

  var mailOptions = {
    from: "arjunthakur89096@gmail.com",
    to: "arjun.thakur@thealphagency.com",
    subject: "subject",
    text: "otpText",
  };

  transporter.sendMail(mailOptions, function (error: string | undefined, info: any) {
    if (error) {
      throw new Error(error);
    } else {
      console.log("Email Sent");
      return true;
    }
  });
}