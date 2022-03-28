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
            document.getElementById("result").innerHTML = this.responseText;
        }
    }

    http.open("POST", "/ajaxmessage", true);
    http.setRequestHeader("Content-type", "application/json");
    var data = {
        username: username,
        country: country,
        message: message
    };
    http.send(JSON.stringify(data));
}