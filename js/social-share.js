document.addEventListener('DOMContentLoaded', function() {
    const facebookBtn = document.getElementById('share-facebook');
    const twitterBtn = document.getElementById('share-twitter');
    const linkedinBtn = document.getElementById('share-linkedin');

    const articleUrl = encodeURIComponent(window.location.href);
    const articleTitle = encodeURIComponent(document.title);

    facebookBtn.href = `https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`;
    twitterBtn.href = `https://twitter.com/intent/tweet?url=${articleUrl}&text=${articleTitle}`;
    linkedinBtn.href = `https://www.linkedin.com/sharing/share-offsite/?url=${articleUrl}`;

    // Pour suivre les clics sur les boutons de partage
    facebookBtn.addEventListener('click', function() {
        console.log('Article partagé sur Facebook');
    });

    twitterBtn.addEventListener('click', function() {
        console.log('Article partagé sur Twitter');
    });

    linkedinBtn.addEventListener('click', function() {
        console.log('Article partagé sur LinkedIn');
    });
});