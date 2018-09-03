     /*var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function(){
        var ourdata = JSON.parse(ourRequest.responseText);
        console.log(ourdata[0]);
       
    };
    ourRequest.send();
*/
/*

define(['fs'], function(){
    var fs = require('fs');
fs.writeFile("./test.utc", "Hey there!", function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 
})

*/


/*

define(['fs'], function(){
    var fs = require("fs");
var myJson = {
    key: "myvalue"
};
fs.writeFile( "filename.json", JSON.stringify( myJson ),  );
myJson = require("./filename.json");
console.log(myJson);
});
*/

/*
$(document).ready(function () {
    $("#btn").click(function () {
      //  var data = $("#animal").val();
       // var key = $("#secretkey").val();
        var encrypted = CryptoJS.AES.encrypt("ramswaroop", "key");
        console.log(encrypted);
        //$("#encryptedtxt").text(encrypted);
    });

    $("#decryptbtn").click(function(){
        var encrypted = $("#encryptedtxt").text();
        var key = $("#secretkey").val();
        try
        {
            var data = CryptoJS.AES.decrypt(encrypted,key);
            console.log(data);
         $("#decryptedTxt").text(data.toString(CryptoJS.enc.Utf8));
        } 
        catch (e)
        {
            alert("Error:" + e.message);		
        }
    });
    
});
*/



function encryption() {
    var data = document.getElementById("animal").value;
    var secretkey = document.getElementById("secretkey").value;
    var encrypted = CryptoJS.AES.encrypt(data, secretkey);
    //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

    var decrypted = CryptoJS.AES.decrypt(encrypted, secretkey);
    //4d657373616765


    document.getElementById("demo1").innerHTML = encrypted;
    document.getElementById("demo2").innerHTML = decrypted;
}
function decryption() {
    var Data = document.getElementById("animal").value;
    var secretkey = document.getElementById("secretkey").value;
    var encrypted = CryptoJS.AES.encrypt(Data, secretkey);
    var password = document.getElementById("password").value;
    var decryptedTxt = CryptoJS.AES.decrypt(encrypted, password);
    document.getElementById("demo3").innerHTML = decryptedTxt.toString(CryptoJS.enc.Utf8);
}
