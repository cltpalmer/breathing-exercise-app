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

circle.addEventListener('animationiteration', () => {
    if (text.textContent === 'Inhale') {
        text.textContent = 'Exhale';
        text.style.color = 'black';
    } else {
        text.textContent = 'Inhale';
        text.style.color = 'white';
    }
});
