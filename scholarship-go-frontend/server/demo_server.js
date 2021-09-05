const express = require('express');
const cors = require('cors')
const app = express();
const fileUpload = require("express-fileupload")
const morgan = require("morgan")


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan("dev"))

app.use(fileUpload({
  createParentPath: true
}))

app.use('/login', (req, res) => {
    debugger
  res.send({
    token: 'test123'
  });
});

app.post("/file", async (req, res) => {
  try {
    if(!req.files){
      res.send({
        status: false,
        message: "No files"
      })
    } else {
      const {file} = req.files

      file.mv("./uploads/" + file.name)

      res.send({
        status: true,
        message: "File is uploaded"
      })
    }
  } catch (e) {
    res.status(500).send(e)
  }
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));
 

 