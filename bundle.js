/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/about.css":
/*!******************************!*\
  !*** ./src/styles/about.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/connect.css":
/*!********************************!*\
  !*** ./src/styles/connect.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/shared.css":
/*!*******************************!*\
  !*** ./src/styles/shared.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/tools.css":
/*!******************************!*\
  !*** ./src/styles/tools.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/work.css":
/*!*****************************!*\
  !*** ./src/styles/work.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/assets/icons/github.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/github.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "75a92627dfb79a885d17.svg";

/***/ }),

/***/ "./src/assets/icons/website.svg":
/*!**************************************!*\
  !*** ./src/assets/icons/website.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bcae1c66bd926e1444c4.svg";

/***/ }),

/***/ "./src/assets/videos/fall.mp4":
/*!************************************!*\
  !*** ./src/assets/videos/fall.mp4 ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d62e032be6b38f028aca.mp4";

/***/ }),

/***/ "./src/assets/videos/spring.mp4":
/*!**************************************!*\
  !*** ./src/assets/videos/spring.mp4 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "87116b94ff0ec2ae0504.mp4";

/***/ }),

/***/ "./src/assets/videos/summer.mp4":
/*!**************************************!*\
  !*** ./src/assets/videos/summer.mp4 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3bd008f056c1a2530ba.mp4";

/***/ }),

/***/ "./src/assets/videos/winter.mp4":
/*!**************************************!*\
  !*** ./src/assets/videos/winter.mp4 ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bc053742fa1b8610e239.mp4";

/***/ }),

/***/ "./src/components/connect.js":
/*!***********************************!*\
  !*** ./src/components/connect.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_connect_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/connect.css */ "./src/styles/connect.css");


const toggleEmail = () => {
  document.querySelector('.mail-container > span').classList.toggle('expanded-email');
}

document.querySelector('.mail-container > input').addEventListener('click', toggleEmail)

/***/ }),

/***/ "./src/components/tools.js":
/*!*********************************!*\
  !*** ./src/components/tools.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_tools_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/tools.css */ "./src/styles/tools.css");


const expandAWSbutton = document.querySelector('.expand-aws-button');
const awsDetails = document.querySelector('.aws-details');

const toggleAWSDetails = () => {
  if (expandAWSbutton.innerText === '+') {
    expandAWSbutton.innerText = '—';
  } else {
    expandAWSbutton.innerText = '+'
  }
  awsDetails.classList.toggle('expanded-aws-details');
}

document.querySelector('.expand-aws').addEventListener('click', toggleAWSDetails)

/***/ }),

/***/ "./src/components/work.js":
/*!********************************!*\
  !*** ./src/components/work.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_work_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/work.css */ "./src/styles/work.css");
/* harmony import */ var _assets_videos_spring_mp4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/videos/spring.mp4 */ "./src/assets/videos/spring.mp4");
/* harmony import */ var _assets_videos_summer_mp4__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/videos/summer.mp4 */ "./src/assets/videos/summer.mp4");
/* harmony import */ var _assets_videos_fall_mp4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/videos/fall.mp4 */ "./src/assets/videos/fall.mp4");
/* harmony import */ var _assets_videos_winter_mp4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/videos/winter.mp4 */ "./src/assets/videos/winter.mp4");
/* harmony import */ var _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/github.svg */ "./src/assets/icons/github.svg");
/* harmony import */ var _assets_icons_website_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/website.svg */ "./src/assets/icons/website.svg");








const icons = {
  github: {
    img: _assets_icons_github_svg__WEBPACK_IMPORTED_MODULE_5__,
    alt: 'github'
  },
  website: {
    img: _assets_icons_website_svg__WEBPACK_IMPORTED_MODULE_6__,
    alt: 'website'
  }
}

const makeIcon = (iconObj, url) => {
  return `<a target="_blank" href=${url}><img src=${iconObj.img} alt=${iconObj.alt}></a>`
}

