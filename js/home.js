//import { init as initModals } from './modal.js';
import { HandleFormSubmission } from './form-handlers.js';


// Utilisation de la fonction pour le formulaire de contact
HandleFormSubmission(
  'contact-form',
  'https://script.google.com/macros/s/AKfycbxuF6ZOfMKTZ1yBO-iC9vgBm2jishTTdnWapaz8FHlGiG1n0XsQJHQJKR_h66ym-RVv/exec',
  '/remerciement-send-message.html' // Redirige vers une page de remerciement
);

// Utilisation de la fonction pour le formulaire d'inscription à la newsletter
//console.log("// Utilisation de la fonction pour le formulaire d'inscription à la newsletter");


HandleFormSubmission(
  'newsletter-form',
  'https://script.google.com/macros/s/AKfycbzr-r4jvF0rn71P3_VtUGPXS-tSjmODJ8pdDBPXhrLIv-CmBPyH8xuw_imTFtxH0_M/exec',
  '/remerciement-newsletter-subscribe.html'
);


// _______________________________________________________________



