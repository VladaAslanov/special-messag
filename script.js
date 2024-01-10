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
