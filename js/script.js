let girl = document.querySelector('.image-block__image--top-girl');
let hole = document.querySelector('.image-block__image--bottom-hole');
// let body = document.querySelector('body');

// console.log(girl);
// console.log(hole);
// console.log(body);

let girlAnimation = gsap.timeline();

window.addEventListener('DOMContentLoaded', () => {
    console.log('Content loaded');
    girlAnimation
        .fromTo(hole, {scale: 0}, {duration: 2, scale: 1.4}) // Черная дыра расширяется от нулевого нразмера до х1.4 длительностью 2 сек
        .from(girl, {duration: 2, y: 1000, scale: 0}, '-=0.5')  // Девушка двигается снизу на расстоянии 1000px до исходной свое позиции в верстке в течение 2 секунд c нахлестом в 0.5сек
        .to(hole, {duration: 0.5, scale: 1}, '-=1') // и в течение пол секунды дыра сжимается до размера х1 с нахлестом в 1 сек
        .fromTo(girl, {y:0}, {duration: 2, y: 40, repeat: -1, yoyo: true}); // Девушка с циклом в 1.5 сек курсирует вверх-низ на расстояние 40px
    
    setTimeout( () => {
        girlAnimation.play();
    }, 2000);

});


