var express = require("express");
var app = express();
var fs = require("fs");
var port = process.env.PORT || 5000;
var bodyParser = require("body-parser");

//Resurssit (css, kuvat, JavaScript ja JSON tiedostot)
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/imgs", express.static(__dirname + "public/imgs"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/json", express.static(__dirname + "public/json"));

//EJS käyttöönotto
app.set("view engine", "ejs");

//Lähetetään kotisivu juureen
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

//pistetään guestbook.json tiedoston sisältö samannimiseen muuttujaan.
var guestbook = require("./public/json/guestbook");

//Lähetetään guestbook sivu sekä guestbook.json tiedoston sisällöt /guestbook reittiin. 
//guestbook.ejs sivun sisällä on funktio, jonka avulla JSON-tiedoston sisältö tulostetaan HTML tauluksi.
app.get("/guestbook", (req, res) => {
    res.render("guestbook.ejs", { posts: guestbook });
});

//Lähetetään /newmessage reittiin newmessage sivu.
app.get("/newmessage", (req, res) => {
    res.sendFile(__dirname + "/views/newmessage.html");
});

app.use(bodyParser.urlencoded({ extended: true }));

//Tässä kohtaa käsitellään newmessage sivun lomakkeesta saatu tieto.
app.post("/newmessage", (req, res) => {

    //Otetaan käyttöön viestejä varten oleva JSON tiedosto.
    var data = require("./public/json/newmessage.json");
    
    //Tuodaan lomakkeesta käyttäjänimi, maa sekä itse viesti.
    data.push({
        Username: req.body.username,
        Country: req.body.country,
        Message: req.body.message,
    });

    //muutetaan lomakkesta haettu data JSON-stringiksi.
    var JSONdata = JSON.stringify(data);

    //kirjoitetaan muutettu data JSON-tiedostoon.
    fs.writeFile("./public/json/newmessage.json", JSONdata, function (err, data) {
        if (err) throw err;
        console.log("Message has been saved to file!");
    });

    //Lopuksi vielä viesti käyttäjälle onnistuneesta lähetyksestä.
    res.send("Submitted succesfully!\n" + "<a href=\"/newmessage\">Return to the previous page.</a>");
});

app.get("/ajaxmessage", (req, res) => {
    res.sendFile(__dirname + "/views/ajaxmessage.html");
});

app.use(bodyParser.json());
app.post("/ajaxmessage", (req, res) => {
    var data2 = require("./public/json/newmessage.json");
    var username = req.body.Username;
    var country = req.body.Country;
    var message = req.body.Message;

    data2.push({
        Username: username,
        Country: country,
        Message: message
    });

    var JSONdata2 = JSON.stringify(data2);

    fs.writeFile("./public/json/newmessage.json", JSONdata2, function (err, data) {
        if (err) throw err;
        console.log("AJAX message has been saved to file!");
    });

    //Lähetetään JSON tiedosto takaisin selaimelle.
    res.send(data2);
});

app.listen(port, () => console.log("The server is listening to port number " + port));