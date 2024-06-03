/*
document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const fullImageViewer = document.querySelector('.full-image-viewer');
    const fullImage = fullImageViewer.querySelector('.full-image');
    const imageDescription = fullImageViewer.querySelector('.image-description');
    const closeButton = fullImageViewer.querySelector('.close');
    const infoButton = fullImageViewer.querySelector('.info-toggle');
    const prevButton = fullImageViewer.querySelector('.prev');
    const nextButton = fullImageViewer.querySelector('.next');

    let currentIndex = 0; // To keep track of the current image

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            fullImage.src = thumbnail.dataset.full;
            fullImage.alt = thumbnail.alt;
            imageDescription.textContent = thumbnail.dataset.description;
            fullImageViewer.classList.remove('hidden');
            currentIndex = index; // Update current index
        });
    });

    closeButton.addEventListener('click', () => {
        fullImageViewer.classList.add('hidden');
    });

    infoButton.addEventListener('click', () => {
        //imageDescription.style.display = imageDescription.style.display === 'none' ? 'block' : 'none';

        console.log("imageDescription.style.display = "+imageDescription.style.display);

        if(imageDescription.style.display === 'none' || imageDescription.style.display === '' ){

            imageDescription.style.display = 'block';
        }else{

            imageDescription.style.display = 'none';

        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length; // Wrap-around safely for negative index
        const newThumbnail = thumbnails[currentIndex];
        fullImage.src = newThumbnail.dataset.full;
        fullImage.alt = newThumbnail.alt;
        imageDescription.textContent = newThumbnail.dataset.description;
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length; // Wrap-around using modulo
        const newThumbnail = thumbnails[currentIndex];
        fullImage.src = newThumbnail.dataset.full;
        fullImage.alt = newThumbnail.alt;
        imageDescription.textContent = newThumbnail.dataset.description;
    });
});
*/

document.addEventListener('DOMContentLoaded', function() {
    initGallery('#gallery1', '#viewer-gallery1');
    //initGallery('#gallery2', '#viewer-gallery2');
});

function initGallery(thumbnailsSelector, viewerSelector) {
    const thumbnails = document.querySelectorAll(`${thumbnailsSelector} .thumbnail`);
    const fullImageViewer = document.querySelector(viewerSelector);
    const pictureElement = fullImageViewer.querySelector('picture');
    const fullImage = pictureElement.querySelector('img');
    const sources = pictureElement.querySelectorAll('source');
    const imageDescription = fullImageViewer.querySelector('.image-description');
    const closeButton = fullImageViewer.querySelector('.close');
    const infoButton = fullImageViewer.querySelector('.info-toggle');
    const prevButton = fullImageViewer.querySelector('.prev');
    const nextButton = fullImageViewer.querySelector('.next');

    let currentIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener('click', () => {
            currentIndex = index;
            updateViewer(thumbnail, pictureElement, fullImageViewer);
        });
    });

    closeButton.addEventListener('click', () => {
        fullImageViewer.classList.add('hidden');
    });

    infoButton.addEventListener('click', () => {
        //imageDescription.style.display = imageDescription.style.display === 'none' ? 'block' : 'none';

        console.log("imageDescription.style.display = "+imageDescription.style.display);

        if(imageDescription.style.display === 'none' || imageDescription.style.display === '' ){

            imageDescription.style.display = 'block';
        }else{

            imageDescription.style.display = 'none';

        }
    });

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + thumbnails.length) % thumbnails.length;
        thumbnails[currentIndex].click();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % thumbnails.length;
        thumbnails[currentIndex].click();
    });

    function updateViewer(thumbnail, pictureElement, fullImageViewer) {
        sources[0].srcset = thumbnail.dataset.large;
        sources[1].srcset = thumbnail.dataset.medium;
        fullImage.src = thumbnail.dataset.small;
        fullImage.alt = thumbnail.alt;
        imageDescription.textContent = thumbnail.dataset.description;
        fullImageViewer.classList.remove('hidden');
    }
}