// # Fonctions de validation pour les champs de formulaire

export function ValidateEmail(email) {

    console.log("ValidateEmail('+email+')");

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