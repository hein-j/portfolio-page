import '../styles/work.css';
import spring from '../assets/videos/spring.mp4';
import summer from '../assets/videos/summer.mp4';
import fall from '../assets/videos/fall.mp4';
import winter from '../assets/videos/winter.mp4';
import github from '../assets/icons/github.svg';
import website from '../assets/icons/website.svg';

const icons = {
  github: {
    img: github,
    alt: 'github'
  },
  website: {
    img: website,
    alt: 'website'
  }
}

const makeIcon = (iconObj, url) => {
  return `<a target="_blank" href=${url}><img src=${iconObj.img} alt=${iconObj.alt}></a>`
}

const content = [
  {
    class: 'spring',
    video: spring,
    description: 'Conceptualized by a psychologist, Hero’s Journey Interactive is a multimedia application serving clinical and research purposes. I played key roles in both development and deployment.',
    icons: `${makeIcon(icons.github, 'https://google.com')} ${makeIcon(icons.website, 'https://youtube.com')}`,
    stack: 'Angular, AWS, Express/Node, Postgres'
  },
  {
    class: 'summer',
    video: summer,
    description: 'ore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, c',
    icons: 'icon icon',
    stack: 'Angular, AWS, Express/Node, Postgres'
  },
  {
    class: 'fall',
    video: fall,
    description: 'itecto beatae vitae dicta sunt explicabo. Neitecto beatae vitae dicta sunt explicabo. Ne',
    icons: 'icon icon',
    stack: 'angular, node, whatever'
  },
  {
    class: 'winter',
    video: winter,
    description: 're veritatis et quare veritatis et quare veritatis et qua',
    icons: 'icon icon',
    stack: 'angular, node, whatever'
  },
]

Number.prototype.mod = function() {
  const n = content.length;
  return ((this%n)+n)%n;
};

const sliderFrame = document.querySelector(".slider-frame");

const buttons = [... document.querySelectorAll(".slider-button-container > input")];

const toggleButtons = () => {
  buttons.forEach((button) => button.disabled = !button.disabled)
}

const makeSlide = (index) => {
  const item = content[index];
  let slide = document.createElement('div');
  slide.classList.add('slide', item.class, 'init-fade');
  slide.innerHTML = 
    `<video muted autoplay loop playsinline>` +
      `<source src=${item.video} type="video/mp4">` +
      `Sorry, your browser does not support embedded videos` +
    `</video>` +
    `<div class="work-copy">` +
      `<p class="description-copy">${item.description}</p>` +
      `<div class="work-icon-container">${item.icons}</div>` +
      `<p class="stack-copy">${item.stack}</p>` +
    `</div>`

  return slide;
}

// actual transition duration plus buffer
const Transition = 300 + 100;

let currIndex = 0;

const change = (direction) => {
  toggleButtons();
  if (direction === 'previous') {
    currIndex = (currIndex - 1).mod();
  } else if (direction === 'next') {
    currIndex = (currIndex + 1).mod();
  }
  let slide = makeSlide(currIndex);
  sliderFrame.appendChild(slide);
  if (direction === 'init') {
    slide.classList.remove('init-fade');
    toggleButtons();
    return;
  }
  let video = slide.children[0];
  const whenReady = () => {
    // canplaythrough seems to fire multiple times
    video.removeEventListener('canplaythrough', whenReady);
    slide.classList.add('end-fade');
    // wait for animation to finish
    setTimeout (() => {
      // remove former slide
      sliderFrame.children[1].remove();
      // reactivate buttons
      toggleButtons();
    }, Transition)
  }
  video.addEventListener('canplaythrough', whenReady);
}

change('init');

buttons[0].addEventListener('click', () => change('previous'));
buttons[1].addEventListener('click', () => change('next'));
