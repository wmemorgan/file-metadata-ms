
const express = require('express'),
  multer = require('multer'),
  // upload = multer({ dest: 'uploads/'}),
  maxSize = 200,
  storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, 'uploads/')
    },
    filename: (req, file, callback) => {
      let fileUpload = file.fieldname;
      callback(null, fileUpload)
    }
  }),
  upload = multer({storage: storage, limits: { fileSize: 2000000 }}),
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
    console.log({ filename: data.originalname, size: data.size });
    res.send({ filename: data.originalname, type: data.mimetype, size: data.size});
  } catch (err) {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log("Server is listening on:", port);
})


