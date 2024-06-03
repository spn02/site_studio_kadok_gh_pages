// Une fonction générique pour gérer l'envoi des formulaires

import { showModal } from './modal.js';
import { ValidateEmail } from './validators.js';

export function HandleFormSubmission(formId, scriptUrl, redirectUrl) {

    console.log("HandleFormSubmission() | formId = " + formId + "scriptUrl = " + scriptUrl + "redirectUrl = " + redirectUrl);


    const form = document.getElementById(formId);


    const modalId = form.dataset.modalId; // Récupère l'ID du modal à partir de l'attribut data-modal-id
    console.log("HandleFormSubmission | modalId =  "+modalId);


    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Stop form submission (stop le rechargement de la page par défault!)


        //_________[CHECK CHAMPS]_________

        let email = form.elements['email'].value;
        if (!ValidateEmail(email)) {
            alert("Veuillez entrer une adresse email valide.");
            return;
        }

        //_________ FEEDBACK WAIT SEND _________

        const submitButton = form.querySelector('button[type="submit"]');
        const buttonText = submitButton.querySelector('.button-text'); // Sélection du texte du bouton
        const spinner = submitButton.querySelector('.spinner'); // Sélection du spinner


        submitButton.disabled = true;
        buttonText.textContent = 'Envoi en cours...';
        spinner.classList.remove('hidden');

        //_________[TRY SEND MESSAGE]__________________

        // Création des données du formulaire pour l'envoi
        const formData = new FormData(this);

        // Envoi des données vers le script Google Apps Script
        fetch(scriptUrl, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.result === 'success') {

                    // vider les values des inputs ?

                    //window.location.href = redirectUrl; // Redirige vers la page de remerciement

                    submitButton.disabled = false;
                    buttonText.textContent = 'Envoyer';

                    form.reset();

                    showModal(modalId); // Affiche le modal spécifié

                } else {
                    alert('Erreur lors de l\'envoi: ' + data.error);
                    submitButton.disabled = false;
                    buttonText.textContent = 'Envoyer';
                }
                spinner.classList.add('hidden');
            })
            .catch(error => {
                alert('Erreur lors de l\'envoi: ' + error.message);
                submitButton.disabled = false;
                buttonText.textContent = 'Envoyer';
                spinner.classList.add('hidden');
            });
    });
}

