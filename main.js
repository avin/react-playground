(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/components/Accordion/AccordionItem/icons/plus.svg":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@svgr/webpack/lib?-svgo,+titleProp,+ref!./src/components/Accordion/AccordionItem/icons/plus.svg ***!
  \**********************************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function SvgPlus(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    width: 18,
    height: 18,
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M0 9.01461H18M9.01461 0V18",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeMiterlimit: 10
  })));
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgPlus);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "static/media/plus.d418a858.svg");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/Accordion.module.scss":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/components/Accordion/Accordion.module.scss ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Accordion_container__2Yjy2 > * + * {\n  border-top: 1px solid #e1e8ed; }\n", "",{"version":3,"sources":["webpack://src/components/Accordion/Accordion.module.scss","webpack://src/styles/_colors.scss"],"names":[],"mappings":"AAGA;EAEI,6BCWiB,EAAA","sourcesContent":["@import '~@/styles/variables';\n@import '~@/styles/mixins';\n\n.container {\n  & > * + * {\n    border-top: 1px solid $light-gray3;\n  }\n}\n","$black: #10161a;\n\n$dark-gray1: #182026;\n$dark-gray2: #202b33;\n$dark-gray3: #293742;\n$dark-gray4: #30404d;\n$dark-gray5: #394b59;\n\n$gray1: #5c7080;\n$gray2: #738694;\n$gray3: #8a9ba8;\n$gray4: #a7b6c2;\n$gray5: #bfccd6;\n\n$light-gray1: #ced9e0;\n$light-gray2: #d8e1e8;\n$light-gray3: #e1e8ed;\n$light-gray4: #ebf1f5;\n$light-gray5: #f5f8fa;\n\n$white: #ffffff;\n\n$blue1: #0e5a8a;\n$blue2: #106ba3;\n$blue3: #137cbd;\n$blue4: #2b95d6;\n$blue5: #48aff0;\n\n$green1: #0a6640;\n$green2: #0d8050;\n$green3: #0f9960;\n$green4: #15b371;\n$green5: #3dcc91;\n\n$orange1: #a66321;\n$orange2: #bf7326;\n$orange3: #d9822b;\n$orange4: #f29d49;\n$orange5: #ffb366;\n\n$red1: #a82a2a;\n$red2: #c23030;\n$red3: #db3737;\n$red4: #f55656;\n$red5: #ff7373;\n\n$vermilion1: #9e2b0e;\n$vermilion2: #b83211;\n$vermilion3: #d13913;\n$vermilion4: #eb532d;\n$vermilion5: #ff6e4a;\n\n$rose1: #a82255;\n$rose2: #c22762;\n$rose3: #db2c6f;\n$rose4: #f5498b;\n$rose5: #ff66a1;\n\n$violet1: #5c255c;\n$violet2: #752f75;\n$violet3: #8f398f;\n$violet4: #a854a8;\n$violet5: #c274c2;\n\n$indigo1: #5642a6;\n$indigo2: #634dbf;\n$indigo3: #7157d9;\n$indigo4: #9179f2;\n$indigo5: #ad99ff;\n\n$cobalt1: #1f4b99;\n$cobalt2: #2458b3;\n$cobalt3: #2965cc;\n$cobalt4: #4580e6;\n$cobalt5: #669eff;\n\n$turquoise1: #008075;\n$turquoise2: #00998c;\n$turquoise3: #00b3a4;\n$turquoise4: #14ccbd;\n$turquoise5: #2ee6d6;\n\n$forest1: #1d7324;\n$forest2: #238c2c;\n$forest3: #29a634;\n$forest4: #43bf4d;\n$forest5: #62d96b;\n\n$lime1: #728c23;\n$lime2: #87a629;\n$lime3: #9bbf30;\n$lime4: #b6d94c;\n$lime5: #d1f26d;\n\n$gold1: #a67908;\n$gold2: #bf8c0a;\n$gold3: #d99e0b;\n$gold4: #f2b824;\n$gold5: #ffc940;\n\n$sepia1: #63411e;\n$sepia2: #7d5125;\n$sepia3: #96622d;\n$sepia4: #b07b46;\n$sepia5: #c99765;\n\n$intent-primary: $blue3;\n$intent-success: $green3;\n$intent-warning: $orange3;\n$intent-danger: $red3;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Accordion_container__2Yjy2"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/AccordionItem/AccordionItem.module.scss":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/components/Accordion/AccordionItem/AccordionItem.module.scss ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".AccordionItem_title__3Q9bK {\n  font-weight: bold;\n  text-align: left; }\n  .AccordionItem_title__3Q9bK h3 {\n    line-height: 130%;\n    margin: 0; }\n\n.AccordionItem_content__3fiIj {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out; }\n  .AccordionItem_open__3UMI5 .AccordionItem_content__3fiIj {\n    height: auto; }\n\n.AccordionItem_inner__2mwrO {\n  padding: 0 20px 20px 20px; }\n\n.AccordionItem_head__3aW9p {\n  padding: 0;\n  color: inherit;\n  font: inherit;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: space-between;\n          justify-content: space-between;\n  width: 100%;\n  padding: 20px 0; }\n\n.AccordionItem_control__1ZBtW {\n  display: block;\n  margin-left: 20px; }\n\n.AccordionItem_controlIcon__1WCMw {\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n  color: #e1e8ed;\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n  transition: -webkit-transform 0.08s linear;\n  transition: transform 0.08s linear;\n  transition: transform 0.08s linear, -webkit-transform 0.08s linear; }\n  .AccordionItem_open__3UMI5 .AccordionItem_controlIcon__1WCMw {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n", "",{"version":3,"sources":["webpack://src/components/Accordion/AccordionItem/AccordionItem.module.scss","webpack://src/styles/_mixins.scss","webpack://src/styles/_colors.scss"],"names":[],"mappings":"AAMA;EACE,iBAAiB;EACjB,gBAAgB,EAAA;EAFlB;IAKI,iBAAiB;IACjB,SAAS,EAAA;;AAIb;EACE,SAAS;EACT,gBAAgB;EAChB,mCAAmC,EAAA;EAEnC;IACE,YAAY,EAAA;;AAIhB;EACE,yBAAyB,EAAA;;AAG3B;EC7BC,UAAU;EACV,cAAc;EACd,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;ED2Bd,qBAAa;EAAb,aAAa;EACb,2BAAmB;UAAnB,mBAAmB;EACnB,sCAA8B;UAA9B,8BAA8B;EAC9B,WAAW;EACX,eAAe,EAAA;;AAGjB;EACE,cAAc;EACd,iBAAiB,EAAA;;AAGnB;EAGE,WAFW;EAGX,YAHW;EAIX,iBAAiB;EACjB,cEnCmB;EFoCnB,+BAAuB;UAAvB,uBAAuB;EACvB,0CAAkC;EAAlC,kCAAkC;EAAlC,kEAAkC,EAAA;EAElC;IACE,gCAAwB;YAAxB,wBAAwB,EAAA","sourcesContent":["@import '~@/styles/variables';\n@import '~@/styles/mixins';\n\n.container {\n}\n\n.title {\n  font-weight: bold;\n  text-align: left;\n\n  h3 {\n    line-height: 130%;\n    margin: 0;\n  }\n}\n\n.content {\n  height: 0;\n  overflow: hidden;\n  transition: height 0.2s ease-in-out;\n\n  .open & {\n    height: auto;\n  }\n}\n\n.inner {\n  padding: 0 20px 20px 20px;\n}\n\n.head {\n  @include button-reset;\n\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 20px 0;\n}\n\n.control {\n  display: block;\n  margin-left: 20px;\n}\n\n.controlIcon {\n  $size: 18px;\n\n  width: $size;\n  height: $size;\n  margin-right: 4px;\n  color: $light-gray3;\n  transform: rotate(0deg);\n  transition: transform 0.08s linear;\n\n  .open & {\n    transform: rotate(45deg);\n  }\n}\n","@mixin button-reset {\n\tpadding: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n}\n","$black: #10161a;\n\n$dark-gray1: #182026;\n$dark-gray2: #202b33;\n$dark-gray3: #293742;\n$dark-gray4: #30404d;\n$dark-gray5: #394b59;\n\n$gray1: #5c7080;\n$gray2: #738694;\n$gray3: #8a9ba8;\n$gray4: #a7b6c2;\n$gray5: #bfccd6;\n\n$light-gray1: #ced9e0;\n$light-gray2: #d8e1e8;\n$light-gray3: #e1e8ed;\n$light-gray4: #ebf1f5;\n$light-gray5: #f5f8fa;\n\n$white: #ffffff;\n\n$blue1: #0e5a8a;\n$blue2: #106ba3;\n$blue3: #137cbd;\n$blue4: #2b95d6;\n$blue5: #48aff0;\n\n$green1: #0a6640;\n$green2: #0d8050;\n$green3: #0f9960;\n$green4: #15b371;\n$green5: #3dcc91;\n\n$orange1: #a66321;\n$orange2: #bf7326;\n$orange3: #d9822b;\n$orange4: #f29d49;\n$orange5: #ffb366;\n\n$red1: #a82a2a;\n$red2: #c23030;\n$red3: #db3737;\n$red4: #f55656;\n$red5: #ff7373;\n\n$vermilion1: #9e2b0e;\n$vermilion2: #b83211;\n$vermilion3: #d13913;\n$vermilion4: #eb532d;\n$vermilion5: #ff6e4a;\n\n$rose1: #a82255;\n$rose2: #c22762;\n$rose3: #db2c6f;\n$rose4: #f5498b;\n$rose5: #ff66a1;\n\n$violet1: #5c255c;\n$violet2: #752f75;\n$violet3: #8f398f;\n$violet4: #a854a8;\n$violet5: #c274c2;\n\n$indigo1: #5642a6;\n$indigo2: #634dbf;\n$indigo3: #7157d9;\n$indigo4: #9179f2;\n$indigo5: #ad99ff;\n\n$cobalt1: #1f4b99;\n$cobalt2: #2458b3;\n$cobalt3: #2965cc;\n$cobalt4: #4580e6;\n$cobalt5: #669eff;\n\n$turquoise1: #008075;\n$turquoise2: #00998c;\n$turquoise3: #00b3a4;\n$turquoise4: #14ccbd;\n$turquoise5: #2ee6d6;\n\n$forest1: #1d7324;\n$forest2: #238c2c;\n$forest3: #29a634;\n$forest4: #43bf4d;\n$forest5: #62d96b;\n\n$lime1: #728c23;\n$lime2: #87a629;\n$lime3: #9bbf30;\n$lime4: #b6d94c;\n$lime5: #d1f26d;\n\n$gold1: #a67908;\n$gold2: #bf8c0a;\n$gold3: #d99e0b;\n$gold4: #f2b824;\n$gold5: #ffc940;\n\n$sepia1: #63411e;\n$sepia2: #7d5125;\n$sepia3: #96622d;\n$sepia4: #b07b46;\n$sepia5: #c99765;\n\n$intent-primary: $blue3;\n$intent-success: $green3;\n$intent-warning: $orange3;\n$intent-danger: $red3;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"title": "AccordionItem_title__3Q9bK",
	"content": "AccordionItem_content__3fiIj",
	"open": "AccordionItem_open__3UMI5",
	"inner": "AccordionItem_inner__2mwrO",
	"head": "AccordionItem_head__3aW9p",
	"control": "AccordionItem_control__1ZBtW",
	"controlIcon": "AccordionItem_controlIcon__1WCMw"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Tabs/Tabs.module.scss":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/components/Tabs/Tabs.module.scss ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".Tabs_container__l5mn- {\n  position: relative;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .Tabs_container__l5mn- > button + button {\n    margin-left: 20px; }\n\n.Tabs_item__kCf1n {\n  padding: 0;\n  color: inherit;\n  font: inherit;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  position: relative;\n  padding-bottom: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.3px; }\n\n.Tabs_indicatorWrapper__3oLFc {\n  position: absolute;\n  top: 0;\n  width: 1px;\n  height: 30px;\n  -webkit-transform: translateX(0) translateY(0);\n          transform: translateX(0) translateY(0);\n  transition: height, transform, width, -webkit-transform;\n  transition-duration: 0.2s; }\n  .Tabs_indicatorWrapper__3oLFc.Tabs_noAnimation__1x7wz {\n    transition: none; }\n  .Tabs_indicatorWrapper__3oLFc .Tabs_indicator__17ASp {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 3px;\n    background-color: #137cbd; }\n", "",{"version":3,"sources":["webpack://src/components/Tabs/Tabs.module.scss","webpack://src/styles/_mixins.scss","webpack://src/styles/_colors.scss"],"names":[],"mappings":"AAGA;EACE,kBAAkB;EAClB,qBAAa;EAAb,aAAa;EACb,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB,EAAA;EAHnB;IAMI,iBAAiB,EAAA;;AAIrB;ECZC,UAAU;EACV,cAAc;EACd,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EDUd,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,sBAAsB,EAAA;;AAGxB;EACE,kBAAkB;EAClB,MAAM;EACN,UAAU;EACV,YAAY;EACZ,8CAAsC;UAAtC,sCAAsC;EACtC,uDAAuD;EACvD,yBAAyB,EAAA;EAP3B;IAUI,gBAAgB,EAAA;EAVpB;IAcI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,OAAO;IACP,WAAW;IACX,yBEnBW,EAAA","sourcesContent":["@import '~@/styles/_variables.scss';\n@import '~@/styles/_mixins.scss';\n\n.container {\n  position: relative;\n  display: flex;\n  user-select: none;\n\n  & > button + button {\n    margin-left: 20px;\n  }\n}\n\n.item {\n  @include button-reset;\n\n  position: relative;\n  padding-bottom: 6px;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  letter-spacing: -0.3px;\n}\n\n.indicatorWrapper {\n  position: absolute;\n  top: 0;\n  width: 1px;\n  height: 30px;\n  transform: translateX(0) translateY(0);\n  transition: height, transform, width, -webkit-transform;\n  transition-duration: 0.2s;\n\n  &.noAnimation {\n    transition: none;\n  }\n\n  .indicator {\n    position: absolute;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    height: 3px;\n    background-color: $blue3;\n  }\n}\n","@mixin button-reset {\n\tpadding: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n}\n","$black: #10161a;\n\n$dark-gray1: #182026;\n$dark-gray2: #202b33;\n$dark-gray3: #293742;\n$dark-gray4: #30404d;\n$dark-gray5: #394b59;\n\n$gray1: #5c7080;\n$gray2: #738694;\n$gray3: #8a9ba8;\n$gray4: #a7b6c2;\n$gray5: #bfccd6;\n\n$light-gray1: #ced9e0;\n$light-gray2: #d8e1e8;\n$light-gray3: #e1e8ed;\n$light-gray4: #ebf1f5;\n$light-gray5: #f5f8fa;\n\n$white: #ffffff;\n\n$blue1: #0e5a8a;\n$blue2: #106ba3;\n$blue3: #137cbd;\n$blue4: #2b95d6;\n$blue5: #48aff0;\n\n$green1: #0a6640;\n$green2: #0d8050;\n$green3: #0f9960;\n$green4: #15b371;\n$green5: #3dcc91;\n\n$orange1: #a66321;\n$orange2: #bf7326;\n$orange3: #d9822b;\n$orange4: #f29d49;\n$orange5: #ffb366;\n\n$red1: #a82a2a;\n$red2: #c23030;\n$red3: #db3737;\n$red4: #f55656;\n$red5: #ff7373;\n\n$vermilion1: #9e2b0e;\n$vermilion2: #b83211;\n$vermilion3: #d13913;\n$vermilion4: #eb532d;\n$vermilion5: #ff6e4a;\n\n$rose1: #a82255;\n$rose2: #c22762;\n$rose3: #db2c6f;\n$rose4: #f5498b;\n$rose5: #ff66a1;\n\n$violet1: #5c255c;\n$violet2: #752f75;\n$violet3: #8f398f;\n$violet4: #a854a8;\n$violet5: #c274c2;\n\n$indigo1: #5642a6;\n$indigo2: #634dbf;\n$indigo3: #7157d9;\n$indigo4: #9179f2;\n$indigo5: #ad99ff;\n\n$cobalt1: #1f4b99;\n$cobalt2: #2458b3;\n$cobalt3: #2965cc;\n$cobalt4: #4580e6;\n$cobalt5: #669eff;\n\n$turquoise1: #008075;\n$turquoise2: #00998c;\n$turquoise3: #00b3a4;\n$turquoise4: #14ccbd;\n$turquoise5: #2ee6d6;\n\n$forest1: #1d7324;\n$forest2: #238c2c;\n$forest3: #29a634;\n$forest4: #43bf4d;\n$forest5: #62d96b;\n\n$lime1: #728c23;\n$lime2: #87a629;\n$lime3: #9bbf30;\n$lime4: #b6d94c;\n$lime5: #d1f26d;\n\n$gold1: #a67908;\n$gold2: #bf8c0a;\n$gold3: #d99e0b;\n$gold4: #f2b824;\n$gold5: #ffc940;\n\n$sepia1: #63411e;\n$sepia2: #7d5125;\n$sepia3: #96622d;\n$sepia4: #b07b46;\n$sepia5: #c99765;\n\n$intent-primary: $blue3;\n$intent-success: $green3;\n$intent-warning: $orange3;\n$intent-danger: $red3;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "Tabs_container__l5mn-",
	"item": "Tabs_item__kCf1n",
	"indicatorWrapper": "Tabs_indicatorWrapper__3oLFc",
	"noAnimation": "Tabs_noAnimation__1x7wz",
	"indicator": "Tabs_indicator__17ASp"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/VerticalSelect/VerticalSelect.module.scss":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/components/VerticalSelect/VerticalSelect.module.scss ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".VerticalSelect_container__3GKII {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 40px; }\n\n.VerticalSelect_optionButton__3j0GY {\n  padding: 0;\n  color: inherit;\n  font: inherit;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  width: 60px;\n  height: 40px;\n  background-color: #e1e8ed;\n  border-radius: 8px;\n  transition: all 0.1s linear;\n  position: absolute; }\n  .VerticalSelect_optionButton__3j0GY:hover {\n    background-color: #ced9e0; }\n  .VerticalSelect_optionButton__3j0GY.VerticalSelect_additional__2IjbQ {\n    z-index: 1; }\n    .VerticalSelect_optionButton__3j0GY.VerticalSelect_additional__2IjbQ.VerticalSelect_enter__2sars {\n      left: 0 !important;\n      right: 0 !important; }\n    .VerticalSelect_optionButton__3j0GY.VerticalSelect_additional__2IjbQ.VerticalSelect_exit__3N1iF {\n      left: 0 !important;\n      right: 0 !important; }\n  .VerticalSelect_optionButton__3j0GY.VerticalSelect_active__3qlpW {\n    z-index: 2;\n    background-color: #137cbd;\n    color: #ffffff; }\n    .VerticalSelect_optionButton__3j0GY.VerticalSelect_active__3qlpW:hover {\n      background-color: #106ba3; }\n\n.VerticalSelect_background__2luSi {\n  position: absolute;\n  z-index: 0;\n  height: 40px;\n  background-color: #e1e8ed;\n  transition: all 0.1s linear;\n  border-radius: 8px;\n  box-shadow: 0 0 0 4px #e1e8ed; }\n  .VerticalSelect_background__2luSi.VerticalSelect_enter__2sars {\n    width: 60px !important;\n    left: 0 !important;\n    opacity: 0; }\n  .VerticalSelect_background__2luSi.VerticalSelect_enterActive__3rIED {\n    opacity: 1; }\n  .VerticalSelect_background__2luSi.VerticalSelect_exit__3N1iF {\n    width: 60px !important;\n    left: 0 !important;\n    opacity: 1; }\n  .VerticalSelect_background__2luSi.VerticalSelect_exitActive__12DiL {\n    opacity: 0; }\n", "",{"version":3,"sources":["webpack://src/components/VerticalSelect/VerticalSelect.module.scss","webpack://src/styles/_mixins.scss","webpack://src/styles/_colors.scss"],"names":[],"mappings":"AAQA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAPU;EAQV,YATW,EAAA;;AAYb;ECdC,UAAU;EACV,cAAc;EACd,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EDYd,WAdU;EAeV,YAhBW;EAiBX,yBEJmB;EFKnB,kBAhBgB;EAiBhB,2BAA2B;EAC3B,kBAAkB,EAAA;EARpB;IAWI,yBEZiB,EAAA;EFCrB;IAeI,UAAU,EAAA;IAfd;MAkBM,kBAAkB;MAClB,mBAAmB,EAAA;IAnBzB;MAsBM,kBAAkB;MAClB,mBAAmB,EAAA;EAvBzB;IA4BI,UAAU;IACV,yBEpBW;IFqBX,cEzBW,EAAA;IFLf;MAiCM,yBEzBS,EAAA;;AF8Bf;EACE,kBAAkB;EAClB,UAAU;EACV,YArDW;EAsDX,yBEzCmB;EF0CnB,2BAA2B;EAC3B,kBAtDgB;EAwDhB,6BE7CmB,EAAA;EFqCrB;IAWI,sBAAwB;IACxB,kBAAkB;IAClB,UAAU,EAAA;EAbd;IAgBI,UAAU,EAAA;EAhBd;IAmBI,sBAAwB;IACxB,kBAAkB;IAClB,UAAU,EAAA;EArBd;IAwBI,UAAU,EAAA","sourcesContent":["@import '~@/styles/variables';\n@import '~@/styles/mixins';\n\n$height: 40px;\n$width: 60px;\n$borderRadius: 8px;\n$backgroundColor: $light-gray3;\n\n.container {\n  position: relative;\n  display: inline-block;\n  width: $width;\n  height: $height;\n}\n\n.optionButton {\n  @include button-reset;\n\n  width: $width;\n  height: $height;\n  background-color: $light-gray3;\n  border-radius: $borderRadius;\n  transition: all 0.1s linear;\n  position: absolute;\n\n  &:hover{\n    background-color: $light-gray1;\n  }\n\n  &.additional {\n    z-index: 1;\n\n    &.enter {\n      left: 0 !important;\n      right: 0 !important;\n    }\n    &.exit {\n      left: 0 !important;\n      right: 0 !important;\n    }\n  }\n\n  &.active {\n    z-index: 2;\n    background-color: $blue3;\n    color: $white;\n\n    &:hover{\n      background-color: $blue2;\n    }\n  }\n}\n\n.background {\n  position: absolute;\n  z-index: 0;\n  height: $height;\n  background-color: $backgroundColor;\n  transition: all 0.1s linear;\n  border-radius: $borderRadius;\n\n  box-shadow: 0 0 0 4px $backgroundColor;\n\n  &.enter {\n    width: $width !important;\n    left: 0 !important;\n    opacity: 0;\n  }\n  &.enterActive {\n    opacity: 1;\n  }\n  &.exit {\n    width: $width !important;\n    left: 0 !important;\n    opacity: 1;\n  }\n  &.exitActive {\n    opacity: 0;\n  }\n}\n","@mixin button-reset {\n\tpadding: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n}\n","$black: #10161a;\n\n$dark-gray1: #182026;\n$dark-gray2: #202b33;\n$dark-gray3: #293742;\n$dark-gray4: #30404d;\n$dark-gray5: #394b59;\n\n$gray1: #5c7080;\n$gray2: #738694;\n$gray3: #8a9ba8;\n$gray4: #a7b6c2;\n$gray5: #bfccd6;\n\n$light-gray1: #ced9e0;\n$light-gray2: #d8e1e8;\n$light-gray3: #e1e8ed;\n$light-gray4: #ebf1f5;\n$light-gray5: #f5f8fa;\n\n$white: #ffffff;\n\n$blue1: #0e5a8a;\n$blue2: #106ba3;\n$blue3: #137cbd;\n$blue4: #2b95d6;\n$blue5: #48aff0;\n\n$green1: #0a6640;\n$green2: #0d8050;\n$green3: #0f9960;\n$green4: #15b371;\n$green5: #3dcc91;\n\n$orange1: #a66321;\n$orange2: #bf7326;\n$orange3: #d9822b;\n$orange4: #f29d49;\n$orange5: #ffb366;\n\n$red1: #a82a2a;\n$red2: #c23030;\n$red3: #db3737;\n$red4: #f55656;\n$red5: #ff7373;\n\n$vermilion1: #9e2b0e;\n$vermilion2: #b83211;\n$vermilion3: #d13913;\n$vermilion4: #eb532d;\n$vermilion5: #ff6e4a;\n\n$rose1: #a82255;\n$rose2: #c22762;\n$rose3: #db2c6f;\n$rose4: #f5498b;\n$rose5: #ff66a1;\n\n$violet1: #5c255c;\n$violet2: #752f75;\n$violet3: #8f398f;\n$violet4: #a854a8;\n$violet5: #c274c2;\n\n$indigo1: #5642a6;\n$indigo2: #634dbf;\n$indigo3: #7157d9;\n$indigo4: #9179f2;\n$indigo5: #ad99ff;\n\n$cobalt1: #1f4b99;\n$cobalt2: #2458b3;\n$cobalt3: #2965cc;\n$cobalt4: #4580e6;\n$cobalt5: #669eff;\n\n$turquoise1: #008075;\n$turquoise2: #00998c;\n$turquoise3: #00b3a4;\n$turquoise4: #14ccbd;\n$turquoise5: #2ee6d6;\n\n$forest1: #1d7324;\n$forest2: #238c2c;\n$forest3: #29a634;\n$forest4: #43bf4d;\n$forest5: #62d96b;\n\n$lime1: #728c23;\n$lime2: #87a629;\n$lime3: #9bbf30;\n$lime4: #b6d94c;\n$lime5: #d1f26d;\n\n$gold1: #a67908;\n$gold2: #bf8c0a;\n$gold3: #d99e0b;\n$gold4: #f2b824;\n$gold5: #ffc940;\n\n$sepia1: #63411e;\n$sepia2: #7d5125;\n$sepia3: #96622d;\n$sepia4: #b07b46;\n$sepia5: #c99765;\n\n$intent-primary: $blue3;\n$intent-success: $green3;\n$intent-warning: $orange3;\n$intent-danger: $red3;\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "VerticalSelect_container__3GKII",
	"optionButton": "VerticalSelect_optionButton__3j0GY",
	"additional": "VerticalSelect_additional__2IjbQ",
	"enter": "VerticalSelect_enter__2sars",
	"exit": "VerticalSelect_exit__3N1iF",
	"active": "VerticalSelect_active__3qlpW",
	"background": "VerticalSelect_background__2luSi",
	"enterActive": "VerticalSelect_enterActive__3rIED",
	"exitActive": "VerticalSelect_exitActive__12DiL"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/YesNoSelect/YesNoSelect.module.scss":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-7-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./src/components/YesNoSelect/YesNoSelect.module.scss ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".YesNoSelect_container__15vrZ {\n  position: relative;\n  width: 60px;\n  height: 40px;\n  background-color: #137cbd;\n  border-radius: 8px;\n  transition: all 0.2s ease-in-out;\n  -webkit-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .YesNoSelect_container__15vrZ.YesNoSelect_open__1oX2i {\n    width: 120px; }\n\n.YesNoSelect_button__3VDQ_ {\n  padding: 0;\n  color: inherit;\n  font: inherit;\n  background-color: transparent;\n  border: none;\n  cursor: pointer;\n  position: absolute;\n  width: 60px;\n  height: 40px;\n  left: 0;\n  top: 0;\n  z-index: 0;\n  background-color: #137cbd;\n  color: white;\n  transition: all 0.2s ease-in-out;\n  border-radius: 8px; }\n  .YesNoSelect_open__1oX2i .YesNoSelect_button__3VDQ_ {\n    left: 60px; }\n  .YesNoSelect_button__3VDQ_.YesNoSelect_active__3Fdau {\n    z-index: 1;\n    background-color: #ffffff;\n    color: #10161a; }\n    .YesNoSelect_open__1oX2i .YesNoSelect_button__3VDQ_.YesNoSelect_active__3Fdau {\n      left: 0; }\n", "",{"version":3,"sources":["webpack://src/components/YesNoSelect/YesNoSelect.module.scss","webpack://src/styles/_colors.scss","webpack://src/styles/_mixins.scss"],"names":[],"mappings":"AAQA;EACE,kBAAkB;EAClB,WAPU;EAQV,YAPW;EAQX,yBCYa;EDXb,kBAPiB;EAQjB,gCAT8B;EAU9B,yBAAiB;MAAjB,qBAAiB;UAAjB,iBAAiB,EAAA;EAPnB;IAUI,YAAe,EAAA;;AAInB;EErBC,UAAU;EACV,cAAc;EACd,aAAa;EACb,6BAA6B;EAC7B,YAAY;EACZ,eAAe;EFmBd,kBAAkB;EAClB,WAvBU;EAwBV,YAvBW;EAyBX,OAAO;EACP,MAAM;EACN,UAAU;EACV,yBCRa;EDSb,YAAY;EACZ,gCA7B8B;EA8B9B,kBA7BiB,EAAA;EA+BjB;IACE,UAnCQ,EAAA;EAmBZ;IAoBI,UAAU;IACV,yBCvBW;IDwBX,cC5CW,EAAA;ID8CX;MACE,OAAO,EAAA","sourcesContent":["@import '~@/styles/variables';\n@import '~@/styles/mixins';\n\n$width: 60px;\n$height: 40px;\n$transition: all .2s ease-in-out;\n$border-radius: 8px;\n\n.container {\n  position: relative;\n  width: $width;\n  height: $height;\n  background-color: $blue3;\n  border-radius: $border-radius;\n  transition: $transition;\n  user-select: none;\n\n  &.open{\n    width: $width*2;\n  }\n}\n\n.button {\n  @include button-reset;\n\n  position: absolute;\n  width: $width;\n  height: $height;\n\n  left: 0;\n  top: 0;\n  z-index: 0;\n  background-color: $blue3;\n  color: white;\n  transition: $transition;\n  border-radius: $border-radius;\n\n  .open & {\n    left: $width;\n  }\n\n  &.active {\n    z-index: 1;\n    background-color: $white;\n    color: $black;\n\n    .open & {\n      left: 0;\n    }\n  }\n\n  //.open &:not(.active) {\n  //  &:after {\n  //    content: '';\n  //    position: absolute;\n  //    left: -10px;\n  //    top: 0;\n  //    width: 20px;\n  //    height: 100%;\n  //    background-color: $blue3;\n  //    z-index: -1;\n  //  }\n  //}\n}\n","$black: #10161a;\n\n$dark-gray1: #182026;\n$dark-gray2: #202b33;\n$dark-gray3: #293742;\n$dark-gray4: #30404d;\n$dark-gray5: #394b59;\n\n$gray1: #5c7080;\n$gray2: #738694;\n$gray3: #8a9ba8;\n$gray4: #a7b6c2;\n$gray5: #bfccd6;\n\n$light-gray1: #ced9e0;\n$light-gray2: #d8e1e8;\n$light-gray3: #e1e8ed;\n$light-gray4: #ebf1f5;\n$light-gray5: #f5f8fa;\n\n$white: #ffffff;\n\n$blue1: #0e5a8a;\n$blue2: #106ba3;\n$blue3: #137cbd;\n$blue4: #2b95d6;\n$blue5: #48aff0;\n\n$green1: #0a6640;\n$green2: #0d8050;\n$green3: #0f9960;\n$green4: #15b371;\n$green5: #3dcc91;\n\n$orange1: #a66321;\n$orange2: #bf7326;\n$orange3: #d9822b;\n$orange4: #f29d49;\n$orange5: #ffb366;\n\n$red1: #a82a2a;\n$red2: #c23030;\n$red3: #db3737;\n$red4: #f55656;\n$red5: #ff7373;\n\n$vermilion1: #9e2b0e;\n$vermilion2: #b83211;\n$vermilion3: #d13913;\n$vermilion4: #eb532d;\n$vermilion5: #ff6e4a;\n\n$rose1: #a82255;\n$rose2: #c22762;\n$rose3: #db2c6f;\n$rose4: #f5498b;\n$rose5: #ff66a1;\n\n$violet1: #5c255c;\n$violet2: #752f75;\n$violet3: #8f398f;\n$violet4: #a854a8;\n$violet5: #c274c2;\n\n$indigo1: #5642a6;\n$indigo2: #634dbf;\n$indigo3: #7157d9;\n$indigo4: #9179f2;\n$indigo5: #ad99ff;\n\n$cobalt1: #1f4b99;\n$cobalt2: #2458b3;\n$cobalt3: #2965cc;\n$cobalt4: #4580e6;\n$cobalt5: #669eff;\n\n$turquoise1: #008075;\n$turquoise2: #00998c;\n$turquoise3: #00b3a4;\n$turquoise4: #14ccbd;\n$turquoise5: #2ee6d6;\n\n$forest1: #1d7324;\n$forest2: #238c2c;\n$forest3: #29a634;\n$forest4: #43bf4d;\n$forest5: #62d96b;\n\n$lime1: #728c23;\n$lime2: #87a629;\n$lime3: #9bbf30;\n$lime4: #b6d94c;\n$lime5: #d1f26d;\n\n$gold1: #a67908;\n$gold2: #bf8c0a;\n$gold3: #d99e0b;\n$gold4: #f2b824;\n$gold5: #ffc940;\n\n$sepia1: #63411e;\n$sepia2: #7d5125;\n$sepia3: #96622d;\n$sepia4: #b07b46;\n$sepia5: #c99765;\n\n$intent-primary: $blue3;\n$intent-success: $green3;\n$intent-warning: $orange3;\n$intent-danger: $red3;\n","@mixin button-reset {\n\tpadding: 0;\n\tcolor: inherit;\n\tfont: inherit;\n\tbackground-color: transparent;\n\tborder: none;\n\tcursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"container": "YesNoSelect_container__15vrZ",
	"open": "YesNoSelect_open__1oX2i",
	"button": "YesNoSelect_button__3VDQ_",
	"active": "YesNoSelect_active__3Fdau"
};
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/cosmos.scss":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/cosmos.scss ***!
  \************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".content {\n  padding: 20px;\n  background-color: white; }\n", "",{"version":3,"sources":["webpack://src/styles/cosmos.scss"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,uBAAuB,EAAA","sourcesContent":[".content {\n  padding: 20px;\n  background-color: white;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/styles/index.scss ***!
  \***********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html,\nbody,\n#root {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: #10161a;\n  font-family: sans-serif;\n  background-color: #f5f8fa; }\n", "",{"version":3,"sources":["webpack://src/styles/index.scss","webpack://src/styles/_colors.scss"],"names":[],"mappings":"AAGA;;;EAGE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,UAAU;EACV,cCVa;EDWb,uBAAuB;EACvB,yBCMmB,EAAA","sourcesContent":["@import 'variables';\n@import 'mixins';\n\nhtml,\nbody,\n#root {\n  width: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  color: $black;\n  font-family: sans-serif;\n  background-color: $light-gray5;\n}\n","$black: #10161a;\n\n$dark-gray1: #182026;\n$dark-gray2: #202b33;\n$dark-gray3: #293742;\n$dark-gray4: #30404d;\n$dark-gray5: #394b59;\n\n$gray1: #5c7080;\n$gray2: #738694;\n$gray3: #8a9ba8;\n$gray4: #a7b6c2;\n$gray5: #bfccd6;\n\n$light-gray1: #ced9e0;\n$light-gray2: #d8e1e8;\n$light-gray3: #e1e8ed;\n$light-gray4: #ebf1f5;\n$light-gray5: #f5f8fa;\n\n$white: #ffffff;\n\n$blue1: #0e5a8a;\n$blue2: #106ba3;\n$blue3: #137cbd;\n$blue4: #2b95d6;\n$blue5: #48aff0;\n\n$green1: #0a6640;\n$green2: #0d8050;\n$green3: #0f9960;\n$green4: #15b371;\n$green5: #3dcc91;\n\n$orange1: #a66321;\n$orange2: #bf7326;\n$orange3: #d9822b;\n$orange4: #f29d49;\n$orange5: #ffb366;\n\n$red1: #a82a2a;\n$red2: #c23030;\n$red3: #db3737;\n$red4: #f55656;\n$red5: #ff7373;\n\n$vermilion1: #9e2b0e;\n$vermilion2: #b83211;\n$vermilion3: #d13913;\n$vermilion4: #eb532d;\n$vermilion5: #ff6e4a;\n\n$rose1: #a82255;\n$rose2: #c22762;\n$rose3: #db2c6f;\n$rose4: #f5498b;\n$rose5: #ff66a1;\n\n$violet1: #5c255c;\n$violet2: #752f75;\n$violet3: #8f398f;\n$violet4: #a854a8;\n$violet5: #c274c2;\n\n$indigo1: #5642a6;\n$indigo2: #634dbf;\n$indigo3: #7157d9;\n$indigo4: #9179f2;\n$indigo5: #ad99ff;\n\n$cobalt1: #1f4b99;\n$cobalt2: #2458b3;\n$cobalt3: #2965cc;\n$cobalt4: #4580e6;\n$cobalt5: #669eff;\n\n$turquoise1: #008075;\n$turquoise2: #00998c;\n$turquoise3: #00b3a4;\n$turquoise4: #14ccbd;\n$turquoise5: #2ee6d6;\n\n$forest1: #1d7324;\n$forest2: #238c2c;\n$forest3: #29a634;\n$forest4: #43bf4d;\n$forest5: #62d96b;\n\n$lime1: #728c23;\n$lime2: #87a629;\n$lime3: #9bbf30;\n$lime4: #b6d94c;\n$lime5: #d1f26d;\n\n$gold1: #a67908;\n$gold2: #bf8c0a;\n$gold3: #d99e0b;\n$gold4: #f2b824;\n$gold5: #ffc940;\n\n$sepia1: #63411e;\n$sepia2: #7d5125;\n$sepia3: #96622d;\n$sepia4: #b07b46;\n$sepia5: #c99765;\n\n$intent-primary: $blue3;\n$intent-success: $green3;\n$intent-warning: $orange3;\n$intent-danger: $red3;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/components/Accordion/Accordion.fixture.tsx":
/*!********************************************************!*\
  !*** ./src/components/Accordion/Accordion.fixture.tsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordion */ "./src/components/Accordion/Accordion.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var blocks = [{
  id: 'b1',
  title: 'Title 1',
  content: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    })]
  })
}, {
  id: 'b2',
  title: 'Title 2',
  content: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    })]
  })
}, {
  id: 'b3',
  title: 'Title 3',
  content: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
      children: "Content"
    })]
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("div", {
    className: "content",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
      blocks: blocks
    })
  });
});

