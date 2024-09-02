/*const parallax_el = document.querySelectorAll('.parallax');
const main = document.querySelector('.main');

let xValue = 0,
    yValue = 0,
    rotateDegree = 0,
    rotateSpeed = 1; 

window.addEventListener("mousemove", (e) => {
    
    xValue = (e.clientX - window.innerWidth / 2) * 0.2; 
    yValue = (e.clientY - window.innerHeight / 2) * 0.2; 

    
    rotateDegree = (xValue / (window.innerWidth / 2)) * 10; 

    parallax_el.forEach(el => {
        let speedx = parseFloat(el.dataset.speedx) || 0.05;
        let speedy = parseFloat(el.dataset.speedy) || 0.05;
        let speedz = parseFloat(el.dataset.speedz) || 0.05;
        let distance = parseFloat(el.dataset.distance) || 0;

        let elLeft = parseFloat(getComputedStyle(el).left);
        let isInLeft = elLeft < window.innerWidth / 2 ? 1 : -1;

        let zValue = (e.clientX - elLeft) * isInLeft * 0.02; 

        el.style.transform = `
            perspective(2300px) 
            translateZ(${zValue * speedz}px) 
            rotateY(${rotateDegree * rotateSpeed}deg)
            translateX(calc(-50% + ${-xValue * speedx}px)) 
            translateY(calc(-50% + ${yValue * speedy}px))
        `;
    });
});

if(window.innerWidth >= 725) {
    main.style.maxHeight = `${window.innerWidth * 0.6}px`
}else {main.style.maxHeight = `${window.innerWidth * 1.6}px`}
*/


const parallax_el = document.querySelectorAll('.parallax');
const main = document.querySelector('.main');


let xValue = 0,
    yValue = 0,
    rotateDegree = 0,
    rotateSpeed = 1; 


function updateParallaxEffect(e) {
    xValue = (e.clientX - window.innerWidth / 2) * 0.2; 
    yValue = (e.clientY - window.innerHeight / 2) * 0.2; 
    rotateDegree = (xValue / (window.innerWidth / 2)) * 10; 

    parallax_el.forEach(el => {
        let speedx = parseFloat(el.dataset.speedx) || 0.05;
        let speedy = parseFloat(el.dataset.speedy) || 0.05;
        let speedz = parseFloat(el.dataset.speedz) || 0.05;
        let distance = parseFloat(el.dataset.distance) || 0;

        let elLeft = parseFloat(getComputedStyle(el).left);
        let isInLeft = elLeft < window.innerWidth / 2 ? 1 : -1;

        let zValue = (e.clientX - elLeft) * isInLeft * 0.02; 

        el.style.transform = `
            perspective(2300px) 
            translateZ(${zValue * speedz}px) 
            rotateY(${rotateDegree * rotateSpeed}deg)
            translateX(calc(-50% + ${-xValue * speedx}px)) 
            translateY(calc(-50% + ${yValue * speedy}px))
        `;
    });
}


window.addEventListener("mousemove", updateParallaxEffect);


function updateMainHeight() {
    if (window.innerWidth >= 725) {
        main.style.maxHeight = `${window.innerWidth * 0.6}px`;
    } else {
        main.style.maxHeight = `${window.innerWidth * 1.6}px`;
    }
}

updateMainHeight();


window.addEventListener('resize', updateMainHeight);


