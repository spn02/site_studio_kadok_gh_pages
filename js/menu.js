/*
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav__toggle');
    const burgerIcon = document.querySelector('.burger-icon');
    const closeIcon = document.querySelector('.close-icon');
    const navMenuItems = document.querySelectorAll('.nav__menu__item__link');

    // Change les icônes burger et croix selon l'état du checkbox
    navToggle.addEventListener('change', function () {
        if (navToggle.checked) {
            burgerIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            burgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    // Ferme le menu quand un lien est cliqué
    navMenuItems.forEach(item => {
        item.addEventListener('click', function () {
            navToggle.checked = false;
            burgerIcon.style.display = 'block';
            closeIcon.style.display = 'none';

            // Mettre en évidence le lien actif
            navMenuItems.forEach(link => link.classList.remove('nav__menu__item--active'));
            this.classList.add('nav__menu__item--active');
        });
    });
});
*/

document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav__toggle');
  const burgerIcon = document.querySelector('.burger-icon');
  const closeIcon = document.querySelector('.close-icon');
  const navMenuItems = document.querySelectorAll('.nav__menu__item');

  let isMobile = window.matchMedia('(max-width: 768px)').matches;

  // Fonction pour gérer l'état actif des liens du menu
  function setActiveLink(item) {
    navMenuItems.forEach(el => el.classList.remove('nav__menu__item--active'));
    item.classList.add('nav__menu__item--active');
  }

  // Fonction pour fermer le menu burger et gérer les icônes
  function closeBurgerMenu() {
    navToggle.checked = false;
    burgerIcon.style.display = 'block';
    closeIcon.style.display = 'none';
  }

  // Fonction pour gérer l'état du bouton burger
  function toggleBurgerIcons() {
    if (navToggle.checked) {
      burgerIcon.style.display = 'none';
      closeIcon.style.display = 'block';
    } else {
      closeBurgerMenu();
    }
  }

  // Gestion des changements d'état du bouton burger en fonction de la taille de la fenêtre
  function updateIsMobile() {
    isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (!isMobile) {
      // Réinitialise le menu burger en mode desktop
      closeBurgerMenu();
    }
  }

  // Gérer l'événement `change` pour le menu burger
  navToggle.addEventListener('change', toggleBurgerIcons);

  // Gérer les clics sur les liens du menu
  navMenuItems.forEach(item => {
    const link = item.querySelector('.nav__menu__item__link');
    link.addEventListener('click', function () {
      setActiveLink(item);
      if (isMobile) {
        closeBurgerMenu();
      }
    });
  });

  // Mettre à jour `isMobile` lors du redimensionnement de la fenêtre
  window.addEventListener('resize', updateIsMobile);
});