/***/ }),

/***/ "./src/components/Accordion/Accordion.module.scss":
/*!********************************************************!*\
  !*** ./src/components/Accordion/Accordion.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./Accordion.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/Accordion.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./Accordion.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/Accordion.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./Accordion.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/Accordion.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Accordion/Accordion.tsx":
/*!************************************************!*\
  !*** ./src/components/Accordion/Accordion.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Accordion.module.scss */ "./src/components/Accordion/Accordion.module.scss");
/* harmony import */ var _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Accordion_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AccordionItem_AccordionItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AccordionItem/AccordionItem */ "./src/components/Accordion/AccordionItem/AccordionItem.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






var Accordion = function Accordion(_ref) {
  var blocks = _ref.blocks;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      openId = _useState2[0],
      setOpenId = _useState2[1];

  var handleClickBlock = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (e) {
    var _ref2 = e.currentTarget.dataset,
        blockId = _ref2.blockId;
    setOpenId(function (val) {
      if (val === blockId) {
        return null;
      }

      return blockId;
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
    className: _Accordion_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container,
    children: blocks.map(function (_ref3) {
      var title = _ref3.title,
          content = _ref3.content,
          id = _ref3.id;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(_AccordionItem_AccordionItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: title,
        content: content,
        id: id,
        open: id === openId,
        onClick: handleClickBlock
      }, id);
    })
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/components/Accordion/AccordionItem/AccordionItem.module.scss":
/*!**************************************************************************!*\
  !*** ./src/components/Accordion/AccordionItem/AccordionItem.module.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./AccordionItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/AccordionItem/AccordionItem.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./AccordionItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/AccordionItem/AccordionItem.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../../node_modules/postcss-loader/src??postcss!../../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./AccordionItem.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Accordion/AccordionItem/AccordionItem.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Accordion/AccordionItem/AccordionItem.tsx":
/*!******************************************************************!*\
  !*** ./src/components/Accordion/AccordionItem/AccordionItem.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccordionItem.module.scss */ "./src/components/Accordion/AccordionItem/AccordionItem.module.scss");
/* harmony import */ var _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _svgr_webpack_svgo_titleProp_ref_icons_plus_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @svgr/webpack?-svgo,+titleProp,+ref!./icons/plus.svg */ "./node_modules/@svgr/webpack/lib/index.js?-svgo,+titleProp,+ref!./src/components/Accordion/AccordionItem/icons/plus.svg");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var AccordionItem = function AccordionItem(_ref) {
  var id = _ref.id,
      title = _ref.title,
      content = _ref.content,
      onClick = _ref.onClick,
      open = _ref.open;
  var measureRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var contentRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var changeHeightTimerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (changeHeightTimerRef.current) {
      clearTimeout(changeHeightTimerRef.current);
    }

    if (contentRef.current && measureRef.current) {
      if (open) {
        contentRef.current.style.height = "".concat(measureRef.current.clientHeight, "px");
        changeHeightTimerRef.current = setTimeout(function () {
          if (contentRef.current) {
            contentRef.current.style.height = 'auto';
          }
        }, 200); // 200 is animation duration
      } else {
        contentRef.current.style.height = "".concat(measureRef.current.clientHeight, "px"); // wait change in DOM tree

        void contentRef.current.offsetWidth;
        contentRef.current.style.height = "0px";
      }
    }
  }, [open]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.container, 'accordion-item-container', Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.open, open)),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("button", {
      className: _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.head,
      type: "button",
      onClick: onClick,
      "data-block-id": id,
      "data-state": open ? 'open' : 'closed',
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        className: _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.title,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("h3", {
          children: title
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        className: _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.control,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_svgr_webpack_svgo_titleProp_ref_icons_plus_svg__WEBPACK_IMPORTED_MODULE_4__["ReactComponent"], {
          className: _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.controlIcon
        })
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      className: _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content,
      ref: contentRef,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        ref: measureRef,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
          className: _AccordionItem_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.inner,
          children: content
        })
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (AccordionItem);

/***/ }),

