// number status animation 
window.onload = function () {
    const animations = [
        { element: document.getElementById('projects'), startValue: 2500, endValue: 3000, duration: 1500 },
        { element: document.getElementById('capital'), startValue: 0, endValue: 1, duration: 1500, isDecimal: true },
        { element: document.getElementById('success'), startValue: 80, endValue: 94.7, duration: 1500, isDecimal: true },
        { element: document.getElementById('investor'), startValue: 800, endValue: 1000, duration: 1500 }
    ];

    animations.forEach(anim => {
        animateNumber(anim.element, anim.startValue, anim.endValue, anim.duration, anim.isDecimal);
    });
};

function animateNumber(element, startValue, endValue, duration, isDecimal = false) {
    const startTime = performance.now();

    function updateNumber(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1); // Ensuring progress doesn't exceed 1
        let currentValue = startValue + (progress * (endValue - startValue));
        currentValue = isDecimal ? currentValue.toFixed(1) : Math.floor(currentValue);

        element.textContent = currentValue;

        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        }
    }

    requestAnimationFrame(updateNumber);
}
