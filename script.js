document.querySelector('.play-button').addEventListener('click', function() {
    const circle = document.querySelector('.circle');
    const playButton = document.querySelector('.play-button');
    const stopButton = document.querySelector('.stop-button');
    const text = document.querySelector('.inhale-exhale-text');
    
    circle.classList.toggle('animate');
    if (circle.classList.contains('animate')) {
        playButton.style.display = 'none'; // Remove the play button
        stopButton.style.display = 'block'; // Show the stop button
        text.style.display = 'block'; // Show the inhale/exhale text
        startBreathing(); // Start text updates immediately
    } else {
        playButton.style.display = 'block'; // Show the play button if animation stops
        stopButton.style.display = 'none'; // Hide the stop button
        text.style.display = 'none'; // Hide the inhale/exhale text
        stopBreathing(); // Stop the breathing cycle
    }
});

document.querySelector('.stop-button').addEventListener('click', function() {
    const circle = document.querySelector('.circle');
    const playButton = document.querySelector('.play-button');
    const stopButton = document.querySelector('.stop-button');
    const text = document.querySelector('.inhale-exhale-text');

    circle.classList.remove('animate');
    playButton.style.display = 'block'; // Show the play button
    stopButton.style.display = 'none'; // Hide the stop button
    text.style.display = 'none'; // Hide the inhale/exhale text
    stopBreathing(); // Stop the breathing cycle
});

const circle = document.querySelector('.circle');
const text = document.querySelector('.inhale-exhale-text');

let intervalId;

const startBreathing = () => {
    let phase = 0;

    const updateText = () => {
        if (phase === 0) {
            text.textContent = 'Inhale';
            text.style.color = 'white';
        } else if (phase === 1) {
            text.textContent = 'Exhale';
            text.style.color = 'black';
        }
        phase = (phase + 1) % 2;
    };

    updateText(); // Start the first cycle immediately
    intervalId = setInterval(updateText, 4000);
};

const stopBreathing = () => {
    clearInterval(intervalId);
};

circle.addEventListener('animationiteration', () => {
    startBreathing();
});
