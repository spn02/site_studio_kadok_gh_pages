// trim () pour check qu'il n'y a pas espace dans message (voir https://openclassrooms.com/fr/courses/7696886-apprenez-a-programmer-avec-javascript/8206613-mettez-en-place-des-regles-de-validation)

const urlScript = 'https://script.google.com/macros/s/AKfycbwCWJbZvxzCULMIbhpQM2tcdQqfsQ1pIBpSZgVAVjZLVfcCM4V4bKzClu66WRAFp-WJ/exec';

var myform = document.getElementById('contact-form');

//console.log("myform = " + myform.ELEMENT_NODE);

myform.addEventListener('submit', function (e) {

    //console.log("urlScript= "+urlScript);

    e.preventDefault(); // Stop form submission (stop le rechargement de la page par défault!)

    //_________[CHECK CHAMPS]_________

    let email = myform.elements['email'].value;
    if (!ValidateEmail(email)) {
        return; // Stop la fonction si l'email est invalide
    }

    //_________ FEEDBACK WAIT SEND _________

    let submitButton = myform.querySelector('button[type="submit"]');
    let buttonText = submitButton.querySelector('.button-text'); // Sélection du texte du bouton
    let spinner = submitButton.querySelector('.spinner'); // Sélection du spinner

    submitButton.disabled = true;
    buttonText.textContent = 'Envoi en cours...';

    spinner.classList.remove('hidden');

    //ValidateEmail(email);

    //_________[TRY SEND MESSAGE]__________________

    let formData = new FormData(this);
    //https://script.google.com/macros/s/AKfycbyq1GGpoUzeDG7nEYVCGQ-x99jEls0SpFtSX-Q-fLCNyjOBqp6zIOt12NkOkUQfktU/exec
    fetch(urlScript, {

        method: 'POST',
        body: formData

    })
        .then(response => response.json())
        .then(data => {

            //console.log(data);

            if (data.result === 'success') {
                window.location.href = "/Users/user1/Documents/projets/site_studio_kadok/site_studio_kadok/remerciement-send-message.html"; // Redirige vers une page de remerciement
            } else {
                alert('Erreur lors de l\'envoi: ' + data.error);
                console.log('Erreur lors de l\'envoi: ' + data.error);
                submitButton.disabled = false;
                submitButton.textContent = 'Envoyer';
            }

        })
        .catch(error => {

            alert('Erreur lors de l\'envoi: ' + error.message);
            submitButton.disabled = false;
            submitButton.textContent = 'Envoyer';
        });


});


function ValidateEmail(email) {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email == "") {
        alert("Veuillez entrer une adresse mail");
        return false;
    } else if (!emailRegex.test(email)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }
    return true;

}

/* // pas nécessaire si paramètre required ! 
function validateAndTrim(input) {
    if (!input || input.trim() === '') {
        return false; // Ou lever une exception, ou renvoyer une chaîne de caractères d'erreur
    }
    return input.trim();
}
*/