/***/ "./src/components/ClickOutside/ClickOutside.fixture.tsx":
/*!**************************************************************!*\
  !*** ./src/components/ClickOutside/ClickOutside.fixture.tsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ClickOutside__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ClickOutside */ "./src/components/ClickOutside/ClickOutside.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isActive = _useState2[0],
      setIsActive = _useState2[1];

  var handleClick = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsActive(true);
  }, []);
  var handleClickOutside = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function () {
    setIsActive(false);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    className: "content",
    style: {
      display: 'flex'
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_ClickOutside__WEBPACK_IMPORTED_MODULE_2__["default"], {
      onClick: handleClick,
      onClickOutside: handleClickOutside,
      style: {
        backgroundColor: isActive ? '#0f0' : '#f00',
        width: 150,
        height: 200
      },
      children: "ClickOutside here"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      style: {
        backgroundColor: '#ff0',
        width: 150,
        height: 200
      },
      children: "other area"
    })]
  });
});

/***/ }),

/***/ "./src/components/ClickOutside/ClickOutside.tsx":
/*!******************************************************!*\
  !*** ./src/components/ClickOutside/ClickOutside.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




var isTouch = false;

var ClickOutside = function ClickOutside(_ref) {
  var _ref$container = _ref.container,
      Container = _ref$container === void 0 ? 'div' : _ref$container,
      children = _ref.children,
      onClickOutside = _ref.onClickOutside,
      props = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["container", "children", "onClickOutside"]);

  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var handle = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    if (e.type === 'touchend') {
      isTouch = true;
    }

    if (e.type === 'click' && isTouch) {
      return;
    }

    var el = containerRef.current;

    if (el && !el.contains(e.target)) {
      onClickOutside(e);
    }
  }, [onClickOutside]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    document.addEventListener('touchend', handle, true);
    document.addEventListener('click', handle, true);
    return function () {
      document.removeEventListener('touchend', handle, true);
      document.removeEventListener('click', handle, true);
    };
  }, [handle]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(Container, Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    ref: containerRef,
    children: children
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ClickOutside);

/***/ }),

