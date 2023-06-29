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
exports.id = "pages/api/transaction";
exports.ids = ["pages/api/transaction"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/transaction.js":
/*!**********************************!*\
  !*** ./pages/api/transaction.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/client */ \"(api)/./prisma/client.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        try {\n            await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tienda.create({\n                data: {\n                    id_str: 2,\n                    nom_str: \"TiendaABC\",\n                    tel_str: \"1234567890\",\n                    email_str: \"tiendaabc@gmail.com\",\n                    st_str: \"Calle Principal\",\n                    cit_str: \"Ciudad ABC\",\n                    stat_str: \"Estado ABC\",\n                    cp_str: 12345\n                }\n            });\n            const updatedTiendas = await _prisma_client__WEBPACK_IMPORTED_MODULE_0__[\"default\"].tienda.findMany();\n            res.status(200).json({\n                tiendas: updatedTiendas\n            });\n        } catch (error) {\n            res.status(500).json({\n                error: \"Error al realizar la transacci\\xf3n\"\n            });\n        }\n    } else {\n        res.status(405).json({\n            error: \"M\\xe9todo no permitido\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBeUM7QUFFMUIsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHO0lBQzVDLElBQUlELElBQUlFLFdBQVcsUUFBUTtRQUN6QixJQUFJO1lBQ0YsTUFBTUosb0VBQW9CTSxDQUFDO2dCQUN6QkMsTUFBTTtvQkFDSkMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVEMsU0FBUztvQkFDVEMsV0FBVztvQkFDWEMsUUFBUTtvQkFDUkMsU0FBUztvQkFDVEMsVUFBVTtvQkFDVkMsUUFBUTtnQkFDVjtZQUNGO1lBRUEsTUFBTUMsaUJBQWlCLE1BQU1oQixzRUFBc0JpQjtZQUNuRGQsSUFBSWUsT0FBTyxLQUFLQyxLQUFLO2dCQUFFQyxTQUFTSjtZQUFlO1FBQ2pELEVBQUUsT0FBT0ssT0FBTztZQUNkbEIsSUFBSWUsT0FBTyxLQUFLQyxLQUFLO2dCQUFFRSxPQUFPO1lBQW1DO1FBQ25FO0lBQ0YsT0FBTztRQUNMbEIsSUFBSWUsT0FBTyxLQUFLQyxLQUFLO1lBQUVFLE9BQU87UUFBc0I7SUFDdEQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmV4aW9uZGIvLi9wYWdlcy9hcGkvdHJhbnNhY3Rpb24uanM/OTA4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gJy4uLy4uL3ByaXNtYS9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IHByaXNtYS50aWVuZGEuY3JlYXRlKHtcclxuICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICBpZF9zdHI6IDIsXHJcbiAgICAgICAgICBub21fc3RyOiAnVGllbmRhQUJDJyxcclxuICAgICAgICAgIHRlbF9zdHI6ICcxMjM0NTY3ODkwJyxcclxuICAgICAgICAgIGVtYWlsX3N0cjogJ3RpZW5kYWFiY0BnbWFpbC5jb20nLFxyXG4gICAgICAgICAgc3Rfc3RyOiAnQ2FsbGUgUHJpbmNpcGFsJyxcclxuICAgICAgICAgIGNpdF9zdHI6ICdDaXVkYWQgQUJDJyxcclxuICAgICAgICAgIHN0YXRfc3RyOiAnRXN0YWRvIEFCQycsXHJcbiAgICAgICAgICBjcF9zdHI6IDEyMzQ1LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc3QgdXBkYXRlZFRpZW5kYXMgPSBhd2FpdCBwcmlzbWEudGllbmRhLmZpbmRNYW55KCk7XHJcbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgdGllbmRhczogdXBkYXRlZFRpZW5kYXMgfSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnRXJyb3IgYWwgcmVhbGl6YXIgbGEgdHJhbnNhY2Npw7NuJyB9KTtcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBlcnJvcjogJ03DqXRvZG8gbm8gcGVybWl0aWRvJyB9KTtcclxuICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJ0aWVuZGEiLCJjcmVhdGUiLCJkYXRhIiwiaWRfc3RyIiwibm9tX3N0ciIsInRlbF9zdHIiLCJlbWFpbF9zdHIiLCJzdF9zdHIiLCJjaXRfc3RyIiwic3RhdF9zdHIiLCJjcF9zdHIiLCJ1cGRhdGVkVGllbmRhcyIsImZpbmRNYW55Iiwic3RhdHVzIiwianNvbiIsInRpZW5kYXMiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/transaction.js\n");

/***/ }),

/***/ "(api)/./prisma/client.js":
/*!**************************!*\
  !*** ./prisma/client.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (false) {} else {\n    if (!global.prisma) {\n        global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    }\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wcmlzbWEvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLEtBQXlCLEVBQWMsRUFFMUMsTUFBTTtJQUNMLElBQUksQ0FBQ0MsT0FBT0YsUUFBUTtRQUNsQkUsT0FBT0YsU0FBUyxJQUFJRCx3REFBWUE7SUFDbEM7SUFDQUMsU0FBU0UsT0FBT0Y7QUFDbEI7QUFFQSxpRUFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbmV4aW9uZGIvLi9wcmlzbWEvY2xpZW50LmpzP2IxNmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnO1xyXG5cclxubGV0IHByaXNtYTtcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG59IGVsc2Uge1xyXG4gIGlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcclxuICB9XHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcHJpc21hOyJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJwcm9jZXNzIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./prisma/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/transaction.js"));
module.exports = __webpack_exports__;

})();