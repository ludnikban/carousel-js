/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
let doc = document;  
let prevInd = null;

function slidesItem(count) {
  let slides = doc.createElement('ul');
  slides.classList.add('slides');
  carousel.appendChild(slides);
  
  for (let i = 0; i < count; i++) {

  let item = doc.createElement('li');
  i === 0 ? (item.classList.add('slides__item'), item.classList.add('active'))
  : item.classList.add('slides__item')
  slides.appendChild(item);

  let itema = doc.createElement('a');
  itema.setAttribute('href','#');
  item.appendChild(itema);
  }
}

function indicatorsItem(count) {
  let indicator = doc.createElement('div');
  indicator.classList.add('indicators');
  carousel.appendChild(indicator);

  for (let i = 0; i < count; i++) {

  let item = doc.createElement('span');
  let content = doc.createTextNode("item");
  item.appendChild(content);

  i === 0 ? (item.classList.add('indicators__item'), item.classList.add('active'))
  : item.classList.add('indicators__item')
  item.setAttribute('data-slide-to',i);
  indicator.appendChild(item);
  }
}

function controlsItem() {
  let control = doc.createElement('div');
  control.classList.add('controls');
  carousel.appendChild(control);

  for (let i = 0; i < 3; i++) {
  
    let item = doc.createElement('div');
  
    i === 0 ? (item.classList.add('controls__item'), item.classList.add('controls__prev'))
    : i === 1 ? (item.classList.add('controls__item'), item.classList.add('controls__next'))
    : (item.classList.add('controls__item'), item.classList.add('controls__pause'))
    control.appendChild(item);

    let itmi = doc.createElement('i');

    i === 0 ? (itmi.classList.add('fas'), itmi.classList.add('fa-chevron-left'))
    : i === 1 ? (itmi.classList.add('fas'), itmi.classList.add('fa-chevron-right'))
    : (itmi.classList.add('fas'), itmi.classList.add('fa-play'))
    item.appendChild(itmi);
  }
}

function createStyle() {
  mystyle = doc.createElement('style');
  mystyle.setAttribute('type','text/css');
  let styleContent = `
    .controls,
    .slides {position: relative; }
    .indicators { display: flex; }
    .indicators__item {
      display: block;
      width: 30px;
      height: 30px;
      margin: 5px;} `;

  mystyle.innerHTML = styleContent;
  carousel.appendChild(mystyle);    
}

function handle(e) {
  let target = e.target;
  if (target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'blue';
    if (prevInd !== null) prevInd.removeAttribute('style');
    prevInd = target;
  }
}

function  setListener() {
  let eventClick = doc.querySelector('div.indicators');
  eventClick.addEventListener('click', handle);
}

function createCarousel(slidesCount = 5) {
  carousel = doc.querySelector('#carousel');
  slidesItem(slidesCount);
  indicatorsItem(slidesCount);
  controlsItem();
  createStyle();
  setListener();
}

createCarousel(4);