const content = [
  {
    class: 'spring',
    video: _assets_videos_spring_mp4__WEBPACK_IMPORTED_MODULE_1__,
    description: 'Conceptualized by a psychologist, Hero’s Journey Interactive is a multimedia application serving clinical and research purposes. I played key roles in both development and deployment.',
    icons: `${makeIcon(icons.github, 'https://google.com')} ${makeIcon(icons.website, 'https://youtube.com')}`,
    stack: 'Angular, AWS, Express/Node, Postgres'
  },
  {
    class: 'summer',
    video: _assets_videos_summer_mp4__WEBPACK_IMPORTED_MODULE_2__,
    description: 'ore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, c',
    icons: 'icon icon',
    stack: 'Angular, AWS, Express/Node, Postgres'
  },
  {
    class: 'fall',
    video: _assets_videos_fall_mp4__WEBPACK_IMPORTED_MODULE_3__,
    description: 'itecto beatae vitae dicta sunt explicabo. Neitecto beatae vitae dicta sunt explicabo. Ne',
    icons: 'icon icon',
    stack: 'angular, node, whatever'
  },
  {
    class: 'winter',
    video: _assets_videos_winter_mp4__WEBPACK_IMPORTED_MODULE_4__,
    description: 're veritatis et quare veritatis et quare veritatis et qua',
    icons: 'icon icon',
    stack: 'angular, node, whatever'
  },
]

Number.prototype.mod = function() {
  const n = content.length;
  return ((this%n)+n)%n;
};

let currIndex = 0;

const sliderFrame = document.querySelector(".slider-frame");

const buttons = [... document.querySelectorAll(".slider-button-container > input")];

const toggleButtons = () => {
  buttons.forEach((button) => button.disabled = !button.disabled)
}

