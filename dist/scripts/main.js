/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/input/input.js":
/*!***********************************!*\
  !*** ./src/blocks/input/input.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp/./src/blocks/input/input.js?");

/***/ }),

/***/ "./src/blocks/video/video.js":
/*!***********************************!*\
  !*** ./src/blocks/video/video.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst playButton = document.getElementById('play')\r\nconst video = document.getElementById('video')\r\nplayButton.addEventListener('click', () => {\r\n   playButton.style = 'display:none'\r\n   video.play()\r\n   video.setAttribute('controls', '')\r\n\r\n   video.addEventListener('ended', () => {\r\n      video.load()\r\n      playButton.style = 'display:block'\r\n      video.removeAttribute('controls', '')\r\n   })\r\n\r\n})\n\n//# sourceURL=webpack://gulp/./src/blocks/video/video.js?");

/***/ }),

/***/ "./src/pages/index/index.js":
/*!**********************************!*\
  !*** ./src/pages/index/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n\n\n//# sourceURL=webpack://gulp/./src/pages/index/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/blocks/input/input.js"](0, {}, __webpack_require__);
/******/ 	__webpack_modules__["./src/blocks/video/video.js"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/pages/index/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;