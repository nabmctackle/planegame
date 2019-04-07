var express = require('express');
var app = express();
app.use(express.static(__dirname+"/angular-app/dist/angular-app"))
app.listen(8000, function() {
    console.log("listening on port 8000");
})
app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angular-app/dist/angular-app/index.html"))
});