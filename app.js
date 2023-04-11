const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
// import {Html5QrcodeScanner} from "html5-qrcode"

// To use Html5Qrcode (more info below)
// import { Html5QrcodeScanner } from "https://unpkg.com/html5-qrcode?module";
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/", function (req, res) {
  console.log('v1');
  res.sendFile(__dirname + "/v1.html");
})

app.post("/compose" , function(req, res){
  console.log(req.body.paragraph);
  res.redirect("/");
})
// app.get("/v1", function (req, res) {
//   res.sendFile(__dirname + "/v1.html");
// })

app.get("/v2", function (req, res) {
  res.sendFile(__dirname + "/v2.html");
})
//TODO

app.listen(3000, function () {
  console.log("Server started on port 3000");
});

// const scanner = new Html5QrcodeScanner('reader', {
//   qrbox: {
//     width: 250,
//     height: 250,
//   },
//   fps: 20,
// });
// scanner.render(success, error);

// function success(result) {
//   console.log(result);
//   var s = typeof result;
//   console.log(s);
//   document.getElementById('result').innerHTML = `
//     <h2>Success!</h2>
//     <p><a href="${result}">${result}</a></p>
//   `;
//   scanner.clear();
//   document.getElementById('reader').remove();
// }

function error(err) {
  console.error(err);
}
