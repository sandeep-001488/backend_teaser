require("dotenv").config();
const express=require("express")
const app=express();

const port =3000;

app.get("/",(req,res)=>
{
    res.send("starting with chai or code");
})

app.get("/login",(req,res)=>
{
    res.send("login here with code");
})
app.listen(process.env.PORT,()=>
{
    console.log("connection sucesss");
})