/***/ "./src/components/Tabs/Tabs.fixture.tsx":
/*!**********************************************!*\
  !*** ./src/components/Tabs/Tabs.fixture.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tabs */ "./src/components/Tabs/Tabs.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





var tabs = [{
  value: 'tab1',
  label: 'Tab1'
}, {
  value: 'tab2',
  label: 'Tab2'
}, {
  value: 'tab3',
  label: 'Tab3'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('tab1'),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      activeTab = _useState2[0],
      setActiveTab = _useState2[1];

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    className: "content",
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      items: tabs,
      onChange: setActiveTab,
      value: activeTab
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      style: {
        paddingTop: 20
      },
      children: ["selected tab: ", activeTab]
    })]
  });
});

/***/ }),

/***/ "./src/components/Tabs/Tabs.module.scss":
/*!**********************************************!*\
  !*** ./src/components/Tabs/Tabs.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./Tabs.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Tabs/Tabs.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./Tabs.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Tabs/Tabs.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./Tabs.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/Tabs/Tabs.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Tabs/Tabs.tsx":
/*!**************************************!*\
  !*** ./src/components/Tabs/Tabs.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Tabs.module.scss */ "./src/components/Tabs/Tabs.module.scss");
/* harmony import */ var _Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var Tabs = function Tabs(_ref) {
  var items = _ref.items,
      onChange = _ref.onChange,
      value = _ref.value,
      _ref$activeItemClassN = _ref.activeItemClassName,
      activeItemClassName = _ref$activeItemClassN === void 0 ? 'active' : _ref$activeItemClassN,
      itemClassName = _ref.itemClassName;
  var indicatorWrapperRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({}),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      indicatorWrapperStyle = _useState2[0],
      setIndicatorWrapperStyle = _useState2[1];

  var setIndicatorPosition = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    var _containerRef$current;

    var activeButton = (_containerRef$current = containerRef.current) === null || _containerRef$current === void 0 ? void 0 : _containerRef$current.querySelector('.active');
    var newIndicatorWrapperStyle = {
      display: 'none'
    };

    if (activeButton !== null && activeButton !== undefined) {
      var clientHeight = activeButton.clientHeight,
          clientWidth = activeButton.clientWidth,
          offsetLeft = activeButton.offsetLeft,
          offsetTop = activeButton.offsetTop;
      newIndicatorWrapperStyle = {
        height: clientHeight,
        transform: "translateX(".concat(Math.floor(offsetLeft), "px) translateY(").concat(Math.floor(offsetTop), "px)"),
        width: clientWidth
      };
    }

    setIndicatorWrapperStyle(newIndicatorWrapperStyle);
  }, []);
  var handleClickItem = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    onChange(e.currentTarget.dataset.value);
  }, [onChange]);

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState4 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState3, 2),
      isDisabledAnimation = _useState4[0],
      setIsDisabledAnimation = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setIndicatorPosition();
    var timerId = setTimeout(function () {
      setIsDisabledAnimation(false);
    }, 10);
    return function () {
      clearTimeout(timerId);
    }; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
    className: _Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    ref: containerRef,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.indicatorWrapper, Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.noAnimation, isDisabledAnimation)),
      ref: indicatorWrapperRef,
      style: indicatorWrapperStyle,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        className: _Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.indicator
      })
    }), items.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
        type: "button",
        onClick: handleClickItem,
        "data-value": item.value,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_Tabs_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.item, itemClassName, Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
          active: item.value === value
        }, activeItemClassName, item.value === value)),
        children: item.label
      }, item.value);
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Tabs);

