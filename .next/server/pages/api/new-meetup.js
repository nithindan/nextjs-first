"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const { title , image , address , description  } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://nithinskariah:lRKXIqyO7qZDv1WW@cluster0.n36ilgt.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0\");\n        const db = client.db();\n        const collection = db.collection(\"meetups\");\n        const result = await collection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"Inserted successfully\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFdEIsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUU1QyxJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxNQUFNLEVBQUU7UUFDdEIsTUFBTUMsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFckIsTUFBTSxFQUFDQyxLQUFLLEdBQUVDLEtBQUssR0FBRUMsT0FBTyxHQUFFQyxXQUFXLEdBQUMsR0FBR0wsSUFBSTtRQUVqRCxNQUFNTSxNQUFNLEdBQUcsTUFBTVgsd0RBQW1CLENBQUMsZ0lBQWdJLENBQUM7UUFDMUssTUFBTWEsRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtRQUV0QixNQUFNQyxVQUFVLEdBQUdELEVBQUUsQ0FBQ0MsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUUzQyxNQUFNQyxNQUFNLEdBQUcsTUFBTUQsVUFBVSxDQUFDRSxTQUFTLENBQUNYLElBQUksQ0FBQztRQUUvQ1ksT0FBTyxDQUFDQyxHQUFHLENBQUNILE1BQU0sQ0FBQyxDQUFDO1FBQ3BCSixNQUFNLENBQUNRLEtBQUssRUFBRSxDQUFDO1FBRWZoQixHQUFHLENBQUNpQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFDQyxPQUFPLEVBQUUsdUJBQXVCO1NBQUMsQ0FBQztJQUM1RCxDQUFDO0FBRUwsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYidcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuXG4gICAgaWYocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSByZXEuYm9keTtcblxuICAgICAgICBjb25zdCB7dGl0bGUsIGltYWdlLCBhZGRyZXNzLCBkZXNjcmlwdGlvbn0gPSBkYXRhO1xuXG4gICAgICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QoJ21vbmdvZGIrc3J2Oi8vbml0aGluc2thcmlhaDpsUktYSXF5TzdxWkR2MVdXQGNsdXN0ZXIwLm4zNmlsZ3QubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHkmYXBwTmFtZT1DbHVzdGVyMCcpXG4gICAgICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XG5cbiAgICAgICAgY29uc3QgY29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBjb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICBjbGllbnQuY2xvc2UoKTtcblxuICAgICAgICByZXMuc3RhdHVzKDIwMSkuanNvbih7bWVzc2FnZTogJ0luc2VydGVkIHN1Y2Nlc3NmdWxseSd9KVxuICAgIH1cblxufSJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsInRpdGxlIiwiaW1hZ2UiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJjb2xsZWN0aW9uIiwicmVzdWx0IiwiaW5zZXJ0T25lIiwiY29uc29sZSIsImxvZyIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();