const makeSlide = (index) => {
  const item = content[index];
  let slide = document.createElement('div');
  slide.classList.add('slide', item.class);
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

const Transition = 300 + 100;

const change = (direction) => {
  let slide;
  if (direction === 'init') {
    slide = makeSlide(currIndex);
    sliderFrame.appendChild(slide);
    return;
  } else if (direction === 'previous') {
    currIndex = (currIndex -1).mod();
  } else if (direction === 'next') {
    currIndex = (currIndex + 1).mod();
  }
  toggleButtons();
  slide = makeSlide(currIndex);
  slide.classList.add(`incoming-${direction}`);
  sliderFrame.appendChild(slide);
  const currSlide = sliderFrame.children[1];
  currSlide.classList.add(`outgoing-${direction}`);
  /**give a little delay to avoid occasional transition stutter */
  setTimeout(()=> {
    slide.classList.remove(`incoming-${direction}`);
    /** remove currslide and reactivate buttons after transition completes */
    setTimeout(()=> {
      currSlide.remove();
      toggleButtons();
    }, Transition)
  }, 70)
}

change('init');

buttons[0].addEventListener('click', () => change('previous'));
buttons[1].addEventListener('click', () => change('next'));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_shared_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/shared.css */ "./src/styles/shared.css");
/* harmony import */ var _styles_about_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/about.css */ "./src/styles/about.css");
/* harmony import */ var _components_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tools */ "./src/components/tools.js");
/* harmony import */ var _components_work__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/work */ "./src/components/work.js");
/* harmony import */ var _components_connect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/connect */ "./src/components/connect.js");











})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9zdHlsZXMvYWJvdXQuY3NzPzY0ZWMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvc3R5bGVzL2Nvbm5lY3QuY3NzP2ViODkiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvc3R5bGVzL3NoYXJlZC5jc3M/M2Y2NCIsIndlYnBhY2s6Ly9wb3J0Zm9saW8tcGFnZS8uL3NyYy9zdHlsZXMvdG9vbHMuY3NzPzkzY2IiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvc3R5bGVzL3dvcmsuY3NzP2U4YTUiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvY29tcG9uZW50cy9jb25uZWN0LmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlLy4vc3JjL2NvbXBvbmVudHMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvY29tcG9uZW50cy93b3JrLmpzIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BvcnRmb2xpby1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvLXBhZ2UvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0I7O0FBRS9CO0FBQ0E7QUFDQTs7QUFFQSx3Rjs7Ozs7Ozs7Ozs7O0FDTjZCOztBQUU3QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZDRCO0FBQ3FCO0FBQ0E7QUFDSjtBQUNJO0FBQ0Q7QUFDRTs7QUFFbEQ7QUFDQTtBQUNBLFNBQVMscURBQU07QUFDZjtBQUNBLEdBQUc7QUFDSDtBQUNBLFNBQVMsc0RBQU87QUFDaEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLElBQUksWUFBWSxZQUFZLE9BQU8sWUFBWTtBQUNuRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHNEQUFNO0FBQ2pCO0FBQ0EsY0FBYyw2Q0FBNkMsR0FBRywrQ0FBK0M7QUFDN0c7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsc0RBQU07QUFDakI7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLG9EQUFJO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHNEQUFNO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGlCQUFpQjtBQUN0RCwwQ0FBMEMsV0FBVztBQUNyRCwrQkFBK0IsV0FBVztBQUMxQzs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7QUFDQSxzQ0FBc0MsVUFBVTtBQUNoRDtBQUNBO0FBQ0EsdUNBQXVDLFVBQVU7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN4SEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7O1dDTkEsMkI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNkI7O0FBRUQ7O0FBRUE7O0FBRUQ7O0FBRUciLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuLi9zdHlsZXMvY29ubmVjdC5jc3MnO1xuXG5jb25zdCB0b2dnbGVFbWFpbCA9ICgpID0+IHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haWwtY29udGFpbmVyID4gc3BhbicpLmNsYXNzTGlzdC50b2dnbGUoJ2V4cGFuZGVkLWVtYWlsJyk7XG59XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWlsLWNvbnRhaW5lciA+IGlucHV0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVFbWFpbCkiLCJpbXBvcnQgJy4uL3N0eWxlcy90b29scy5jc3MnO1xuXG5jb25zdCBleHBhbmRBV1NidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWF3cy1idXR0b24nKTtcbmNvbnN0IGF3c0RldGFpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXdzLWRldGFpbHMnKTtcblxuY29uc3QgdG9nZ2xlQVdTRGV0YWlscyA9ICgpID0+IHtcbiAgaWYgKGV4cGFuZEFXU2J1dHRvbi5pbm5lclRleHQgPT09ICcrJykge1xuICAgIGV4cGFuZEFXU2J1dHRvbi5pbm5lclRleHQgPSAn4oCUJztcbiAgfSBlbHNlIHtcbiAgICBleHBhbmRBV1NidXR0b24uaW5uZXJUZXh0ID0gJysnXG4gIH1cbiAgYXdzRGV0YWlscy5jbGFzc0xpc3QudG9nZ2xlKCdleHBhbmRlZC1hd3MtZGV0YWlscycpO1xufVxuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXhwYW5kLWF3cycpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlQVdTRGV0YWlscykiLCJpbXBvcnQgJy4uL3N0eWxlcy93b3JrLmNzcyc7XG5pbXBvcnQgc3ByaW5nIGZyb20gJy4uL2Fzc2V0cy92aWRlb3Mvc3ByaW5nLm1wNCc7XG5pbXBvcnQgc3VtbWVyIGZyb20gJy4uL2Fzc2V0cy92aWRlb3Mvc3VtbWVyLm1wNCc7XG5pbXBvcnQgZmFsbCBmcm9tICcuLi9hc3NldHMvdmlkZW9zL2ZhbGwubXA0JztcbmltcG9ydCB3aW50ZXIgZnJvbSAnLi4vYXNzZXRzL3ZpZGVvcy93aW50ZXIubXA0JztcbmltcG9ydCBnaXRodWIgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2dpdGh1Yi5zdmcnO1xuaW1wb3J0IHdlYnNpdGUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL3dlYnNpdGUuc3ZnJztcblxuY29uc3QgaWNvbnMgPSB7XG4gIGdpdGh1Yjoge1xuICAgIGltZzogZ2l0aHViLFxuICAgIGFsdDogJ2dpdGh1YidcbiAgfSxcbiAgd2Vic2l0ZToge1xuICAgIGltZzogd2Vic2l0ZSxcbiAgICBhbHQ6ICd3ZWJzaXRlJ1xuICB9XG59XG5cbmNvbnN0IG1ha2VJY29uID0gKGljb25PYmosIHVybCkgPT4ge1xuICByZXR1cm4gYDxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9JHt1cmx9PjxpbWcgc3JjPSR7aWNvbk9iai5pbWd9IGFsdD0ke2ljb25PYmouYWx0fT48L2E+YFxufVxuXG5jb25zdCBjb250ZW50ID0gW1xuICB7XG4gICAgY2xhc3M6ICdzcHJpbmcnLFxuICAgIHZpZGVvOiBzcHJpbmcsXG4gICAgZGVzY3JpcHRpb246ICdDb25jZXB0dWFsaXplZCBieSBhIHBzeWNob2xvZ2lzdCwgSGVyb+KAmXMgSm91cm5leSBJbnRlcmFjdGl2ZSBpcyBhIG11bHRpbWVkaWEgYXBwbGljYXRpb24gc2VydmluZyBjbGluaWNhbCBhbmQgcmVzZWFyY2ggcHVycG9zZXMuIEkgcGxheWVkIGtleSByb2xlcyBpbiBib3RoIGRldmVsb3BtZW50IGFuZCBkZXBsb3ltZW50LicsXG4gICAgaWNvbnM6IGAke21ha2VJY29uKGljb25zLmdpdGh1YiwgJ2h0dHBzOi8vZ29vZ2xlLmNvbScpfSAke21ha2VJY29uKGljb25zLndlYnNpdGUsICdodHRwczovL3lvdXR1YmUuY29tJyl9YCxcbiAgICBzdGFjazogJ0FuZ3VsYXIsIEFXUywgRXhwcmVzcy9Ob2RlLCBQb3N0Z3JlcydcbiAgfSxcbiAge1xuICAgIGNsYXNzOiAnc3VtbWVyJyxcbiAgICB2aWRlbzogc3VtbWVyLFxuICAgIGRlc2NyaXB0aW9uOiAnb3JlIHZlcml0YXRpcyBldCBxdWFzaSBhcmNoaXRlY3RvIGJlYXRhZSB2aXRhZSBkaWN0YSBzdW50IGV4cGxpY2Fiby4gTmVtbyBlbmltIGlwc2FtIHZvbHVwdGF0ZW0gcXVpYSB2b2x1cHRhcyBzaXQgYXNwZXJuYXR1ciBhdXQgb2RpdCBhdXQgZnVnaXQsIHNlZCBxdWlhIGNvbnNlcXV1bnR1ciBtYWduaSBkb2xvcmVzIGVvcyBxdWkgcmF0aW9uZSB2b2x1cHRhdGVtIHNlcXVpIG5lc2NpdW50LiBOZXF1ZSBwb3JybyBxdWlzcXVhbSBlc3QsIHF1aSBkb2xvcmVtIGlwc3VtIHF1aWEgZG9sb3Igc2l0IGFtZXQsIGMnLFxuICAgIGljb25zOiAnaWNvbiBpY29uJyxcbiAgICBzdGFjazogJ0FuZ3VsYXIsIEFXUywgRXhwcmVzcy9Ob2RlLCBQb3N0Z3JlcydcbiAgfSxcbiAge1xuICAgIGNsYXNzOiAnZmFsbCcsXG4gICAgdmlkZW86IGZhbGwsXG4gICAgZGVzY3JpcHRpb246ICdpdGVjdG8gYmVhdGFlIHZpdGFlIGRpY3RhIHN1bnQgZXhwbGljYWJvLiBOZWl0ZWN0byBiZWF0YWUgdml0YWUgZGljdGEgc3VudCBleHBsaWNhYm8uIE5lJyxcbiAgICBpY29uczogJ2ljb24gaWNvbicsXG4gICAgc3RhY2s6ICdhbmd1bGFyLCBub2RlLCB3aGF0ZXZlcidcbiAgfSxcbiAge1xuICAgIGNsYXNzOiAnd2ludGVyJyxcbiAgICB2aWRlbzogd2ludGVyLFxuICAgIGRlc2NyaXB0aW9uOiAncmUgdmVyaXRhdGlzIGV0IHF1YXJlIHZlcml0YXRpcyBldCBxdWFyZSB2ZXJpdGF0aXMgZXQgcXVhJyxcbiAgICBpY29uczogJ2ljb24gaWNvbicsXG4gICAgc3RhY2s6ICdhbmd1bGFyLCBub2RlLCB3aGF0ZXZlcidcbiAgfSxcbl1cblxuTnVtYmVyLnByb3RvdHlwZS5tb2QgPSBmdW5jdGlvbigpIHtcbiAgY29uc3QgbiA9IGNvbnRlbnQubGVuZ3RoO1xuICByZXR1cm4gKCh0aGlzJW4pK24pJW47XG59O1xuXG5sZXQgY3VyckluZGV4ID0gMDtcblxuY29uc3Qgc2xpZGVyRnJhbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNsaWRlci1mcmFtZVwiKTtcblxuY29uc3QgYnV0dG9ucyA9IFsuLi4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXItYnV0dG9uLWNvbnRhaW5lciA+IGlucHV0XCIpXTtcblxuY29uc3QgdG9nZ2xlQnV0dG9ucyA9ICgpID0+IHtcbiAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5kaXNhYmxlZCA9ICFidXR0b24uZGlzYWJsZWQpXG59XG5cbmNvbnN0IG1ha2VTbGlkZSA9IChpbmRleCkgPT4ge1xuICBjb25zdCBpdGVtID0gY29udGVudFtpbmRleF07XG4gIGxldCBzbGlkZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzbGlkZS5jbGFzc0xpc3QuYWRkKCdzbGlkZScsIGl0ZW0uY2xhc3MpO1xuICBzbGlkZS5pbm5lckhUTUwgPSBcbiAgICBgPHZpZGVvIG11dGVkIGF1dG9wbGF5IGxvb3AgcGxheXNpbmxpbmU+YCArXG4gICAgICBgPHNvdXJjZSBzcmM9JHtpdGVtLnZpZGVvfSB0eXBlPVwidmlkZW8vbXA0XCI+YCArXG4gICAgICBgU29ycnksIHlvdXIgYnJvd3NlciBkb2VzIG5vdCBzdXBwb3J0IGVtYmVkZGVkIHZpZGVvc2AgK1xuICAgIGA8L3ZpZGVvPmAgK1xuICAgIGA8ZGl2IGNsYXNzPVwid29yay1jb3B5XCI+YCArXG4gICAgICBgPHAgY2xhc3M9XCJkZXNjcmlwdGlvbi1jb3B5XCI+JHtpdGVtLmRlc2NyaXB0aW9ufTwvcD5gICtcbiAgICAgIGA8ZGl2IGNsYXNzPVwid29yay1pY29uLWNvbnRhaW5lclwiPiR7aXRlbS5pY29uc308L2Rpdj5gICtcbiAgICAgIGA8cCBjbGFzcz1cInN0YWNrLWNvcHlcIj4ke2l0ZW0uc3RhY2t9PC9wPmAgK1xuICAgIGA8L2Rpdj5gXG5cbiAgcmV0dXJuIHNsaWRlO1xufVxuXG5jb25zdCBUcmFuc2l0aW9uID0gMzAwICsgMTAwO1xuXG5jb25zdCBjaGFuZ2UgPSAoZGlyZWN0aW9uKSA9PiB7XG4gIGxldCBzbGlkZTtcbiAgaWYgKGRpcmVjdGlvbiA9PT0gJ2luaXQnKSB7XG4gICAgc2xpZGUgPSBtYWtlU2xpZGUoY3VyckluZGV4KTtcbiAgICBzbGlkZXJGcmFtZS5hcHBlbmRDaGlsZChzbGlkZSk7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXZpb3VzJykge1xuICAgIGN1cnJJbmRleCA9IChjdXJySW5kZXggLTEpLm1vZCgpO1xuICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSB7XG4gICAgY3VyckluZGV4ID0gKGN1cnJJbmRleCArIDEpLm1vZCgpO1xuICB9XG4gIHRvZ2dsZUJ1dHRvbnMoKTtcbiAgc2xpZGUgPSBtYWtlU2xpZGUoY3VyckluZGV4KTtcbiAgc2xpZGUuY2xhc3NMaXN0LmFkZChgaW5jb21pbmctJHtkaXJlY3Rpb259YCk7XG4gIHNsaWRlckZyYW1lLmFwcGVuZENoaWxkKHNsaWRlKTtcbiAgY29uc3QgY3VyclNsaWRlID0gc2xpZGVyRnJhbWUuY2hpbGRyZW5bMV07XG4gIGN1cnJTbGlkZS5jbGFzc0xpc3QuYWRkKGBvdXRnb2luZy0ke2RpcmVjdGlvbn1gKTtcbiAgLyoqZ2l2ZSBhIGxpdHRsZSBkZWxheSB0byBhdm9pZCBvY2Nhc2lvbmFsIHRyYW5zaXRpb24gc3R1dHRlciAqL1xuICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgIHNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoYGluY29taW5nLSR7ZGlyZWN0aW9ufWApO1xuICAgIC8qKiByZW1vdmUgY3VycnNsaWRlIGFuZCByZWFjdGl2YXRlIGJ1dHRvbnMgYWZ0ZXIgdHJhbnNpdGlvbiBjb21wbGV0ZXMgKi9cbiAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgY3VyclNsaWRlLnJlbW92ZSgpO1xuICAgICAgdG9nZ2xlQnV0dG9ucygpO1xuICAgIH0sIFRyYW5zaXRpb24pXG4gIH0sIDcwKVxufVxuXG5jaGFuZ2UoJ2luaXQnKTtcblxuYnV0dG9uc1swXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGNoYW5nZSgncHJldmlvdXMnKSk7XG5idXR0b25zWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gY2hhbmdlKCduZXh0JykpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy9zaGFyZWQuY3NzJztcblxuaW1wb3J0ICcuL3N0eWxlcy9hYm91dC5jc3MnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50cy90b29scyc7XG5cbmltcG9ydCAnLi9jb21wb25lbnRzL3dvcmsnO1xuXG5pbXBvcnQgJy4vY29tcG9uZW50cy9jb25uZWN0JztcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==