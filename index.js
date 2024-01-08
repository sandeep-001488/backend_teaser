require("dotenv").config();
const express=require("express")
const app=express();

const port =3000;
const githubData={
    "name":"sandeep",
    "college":"IIIT Ranchi"
}

app.get("/",(req,res)=>
{
    res.send("starting with chai or code");
})

app.get("/login",(req,res)=>
{
    res.send("login here with code");
})
app.get("/github",(req,res)=>
{
    res.json(githubData);
})
app.listen(process.env.PORT,()=>
{
    console.log("connection sucesss");
})