
// Initialisation des modales au chargement de la page
document.addEventListener('DOMContentLoaded', () => {

  console.log("initModals()");
  init(); // Cette fonction configure les écouteurs pour toutes les modales

});


// Fonction pour initialiser les événements sur les modales
function init() {

    console.log("init Modal");
    // Attache des écouteurs d'événements pour fermer les modales
    document.querySelectorAll('.modal__close').forEach(button => {
      button.addEventListener('click', function() {
        this.closest('.modal').style.display = 'none';
      });
    });

    // Ajoute des écouteurs d'événements pour fermer les modales via le bouton
    document.querySelectorAll('.modal__button').forEach(button => {
        button.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

  }
  
  // Fonction pour afficher une modale spécifique
  function showModal(modalId) {
    console.log("Show Modal "+modalId);
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex';
    }
  }
  
  // Exporte les fonctions pour qu'elles soient utilisables à l'extérieur
  export { init, showModal };