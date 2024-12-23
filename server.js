
require('dotenv').config()
const express = require("express")
const app = express();


app.get('/shubham', (req, res)=>{
   res.send("<h1>shubham is 929 at codeforces</h1>")
})

app.get('/yashavi', (req, res)=>{
  res.send("ke haal he");
})

app.get('/abhinav', (req, res)=>{
  res.send("hello 2025")
})
app.get('/bca', (req, res)=>{
  res.send("tu bhar nikal madarchod")
})

app.listen(
  process.env.PORT, ()=>{
  console.log("Ha Ji")
})