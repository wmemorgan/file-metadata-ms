
const express = require('express'),
  multer = require('multer'),
  upload = multer({ dest: 'uploads/' }),
  port = process.env.PORT || 3000;

const app = express();

app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', (req, res) => {
  res.sendFile(process.cwd() + '/views/index.html');
})

app.post('/uploads', upload.single('fileUpload'), async (req, res) => {
  const data = req.file;
  console.log(data);
  try {
    console.log("File uploaded successfully")
    res.send("File uploaded successfully")
    // res.send({ filename: data.originalname, size: data.size});
  } catch (err) {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log("Server is listening on:", port);
})


