const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 200;

hero.addEventListener('mousemove', shadow);

function shadow(e) {
    let {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if(this !== e.target) {
        x = e.target.offsetLeft + e.offsetX;
        y = e.target.offsetTop + e.offsetY;
    }

    const xWalk = Math.floor((x / width * walk) - (walk / 2));
    const yWalk = Math.floor((y / height * walk) - (walk / 2));

    const distShadowX = xWalk / 4;
    const distShadowY = yWalk / 4;


    text.style.textShadow = `
    ${xWalk - (distShadowX * 3)}px ${yWalk - (distShadowY * 3)}px 0px rgba(250, 250, 0, .7),
    ${xWalk - (distShadowX * 2)}px ${yWalk - (distShadowY * 2)}px 0px rgba(174, 189, 56, .5),
    ${xWalk - (distShadowX * 1)}px ${yWalk - (distShadowY * 1)}px 0px rgba(172, 172, 79, .3)
`;

}