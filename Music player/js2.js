// Music data
const songs = [
    {
        title: "Ghost",
        artist: "Justin Bieber",
        src: "file:///C:/code%20alpha/Music%20player/Justin%20Bieber%20-%20Ghost.mp3",
        cover: "file:///C:/code%20alpha/Music%20player/coverphoto1.jpg"
    },
    {
        title: "Closer",
        artist: "The Chainsmokers",
        src: "file:///C:/code%20alpha/Music%20player/The%20Chainsmokers%20-%20Closer%20(Lyric)%20ft.%20Halsey.mp3",
        cover: "file:///C:/code%20alpha/Music%20player/coverphoto2.jpg"
    },
    {
        title: "Starboy",
        artist: "The Weeknd",
        src: "file:///C:/code%20alpha/Music%20player/The%20Weeknd%20-%20Starboy%20ft.%20Daft%20Punk%20(Official%20Video).mp3",
        cover: "file:///C:/code%20alpha/Music%20player/coverphoto3.jpg"
    }
];

let currentSongIndex = 0;
let isPlaying = false;

// DOM elements
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");

const audio = new Audio();

// Load song details
function loadSong(song) {
    title.textContent = song.title;
    artist.textContent = song.artist;
    cover.src = song.cover;
    audio.src = song.src;
}

// Play song
function playSong() {
    isPlaying = true;
    audio.play();
    playBtn.textContent = "⏸️";
}

// Pause song
function pauseSong() {
    isPlaying = false;
    audio.pause();
    playBtn.textContent = "▶️";
}

// Toggle play/pause
playBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
});

// Next song
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

// Previous song
function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(songs[currentSongIndex]);
    playSong();
}

// Update progress bar
audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${progressPercent}%`;
});

// Set progress
progressContainer.addEventListener("click", (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
});

// Event listeners for controls
nextBtn.addEventListener("click", nextSong);
prevBtn.addEventListener("click", prevSong);

// Load initial song
loadSong(songs[currentSongIndex]);
