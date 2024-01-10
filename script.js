document.addEventListener('DOMContentLoaded', function () {
    const meetingTime = new Date('2024-01-11T11:30:00');
    const timeElement = document.getElementById('time');
    
    function updateCountdown() {
        const currentTime = new Date();
        const diff = meetingTime - currentTime;

        // Calculate hours, minutes, and seconds
        const hours = Math.floor(diff / 1000 / 60 / 60);
        const minutes = Math.floor(diff / 1000 / 60) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        // Update the countdown display
        timeElement.innerText = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;

        // Check if the countdown is over
        if (diff <= 0) {
            clearInterval(interval);
            timeElement.innerText = "It's time!";
        }
    }

    // Update the countdown every second
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Heart animation
    setInterval(createHeart, 200);

    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);
        
        // Remove the heart after 5 seconds
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
});
