// script cambio tema
document.getElementById('theme-toggle').addEventListener('click', function () {
    var body = document.body;
    // Se il tema corrente è chiaro, cambia al tema scuro, altrimenti, cambia al tema chiaro
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});
// sotto script per email js

(function () {
    emailjs.init("u3SR7ZNqLgBKCoSj7"); 
})();

document.getElementById("contactForm").addEventListener("submit", function (event) {
event.preventDefault(); 

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var message = document.getElementById("message").value;


// Invia l'email tramite EmailJS
emailjs.send("service_fi63lsq", "template_y6bugzo", {  //id servizo e templete di email js
    name:name,
    email: email,
    message: message
})
    .then(function (response) {
        console.log("Email inviata con successo:", response);
        alert("Grazie! Il tuo messaggio è stato inviato.");
        
    }, function (error) {
        console.error("Si è verificato un errore nell'invio dell'email:", error);
        alert("Si è verificato un errore. Riprova più tardi.");
    });
});