# Full-Stack-Project-01
Ensimmäinen projekti Laurean Full Stack -sovelluskehitys kurssia varten.
Projektin idea on simppeli guestbook sovellus, jonka avulla käyttäjät voivat katsoa muiden kirjoittamia viestejä sekä lähettää omia viestejään 2 eri sivun kautta.

Tämä sovellus koostuu Node.js palvelimesta sekä neljästä eri sivusta:
/index - Simppeli kotisivu, jossa on hieman sisältöä
/guestbook - Sivu jonne kaikki viestit kootaan. Siellä on jo valmiina muutama viesti ja tämän lisäksi käyttäjän lisäämät uudet viestit tulevat tänne.
/newmessage - Lomake, joka lähettää nappia painamalla kaikki kentät suoraan palvelimelle ja tallentaa nämä palvelin päässä JSON tiedostoon.
/ajaxmessage - Sama kuin edellinen, mutta tällä kertaa nappia painamalla sovellus ajaa JavaScript koodin, joka lähettää lomakkeen tiedot AJAX kutsuna palvelimelle.

Tässä projektissa on hyödynnetty seuraavia Node.js paketteja: Express, EJS

-------------------------------------------------------------------------------------------------------------------------------------------------------------------

First project for Laurea's Full Stack development course.
The idea of this project is a simple guestbook application, which allows the user to view messages posted by others, as well as post messages of their own via 2 different pages.

This application consists of a Node.js server and four different pages:
/index - A simple home page, which has a small amount of content
/guestbook - A page where all the messages are gathered. It already has a few messages and on top of this user submitted messages will be listed here.
/newmessage - A form, which will submit all fields directly to the server and save them to a JSON file in the back-end.
/ajaxmessage - Same as the previous page, except click the button will instead run a JavaScript code, which will send the form data as AJAX call.

This Project has utilized the following Node.js packages: Express, EJS
