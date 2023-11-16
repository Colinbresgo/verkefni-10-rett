document.addEventListener('DOMContentLoaded', () => {
    const alien = document.getElementById('alien');
    let x = 0;
    let y = 0;
    let xDirection = 1;
    let yDirection = 1;

    function moveAlien() {
        const xMax = window.innerWidth - 50;
        const yMax = window.innerHeight - 50;

        x += xDirection;
        y += yDirection;

        if (x >= xMax || x <= 0) {
            xDirection *= -1;
        }

        if (y >= yMax || y <= 0) {
            yDirection *= -1;
        }

        alien.style.left = x + 'px';
        alien.style.top = y + 'px';
    }

    setInterval(moveAlien, 10);
});

