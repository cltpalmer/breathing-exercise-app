document.querySelector('.play-button').addEventListener('click', function() {
    const circle = document.querySelector('.circle');
    const playButton = document.querySelector('.play-button');
    const text = document.querySelector('.inhale-exhale-text');
    
    circle.classList.toggle('animate');
    if (circle.classList.contains('animate')) {
        playButton.style.display = 'none'; // Remove the play button
        text.style.display = 'block'; // Show the inhale/exhale text
    } else {
        playButton.style.display = 'block'; // Show the play button if animation stops
        text.style.display = 'none'; // Hide the inhale/exhale text
    }
});

const circle = document.querySelector('.circle');
const text = document.querySelector('.inhale-exhale-text');

circle.addEventListener('animationstart', () => {
    text.textContent = 'Inhale';
    text.style.color = 'white';
});

circle.addEventListener('animationiteration', (event) => {
    if (event.elapsedTime % 8 === 0) {
        text.textContent = 'Inhale';
        text.style.color = 'white';
    } else if (event.elapsedTime % 8 === 4) {
        text.textContent = 'Exhale';
        text.style.color = 'black';
    }
});
