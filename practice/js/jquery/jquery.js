$(document).ready(function () {
    $("#download").click(function () {
        
            var ourRequest = new XMLHttpRequest();
            ourRequest.open('GET', 'test.json');
            ourRequest.onload = function () {
                var ourData = JSON.parse(ourRequest.responseText);
                var mydata = ourData.privateKey;
                var data = mydata;
                var secretkey = document.getElementById("secretkey").value;
                var encrypted = CryptoJS.AES.encrypt(data, secretkey);
            
        var blob = new Blob([encrypted], { type: "text/plain ; charset = utf-8 " });

    
        saveAs(blob, "textfile.utc");
    };
    ourRequest.send();

    });
});

/*

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'test.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
       document.getElementById("demo1").innerHTML = ourData.privateKey;
    };
    ourRequest.send();
*/



  /*
       const crypto = require("crypto-js")
   var sha256 = crypto.createHash("sha256");
   sha256.update("ThisPassword", "utf8");//utf8 here
   var result = sha256.digest("base64");
   console.log(result); //d7I986+YD1zS6Wz2XAcDv2K8yw3xIVUp7u/OZiDzhSY=
   */
