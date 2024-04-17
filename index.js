const express = require('express');
const fs = require('fs')

const productRoute = require('./routes/productRoute')
const app =express();
const port =9000
const home = fs.readFileSync('./index.html', "utf-8")
const about = fs.readFileSync('./pages/about.html', "utf-8")
const contact = fs.readFileSync('./pages/contact.html', 'utf-8')
const testimonial = fs.readFileSync('./pages/testimonial.html', 'utf-8')


app.get("/",(req, res)=>{
    res.send(home)
})
// app.get("/contact",(req, res)=>{
//     res.send(contact)
// })
// app.get("/testimonial",(req, res)=>{
//     res.send(testimonial)
// })
// app.get("/about",(req, res)=>{
//     res.send(about)
// })
// using product route
app.use(productRoute)
// server will now handle json data
app.use(express.json())

app.listen(port,()=>{
    console.log(`sever started succesfully.click http://localhost:${port} to open website`)
})