/***/ }),

/***/ "./src/components/VerticalSelect/VerticalSelect.fixture.tsx":
/*!******************************************************************!*\
  !*** ./src/components/VerticalSelect/VerticalSelect.fixture.tsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _VerticalSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalSelect */ "./src/components/VerticalSelect/VerticalSelect.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





var options = [{
  label: 'Eng',
  value: 'eng'
}, {
  label: 'Rus',
  value: 'rus'
}, {
  label: 'Esp',
  value: 'esp'
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('eng'),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var handleSelect = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (v) {
    setValue(v);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    className: "content",
    style: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column'
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_VerticalSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      options: options,
      value: value,
      onSelect: handleSelect,
      buttonWidth: 60
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("hr", {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_VerticalSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      options: options,
      value: value,
      onSelect: handleSelect,
      buttonWidth: 60,
      direction: "right"
    })]
  });
});

/***/ }),

/***/ "./src/components/VerticalSelect/VerticalSelect.module.scss":
/*!******************************************************************!*\
  !*** ./src/components/VerticalSelect/VerticalSelect.module.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./VerticalSelect.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/VerticalSelect/VerticalSelect.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./VerticalSelect.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/VerticalSelect/VerticalSelect.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./VerticalSelect.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/VerticalSelect/VerticalSelect.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/VerticalSelect/VerticalSelect.tsx":
/*!**********************************************************!*\
  !*** ./src/components/VerticalSelect/VerticalSelect.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VerticalSelect.module.scss */ "./src/components/VerticalSelect/VerticalSelect.module.scss");
