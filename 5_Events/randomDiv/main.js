let makeDiv = (e) => {

    let newDiv = document.createElement('div');
    let css = newDiv.style;
    let divsize = ((Math.random() * 100) + 500).toFixed();
    let color = '#' + Math.round(0xffffff * Math.random()).toString(16);

    css.position = 'absolute';
    css.top = (Math.floor(Math.random() * window.innerHeight)) + 'px';
    css.left = (Math.floor(Math.random() * window.innerWidth)) + 'px';
    css.width = divsize + 'px';
    css.height = divsize + 'px';
    css.backgroundColor = color;

   

    newDiv.setAttribute('id', 'newDiv');
    main.appendChild(newDiv);
};

let activeElement;
let offsetX = 0;
let offsetY = 0;

let mDown = (e) => {

    activeElement = e.target;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
};
let mUp = (e) => {
    activeElement = null;
};
let mMove = (e) => {
    if (activeElement) {
        activeElement.style.top = (e.clientY - offsetY) + 'px';
        activeElement.style.left = (e.clientX - offsetX) + 'px';
    }
};


createDiv.addEventListener('click', makeDiv);
main.addEventListener('mousedown', mDown);
main.addEventListener('mouseup', mUp);
document.addEventListener('mousemove', mMove);
