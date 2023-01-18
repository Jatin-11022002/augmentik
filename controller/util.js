const content = require("../model/content");

var nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  console.log(req.body);
  //let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    // host: "smtp.ethereal.email",
    // port: 587,
    // secure: false, // true for 465, false for other ports
    service: "gmail",
    auth: {
      user: "jatinramchandani15@gmail.com", // generated ethereal user
      pass: "kzogenchnunwurfn", // generated ethereal password
    },
  });

  var mailOptions = {
    from: "Augmentik@gmail.com",
    to: req.body.email,
    subject: "Mail received",
    text: "Thank you for sending mail",
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  let record = await content.find({});
  record = record[0];
  record.contactUs.push(req.body);
  delete record._id;
  console.log(record);
  record = content.update(record, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.send({ msg: "received" });
};

const updateContent = (req, res) => {
  console.log(req.body);
  let record = content.update(req.body, (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.log(res);
    }
  });
  res.json({ msg: "received" });
};

const getData = async (req, res) => {
  let record = await content.find({});
  record = record[0];
  res.json({ data: record });
};

module.exports = { sendMail, updateContent, getData };
