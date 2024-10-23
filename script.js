function rain() {
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');

    e.classList.add('drop');
    cloud.appendChild(e);

    let left = Math.floor(Math.random() * 290);
    let size = Math.round() * 1.5;
    let duration = Math.random() * 1;

    e.innerText = '🩷';
    e.style.left = left + 'px';
    e.style.fontSize = 0.5 + size + 'em';
    e.style.animationDirection = 1 + duration + 's';

    setTimeout(function () {
        cloud.removeChild(e)
    }, 2000)
}

setInterval(function () {
    rain()
}, 20)

const wishes = [
    "Happy Women's Day!",
    "You are amazing!",
    "Wishing you happiness!",
    "Stay strong and beautiful!",
    "Celebrate your day!",
    "To the incredible women!",
    "You inspire us!",
    "Keep shining bright!",
    "You're a true star!",
    "Best wishes for today!"
];
function createWish() {
    // Create div element for wish
    let wishElement = document.createElement('div');
    wishElement.classList.add('wish');

    // Pick random wish from the list
    let randomWish = wishes[Math.floor(Math.random() * wishes.length)];
    wishElement.innerText = randomWish;

    // Set start position
    let isLeft = Math.random() > 0.5;
    wishElement.style.left = isLeft ? '10px' : 'calc(100% - 150px)';
    wishElement.style.bottom = '0';

    // Add wish to the body
    document.body.appendChild(wishElement);

    // Set end position random in the screen
    let endPositionX = Math.random() * window.innerWidth - 100 + 'px';
    wishElement.style.transform = `translate(${endPositionX}, -${Math.random() * window.innerHeight}px)`;

    // Clear after 3s
    setTimeout(() => {
        document.body.removeChild(wishElement);
    }, 3000);
}

setInterval(createWish, 100); // Create new after 0.1 s