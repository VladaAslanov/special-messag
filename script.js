document.addEventListener('DOMContentLoaded', function () {
    const meetingTime = new Date('2024-01-11T11:30:00');
    const countdownElement = document.getElementById('countdown');
    
    function updateCountdown() {
        const currentTime = new Date();
        const diff = meetingTime - currentTime;

        const hours = Math.floor(diff / 1000 / 60 / 60);
        countdownElement.innerText = `This many more hours until we see each other: ${hours} hours`;

        if (diff <= 0) {
            clearInterval(interval);
            countdownElement.innerText = "It's time!";
        }
    }

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
});

// JavaScript for hearts animation (Replace with your own animation code)
// Example: 
// setInterval(createHeart, 200);

// function createHeart() {
//     const heart = document.createElement('div');
//     heart.classList.add('heart');
//     heart.style.left = Math.random() * 100 + 'vw';
//     heart.style.animationDuration = Math.random() * 2 + 3 + 's';
//     heart.innerHTML = '❤️';
//     document.body.appendChild(heart);
//     setTimeout(() => {
//         heart.remove();
//     }, 5000);
// }
