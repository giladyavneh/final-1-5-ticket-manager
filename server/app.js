const express = require('express');
const app = express();
const fs=require("fs")

app.use(express.json())
const path=process.env.TICKETS_VARIABLE||"data.json"

app.get("/api/tickets",(req,res)=>{
    let tickets=JSON.parse(fs.readFileSync(path))
    let searchWord=req.query.searchText;
    let regex=new RegExp(searchWord,'i');
    let outcome=tickets.filter(ticket=>regex.test(ticket.title))
    res.send(outcome)
})

module.exports = app;