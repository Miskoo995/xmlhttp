// Inicijalizovanje  xmlhttp request method-e
var xhr = new XMLHttpRequest();

// xhr open, open connection 
xhr.open('GET', 'http://localhost:8000', true);

// XHR event listener onload
xhr.onload = function() {

    console.log(xhr.responseText)

};

//Zahtev poslat 

xhr.send(null);
// Napravi Post 
function makePost(data) {

    // XHR Post request, postavnljen header

    xhr.open("POST", 'http://localhost:8000', true);

    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //Prebacujemo u string poslat podatak 
    var json = { "title": data }
    xhr.send(JSON.stringify(json));
}


makePost('1111')