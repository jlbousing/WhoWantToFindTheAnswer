var express = require("express");
var app = express();

app.get("/",() => {
    console.log("hello uya");
});

app.listen(3000, () => {
    console.log("sirviendo app en puerto 3000");
});