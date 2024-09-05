// Love counter
let loveCount = 0;
document.getElementById('love-counter-btn').addEventListener('click', function() {
    loveCount++;
    document.getElementById('love-counter').innerHTML = `❤️ ${loveCount} Times`;
});

// Random love message generator
const loveMessages = [
    "LoveyouuMeriPukuluuuuuu. 🌟",
    "DheraiiiMayaaaa. 💖",
    "MeriPranPyaruuuuuu. 💕",
    "Chuppppaaaaaaaaa 💌",
];
document.getElementById('random-msg-btn').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * loveMessages.length);
    document.getElementById('random-message').innerHTML = loveMessages[randomIndex];
});

// Toggle background music
let isPlaying = false;
const bgMusic = document.getElementById('bg-music');
document.getElementById('toggle-music-btn').addEventListener('click', function() {
    if (isPlaying) {
        bgMusic.pause();
        this.innerHTML = 'Play Music 🎵';
    } else {
        bgMusic.play();
        this.innerHTML = 'Pause Music 🎶';
    }
    isPlaying = !isPlaying;
});

// Slideshow functionality
const images = ['images/image1.jpg', 'images/image2.jpg', 'images/image3.jpg']; // Add paths to images
let currentImageIndex = 0;

function showImage(index) {
    const slideshowImage = document.getElementById('slideshow-image');
    slideshowImage.src = images[index];
}

document.getElementById('prev-slide').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage(currentImageIndex);
});

document.getElementById('next-slide').addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage(currentImageIndex);
});
