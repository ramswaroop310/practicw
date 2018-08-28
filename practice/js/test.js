

define([
    'require',
    'test'
], function() {
    var page = 1;
    
    document.getElementById("btn").addEventListener("click", function(){
        var ourRequest = new XMLHttpRequest();
        ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+page+'.json');
        ourRequest.onload = function(){
            var ourdata  = JSON.parse(ourRequest.responseText);
        console.log(ourdata[0]);
        page++;
          };
        ourRequest.send();
    });
   
    function myfunction(data){
        var htmlstring = "";
        for(i = 0; i < data.legth; i++){
            htmlstring+= "<p>" + data[i].name + "is a " + data[i].species + "</p>";
        }
        document.getElementById('animal-info').insertAdjacentHTML('beforeend', htmlstring);
       
       };

}); 
/*
define(['require' , 'crypto-js'],
function(){
    var CryptoJS = require("crypto-js");

    var data = [{id: 1}, {id: 2}]
    
    // Encrypt
    var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123');
    
    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(ciphertext.toString(), 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    
    console.log(decryptedData);
    
}
);




*/


/*
const wallet = require("eth-wallet-light");

const password = 'mypassword' // this should be a real password

var keystore =  new wallet.Keystore().initializeFromEntropy(entropy, password)
console.log('Address: ', keystore.getAddress())

var messageHash = '0x9c22ff5f21f0b81b113e63f7db6da94fedef11b2119b4088b89664fb9a3cb658'
var signature = wallet.concatSignature(keystore.signMessageHash(messageHash, password))
console.log('Signature:', signature)
*/