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

const breatheAnimation = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const circle = document.querySelector('.circle');
            const text = document.querySelector('.inhale-exhale-text');
            
            circle.addEventListener('animationiteration', () => {
                if (circle.style.backgroundColor === 'rgb(179, 136, 235)') {
                    text.textContent = 'Inhale';
                    text.style.color = 'white';
                } else {
                    text.textContent = 'Exhale';
                    text.style.color = 'black';
                }
            });
        }
    });
};

const observer = new IntersectionObserver(breatheAnimation);
observer.observe(document.querySelector('.circle'));
