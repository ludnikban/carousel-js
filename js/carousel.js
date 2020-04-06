let createCarousel = (slidesCount) => {
  let doc = document;  
  let carousel = doc.getElementById('carousel');

  let mystyle = doc.createElement('style');
  let mytext = doc.createTextNode(".controls { position: relative; } " +
  ".indicators { display: flex; } " +
  ".slides { position: relative; border: 1px solid blue; } " +
  ".slides__item {color: green;}");
  mystyle.appendChild(mytext);
  mystyle.setAttribute('type','text/css');
  carousel.appendChild(mystyle);

  let slides = doc.createElement('ul');
  slides.classList.add('slides');
  carousel.appendChild(slides);
  
  for (let i = 0; i < slidesCount; i++) func1(slides,i);

  let indicator = doc.createElement('div');
  indicator.classList.add('indicators');
  carousel.appendChild(indicator);

  for (let i = 0; i < slidesCount; i++) func2(indicator,i);
  
  let control = doc.createElement('div');
  control.classList.add('controls');
  carousel.appendChild(control);

  for (let i = 0; i < 3; i++) func3(control,i);
  
  let event = (e) => {
    console.log(e.type, e.target);
  };

  let item = doc.querySelector('.indicators__item'), parent = item.parentNode;
  parent.addEventListener('click', event);
    
  function func1(sli,num) {
    let item = doc.createElement('li');

    num === 0 ? (item.classList.add('slides__item'), item.classList.add('active'))
    : item.classList.add('slides__item')

    sli.appendChild(item);

    let itema = doc.createElement('a');
    itema.setAttribute('href','#');

    item.appendChild(itema);
  }

  function func2(ind,num) {

    let item = doc.createElement('span');

    let content = doc.createTextNode("item");
    item.appendChild(content);

    num === 0 ? (item.classList.add('indicators__item'), item.classList.add('active'))
    : item.classList.add('indicators__item')

    item.setAttribute('data-slide-to',num);
    ind.appendChild(item);
  }

  function func3(cont,num) {
    let item = doc.createElement('div');
    
    num === 0 ? (item.classList.add('controls__item'), item.classList.add('controls__prev'))
    : num === 1 ? (item.classList.add('controls__item'), item.classList.add('controls__next'))
    : (item.classList.add('controls__item'), item.classList.add('controls__pause'))
    cont.appendChild(item);

    let itmi = doc.createElement('i');

    num === 0 ? (itmi.classList.add('fas'), itmi.classList.add('fa-chevron-left'))
    : num === 1 ? (itmi.classList.add('fas'), itmi.classList.add('fa-chevron-right'))
    : (itmi.classList.add('fas'), itmi.classList.add('fa-play'))
    item.appendChild(itmi);
  }
};

console.log(createCarousel(7));


