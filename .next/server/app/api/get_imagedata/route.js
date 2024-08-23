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
exports.id = "app/api/get_imagedata/route";
exports.ids = ["app/api/get_imagedata/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget_imagedata%2Froute&page=%2Fapi%2Fget_imagedata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget_imagedata%2Froute.ts&appDir=C%3A%5Cport%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cport&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget_imagedata%2Froute&page=%2Fapi%2Fget_imagedata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget_imagedata%2Froute.ts&appDir=C%3A%5Cport%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cport&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_port_src_app_api_get_imagedata_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/get_imagedata/route.ts */ \"(rsc)/./src/app/api/get_imagedata/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/get_imagedata/route\",\n        pathname: \"/api/get_imagedata\",\n        filename: \"route\",\n        bundlePath: \"app/api/get_imagedata/route\"\n    },\n    resolvedPagePath: \"C:\\\\port\\\\src\\\\app\\\\api\\\\get_imagedata\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_port_src_app_api_get_imagedata_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/get_imagedata/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZnZXRfaW1hZ2VkYXRhJTJGcm91dGUmcGFnZT0lMkZhcGklMkZnZXRfaW1hZ2VkYXRhJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGZ2V0X2ltYWdlZGF0YSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDcG9ydCU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q3BvcnQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQ0E7QUFDN0U7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXptaS8/OWMwNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxwb3J0XFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGdldF9pbWFnZWRhdGFcXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2dldF9pbWFnZWRhdGEvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9nZXRfaW1hZ2VkYXRhXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9nZXRfaW1hZ2VkYXRhL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxccG9ydFxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxnZXRfaW1hZ2VkYXRhXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9nZXRfaW1hZ2VkYXRhL3JvdXRlXCI7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHNlcnZlckhvb2tzLFxuICAgICAgICBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIG9yaWdpbmFsUGF0aG5hbWUsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget_imagedata%2Froute&page=%2Fapi%2Fget_imagedata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget_imagedata%2Froute.ts&appDir=C%3A%5Cport%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cport&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/get_imagedata/route.ts":
/*!********************************************!*\
  !*** ./src/app/api/get_imagedata/route.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./src/utils/db.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/next */ \"(rsc)/./node_modules/next-auth/next/index.js\");\n/* harmony import */ var _authOptions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/authOptions */ \"(rsc)/./src/authOptions.ts\");\n\n\n // Ensure UserDocument type is imported if you defined it\n\n\n(0,_utils_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst GET = async (req)=>{\n    try {\n        // Get the session to retrieve the logged-in user's email\n        const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_3__.getServerSession)(_authOptions__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n        if (!session || !session.user?.email) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                error: \"Unauthorized: No session or email found\"\n            }), {\n                status: 401\n            });\n        }\n        const email = session.user.email;\n        // Fetch the user's data based on their email\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n            email\n        }).lean();\n        if (!user || !user.image_url) {\n            return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n                message: \"No image found for this user\"\n            }), {\n                status: 404\n            });\n        }\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            url: user.image_url\n        }), {\n            status: 200\n        });\n    } catch (error) {\n        console.error(\"Error fetching image:\", error);\n        return new next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse(JSON.stringify({\n            error: \"Failed to fetch image\",\n            details: error.message\n        }), {\n            status: 500\n        });\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9nZXRfaW1hZ2VkYXRhL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF3RDtBQUN2QjtBQUNBLENBQUMseURBQXlEO0FBQ3pDO0FBQ1Y7QUFJeENDLHFEQUFPQTtBQWVBLE1BQU1JLE1BQU0sT0FBT0M7SUFDeEIsSUFBSTtRQUNGLHlEQUF5RDtRQUN6RCxNQUFNQyxVQUFnQyxNQUFNSixnRUFBZ0JBLENBQUNDLG9EQUFXQTtRQUV4RSxJQUFJLENBQUNHLFdBQVcsQ0FBQ0EsUUFBUUMsSUFBSSxFQUFFQyxPQUFPO1lBQ3BDLE9BQU8sSUFBSVQscURBQVlBLENBQ3JCVSxLQUFLQyxTQUFTLENBQUM7Z0JBQUVDLE9BQU87WUFBMEMsSUFDbEU7Z0JBQUVDLFFBQVE7WUFBSTtRQUVsQjtRQUVBLE1BQU1KLFFBQVFGLFFBQVFDLElBQUksQ0FBQ0MsS0FBSztRQUVoQyw2Q0FBNkM7UUFDN0MsTUFBTUQsT0FBNEIsTUFBTU4sb0RBQUlBLENBQUNZLE9BQU8sQ0FBQztZQUFFTDtRQUFNLEdBQUdNLElBQUk7UUFFcEUsSUFBSSxDQUFDUCxRQUFRLENBQUNBLEtBQUtRLFNBQVMsRUFBRTtZQUM1QixPQUFPLElBQUloQixxREFBWUEsQ0FDckJVLEtBQUtDLFNBQVMsQ0FBQztnQkFBRU0sU0FBUztZQUErQixJQUN6RDtnQkFBRUosUUFBUTtZQUFJO1FBRWxCO1FBRUEsT0FBTyxJQUFJYixxREFBWUEsQ0FDckJVLEtBQUtDLFNBQVMsQ0FBQztZQUFFTyxLQUFLVixLQUFLUSxTQUFTO1FBQUMsSUFDckM7WUFBRUgsUUFBUTtRQUFJO0lBRWxCLEVBQUUsT0FBT0QsT0FBWTtRQUNuQk8sUUFBUVAsS0FBSyxDQUFDLHlCQUF5QkE7UUFDdkMsT0FBTyxJQUFJWixxREFBWUEsQ0FDckJVLEtBQUtDLFNBQVMsQ0FBQztZQUFFQyxPQUFPO1lBQXlCUSxTQUFTUixNQUFNSyxPQUFPO1FBQUMsSUFDeEU7WUFBRUosUUFBUTtRQUFJO0lBRWxCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL2them1pLy4vc3JjL2FwcC9hcGkvZ2V0X2ltYWdlZGF0YS9yb3V0ZS50cz83NmJmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjsgLy8gRW5zdXJlIFVzZXJEb2N1bWVudCB0eXBlIGlzIGltcG9ydGVkIGlmIHlvdSBkZWZpbmVkIGl0XHJcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcclxuaW1wb3J0IGF1dGhPcHRpb25zIGZyb20gXCJAL2F1dGhPcHRpb25zXCI7XHJcblxyXG5cclxuXHJcbmNvbm5lY3QoKTtcclxuXHJcbi8vIERlZmluZSB0aGUgY3VzdG9tIHNlc3Npb24gaW50ZXJmYWNlXHJcbmludGVyZmFjZSBDdXN0b21TZXNzaW9uIHtcclxuICB1c2VyPzoge1xyXG4gICAgZW1haWw/OiBzdHJpbmc7XHJcbiAgfTtcclxufVxyXG5cclxuLy8gRGVmaW5lIHRoZSBVc2VyRG9jdW1lbnQgaW50ZXJmYWNlIGlmIGl0J3Mgbm90IGFscmVhZHkgZGVmaW5lZCBpbiBVc2VyIG1vZGVsXHJcbmludGVyZmFjZSBVc2VyRG9jdW1lbnQge1xyXG4gIGVtYWlsOiBzdHJpbmc7XHJcbiAgaW1hZ2VfdXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgR0VUID0gYXN5bmMgKHJlcTogTmV4dFJlcXVlc3QpID0+IHtcclxuICB0cnkge1xyXG4gICAgLy8gR2V0IHRoZSBzZXNzaW9uIHRvIHJldHJpZXZlIHRoZSBsb2dnZWQtaW4gdXNlcidzIGVtYWlsXHJcbiAgICBjb25zdCBzZXNzaW9uOiBDdXN0b21TZXNzaW9uIHwgbnVsbCA9IGF3YWl0IGdldFNlcnZlclNlc3Npb24oYXV0aE9wdGlvbnMpO1xyXG5cclxuICAgIGlmICghc2Vzc2lvbiB8fCAhc2Vzc2lvbi51c2VyPy5lbWFpbCkge1xyXG4gICAgICByZXR1cm4gbmV3IE5leHRSZXNwb25zZShcclxuICAgICAgICBKU09OLnN0cmluZ2lmeSh7IGVycm9yOiBcIlVuYXV0aG9yaXplZDogTm8gc2Vzc2lvbiBvciBlbWFpbCBmb3VuZFwiIH0pLFxyXG4gICAgICAgIHsgc3RhdHVzOiA0MDEgfVxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGVtYWlsID0gc2Vzc2lvbi51c2VyLmVtYWlsO1xyXG5cclxuICAgIC8vIEZldGNoIHRoZSB1c2VyJ3MgZGF0YSBiYXNlZCBvbiB0aGVpciBlbWFpbFxyXG4gICAgY29uc3QgdXNlcjogVXNlckRvY3VtZW50IHwgbnVsbCA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsIH0pLmxlYW4oKTtcclxuXHJcbiAgICBpZiAoIXVzZXIgfHwgIXVzZXIuaW1hZ2VfdXJsKSB7XHJcbiAgICAgIHJldHVybiBuZXcgTmV4dFJlc3BvbnNlKFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHsgbWVzc2FnZTogXCJObyBpbWFnZSBmb3VuZCBmb3IgdGhpcyB1c2VyXCIgfSksXHJcbiAgICAgICAgeyBzdGF0dXM6IDQwNCB9XHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgdXJsOiB1c2VyLmltYWdlX3VybCB9KSxcclxuICAgICAgeyBzdGF0dXM6IDIwMCB9XHJcbiAgICApO1xyXG4gIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpbWFnZTpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG5ldyBOZXh0UmVzcG9uc2UoXHJcbiAgICAgIEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6IFwiRmFpbGVkIHRvIGZldGNoIGltYWdlXCIsIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UgfSksXHJcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJjb25uZWN0IiwiVXNlciIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoT3B0aW9ucyIsIkdFVCIsInJlcSIsInNlc3Npb24iLCJ1c2VyIiwiZW1haWwiLCJKU09OIiwic3RyaW5naWZ5IiwiZXJyb3IiLCJzdGF0dXMiLCJmaW5kT25lIiwibGVhbiIsImltYWdlX3VybCIsIm1lc3NhZ2UiLCJ1cmwiLCJjb25zb2xlIiwiZGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/get_imagedata/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/authOptions.ts":
/*!****************************!*\
  !*** ./src/authOptions.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authOptions: () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/rsc/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var _utils_db__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/db */ \"(rsc)/./src/utils/db.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n// Define the authentication options\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            id: \"credentials\",\n            name: \"Credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"text\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                await (0,_utils_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n                try {\n                    if (!credentials?.email || !credentials?.password) {\n                        return null; // Return null if credentials are missing\n                    }\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                        email: credentials.email\n                    });\n                    if (user) {\n                        const isPasswordCorrect = await bcryptjs__WEBPACK_IMPORTED_MODULE_6___default().compare(credentials.password, user.password);\n                        if (isPasswordCorrect) {\n                            return user;\n                        }\n                    }\n                } catch (err) {\n                    console.error(\"Error during authorization\", err);\n                }\n                return null;\n            }\n        }),\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GITHUB_ID || \"\",\n            clientSecret: process.env.GITHUB_SECRET || \"\"\n        })\n    ],\n    callbacks: {\n        async signIn ({ user, account }) {\n            if (account?.provider === \"github\") {\n                await (0,_utils_db__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n                try {\n                    const existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n                        email: user.email\n                    });\n                    if (!existingUser) {\n                        const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({\n                            email: user.email,\n                            name: user.name || \"\",\n                            avatar_url: user.image || \"\"\n                        });\n                        await newUser.save();\n                    }\n                    return true;\n                } catch (err) {\n                    console.error(\"Error saving user\", err);\n                    return false;\n                }\n            }\n            return true;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXV0aE9wdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3VCO0FBQ0U7QUFDVTtBQUNqQztBQUNBO0FBQ0g7QUFFOUIsb0NBQW9DO0FBQzdCLE1BQU1PLGNBQStCO0lBQzFDQyxXQUFXO1FBQ1RMLDJFQUFtQkEsQ0FBQztZQUNsQk0sSUFBSTtZQUNKQyxNQUFNO1lBQ05DLGFBQWE7Z0JBQ1hDLE9BQU87b0JBQUVDLE9BQU87b0JBQVNDLE1BQU07Z0JBQU87Z0JBQ3RDQyxVQUFVO29CQUFFRixPQUFPO29CQUFZQyxNQUFNO2dCQUFXO1lBQ2xEO1lBQ0EsTUFBTUUsV0FBVUwsV0FBVztnQkFDekIsTUFBTU4scURBQU9BO2dCQUNiLElBQUk7b0JBQ0YsSUFBSSxDQUFDTSxhQUFhQyxTQUFTLENBQUNELGFBQWFJLFVBQVU7d0JBQ2pELE9BQU8sTUFBTSx5Q0FBeUM7b0JBQ3hEO29CQUVBLE1BQU1FLE9BQU8sTUFBTWIsb0RBQUlBLENBQUNjLE9BQU8sQ0FBQzt3QkFBRU4sT0FBT0QsWUFBWUMsS0FBSztvQkFBQztvQkFDM0QsSUFBSUssTUFBTTt3QkFDUixNQUFNRSxvQkFBb0IsTUFBTWIsdURBQWMsQ0FDNUNLLFlBQVlJLFFBQVEsRUFDcEJFLEtBQUtGLFFBQVE7d0JBRWYsSUFBSUksbUJBQW1COzRCQUNyQixPQUFPRjt3QkFDVDtvQkFDRjtnQkFDRixFQUFFLE9BQU9JLEtBQUs7b0JBQ1pDLFFBQVFDLEtBQUssQ0FBQyw4QkFBOEJGO2dCQUM5QztnQkFDQSxPQUFPO1lBQ1Q7UUFDRjtRQUNBbkIsc0VBQWNBLENBQUM7WUFDYnNCLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxJQUFJO1lBQ25DQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWEsSUFBSTtRQUM3QztLQUNEO0lBQ0RDLFdBQVc7UUFDVCxNQUFNQyxRQUFPLEVBQUVkLElBQUksRUFBRWUsT0FBTyxFQUFFO1lBQzVCLElBQUlBLFNBQVNDLGFBQWEsVUFBVTtnQkFDbEMsTUFBTTVCLHFEQUFPQTtnQkFDYixJQUFJO29CQUNGLE1BQU02QixlQUFlLE1BQU05QixvREFBSUEsQ0FBQ2MsT0FBTyxDQUFDO3dCQUFFTixPQUFPSyxLQUFLTCxLQUFLO29CQUFDO29CQUM1RCxJQUFJLENBQUNzQixjQUFjO3dCQUNqQixNQUFNQyxVQUFVLElBQUkvQixvREFBSUEsQ0FBQzs0QkFDdkJRLE9BQU9LLEtBQUtMLEtBQUs7NEJBQ2pCRixNQUFNTyxLQUFLUCxJQUFJLElBQUk7NEJBQ25CMEIsWUFBWW5CLEtBQUtvQixLQUFLLElBQUk7d0JBQzVCO3dCQUNBLE1BQU1GLFFBQVFHLElBQUk7b0JBQ3BCO29CQUNBLE9BQU87Z0JBQ1QsRUFBRSxPQUFPakIsS0FBSztvQkFDWkMsUUFBUUMsS0FBSyxDQUFDLHFCQUFxQkY7b0JBQ25DLE9BQU87Z0JBQ1Q7WUFDRjtZQUNBLE9BQU87UUFDVDtJQUNGO0FBQ0YsRUFBRTtBQUVGLGlFQUFlcEIsZ0RBQVFBLENBQUNNLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rYXptaS8uL3NyYy9hdXRoT3B0aW9ucy50cz84MTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JzsgXHJcbmltcG9ydCBOZXh0QXV0aCwgeyBOZXh0QXV0aE9wdGlvbnMgfSBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIjtcclxuaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIkAvbW9kZWxzL1VzZXJcIjtcclxuaW1wb3J0IGNvbm5lY3QgZnJvbSBcIkAvdXRpbHMvZGJcIjtcclxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcclxuXHJcbi8vIERlZmluZSB0aGUgYXV0aGVudGljYXRpb24gb3B0aW9uc1xyXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnM6IE5leHRBdXRoT3B0aW9ucyA9IHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBpZDogXCJjcmVkZW50aWFsc1wiLFxyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcbiAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgZW1haWw6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIgfSxcclxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XHJcbiAgICAgICAgYXdhaXQgY29ubmVjdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBpZiAoIWNyZWRlbnRpYWxzPy5lbWFpbCB8fCAhY3JlZGVudGlhbHM/LnBhc3N3b3JkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsOyAvLyBSZXR1cm4gbnVsbCBpZiBjcmVkZW50aWFscyBhcmUgbWlzc2luZ1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbiAgICAgICAgICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICBjb25zdCBpc1Bhc3N3b3JkQ29ycmVjdCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxyXG4gICAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgIHVzZXIucGFzc3dvcmRcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgaWYgKGlzUGFzc3dvcmRDb3JyZWN0KSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgYXV0aG9yaXphdGlvblwiLCBlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgfSxcclxuICAgIH0pLFxyXG4gICAgR2l0aHViUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0lEIHx8IFwiXCIsXHJcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCB8fCBcIlwiLFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNpZ25Jbih7IHVzZXIsIGFjY291bnQgfSkge1xyXG4gICAgICBpZiAoYWNjb3VudD8ucHJvdmlkZXIgPT09IFwiZ2l0aHViXCIpIHtcclxuICAgICAgICBhd2FpdCBjb25uZWN0KCk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pO1xyXG4gICAgICAgICAgaWYgKCFleGlzdGluZ1VzZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3VXNlciA9IG5ldyBVc2VyKHtcclxuICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcclxuICAgICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUgfHwgXCJcIixcclxuICAgICAgICAgICAgICBhdmF0YXJfdXJsOiB1c2VyLmltYWdlIHx8IFwiXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBhd2FpdCBuZXdVc2VyLnNhdmUoKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHNhdmluZyB1c2VyXCIsIGVycik7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwiQ3JlZGVudGlhbHNQcm92aWRlciIsIlVzZXIiLCJjb25uZWN0IiwiYmNyeXB0IiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJpZCIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJ1c2VyIiwiZmluZE9uZSIsImlzUGFzc3dvcmRDb3JyZWN0IiwiY29tcGFyZSIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJjYWxsYmFja3MiLCJzaWduSW4iLCJhY2NvdW50IiwicHJvdmlkZXIiLCJleGlzdGluZ1VzZXIiLCJuZXdVc2VyIiwiYXZhdGFyX3VybCIsImltYWdlIiwic2F2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/authOptions.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        unique: true,\n        required: false,\n        lowercase: true,\n        trim: true\n    },\n    password: {\n        type: String,\n        required: false\n    },\n    verifytoken: {\n        type: String\n    },\n    aboutMe: {\n        type: String,\n        default: \"\"\n    },\n    linkedin: {\n        type: String,\n        default: \"\"\n    },\n    github: {\n        type: String,\n        default: \"\"\n    },\n    image_url: {\n        type: String,\n        required: false\n    },\n    public_id: {\n        type: String,\n        required: false\n    },\n    avatar_url: {\n        type: String,\n        required: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxhQUFhLElBQUlELE9BQ3JCO0lBR0VFLE1BQU07UUFDSkMsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FDLE9BQU87UUFDTEgsTUFBTUM7UUFDTkcsUUFBUTtRQUNSRixVQUFVO1FBQ1ZHLFdBQVc7UUFDWEMsTUFBTTtJQUNSO0lBQ0FDLFVBQVU7UUFDUlAsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FNLGFBQVk7UUFDVlIsTUFBS0M7SUFFUDtJQUNBUSxTQUFTO1FBQ1BULE1BQU1DO1FBQ05TLFNBQVM7SUFDWDtJQUNBQyxVQUFVO1FBQ1JYLE1BQU1DO1FBQ05TLFNBQVM7SUFDWDtJQUNBRSxRQUFRO1FBQ05aLE1BQU1DO1FBQ05TLFNBQVM7SUFDWDtJQUNBRyxXQUFXO1FBQ1RiLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBWSxXQUFXO1FBQ1RkLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBYSxZQUFXO1FBQ1RmLE1BQUtDO1FBQ0xDLFVBQVM7SUFDWDtBQUVGLEdBQ0E7SUFBRWMsWUFBWTtBQUFLO0FBR3JCLGlFQUFlcEIsd0RBQWUsQ0FBQ3NCLElBQUksSUFBSXRCLHFEQUFjLENBQUMsUUFBUUUsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2them1pLy4vc3JjL21vZGVscy9Vc2VyLnRzPzA5NmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IHsgU2NoZW1hIH0gPSBtb25nb29zZTtcclxuXHJcbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxyXG4gIHtcclxuICAgXHJcbiAgIFxyXG4gICAgbmFtZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIGVtYWlsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdW5pcXVlOiB0cnVlLFxyXG4gICAgICByZXF1aXJlZDogZmFsc2UsXHJcbiAgICAgIGxvd2VyY2FzZTogdHJ1ZSxcclxuICAgICAgdHJpbTogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwYXNzd29yZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICB2ZXJpZnl0b2tlbjp7XHJcbiAgICAgIHR5cGU6U3RyaW5nLFxyXG4gICAgICBcclxuICAgIH0sXHJcbiAgICBhYm91dE1lOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJycsIC8vIERlZmF1bHQgZW1wdHkgc3RyaW5nIGlmIG5vdCBwcm92aWRlZFxyXG4gICAgfSxcclxuICAgIGxpbmtlZGluOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJycsXHJcbiAgICB9LFxyXG4gICAgZ2l0aHViOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgZGVmYXVsdDogJycsXHJcbiAgICB9LFxyXG4gICAgaW1hZ2VfdXJsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxyXG4gICAgfSxcclxuICAgIHB1YmxpY19pZDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBhdmF0YXJfdXJsOntcclxuICAgICAgdHlwZTpTdHJpbmcsXHJcbiAgICAgIHJlcXVpcmVkOmZhbHNlLFxyXG4gICAgfSxcclxuICAgIFxyXG4gIH0sXHJcbiAgeyB0aW1lc3RhbXBzOiB0cnVlIH1cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7XHJcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJsb3dlcmNhc2UiLCJ0cmltIiwicGFzc3dvcmQiLCJ2ZXJpZnl0b2tlbiIsImFib3V0TWUiLCJkZWZhdWx0IiwibGlua2VkaW4iLCJnaXRodWIiLCJpbWFnZV91cmwiLCJwdWJsaWNfaWQiLCJhdmF0YXJfdXJsIiwidGltZXN0YW1wcyIsIm1vZGVscyIsIlVzZXIiLCJtb2RlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/db.js":
/*!*************************!*\
  !*** ./src/utils/db.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connect = async ()=>{\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URL, {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            serverSelectionTimeoutMS: 20000\n        });\n        console.log(\"Connected to MongoDB\");\n    } catch (error) {\n        console.error(\"Error connecting to MongoDB:\", error);\n        throw error;\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvZGIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLFVBQVU7SUFDZCxJQUFJO1FBQ0YsTUFBTUQsdURBQWdCLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUyxFQUFFO1lBQzVDQyxpQkFBaUI7WUFDakJDLG9CQUFvQjtZQUNwQkMsMEJBQTBCO1FBQzVCO1FBQ0FDLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxNQUFNQTtJQUNSO0FBQ0Y7QUFFQSxpRUFBZVQsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2them1pLy4vc3JjL3V0aWxzL2RiLmpzP2QzODQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcclxuXHJcbmNvbnN0IGNvbm5lY3QgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QocHJvY2Vzcy5lbnYuTU9OR09fVVJMLCB7XHJcbiAgICAgIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcclxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxyXG4gICAgICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6IDIwMDAwLCAvLyAyMCBzZWNvbmRzIHRpbWVvdXRcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coXCJDb25uZWN0ZWQgdG8gTW9uZ29EQlwiKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGNvbm5lY3RpbmcgdG8gTW9uZ29EQjpcIiwgZXJyb3IpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdDtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiY29ubmVjdCIsInByb2Nlc3MiLCJlbnYiLCJNT05HT19VUkwiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVMiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/db.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/openid-client","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/object-hash","vendor-chunks/preact","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/lru-cache","vendor-chunks/cookie","vendor-chunks/oidc-token-hash","vendor-chunks/@panva","vendor-chunks/bcryptjs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fget_imagedata%2Froute&page=%2Fapi%2Fget_imagedata%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fget_imagedata%2Froute.ts&appDir=C%3A%5Cport%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5Cport&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();