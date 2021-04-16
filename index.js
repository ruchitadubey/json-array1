const express = require('express')
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.post('/testjson', (req, res) => {

  console.log(req.body.siblings.length);
  let n =req.body.siblings.length;

  

  res.status(200).send({
    fn: req.body.siblingss,
    "msg": `your siblings count is ${n} `
    

  });








})
app.listen(3000)