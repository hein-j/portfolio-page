import '../styles/tools.css';
import cypress from '../assets/icons/tools/cypress.svg'
import reactTestingLibrary from '../assets/icons/tools/reactTestingLibrary.svg';
import enzyme from '../assets/icons/tools/enzyme.svg';
import tools from '../assets/texts/tools.svg';
const content = {
  frontendScript: {
    Javascript: {
      icon: {
        devicon: 'javascript-plain'
      }
    },
    Typescript: {
      icon: {
        devicon: 'typescript-plain'
      }
    },
    React: {
      icon: {
        devicon: 'react-original'
      }
    },
    Angular: {
      icon: {
        devicon: 'angularjs-plain'
      }
    },
    Webpack: {
      icon: {
        devicon: 'webpack-plain'
      }
    }
  },
  frontendStyle: {
    CSS: {
      icon: {
        devicon: 'css3-plain'
      }
    },
    Sass: {
      icon: {
        devicon: 'sass-original'
      }
    },
    HTML: {
      icon: {
        devicon: 'html5-plain'
      }
    }
  },
  backend: {
    Express: {
      icon: {
        devicon: 'express-original'
      }
    },
    ['Node.js']: {
      icon: {
        devicon: 'nodejs-plain'
      }
    },
    Python: {
      icon: {
        devicon: 'python-plain'
      }
    },
  },
  data: {
    Python: {
      icon: {
        devicon: 'python-plain'
      }
    },
    PostgreSQL: {
      icon: {
        devicon: 'postgresql-plain'
      }
    },
    MongoDB: {
      icon: {
        devicon: 'mongodb-plain'
      }
    },
    Redis: {
      icon: {
        devicon: 'redis-plain'
      }
    },
  },
  hosting: {
    AWS: {
      icon: {
        devicon: 'amazonwebservices-original'
      }
    },
    ['Digital Ocean']: {
      icon: {
        devicon: 'digitalocean-plain'
      }
    },
  },
  testing: {
    Cypress: {
      icon: {
        src: cypress
      }
    },
    Jest: {
      icon: {
        devicon: 'jest-plain'
      }
    },
    ['React Testing Library']: {
      icon: {
        src: reactTestingLibrary
      }
    },
    Enzyme: {
      icon: {
        src: enzyme
      }
    },
  }
};

function getIconString(iconInfo, toolName) {
  if(iconInfo.devicon) {
    return `<i class="devicon-${iconInfo.devicon}"></i>`
  }
  if(iconInfo.src) {
    return `<img class="img-icon" src=${iconInfo.src} alt="${toolName}">`
  }
}

let sectionString = '';

Object.values(content).forEach((toolGroup) => {
  let toolGroupString = ''
  Object.entries(toolGroup).forEach(([toolName, toolInfo]) => {
    toolGroupString += `<div class="single-tool">${getIconString(toolInfo.icon, toolName)}<span>${toolName}</span></div>`
  })
  toolGroupString = `<div class="tool-group">${toolGroupString}</div>`
  sectionString += toolGroupString
})

sectionString = `<div class="tools-container">${sectionString}</div>`
sectionString = `<h1 class="section-heading"><img src=${tools} alt="Tools"></h1>` + sectionString;
sectionString = `<div class="content">${sectionString}</div>`;
sectionString = `<div class="centered-container">${sectionString}</div>`

document.querySelector('#tools').innerHTML = sectionString;