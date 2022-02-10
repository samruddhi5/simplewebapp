const m1=require("../Day1/module1")

//1. define express object
const express=require("express")
const app=express();

// for parsing the url 
const bodyparser=require("body-parser")

//2. define config setting


//3.define middle ware
app.use(bodyparser.urlencoded({extended:false})) // extended false will use query string module to parse url

//4. define routers
app.get("/",function (req,resp) {
    resp.sendFile("index.html",{root:__dirname}) // index.html is file name and root direname is location of file
  })

  // in form post method is used so here app.post is written
app.post("/submit_data",function (req,resp) {
  num1=req.body.num1;
  num2=req.body.num2;
  var result=m1.addition(num1,num2)
  num3=req.body.num3;
  var fact=m1.factorial(num3)
  resp.send("num1 "+ num1+ " + num2 "+ num2+" = "+result+ " fact of "+num3 +fact);
  // resp.send("factorial =" +fact)
})
//5. create and start server
app.listen(3000)
console.log("servre started at port 3000")