document.addEventListener('DOMContentLoaded', () => {
    const levels = document.querySelectorAll('.ocean-level');
    const twinkleCount = 100;

    levels.forEach(level => {
        for (let i = 0; i < twinkleCount; i++) {
            const twinkle = document.createElement('div');
            twinkle.classList.add('twinkle');
            twinkle.style.top = `${Math.random() * 100}%`;
            twinkle.style.left = `${Math.random() * 100}%`;
            twinkle.style.animationDelay = `${Math.random() * 2}s`;
            level.appendChild(twinkle);
        }
    });
});
