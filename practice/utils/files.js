

var fs = require("fs");
data ="Private key : asdfgjklkjhgfdsasdfghjknbvcxsrhjnbvc";
fs.writeFile("./test.utc", data, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 