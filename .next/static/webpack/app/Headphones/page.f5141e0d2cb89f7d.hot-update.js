"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Headphones/page",{

/***/ "(app-pages-browser)/./src/app/Headphones/components/HeadphoneProduct.tsx":
/*!************************************************************!*\
  !*** ./src/app/Headphones/components/HeadphoneProduct.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HeadphoneProduct; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction HeadphoneProduct(param) {\n    let { id, imgProduct, title, name, description, reverse } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const handleSeeProductClick = ()=>{};\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-[500px]  flex justify-center mt-16\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-[80%] h-full flex justify-between \".concat(reverse ? \"flex-row-reverse\" : \"\"),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"border-2 w-[500px]  h-full flex justify-center items-center bg-[#e9e8e8]\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                        src: imgProduct,\n                        alt: \"Product1Headphone\"\n                    }, void 0, false, {\n                        fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" w-[500px] h-full flex flex-col justify-center  gap-7\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[#D87D4A] ml-20 tracking-[.50em]\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                            className: \"font-bold ml-20\",\n                            children: name\n                        }, void 0, false, {\n                            fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n                            lineNumber: 21,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-[#c9c9c9] ml-20\",\n                            children: description\n                        }, void 0, false, {\n                            fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            href: {\n                                pathname: \"/\".concat(productid),\n                                query: {\n                                    imgProduct,\n                                    title,\n                                    name,\n                                    description,\n                                    reverse\n                                }\n                            },\n                            className: \"text-white text-center w-[160px] h-[48px] bg-[#D87D4A] mt-6 ml-20\",\n                            children: \"SEE PRODUCT\"\n                        }, void 0, false, {\n                            fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n            lineNumber: 15,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/Headphones/components/HeadphoneProduct.tsx\",\n        lineNumber: 14,\n        columnNumber: 9\n    }, this);\n}\n_s(HeadphoneProduct, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = HeadphoneProduct;\nvar _c;\n$RefreshReg$(_c, \"HeadphoneProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvSGVhZHBob25lcy9jb21wb25lbnRzL0hlYWRwaG9uZVByb2R1Y3QudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDOEI7QUFDRDtBQUNlO0FBRzdCLFNBQVNHLGlCQUFpQixLQUF3RDtRQUF4RCxFQUFDQyxFQUFFLEVBQUNDLFVBQVUsRUFBRUMsS0FBSyxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFPLEdBQXhEOztJQUVyQyxNQUFNQyxTQUFTUiwwREFBU0E7SUFDeEIsTUFBTVMsd0JBQXdCLEtBRTlCO0lBQ0EscUJBQ0ksOERBQUNDO1FBQUlDLFdBQVU7a0JBQ1gsNEVBQUNEO1lBQUlDLFdBQVcsdUNBQXlFLE9BQWxDSixVQUFVLHFCQUFxQjs7OEJBQ2xGLDhEQUFDRztvQkFBSUMsV0FBVTs4QkFDWCw0RUFBQ2Isa0RBQUtBO3dCQUFDYyxLQUFLVDt3QkFBWVUsS0FBSTs7Ozs7Ozs7Ozs7OEJBRWhDLDhEQUFDSDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUF5Q1A7Ozs7OztzQ0FDdkQsOERBQUNXOzRCQUFHSixXQUFVO3NDQUFtQk47Ozs7OztzQ0FDakMsOERBQUNXOzRCQUFFTCxXQUFVO3NDQUF3Qkw7Ozs7OztzQ0FDckMsOERBQUNQLGlEQUFJQTs0QkFBQ2tCLE1BQU07Z0NBQ0pDLFVBQVUsSUFBYyxPQUFWQztnQ0FDZEMsT0FBTztvQ0FBRWpCO29DQUFZQztvQ0FBT0M7b0NBQU1DO29DQUFhQztnQ0FBUTs0QkFDM0Q7NEJBQUdJLFdBQVU7c0NBQW9FOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt6RztHQXhCd0JWOztRQUVMRCxzREFBU0E7OztLQUZKQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0hlYWRwaG9uZXMvY29tcG9uZW50cy9IZWFkcGhvbmVQcm9kdWN0LnRzeD81ZjE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkcGhvbmVQcm9kdWN0KHtpZCxpbWdQcm9kdWN0LCB0aXRsZSwgbmFtZSwgZGVzY3JpcHRpb24sIHJldmVyc2UgfTogYW55KVxue1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IGhhbmRsZVNlZVByb2R1Y3RDbGljayA9ICgpID0+IHtcbiAgICAgICBcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzUwMHB4XSAgZmxleCBqdXN0aWZ5LWNlbnRlciBtdC0xNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B3LVs4MCVdIGgtZnVsbCBmbGV4IGp1c3RpZnktYmV0d2VlbiAke3JldmVyc2UgPyAnZmxleC1yb3ctcmV2ZXJzZScgOiAnJ31gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlci0yIHctWzUwMHB4XSAgaC1mdWxsIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGJnLVsjZTllOGU4XVwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtpbWdQcm9kdWN0fSBhbHQ9XCJQcm9kdWN0MUhlYWRwaG9uZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgdy1bNTAwcHhdIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyICBnYXAtN1wiPlxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bI0Q4N0Q0QV0gbWwtMjAgdHJhY2tpbmctWy41MGVtXVwiPnt0aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZm9udC1ib2xkIG1sLTIwXCI+e25hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1bI2M5YzljOV0gbWwtMjBcIj57ZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvJHtwcm9kdWN0aWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWVyeTogeyBpbWdQcm9kdWN0LCB0aXRsZSwgbmFtZSwgZGVzY3JpcHRpb24sIHJldmVyc2UgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH19IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC1jZW50ZXIgdy1bMTYwcHhdIGgtWzQ4cHhdIGJnLVsjRDg3RDRBXSBtdC02IG1sLTIwXCI+U0VFIFBST0RVQ1Q8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJJbWFnZSIsIkxpbmsiLCJ1c2VSb3V0ZXIiLCJIZWFkcGhvbmVQcm9kdWN0IiwiaWQiLCJpbWdQcm9kdWN0IiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyZXZlcnNlIiwicm91dGVyIiwiaGFuZGxlU2VlUHJvZHVjdENsaWNrIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0IiwiaDEiLCJoMyIsInAiLCJocmVmIiwicGF0aG5hbWUiLCJwcm9kdWN0aWQiLCJxdWVyeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Headphones/components/HeadphoneProduct.tsx\n"));

/***/ })

});