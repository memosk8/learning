import { createTransport } from 'nodemailer';

var transporter = createTransport({
  service: 'gmail',
  auth: {
   user: 'memolopez9363@gmail.com',
   pass: ''
 }
});

var mailOptions = {
  from: 'memolopez9363@gmail.com',
  to: 'memoloco12@hotmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// multiple receivers

var mailOptions = {
   from: 'memolopez9363@gmail.com',
   to: 'memoloco12@hotmail.com, anotherReceiver@email.com',
   subject: 'Sending Email using Node.js',
   text: 'That was easy!'
 };

 // send HTML

 var mailOptions = {
   from: 'youremail@gmail.com',
   to: 'myfriend@yahoo.com',
   subject: 'Sending Email using Node.js',
   html: '<h1>Welcome</h1><p>That was easy!</p>'
 }