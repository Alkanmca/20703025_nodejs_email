var nodemailer = require('nodemailer');

var gonderim = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: '20703025mehmetcelilalkan@gmail.com',
    pass: '33Mersin33'
  }
});

var mailAyarlari = {
  from: '20703025mehmetcelilalkan@gmail.com',
  to: 'hurol_aslan@mersin.edu.tr',
  subject: 'Nodejs test -e postası',
  text: 'Nodejs ile gönderildi!'
};

gonderim.sendMail(mailAyarlari, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email Gonderildi: ' + info.response);
  }
});