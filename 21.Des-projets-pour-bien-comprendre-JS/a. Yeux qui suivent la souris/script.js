const container = document.querySelector('.container');
const balls = document.querySelectorAll('.ball');

container.addEventListener('mousemove', (e) => {
const x = `${e.clientX*100/window.innerWidth}%`;
const y = `${e.clientY*100/window.innerHeight}%`;

for (let i = 0; i < 2; i++) {
    const element = balls[i];
    element.style.left = x;
    element.style.top = y;
    element.style.transform = `translate(-${x}, -${y})`;
}
});