/* harmony import */ var _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _components_ClickOutside_ClickOutside__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ClickOutside/ClickOutside */ "./src/components/ClickOutside/ClickOutside.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);










var VerticalSelect = function VerticalSelect(_ref) {
  var options = _ref.options,
      value = _ref.value,
      onSelect = _ref.onSelect,
      buttonWidth = _ref.buttonWidth,
      _ref$spaceBetween = _ref.spaceBetween,
      spaceBetween = _ref$spaceBetween === void 0 ? 10 : _ref$spaceBetween,
      _ref$direction = _ref.direction,
      direction = _ref$direction === void 0 ? 'left' : _ref$direction;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var optionsCount = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return options.length;
  }, [options]);
  var activeOption = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return options.find(function (i) {
      return i.value === value;
    }) || options[0];
  }, [options, value]);
  var optionsWithoutActive = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
    return options.filter(function (option) {
      return option !== activeOption;
    });
  }, [options, activeOption]);
  var handleClickOption = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function (e) {
    setIsOpen(function (v) {
      return !v;
    });
    onSelect(e.currentTarget.dataset.value);
  }, [onSelect]);
  var handleClickOutside = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    setIsOpen(false);
  }, []);
  var buttonPositionName = direction === 'left' ? 'right' : 'left';
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(_components_ClickOutside_ClickOutside__WEBPACK_IMPORTED_MODULE_6__["default"], {
    className: _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container,
    onClickOutside: handleClickOutside,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
      type: "button",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.optionButton, _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active),
      onClick: handleClickOption,
      "data-value": activeOption.value,
      children: activeOption.label
    }), optionsWithoutActive.map(function (option, idx) {
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], {
        in: isOpen,
        timeout: 100,
        classNames: _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a,
        unmountOnExit: true,
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("button", {
          type: "button",
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.optionButton, _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.additional),
          "data-value": option.value,
          onClick: handleClickOption,
          style: Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, buttonPositionName, (idx + 1) * (buttonWidth + spaceBetween)),
          children: option.label
        }, option.value)
      });
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_transition_group__WEBPACK_IMPORTED_MODULE_5__["CSSTransition"], {
      in: isOpen,
      timeout: 100,
      classNames: _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a,
      unmountOnExit: true,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])("div", {
        className: _VerticalSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.background,
        style: {
          width: optionsCount * (buttonWidth + spaceBetween) - spaceBetween,
          left: direction === 'left' ? -(optionsCount - 1) * (buttonWidth + spaceBetween) : 0
        }
      })
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (VerticalSelect);

