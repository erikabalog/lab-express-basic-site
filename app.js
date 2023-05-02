const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public")); 

app.get('/about', (req, res) => {
  res.sendFile(__dirname + "/views/about.html");
})

app.get('/home', (req, res) => {
  res.sendFile(__dirname + "/views/home.html");
})

app.get('/Cakes', (req, res) => {
  res.sendFile(__dirname + "/views/Cakes.html");
})

app.get('/fish', (req, res) => {
  res.sendFile(__dirname + "/views/fish.html");
})

app.get('/meat', (req, res) => {
  res.sendFile(__dirname + "/views/meat.html");
})

app.get('/madeByJoshy', (req, res) => {
  res.sendFile(__dirname + "/views/madeByJoshy.html");
})

app.get('/kids', (req, res) => {
  res.sendFile(__dirname + "/views/kids.html");
})

app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
})
