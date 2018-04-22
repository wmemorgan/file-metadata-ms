
const express = require('express'),
  multer = require('multer'),
  upload = multer({ dest: 'uploads/' }),
  port = process.env.PORT || 3000;

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
})

app.listen(port, () => {
  console.log("Server is listening on:", port);
})


