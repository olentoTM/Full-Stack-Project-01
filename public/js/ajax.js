var button = document.getElementById("button02");

//Lisätään Submit nappiin tapahtumakuuntelija joka aktivoi funktion gatherData.
button.addEventListener("click", gatherData);

function gatherData() {
    var username = document.getElementById("username").value;
    var country = document.getElementById("country").value;
    var message = document.getElementById("message").value;
    var date = new Date();
    console.log(date);

    console.log("The following data has been submitted: \n\nUsername: " + username + " \nCountry: " + country + " \nMessage: " + message);

    var http = new XMLHttpRequest();

    http.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200){
            console.log("Data received!");
        }
    }

    http.open("POST", "/ajaxmessage", true);
    http.setRequestHeader("Content-type", "application/json");
    //Muutetaan lomakkeesta haettu data JSON-muotoon
    var data = {
        username: username,
        country: country,
        date: date,
        message: message
    };
    console.log(data);
    //Lähetetään data palvelimelle. Ennen lähettämistä data muutetaan merkkijonoksi.
    http.send(JSON.stringify(data));
    alert("Message successfully sent! Check the guestbook page for your message.")
}