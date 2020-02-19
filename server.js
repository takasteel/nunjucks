const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

server.use(express.static('public'));

server.use(express.urlencoded({ extended: true }));

const users = [
  {
    name: "user1",
    age: 1
  },
  {
    name: "user2",
    age: 2
  },
  {
    name: "user3",
    age: 3
  },
  {
    name: "user4",
    age: 4
  },
]




nunjucks.configure('./', {
  express: server,
  noCache: true
});

server.get('/', (req, res) => {
  res.render("index.html", { users });
});

server.post('/', (req, res) => {
  const { name, age } = req.body
  users.push({ name, age });
  return res.redirect("/");
});

server.listen(3333);