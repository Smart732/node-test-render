const express=require("express")
const cors=require("cors")
const app=express()
const Port=process.env.Port||4000
app.use(cors())
app.listen(Port,()=>console.log("server start"))
app.get("/",(req,res)=>{
    res.send("hello singhaniya test node ja app deploy on render ")
})