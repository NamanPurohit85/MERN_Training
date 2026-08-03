// console.log("This is First and Last file");

// const naman = require("fs");

// naman.writeFile("output.txt", "Hello World", (err) => {
//   if (err) {
//     console.error("Error writing to file", err);
//   } else {
//     console.log("File Written Successfuly");
//   }
// });

// const http = require("http");

// function listener(req, res) {
//   res.end("Hello world");
// }

// http.createServer(listener());

// const { log } = require("console");
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.end("Hello Naman");
//   console.log(req);
// });

// server.listen(3000, () => console.log("Server Started at 3000 port"));

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.end("Hello Naman");
});

app.get("/user", (req, res) => {
  // res.send(req.method); // GET
  // res.send(req.url); // /user
  res.send(req.headers); // Request headers
});

app.listen(port, () => {
  console.log(`Server started at Port ${port}`);
});