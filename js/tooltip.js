document.addEventListener('DOMContentLoaded', function () {
    const tooltipLinks = document.querySelectorAll('.tooltip-link');
    const tooltipContents = document.querySelectorAll('.tooltip-content');
    const tooltipContainer = document.querySelector('.tooltip-container');
    const tooltipCloses = document.querySelectorAll('.tooltip-close');
  
    tooltipLinks.forEach((link) => {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const index = this.getAttribute('data-index');
        const tooltipContent = document.querySelector(`.tooltip-content[data-index="${index}"]`);
  
        // Active l'état d'affichage du container et de l'infobulle
        tooltipContainer.classList.add('tooltip-container--active');
        tooltipContent.style.display = 'block'; // Montre l'infobulle
        setTimeout(() => {
          tooltipContent.classList.add('tooltip-content--active');
        }, 10);
  
        // Ferme toutes les autres infobulles
        tooltipContents.forEach((content) => {
          if (content !== tooltipContent) {
            content.classList.remove('tooltip-content--active');
            setTimeout(() => {
              content.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  
    // Ajoute l'événement de fermeture aux icônes de fermeture
    tooltipCloses.forEach((closeButton) => {
      closeButton.addEventListener('click', function () {
        const tooltipContent = this.parentElement;
        tooltipContent.classList.remove('tooltip-content--active');
        setTimeout(() => {
          tooltipContent.style.display = 'none';
          tooltipContainer.classList.remove('tooltip-container--active');
        }, 300);
      });
    });
  
    // Ferme le conteneur lorsque l'utilisateur clique en dehors des infobulles
    tooltipContainer.addEventListener('click', function (event) {
      if (event.target === this) {
        tooltipContainer.classList.remove('tooltip-container--active');
        tooltipContents.forEach((content) => {
          content.classList.remove('tooltip-content--active');
          setTimeout(() => {
            content.style.display = 'none';
          }, 300);
        });
      }
    });
  });