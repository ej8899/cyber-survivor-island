function createDubloons(count, minMargin = 0, maxMargin = window.innerWidth) {
    for (let i = 0; i < count; i++) {
        const dubloon = document.createElement('div');
        dubloon.classList.add('dubloon');

        // Randomize position, size, rotation, and delay
        const size = Math.random() * 40 + 20; // Sizes between 20px and 60px
        const rotation = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 360); // Clockwise or counterclockwise
        const delay = Math.random() * 2 + "s"; // Random delay between 0 and 2 seconds
        const leftPosition = Math.random() * (maxMargin - minMargin - size) + minMargin; // Ensure within margins

        dubloon.style.setProperty('--rotation', `${rotation}deg`);
        dubloon.style.setProperty('--delay', delay);
        dubloon.style.setProperty('--size', `${size}px`);
        dubloon.style.width = `${size}px`;
        dubloon.style.height = `${size}px`;
        dubloon.style.left = `${leftPosition}px`;

        playSound(goldSound);
        
        // Add event listener to enable hover effect after animation ends
        dubloon.addEventListener('animationend', () => {
            dubloon.classList.add('hover-active'); // Enables :hover effect after animation
        });

        dubloon.addEventListener('mouseenter', () => {
          playSound(goldSound);
        });

        console.log(`Creating dubloon: size=${size}, rotation=${rotation}, delay=${delay}, left=${leftPosition}`); // Debug log

        document.body.appendChild(dubloon);
    }
}

// Start animation
// createDubloons(50);