function openLightbox(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.style.display = "block";
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

//Close when clicking outside the image
window.onclick = function(event) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    if (event.target === lightbox && event.target !== lightboxImg) {
        lightbox.style.display = "none";
    }
};
