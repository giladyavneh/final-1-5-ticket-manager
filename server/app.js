const express = require("express");

const app = express();
const fs = require("fs");

app.use(express.json());

const path = process.env.TICKETS_VARIABLE || "data.json";
const tickets = JSON.parse(fs.readFileSync(path));

app.get("/api/tickets", (req, res) => {
  let tickets = JSON.parse(fs.readFileSync(path));
  let searchWord = req.query.searchText;
  let regex = new RegExp(searchWord, 'i');
  let outcome = tickets.filter(ticket => regex.test(ticket.title));
  res.send(outcome);
});

app.post('/api/tickets/:ticketId/done', (req, res) => {
  let id = req.params.ticketId;
  let tickets = JSON.parse(fs.readFileSync(path));
  let ticket = tickets.find(ticket => ticket.id === id);
  ticket.done = true;
  fs.writeFileSync("data.json", JSON.stringify(tickets));
  res.json(ticket)
});

app.post('/api/tickets/:ticketId/undone', (req, res) => {
  let id = req.params.ticketId;
  let tickets = JSON.parse(fs.readFileSync(path));
  let ticket = tickets.find(ticket => ticket.id === id);
  ticket.done = false;
  fs.writeFileSync("data.json", JSON.stringify(tickets));
});


module.exports = app;