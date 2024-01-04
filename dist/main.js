/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/analyzeArray.js":
/*!*****************************!*\
  !*** ./src/analyzeArray.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* eslint-disable no-restricted-syntax */
const average = array => {
  let sum = 0;
  for (const num of array) {
    sum += num;
  }
  return sum / array.length;
};
const min = array => {
  let minVal = array[0];
  for (const num of array) {
    if (minVal > num) {
      minVal = num;
    }
  }
  return minVal;
};
const max = array => {
  let maxVal = array[0];
  for (const num of array) {
    if (maxVal < num) {
      maxVal = num;
    }
  }
  return maxVal;
};
const analyzeArray = array => ({
  object: {
    average: average(array),
    min: min(array),
    max: max(array),
    length: array.length
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (analyzeArray);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _analyzeArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./analyzeArray */ "./src/analyzeArray.js");

console.log((0,_analyzeArray__WEBPACK_IMPORTED_MODULE_0__["default"])([1, 8, 3, 4, 2, 6]));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTUEsT0FBTyxHQUFJQyxLQUFLLElBQUs7RUFDekIsSUFBSUMsR0FBRyxHQUFHLENBQUM7RUFDWCxLQUFLLE1BQU1DLEdBQUcsSUFBSUYsS0FBSyxFQUFFO0lBQ3ZCQyxHQUFHLElBQUlDLEdBQUc7RUFDWjtFQUVBLE9BQU9ELEdBQUcsR0FBR0QsS0FBSyxDQUFDRyxNQUFNO0FBQzNCLENBQUM7QUFFRCxNQUFNQyxHQUFHLEdBQUlKLEtBQUssSUFBSztFQUNyQixJQUFJSyxNQUFNLEdBQUdMLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFFckIsS0FBSyxNQUFNRSxHQUFHLElBQUlGLEtBQUssRUFBRTtJQUN2QixJQUFJSyxNQUFNLEdBQUdILEdBQUcsRUFBRTtNQUNoQkcsTUFBTSxHQUFHSCxHQUFHO0lBQ2Q7RUFDRjtFQUVBLE9BQU9HLE1BQU07QUFDZixDQUFDO0FBRUQsTUFBTUMsR0FBRyxHQUFJTixLQUFLLElBQUs7RUFDckIsSUFBSU8sTUFBTSxHQUFHUCxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBRXJCLEtBQUssTUFBTUUsR0FBRyxJQUFJRixLQUFLLEVBQUU7SUFDdkIsSUFBSU8sTUFBTSxHQUFHTCxHQUFHLEVBQUU7TUFDaEJLLE1BQU0sR0FBR0wsR0FBRztJQUNkO0VBQ0Y7RUFFQSxPQUFPSyxNQUFNO0FBQ2YsQ0FBQztBQUVELE1BQU1DLFlBQVksR0FBSVIsS0FBSyxLQUFNO0VBQy9CUyxNQUFNLEVBQUU7SUFDTlYsT0FBTyxFQUFFQSxPQUFPLENBQUNDLEtBQUssQ0FBQztJQUN2QkksR0FBRyxFQUFFQSxHQUFHLENBQUNKLEtBQUssQ0FBQztJQUNmTSxHQUFHLEVBQUVBLEdBQUcsQ0FBQ04sS0FBSyxDQUFDO0lBQ2ZHLE1BQU0sRUFBRUgsS0FBSyxDQUFDRztFQUNoQjtBQUNGLENBQUMsQ0FBQztBQUVGLGlFQUFlSyxZQUFZOzs7Ozs7VUMzQzNCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFFMUNFLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCx5REFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL3NyYy9hbmFseXplQXJyYXkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYnBhY2stZXNsaW50LXByZXR0aWVyLXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1lc2xpbnQtcHJldHRpZXItdGVtcGxhdGUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWJwYWNrLWVzbGludC1wcmV0dGllci10ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1yZXN0cmljdGVkLXN5bnRheCAqL1xuY29uc3QgYXZlcmFnZSA9IChhcnJheSkgPT4ge1xuICBsZXQgc3VtID0gMDtcbiAgZm9yIChjb25zdCBudW0gb2YgYXJyYXkpIHtcbiAgICBzdW0gKz0gbnVtO1xuICB9XG5cbiAgcmV0dXJuIHN1bSAvIGFycmF5Lmxlbmd0aDtcbn07XG5cbmNvbnN0IG1pbiA9IChhcnJheSkgPT4ge1xuICBsZXQgbWluVmFsID0gYXJyYXlbMF07XG5cbiAgZm9yIChjb25zdCBudW0gb2YgYXJyYXkpIHtcbiAgICBpZiAobWluVmFsID4gbnVtKSB7XG4gICAgICBtaW5WYWwgPSBudW07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1pblZhbDtcbn07XG5cbmNvbnN0IG1heCA9IChhcnJheSkgPT4ge1xuICBsZXQgbWF4VmFsID0gYXJyYXlbMF07XG5cbiAgZm9yIChjb25zdCBudW0gb2YgYXJyYXkpIHtcbiAgICBpZiAobWF4VmFsIDwgbnVtKSB7XG4gICAgICBtYXhWYWwgPSBudW07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1heFZhbDtcbn07XG5cbmNvbnN0IGFuYWx5emVBcnJheSA9IChhcnJheSkgPT4gKHtcbiAgb2JqZWN0OiB7XG4gICAgYXZlcmFnZTogYXZlcmFnZShhcnJheSksXG4gICAgbWluOiBtaW4oYXJyYXkpLFxuICAgIG1heDogbWF4KGFycmF5KSxcbiAgICBsZW5ndGg6IGFycmF5Lmxlbmd0aCxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBhbmFseXplQXJyYXk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBhbmFseXplQXJyYXkgZnJvbSBcIi4vYW5hbHl6ZUFycmF5XCI7XG5cbmNvbnNvbGUubG9nKGFuYWx5emVBcnJheShbMSwgOCwgMywgNCwgMiwgNl0pKTtcbiJdLCJuYW1lcyI6WyJhdmVyYWdlIiwiYXJyYXkiLCJzdW0iLCJudW0iLCJsZW5ndGgiLCJtaW4iLCJtaW5WYWwiLCJtYXgiLCJtYXhWYWwiLCJhbmFseXplQXJyYXkiLCJvYmplY3QiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==