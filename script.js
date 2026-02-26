document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const hourHand = document.getElementById('hourHand');
    const minHand = document.getElementById('minHand');
    const secondHand = document.getElementById('secondHand');
    const digitalClock = document.getElementById('digitalClock');
    const formatIndicator = document.getElementById('formatIndicator');
    const dateDisplay = document.getElementById('dateDisplay');
    const formatToggle = document.getElementById('formatToggle');
    const themeToggle = document.getElementById('themeToggle');
    const btnText = formatToggle.querySelector('.btn-text');

    // State
    let is24Hour = localStorage.getItem('is24Hour') === 'true';
    let isDarkTheme = localStorage.getItem('theme') !== 'light';

    // Initialize Theme
    if (!isDarkTheme) {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }

    // Initialize Format UI
    btnText.textContent = is24Hour ? '12H MODE' : '24H MODE';

    function updateClock() {
        const now = new Date();
        
        // Analog Clock Calculations
        const seconds = now.getSeconds();
        const minutes = now.getMinutes();
        const hours = now.getHours();

        const secondsDegrees = (seconds / 60) * 360;
        const minutesDegrees = (minutes / 60) * 360 + (seconds / 60) * 6;
        const hoursDegrees = ((hours % 12) / 12) * 360 + (minutes / 60) * 30;

        // Fix for 0 degree snap back animation
        if (seconds === 0) {
            secondHand.style.transition = 'none';
        } else {
            secondHand.style.transition = 'transform 0.1s linear';
        }

        secondHand.style.transform = `translateX(-50%) rotate(${secondsDegrees}deg)`;
        minHand.style.transform = `translateX(-50%) rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `translateX(-50%) rotate(${hoursDegrees}deg)`;

        // Digital Clock Formatting
        let displayHours = hours;
        let ampm = '';

        if (!is24Hour) {
            ampm = displayHours >= 12 ? 'PM' : 'AM';
            displayHours = displayHours % 12 || 12; // Convert 0 to 12
            formatIndicator.style.display = 'block';
            formatIndicator.textContent = ampm;
        } else {
            formatIndicator.style.display = 'none';
        }

        const h = String(displayHours).padStart(2, '0');
        const m = String(minutes).padStart(2, '0');
        const s = String(seconds).padStart(2, '0');

        digitalClock.textContent = `${h}:${m}:${s}`;

        // Date Formatting
        const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
        dateDisplay.textContent = now.toLocaleDateString('en-US', options).toUpperCase();
    }

    // Toggle Format
    formatToggle.addEventListener('click', () => {
        is24Hour = !is24Hour;
        localStorage.setItem('is24Hour', is24Hour);
        btnText.textContent = is24Hour ? '12H MODE' : '24H MODE';
        
        // Visual feedback
        digitalClock.style.opacity = '0';
        setTimeout(() => {
            updateClock();
            digitalClock.style.opacity = '1';
        }, 200);
    });

    // Toggle Theme
    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        document.body.classList.toggle('dark-theme', isDarkTheme);
        document.body.classList.toggle('light-theme', !isDarkTheme);
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    });

    // Start Clock
    setInterval(updateClock, 1000);
    updateClock(); // Initial call
});
