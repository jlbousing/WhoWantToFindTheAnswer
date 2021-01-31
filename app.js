var express = require("express");
var app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/static'));


app.listen(PORT, () => {
    console.log("sirviendo app en puerto 3000");
});