/***/ }),

/***/ "./src/components/YesNoSelect/YesNoSelect.fixture.tsx":
/*!************************************************************!*\
  !*** ./src/components/YesNoSelect/YesNoSelect.fixture.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _YesNoSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./YesNoSelect */ "./src/components/YesNoSelect/YesNoSelect.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      isYes = _useState2[0],
      setIsYes = _useState2[1];

  var handleChange = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(function (val) {
    setIsYes(val);
  }, []);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
    className: "content",
    style: {
      backgroundColor: '#ddd'
    },
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(_YesNoSelect__WEBPACK_IMPORTED_MODULE_2__["default"], {
      yes: isYes,
      onChange: handleChange
    })
  });
});

/***/ }),

/***/ "./src/components/YesNoSelect/YesNoSelect.module.scss":
/*!************************************************************!*\
  !*** ./src/components/YesNoSelect/YesNoSelect.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./YesNoSelect.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/YesNoSelect/YesNoSelect.module.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./YesNoSelect.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/YesNoSelect/YesNoSelect.module.scss",
      function () {
        content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-7-1!../../../node_modules/postcss-loader/src??postcss!../../../node_modules/resolve-url-loader??ref--5-oneOf-7-3!../../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-7-4!./YesNoSelect.module.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/YesNoSelect/YesNoSelect.module.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/YesNoSelect/YesNoSelect.tsx":
/*!****************************************************!*\
  !*** ./src/components/YesNoSelect/YesNoSelect.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./YesNoSelect.module.scss */ "./src/components/YesNoSelect/YesNoSelect.module.scss");
