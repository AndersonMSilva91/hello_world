"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 3000;
app.get('/', function (request, response) {
    response.send('You have to say Hellow world');
});
app.get('/bsm', function (request, response) {
    response.send('You must be persistence!!!<br>' +
        '<br>You must be a responsable person!!!<br>' +
        '<br>You must have future orientation!!!<br>' +
        '<br>You must have mentality of growth!!<br>' +
        '<br>You must have a nice work in team!!<br>' +
        '<br>You must have attention on the details!!<br>' +
        '<br>You must be a proactivity person!!<br>' +
        '<br>You have to be communicative!!');
});
app.get('/Week', function (request, response) {
    response.send('Data Base and API');
});
app.listen(port, function () {
    console.log("Server is running at port ".concat(port, "!"));
});
