/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scroll */ \"./modules/scroll.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('25 april 2022');\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\r\n\r\n    const calcInputs = document.querySelectorAll('input.calc-item');\r\n    const textInputs = document.querySelectorAll('input[Placeholder=\"Ваше имя\"]');\r\n    const textArea = document.querySelector('input[Placeholder=\"Ваше сообщение\"]');\r\n    const emailInputs = document.querySelectorAll('input[Type=\"email\"]');\r\n    const telInputs = document.querySelectorAll('input[Type=\"tel\"]');\r\n\r\n    \r\n    // 1.\r\n    calcInputs.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/\\D+/g, \"\");\r\n        })\r\n    });\r\n    // 2.1.\r\n    textInputs.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, \"\");\r\n        })\r\n    });\r\n\r\n    textArea.addEventListener('input', (e) => {\r\n        e.target.value = e.target.value.replace(/[^а-яА-Я -]/g, \"\");\r\n    });\r\n    // 2.2.\r\n    emailInputs.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9a-zA-Z@-_.!~*']/g, \"\");\r\n        })\r\n    });\r\n    // 2.3.\r\n    telInputs.forEach(item => {\r\n        item.addEventListener('input', (e) => {\r\n            e.target.value = e.target.value.replace(/[^0-9()-]/g, \"\");\r\n        })\r\n    });\r\n\r\n    // 3.2.\r\n\r\n    textInputs.forEach(item => {\r\n        item.onblur = function(e) {\r\n            e.target.value = e.target.value.replace(/-{2,}/g, \"-\");\r\n            e.target.value = e.target.value.replace(/ {2,}/g, \" \");\r\n            e.target.value = e.target.value.replace(/^[ -]*/g, \"\");\r\n            e.target.value = e.target.value.replace(/[а-я]?[ -]$/g, \"\");\r\n            //e.target.value = e.target.value.replace(/^ /g, \"\");\r\n            //e.target.value = e.target.value.replace(/ $/g, \"\");\r\n            \r\n\r\n            //e.target.value = e.target.value.replace(/ {2,}/g, \" \");\r\n            /* if (!input.value.includes('@')) { // не email\r\n            input.classList.add('invalid');\r\n            error.innerHTML = 'Пожалуйста, введите правильный email.'\r\n            } */\r\n        };\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\r\n\r\n\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n    const menuBtn = document.querySelector('.menu');\r\n    const menu = document.querySelector('menu');\r\n    const closeBtn = menu.querySelector('.close-btn');\r\n    const menuItems = menu.querySelectorAll('ul>li>a');\r\n\r\n    const handleMenu = () => {\r\n        menu.classList.toggle('active-menu');\r\n    };\r\n\r\n    menuBtn.addEventListener('click', handleMenu);\r\n    closeBtn.addEventListener('click', handleMenu);\r\n\r\n    menu.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {\r\n        anchor.addEventListener('click', function (e) {\r\n            e.preventDefault();\r\n            document.querySelector(this.getAttribute('href')).scrollIntoView({\r\n                behavior: 'smooth'\r\n            });\r\n        });\r\n    });\r\n\r\n    menuItems.forEach(menuItem => {\r\n        menuItem.addEventListener('click', handleMenu);\r\n    });\r\n\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n    const buttons = document.querySelectorAll('.popup-btn');\r\n    const modal = document.querySelector('.popup');\r\n    const closeBtn = modal.querySelector('.popup-close');\r\n    const mediaQuery = window.matchMedia('(min-width: 768px)');\r\n\r\n    let count = 0,\r\n        idInterval;\r\n\r\n    if (mediaQuery.matches) {\r\n\r\n        const animatePopup = () => {\r\n            count++;\r\n            idInterval = requestAnimationFrame(animatePopup);\r\n\r\n            modal.style.display = 'block';\r\n            if (count < 100) {\r\n                modal.style.opacity = count + '%';\r\n            } else {\r\n                cancelAnimationFrame(idInterval);\r\n            }\r\n        };\r\n\r\n        const unPop = () => {\r\n            count--;\r\n            idInterval = requestAnimationFrame(unPop);\r\n\r\n            if (count > 0) {\r\n                modal.style.opacity = count + '%';\r\n            } else {\r\n                cancelAnimationFrame(idInterval);\r\n                modal.style.display = 'none';\r\n            }\r\n        };\r\n\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', animatePopup);\r\n        });\r\n\r\n        closeBtn.addEventListener('click', unPop);\r\n\r\n    } else {\r\n        buttons.forEach(btn => {\r\n            btn.addEventListener('click', () => {\r\n                modal.style.display = 'block';\r\n            });\r\n        });\r\n\r\n        closeBtn.addEventListener('click', () => {\r\n            modal.style.display = 'none';\r\n        });\r\n    }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scroll.js":
/*!***************************!*\
  !*** ./modules/scroll.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst smoothScroll = () => {\r\n    \r\n    \r\nconst services = document.querySelector('.service .container');\r\nconst nextBtn = document.querySelector('main>a>img');\r\n\r\n    nextBtn.addEventListener('click', (event) => {\r\n        event.preventDefault();\r\n        services.scrollIntoView({\r\n            behavior: \"smooth\"\r\n        });\r\n    });\r\n};\r\n\r\nsmoothScroll();\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (smoothScroll);\n\n//# sourceURL=webpack:///./modules/scroll.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\r\n    const timerHours = document.getElementById('timer-hours');\r\n    const timerMinutes = document.getElementById('timer-minutes');\r\n    const timerSeconds = document.getElementById('timer-seconds');\r\n\r\n    const getTimeRemaining = () => {\r\n\r\n        let dateStop = new Date(deadline).getTime();\r\n        let dateNow = new Date().getTime();\r\n        let timeRemaining = (dateStop - dateNow) / 1000;\r\n\r\n        let hours = Math.floor((timeRemaining / 3600));\r\n        let minutes = Math.floor((timeRemaining / 60) % 60);\r\n        let seconds = Math.floor(timeRemaining % 60);\r\n\r\n        if (seconds < 10) {\r\n            seconds = `0${seconds}`;\r\n        }\r\n\r\n        if (minutes < 10) {\r\n            minutes = `0${minutes}`;\r\n        }\r\n\r\n        if (hours < 10) {\r\n            hours = `0${hours}`;\r\n        }\r\n\r\n        return {\r\n            timeRemaining,\r\n            hours,\r\n            minutes,\r\n            seconds\r\n        };\r\n    };\r\n\r\n    const updateClock = () => {\r\n        let getTime = getTimeRemaining();\r\n        \r\n        timerHours.textContent = getTime.hours;\r\n        timerMinutes.textContent = getTime.minutes;\r\n        timerSeconds.textContent = getTime.seconds;\r\n\r\n        if (getTime.timeRemaining <= 0) {\r\n            timerHours.textContent = '00';\r\n            timerMinutes.textContent = '00';\r\n            timerSeconds.textContent = '00';\r\n            clearInterval(intervalId);\r\n        }\r\n    };\r\n\r\n    let intervalId = setInterval(updateClock, 1000); \r\n\r\n    updateClock();\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n//# sourceURL=webpack:///./modules/timer.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;