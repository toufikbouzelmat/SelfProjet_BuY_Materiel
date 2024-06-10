"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/products/[productid]/page",{

/***/ "(app-pages-browser)/./src/app/products/[productid]/page.tsx":
/*!***********************************************!*\
  !*** ./src/app/products/[productid]/page.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../products */ \"(app-pages-browser)/./src/app/products/products.tsx\");\n/* harmony import */ var _app_components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/components/header */ \"(app-pages-browser)/./src/app/components/header.tsx\");\n/* harmony import */ var _components_ProductInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ProductInfo */ \"(app-pages-browser)/./src/app/products/[productid]/components/ProductInfo.tsx\");\n/* harmony import */ var _components_PhotoProducts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/PhotoProducts */ \"(app-pages-browser)/./src/app/products/[productid]/components/PhotoProducts.tsx\");\n/* harmony import */ var _components_ProductRecommendation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/ProductRecommendation */ \"(app-pages-browser)/./src/app/products/[productid]/components/ProductRecommendation.tsx\");\n/* harmony import */ var _app_components_ListDevice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/components/ListDevice */ \"(app-pages-browser)/./src/app/components/ListDevice.tsx\");\n/* harmony import */ var _app_components_About__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/components/About */ \"(app-pages-browser)/./src/app/components/About.tsx\");\n/* harmony import */ var _app_components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/app/components/Footer */ \"(app-pages-browser)/./src/app/components/Footer.tsx\");\n/* harmony import */ var _components_CardProduit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/CardProduit */ \"(app-pages-browser)/./src/app/products/[productid]/components/CardProduit.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // Importez vos produits\n\n\n\n\n\n\n\n\nfunction ProductPage() {\n    _s();\n    const { productid } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams)();\n    const product = _products__WEBPACK_IMPORTED_MODULE_2__[\"default\"].find((product)=>product.id === productid);\n    if (!product) {\n        (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.notFound)(); // Affiche une page 404 personnalisée si le produit n'est pas trouvé\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[100%] h-[100px] flex justify-center item\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[80%] h-full bg-[red]\"\n                }, void 0, false, {\n                    fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CardProduit__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                imgProduct: product.imgProduct,\n                title: product.title,\n                name: product.name,\n                description: product.description,\n                reverse: product.reverse\n            }, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductInfo__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_PhotoProducts__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductRecommendation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_ListDevice__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                    fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_About__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                    fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-20\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_Footer__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {}, void 0, false, {\n                    fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                    lineNumber: 50,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n                lineNumber: 49,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/goinfre/tbouzalm/SelfProjet_BuY_Materiel/src/app/products/[productid]/page.tsx\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(ProductPage, \"iN4VCgwfczThCnagHNikdviQ5VA=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_1__.useParams\n    ];\n});\n_c = ProductPage;\nvar _c;\n$RefreshReg$(_c, \"ProductPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZHVjdHMvW3Byb2R1Y3RpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDc0Q7QUFFakIsQ0FBQyx3QkFBd0I7QUFDakI7QUFDTTtBQUNJO0FBQ2dCO0FBQ2xCO0FBQ1Y7QUFDRTtBQUNNO0FBSXBDLFNBQVNXOztJQUNwQixNQUFNLEVBQUVDLFNBQVMsRUFBRSxHQUFHWiwwREFBU0E7SUFFL0IsTUFBTWEsVUFBVVgsaURBQVFBLENBQUNZLElBQUksQ0FBQyxDQUFDRCxVQUFZQSxRQUFRRSxFQUFFLEtBQUtIO0lBRTFELElBQUksQ0FBQ0MsU0FBUztRQUNWWix5REFBUUEsSUFBSSxvRUFBb0U7SUFDcEY7SUFFQSxxQkFDSSw4REFBQ2U7OzBCQUNHLDhEQUFDYiw4REFBTUE7Ozs7OzBCQUNQLDhEQUFDYTtnQkFBSUMsV0FBVTswQkFDWCw0RUFBQ0Q7b0JBQUlDLFdBQVU7Ozs7Ozs7Ozs7OzBCQUluQiw4REFBQ1AsZ0VBQVdBO2dCQUNSUSxZQUFZTCxRQUFRSyxVQUFVO2dCQUM5QkMsT0FBT04sUUFBUU0sS0FBSztnQkFDcEJDLE1BQU1QLFFBQVFPLElBQUk7Z0JBQ2xCQyxhQUFhUixRQUFRUSxXQUFXO2dCQUNoQ0MsU0FBU1QsUUFBUVMsT0FBTzs7Ozs7OzBCQUU1Qiw4REFBQ2xCLCtEQUFXQTs7Ozs7MEJBQ1osOERBQUNDLGlFQUFhQTs7Ozs7MEJBQ2QsOERBQUNDLHlFQUFxQkE7Ozs7OzBCQUN0Qiw4REFBQ1U7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNWLGtFQUFVQTs7Ozs7Ozs7OzswQkFFZiw4REFBQ1M7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNULDZEQUFLQTs7Ozs7Ozs7OzswQkFFViw4REFBQ1E7Z0JBQUlDLFdBQVU7MEJBQ1gsNEVBQUNSLDhEQUFNQTs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QjtHQXRDd0JFOztRQUNFWCxzREFBU0E7OztLQURYVyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2R1Y3RzL1twcm9kdWN0aWRdL3BhZ2UudHN4P2M4YzAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCB7IHVzZVBhcmFtcywgbm90Rm91bmQgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IENhcnRQcm9kdWN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FydFByb2R1Y3QnOyAvLyBNZXR0ZXogw6Agam91ciBsZSBjaGVtaW4gZW4gZm9uY3Rpb24gZGUgdm90cmUgc3RydWN0dXJlIGRlIHByb2pldFxuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vLi4vcHJvZHVjdHMnOyAvLyBJbXBvcnRleiB2b3MgcHJvZHVpdHNcbmltcG9ydCBIZWFkZXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IFByb2R1Y3RJbmZvIGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0SW5mbyc7XG5pbXBvcnQgUGhvdG9Qcm9kdWN0cyBmcm9tICcuL2NvbXBvbmVudHMvUGhvdG9Qcm9kdWN0cyc7XG5pbXBvcnQgUHJvZHVjdFJlY29tbWVuZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9Qcm9kdWN0UmVjb21tZW5kYXRpb24nO1xuaW1wb3J0IExpc3REZXZpY2UgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9MaXN0RGV2aWNlJztcbmltcG9ydCBBYm91dCBmcm9tICdAL2FwcC9jb21wb25lbnRzL0Fib3V0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnQC9hcHAvY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IENhcmRQcm9kdWl0IGZyb20gJy4vY29tcG9uZW50cy9DYXJkUHJvZHVpdCc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSgpIHtcbiAgICBjb25zdCB7IHByb2R1Y3RpZCB9ID0gdXNlUGFyYW1zKCk7XG5cbiAgICBjb25zdCBwcm9kdWN0ID0gcHJvZHVjdHMuZmluZCgocHJvZHVjdCkgPT4gcHJvZHVjdC5pZCA9PT0gcHJvZHVjdGlkKTtcblxuICAgIGlmICghcHJvZHVjdCkge1xuICAgICAgICBub3RGb3VuZCgpOyAvLyBBZmZpY2hlIHVuZSBwYWdlIDQwNCBwZXJzb25uYWxpc8OpZSBzaSBsZSBwcm9kdWl0IG4nZXN0IHBhcyB0cm91dsOpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVsxMDAlXSBoLVsxMDBweF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1bODAlXSBoLWZ1bGwgYmctW3JlZF0nPlxuXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxDYXJkUHJvZHVpdCBcbiAgICAgICAgICAgICAgICBpbWdQcm9kdWN0PXtwcm9kdWN0LmltZ1Byb2R1Y3R9IFxuICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0LnRpdGxlfSBcbiAgICAgICAgICAgICAgICBuYW1lPXtwcm9kdWN0Lm5hbWV9IFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtwcm9kdWN0LmRlc2NyaXB0aW9ufSBcbiAgICAgICAgICAgICAgICByZXZlcnNlPXtwcm9kdWN0LnJldmVyc2V9IFxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0SW5mbyAvPlxuICAgICAgICAgICAgPFBob3RvUHJvZHVjdHMgLz5cbiAgICAgICAgICAgIDxQcm9kdWN0UmVjb21tZW5kYXRpb24gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjBcIj5cbiAgICAgICAgICAgICAgICA8TGlzdERldmljZSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwXCI+XG4gICAgICAgICAgICAgICAgPEFib3V0IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMjBcIj5cbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VQYXJhbXMiLCJub3RGb3VuZCIsInByb2R1Y3RzIiwiSGVhZGVyIiwiUHJvZHVjdEluZm8iLCJQaG90b1Byb2R1Y3RzIiwiUHJvZHVjdFJlY29tbWVuZGF0aW9uIiwiTGlzdERldmljZSIsIkFib3V0IiwiRm9vdGVyIiwiQ2FyZFByb2R1aXQiLCJQcm9kdWN0UGFnZSIsInByb2R1Y3RpZCIsInByb2R1Y3QiLCJmaW5kIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWdQcm9kdWN0IiwidGl0bGUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJyZXZlcnNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/products/[productid]/page.tsx\n"));

/***/ })

});