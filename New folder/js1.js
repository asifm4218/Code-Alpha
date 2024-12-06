const images = [
    "file:///C:/code%20alpha/New%20folder/image1.jpg",
    "file:///C:/code%20alpha/New%20folder/image2.jpg",
    "file:///C:/code%20alpha/New%20folder/image3.jpg",
    "file:///C:/code%20alpha/New%20folder/image4.jpg",
    "file:///C:/code%20alpha/New%20folder/image5.jpg",
    "file:///C:/code%20alpha/New%20folder/image6.jpg"

];

let currentIndex = 0;

function openLightbox(index) {
    currentIndex = index;
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    lightboxImg.src = images[currentIndex];
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex];
}
