
const express = require('express'),
  multer = require('multer'),
  upload = multer({ dest: 'uploads/' }),
  port = process.env.PORT || 3000;

const app = express();


app.listen(port, () => {
  console.log("Server is listening on:", port);
})


