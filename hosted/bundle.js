/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./client/client.js":
/*!**************************!*\
  !*** ./client/client.js ***!
  \**************************/
/***/ (() => {

eval("const handleResponse = async (response) => {\n    const content = document.getElementById('content');\n\n    switch (response.status) {\n        case 200:\n            content.innerHTML = `<b>Success</b>`;\n            break;\n        case 400:\n            content.innerHTML = `<b>Bad Request</b>`;\n            break;\n        case 404:\n            content.innerHTML = `<b>Not Found</b>`;\n            break;\n        default:\n            content.innerHTML = `<p>Status Code not Implemented By Client</p>`;\n            break;\n    }\n\n    const resObj = await response.json();\n    content.innerHTML += `<p>${resObj.message}</p>`;\n};\n\nconst sendFetch = async (url) => {\n    const response = await fetch(url);\n    handleResponse(response);\n};\n\nconst init = () => {\n    const successButton = document.querySelector(\"#success\");\n    const badRequestButton = document.querySelector(\"#badRequest\");\n    const notFoundButton = document.querySelector(\"#notFound\");\n\n    const success = () => sendFetch('/success');\n    const badRequest = () => sendFetch('/badRequest');\n    const notFound = () => sendFetch('/somethingUnhandled');\n\n    successButton.addEventListener('click', success);\n    badRequestButton.addEventListener('click', badRequest);\n    notFoundButton.addEventListener('click', notFound);\n};\n\nwindow.onload = init;\n\n//# sourceURL=webpack://simple_http/./client/client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./client/client.js"]();
/******/ 	
/******/ })()
;