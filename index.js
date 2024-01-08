require("dotenv").config();
const express=require("express")
const app=express();

const port =3000;
const githubData={
    "name":"sandeep",
    "college":"IIIT Ranchi"
}
const  stu_data={
    "name":"Sandeep Kumar",
    "Roll":1113,
    "Branch":"CSE"
}
app.get("/",(req,res)=>
{
    res.send("starting with chai or code");
})

app.get("/login",(req,res)=>
{
    res.send("login here with code");
})
app.get("/studata",(req,res)=>
{
    res.send(stu_data);
})
app.get("/github",(req,res)=>
{
    res.json(githubData);
})
app.listen(process.env.PORT,()=>
{
    console.log("connection sucesss");
})