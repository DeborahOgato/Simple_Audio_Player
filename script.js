const audio = document.getElementById('audio');
const playButton = document.getElementById('playButton');
const muteButton = document.getElementById('muteButton');
const volumeSlider = document.getElementById('volume');
const timeDisplay = document.getElementById('time');
const durationDisplay = document.getElementById('duration');

playButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playButton.textContent = 'Pause';
    } else {
        audio.pause();
        playButton.textContent = 'Play';
    }
});

muteButton.addEventListener('click', () => {
    audio.muted = !audio.muted;
    muteButton.textContent = audio.muted ? 'Unmute' : 'Mute';
});

volumeSlider.addEventListener('input', () => {
    audio.volume = volumeSlider.value / 100;
}); 

audio.addEventListener('timeupdate', () => {
    const currentTime = formatTime(audio.currentTime);
    const duration = formatTime(audio.duration);
    timeDisplay.textContent = currentTime;
    durationDisplay.textContent = duration;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}