/* harmony import */ var _YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);








var YesNoSelect = function YesNoSelect(_ref) {
  var yes = _ref.yes,
      onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var yesButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var noButtonRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  var handleClickYes = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    onChange(true);
    setIsOpen(function (v) {
      return !v;
    });
  }, [onChange]);
  var handleClickNo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(function () {
    onChange(false);
    setIsOpen(function (v) {
      return !v;
    });
  }, [onChange]);
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])("div", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.container, Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.open, isOpen)),
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
      type: "button",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button, Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active, yes)),
      onClick: handleClickYes,
      tabIndex: !isOpen && !yes ? -1 : undefined,
      ref: yesButtonRef,
      children: "Yes"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("button", {
      type: "button",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_3__["default"])(_YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.button, Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _YesNoSelect_module_scss__WEBPACK_IMPORTED_MODULE_4___default.a.active, !yes)),
      onClick: handleClickNo,
      tabIndex: !isOpen && yes ? -1 : undefined,
      ref: noButtonRef,
      children: "No"
    })]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (YesNoSelect);

/***/ }),

/***/ "./src/cosmos.global.ts":
/*!******************************!*\
  !*** ./src/cosmos.global.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/browser */ "./src/utils/browser.ts");

Object(_utils_browser__WEBPACK_IMPORTED_MODULE_0__["prepareBrowser"])();

/***/ }),

/***/ "./src/styles/cosmos.scss":
/*!********************************!*\
  !*** ./src/styles/cosmos.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./cosmos.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/cosmos.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./cosmos.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/cosmos.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./cosmos.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/cosmos.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }

  var p;

  for (p in a) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (a[p] !== b[p]) {
      return false;
    }
  }

  for (p in b) {
    if (isNamedExport && p === 'default') {
      // eslint-disable-next-line no-continue
      continue;
    }

    if (!a[p]) {
      return false;
    }
  }

  return true;
};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss",
      function () {
        content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!../../node_modules/postcss-loader/src??postcss!../../node_modules/resolve-url-loader??ref--5-oneOf-6-3!../../node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./index.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/styles/index.scss");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.i, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./src/utils/browser.ts":
/*!******************************!*\
  !*** ./src/utils/browser.ts ***!
  \******************************/
/*! exports provided: betterFocus, prepareBrowser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "betterFocus", function() { return betterFocus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prepareBrowser", function() { return prepareBrowser; });
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");


var TAB_KEY_CODE = 9;

var FocusEngine = /*#__PURE__*/function () {
  function FocusEngine(container, className) {
    var _this = this;

    Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FocusEngine);

    this.isRunning = false;
    this.container = void 0;
    this.className = void 0;

    this.handleKeyDown = function (e) {
      if (e.which === TAB_KEY_CODE) {
        _this.reset();

        _this.container.addEventListener('mousedown', _this.handleMouseDown);
      }
    };

    this.handleMouseDown = function () {
      _this.reset();

      _this.container.classList.add(_this.className);

      _this.container.addEventListener('keydown', _this.handleKeyDown);
    };

    this.container = container;
    this.className = className;
  }

  Object(_home_runner_work_react_playground_react_playground_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FocusEngine, [{
    key: "isActive",
    value: function isActive() {
      return this.isRunning;
    }
  }, {
    key: "start",
    value: function start() {
      this.container.addEventListener('mousedown', this.handleMouseDown);
      this.isRunning = true;
    }
  }, {
    key: "stop",
    value: function stop() {
      this.reset();
      this.isRunning = false;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.container.classList.remove(this.className);
      this.container.removeEventListener('keydown', this.handleKeyDown);
      this.container.removeEventListener('mousedown', this.handleMouseDown);
    }
  }]);

  return FocusEngine;
}();

function betterFocus(el, className) {
  return new FocusEngine(el, className);
}
function prepareBrowser() {
  var focusEngine = betterFocus(document.documentElement, 'focus-disabled');
  focusEngine.start();
}

/***/ }),

/***/ 0:
/*!***********************************************************************************************************************************************************!*\
  !*** multi ./node_modules/react-cosmos/dist/plugins/webpack/client/reactDevtoolsHook.js ./node_modules/react-cosmos/dist/plugins/webpack/client/index.js ***!
  \***********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/runner/work/react-playground/react-playground/node_modules/react-cosmos/dist/plugins/webpack/client/reactDevtoolsHook.js */"./node_modules/react-cosmos/dist/plugins/webpack/client/reactDevtoolsHook.js");
module.exports = __webpack_require__(/*! /home/runner/work/react-playground/react-playground/node_modules/react-cosmos/dist/plugins/webpack/client/index.js */"./node_modules/react-cosmos/dist/plugins/webpack/client/index.js");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.js.map