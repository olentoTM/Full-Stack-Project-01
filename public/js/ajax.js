var button = document.getElementById("button02");

//Lisätään Submit nappiin tapahtumakuuntelija joka aktivoi funktion gatherData.
button.addEventListener("click", gatherData);

function gatherData() {
    var username = document.getElementById("username").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;

    console.log("The following data has been submitted: \n\nUsername: " + username + " \nCountry: " + country + " \nMessage: " + message);

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            var returnData = JSON.parse(this.responseText);
            parseData(returnData);
        }
    }

    http.open("POST", "/ajaxmessage", true);
    http.setRequestHeader("Content-type", "application/json");
    //Muutetaan lomakkeesta haettu data JSON-muotoon
    var data = {
        Username: username,
        Country: country,
        Message: message
    };
    console.log(data);
    //Lähetetään data palvelimelle. Ennen lähettämistä data muutetaan merkkijonoksi.
    http.send(JSON.stringify(data));
}

//Tässä funktiossa käydään läpi palvelimen palauttama data ja muutetaan se HTML table muotoon.
function parseData(returnData){
    var table;
    for(var i = 0; i < returnData.length; i++){
        table += "<tr><td>" + returnData[i].Username + "</td><td>" + returnData[i].Country + "</td><td>" + returnData[i].Message + "</td><tr>";
    }
    document.getElementById("result").innerHTML = table;
}