"use strict";
(self["webpackChunkminesweeper"] = self["webpackChunkminesweeper"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".theme-light {\n  --font-color: #fff;\n  --background-color: #f3f3f3;\n  --display-color: rgb(16, 182, 127);\n  --display-font-color: rgb(144, 8, 222);\n  --button-color: rgb(93, 0, 255);\n  --font-header-color: #373737;\n  --border-radius: 5px;\n  --border-color: #656565;\n  --cell-deafult-color: rgb(92, 196, 196);\n  --cell-flagged-color: rgb(191, 127, 255);\n  --cell-opened-color: rgba(236, 254, 254,0.1);\n  --cell-mined-color: rgba(255, 0, 0, 1) !important;\n  --cell-opacity: 1;\n}\n\n.theme-dark {\n  --background-color: #1a0018;\n  --display-color: rgb(15, 128, 90);\n  --display-font-color: rgb(144, 8, 222);\n  --button-color: rgb(168, 5, 205);\n  --font-color: #c3c3c3;\n  --font-header-color: #b0b0b0;\n  --border-radius: 5px;\n  --border-color: #a6a6a6;\n  --cell-deafult-color: rgb(4, 75, 150);\n  --cell-flagged-color: rgb(191, 127, 255);\n  --cell-opened-color: rgba(0, 55, 100, 0.3);\n  --cell-mined-color: rgba(255, 0, 0, 1) !important;\n  --cell-opacity: 0.7;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  background-color: var(--background-color);\n  transition: background-color linear 0.4s;\n}\n\n.app__buttons {\n  display: flex;\n  justify-content: space-between;\n}\n.app__display {\n  padding-top: 20px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  row-gap: 10px;\n}\n\n.wrapper {\n  position: relative;\n  max-width: 800px;\n  padding: 0 20px;\n  margin: 0 auto;\n  padding-top: 40px;\n}\n\n.display {\n  min-height: 90px;\n  color: var(--display-color);\n  font-size: 36px;\n  text-align: center;\n}\n.display-steps {\n  color: var(--display-font-color);\n  font-size: 36px;\n  text-align: center;\n}\n@media screen and (max-width: 500px) {\n  .display-steps {\n    font-size: 24px;\n  }\n}\n.display-timer {\n  min-width: 180px;\n  color: var(--display-font-color);\n  font-size: 36px;\n  text-align: center;\n}\n@media screen and (max-width: 500px) {\n  .display-timer {\n    font-size: 24px;\n  }\n}\n@media screen and (max-width: 500px) {\n  .display {\n    min-height: 70px;\n    font-size: 24px;\n  }\n}\n\n.board {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 100%;\n  min-height: 100%;\n}\n\n.score-table {\n  position: absolute;\n  right: 0;\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  background-color: var(--button-color);\n  color: var(--font-color);\n  border-radius: 8px;\n  transform: translate(0, -120%);\n  transition: all linear 0.3s;\n  z-index: 12;\n  opacity: 0;\n}\n.score-table__row {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-bottom: 20px;\n  background-color: var(--cell-deafult-color);\n}\n.score-table__item {\n  flex: 1 1 16%;\n  font-size: 24px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.score-table_show {\n  opacity: 1;\n  transform: translate(0, 0%);\n}\n\n.button {\n  width: 150px;\n  height: 50px;\n  font-size: 20px;\n  color: var(--font-color);\n  background-color: var(--button-color);\n  border: none;\n  border-radius: 8px;\n  transition: all linear 0.2s;\n}\n.button-restart {\n  opacity: 0;\n  cursor: pointer;\n}\n.button-difficulty {\n  display: inline-block;\n  background-color: var(--cell-deafult-color);\n}\n.button:hover {\n  filter: brightness(1.2);\n}\n\n.show-button {\n  opacity: 1;\n  cursor: pointer;\n}\n\n.input {\n  display: block;\n  padding-left: 20px;\n  width: 70px;\n  height: 60px;\n  font-size: 24px;\n  color: var(--font-color);\n  background-color: var(--display-color);\n  border: none;\n  border-radius: 8px;\n}\n\n.row {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.cell {\n  background-color: var(--cell-deafult-color);\n  width: 30px;\n  height: 30px;\n  font-size: 26px;\n  border: 1px solid var(--border-color);\n  transition: all linear 0.2s;\n  cursor: pointer;\n}\n.cell:hover {\n  filter: brightness(1.2);\n}\n@media screen and (max-width: 900px) {\n  .cell {\n    width: 20px;\n    height: 20px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .cell {\n    width: 16px;\n    height: 16px;\n  }\n}\n\n.cell-flagged {\n  background-color: var(--cell-flagged-color);\n}\n.cell-opened {\n  background-color: var(--cell-opened-color);\n}\n.cell-mined {\n  background-color: var(--cell-mined-color);\n}\n.cell-number {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.number-1 {\n  color: rgba(0, 99, 174, var(--cell-opacity));\n}\n.number-2 {\n  color: rgba(0, 169, 181, var(--cell-opacity));\n}\n.number-3 {\n  color: rgba(66, 172, var(--cell-opacity));\n}\n.number-4 {\n  color: rgba(221, 255, var(--cell-opacity));\n}\n.number-5 {\n  color: rgba(255, 213, var(--cell-opacity));\n}\n.number-6 {\n  color: rgba(255, 166, var(--cell-opacity));\n}\n.number-7 {\n  color: rgb(241, 68, var(--cell-opacity));\n}\n.number-8 {\n  color: rgb(255, 0, var(--cell-opacity));\n}", "",{"version":3,"sources":["webpack://./src/variables.scss","webpack://./src/styles.scss"],"names":[],"mappings":"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","sourcesContent":["\r\n.theme-light {\r\n  --font-color: #fff;\r\n  --background-color: #f3f3f3;\r\n  --display-color: rgb(16, 182, 127);\r\n  --display-font-color: rgb(144, 8, 222);\r\n  --button-color: rgb(93, 0, 255);\r\n  --font-header-color: #373737;\r\n  --border-radius: 5px;\r\n  --border-color: #656565;\r\n  --cell-deafult-color: rgb(92, 196, 196);\r\n  --cell-flagged-color: rgb(191, 127, 255);\r\n  --cell-opened-color: rgba(236, 254, 254,0.1);\r\n  --cell-mined-color: rgba(255, 0, 0, 1) !important;\r\n  --cell-opacity: 1;\r\n}\r\n\r\n.theme-dark {\r\n  --background-color: #1a0018;\r\n  --display-color: rgb(15, 128, 90);\r\n  --display-font-color: rgb(144, 8, 222);\r\n  --button-color: rgb(168, 5, 205);\r\n  --font-color: #c3c3c3;\r\n  --font-header-color: #b0b0b0;\r\n  --border-radius: 5px;\r\n  --border-color: #a6a6a6;\r\n  --cell-deafult-color: rgb(4, 75, 150);\r\n  --cell-flagged-color: rgb(191, 127, 255);\r\n  --cell-opened-color: rgba(0, 55, 100, 0.3);\r\n  --cell-mined-color: rgba(255, 0, 0, 1) !important;\r\n  --cell-opacity: 0.7;\r\n}","@import \"./variables.scss\";\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-color: var(--background-color);\r\n  transition: background-color linear 0.4s;\r\n}\r\n\r\n.app {\r\n  &__buttons {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n\r\n  &__display {\r\n    padding-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    row-gap: 10px;\r\n  }\r\n}\r\n\r\n.wrapper {\r\n  position: relative;\r\n  max-width: 800px;\r\n  padding: 0 20px;\r\n  margin: 0 auto;\r\n  padding-top: 40px;\r\n}\r\n\r\n.display {\r\n  min-height: 90px;\r\n  color: var(--display-color);\r\n  font-size: 36px;\r\n  text-align: center;\r\n\r\n  &-steps {\r\n    color: var(--display-font-color);\r\n    font-size: 36px;\r\n    text-align: center;\r\n\r\n    @media screen and (max-width: 500px) {\r\n      font-size: 24px;\r\n    }\r\n\r\n  }\r\n\r\n  &-timer {\r\n    min-width: 180px;\r\n    color: var(--display-font-color);\r\n    font-size: 36px;\r\n    text-align: center;\r\n\r\n    @media screen and (max-width: 500px) {\r\n      font-size: 24px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 500px) {\r\n    min-height: 70px;\r\n    font-size: 24px;\r\n  }\r\n}\r\n\r\n.board {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  max-width: 100%;\r\n  min-height: 100%;\r\n}\r\n\r\n.score-table {\r\n  position: absolute;\r\n  right: 0;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  flex-direction: column;\r\n  background-color: var(--button-color);\r\n  color: var(--font-color);\r\n  border-radius: 8px;\r\n  transform: translate(0, -120%);\r\n  transition: all linear 0.3s;\r\n  z-index: 12;\r\n  opacity: 0;\r\n\r\n  &__row {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    width: 100%;\r\n    margin-bottom: 20px;\r\n    background-color: var(--cell-deafult-color);\r\n  }\r\n\r\n  &__item {\r\n    flex: 1 1 16%;\r\n    font-size: 24px;\r\n    padding-left: 10px;\r\n    padding-right: 10px;\r\n  }\r\n\r\n  &_show {\r\n    opacity: 1;\r\n    transform: translate(0, 0%);\r\n  }\r\n}\r\n\r\n.button {\r\n  width: 150px;\r\n  height: 50px;\r\n  font-size: 20px;\r\n  color: var(--font-color);\r\n  background-color: var(--button-color);\r\n  border: none;\r\n  border-radius: 8px;\r\n  transition: all linear 0.2s;\r\n\r\n  &-restart {\r\n    opacity: 0;\r\n    cursor: pointer;\r\n  }\r\n\r\n  &-difficulty {\r\n    display: inline-block;\r\n    background-color: var(--cell-deafult-color);\r\n  }\r\n\r\n  &:hover {\r\n    filter: brightness(1.2);\r\n  }\r\n}\r\n\r\n.show-button {\r\n  opacity: 1;\r\n  cursor: pointer;\r\n}\r\n\r\n.input {\r\n  display: block;\r\n  padding-left: 20px;\r\n  width: 70px;\r\n  height: 60px;\r\n  font-size: 24px;\r\n  color: var(--font-color);\r\n  background-color: var(--display-color);\r\n  border: none;\r\n  border-radius: 8px;\r\n\r\n}\r\n\r\n.row {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.cell {\r\n  background-color: var(--cell-deafult-color);\r\n  width: 30px;\r\n  height: 30px;\r\n  font-size: 26px;\r\n  border: 1px solid var(--border-color);\r\n  transition: all linear 0.2s;\r\n  cursor: pointer;\r\n\r\n  &:hover {\r\n    filter: brightness(1.2);\r\n  }\r\n\r\n  @media screen and (max-width: 900px) {\r\n    width: 20px;\r\n    height: 20px;\r\n    font-size: 18px;\r\n  }\r\n\r\n  @media screen and (max-width: 600px) {\r\n    width: 16px;\r\n    height: 16px;\r\n  }\r\n}\r\n\r\n.cell {\r\n  &-flagged {\r\n    background-color: var(--cell-flagged-color);\r\n  }\r\n\r\n  &-opened {\r\n    background-color: var(--cell-opened-color);\r\n  }\r\n\r\n  &-mined {\r\n    background-color: var(--cell-mined-color);\r\n  }\r\n\r\n  &-number {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n}\r\n\r\n.number {\r\n  &-1 {\r\n    color: rgba(0, 99, 174, var(--cell-opacity));\r\n  }\r\n\r\n  &-2 {\r\n    color: rgba(0, 169, 181, var(--cell-opacity));\r\n  }\r\n\r\n  &-3 {\r\n    color: rgba(66, 172, var(--cell-opacity));\r\n  }\r\n\r\n  &-4 {\r\n    color: rgba(221, 255, var(--cell-opacity));\r\n  }\r\n\r\n  &-5 {\r\n    color: rgba(255, 213, var(--cell-opacity));\r\n  }\r\n\r\n  &-6 {\r\n    color: rgba(255, 166, var(--cell-opacity));\r\n  }\r\n\r\n  &-7 {\r\n    color: rgb(241, 68, var(--cell-opacity));\r\n  }\r\n\r\n  &-8 {\r\n    color: rgb(255, 0, var(--cell-opacity));\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");


let loadedGame
let start
let intId
let gameState = {
  gamesTable: [],
  userMinesNumber: 10,
  minesInput: null,
  themeButton: null,
  defaultBoardSize: 10,
  playerSteps: 0,
  app: null,
  appBoard: null,
  appBoardSize: null,
  wrapper: null,
  display: null,
  displaySteps: null,
  appMines: null,
  updatedMines: null,
  appCells: null,
  restartButton: null,
  time: new Date(),
  duration: 0,
  timer: start - Date.now(),
  stopTime: null,
  elapsedTime: null,
  isGameEnded: false,
  isWin: false,
  isLose: false,
}

const difficulties = {
  easy: {
    mines: gameState.userMinesNumber,
    boardSize: 10,
  },
  medium: {
    mines: gameState.userMinesNumber,
    boardSize: 15,
  },
  hard: {
    mines: gameState.userMinesNumber,
    boardSize: 25,
  },
}
const minesRange = {
  from: 10,
  to: 99,
}

function userMines(e) {
  if (e.target.value < minesRange.from && e.target.value > minesRange.to) {
    return
  }
  gameState.userMinesNumber = e.target.value
}
function setTheme(themeName) {
  document.body.className = themeName
}

function toggleTheme() {
  if (document.body.className !== "theme-dark") {
    setTheme("theme-dark")
  } else {
    setTheme("theme-light")
  }
}

function createCell(el, x, y, empty, mine, unOpened = true, opened = false) {
  return {
    el,
    position: {
      x,
      y,
    },
    status: {
      unOpened,
      opened,
      flagged: false,
    },
    state: {
      empty,
      mine,
      number: false,
    },
  }
}
function getRandomNumber(range) {
  return Math.floor(Math.random() * range)
}
function getMinesCoordinates(boardSize, numberOfMines, firstCell) {
  const coordinates = []

  while (coordinates.length < numberOfMines) {
    const mineCoordinates = {
      x: getRandomNumber(boardSize),
      y: getRandomNumber(boardSize),
    }
    if (
      !coordinates.some(
        (coordinate) =>
          coordinate.x === mineCoordinates.x &&
          coordinate.y === mineCoordinates.y
      )
    ) {
      if (
        firstCell.position.x !== mineCoordinates.x &&
        firstCell.position.y !== mineCoordinates.y
      )
        coordinates.push(mineCoordinates)
    }
  }

  return coordinates
}

function placeMines(firstCell, appBoardCells, boardSize) {
  const mines = getMinesCoordinates(boardSize, gameState.appMines, firstCell)
  for (let row = 0; row < boardSize; row += 1) {
    for (let col = 0; col < boardSize; col += 1) {
      mines.forEach((mine) => {
        if (row === mine.x && col === mine.y) {
          appBoardCells[row][col].state.mine = true
        }
      })
    }
  }
}

function checkCellsAround(cells, openedCell) {
  const cellsAround = []
  for (
    let row = openedCell.position.x - 1;
    row <= openedCell.position.x + 1;
    row += 1
  ) {
    for (
      let col = openedCell.position.y - 1;
      col <= openedCell.position.y + 1;
      col += 1
    ) {
      const neighbour = cells?.[row]?.[col]
      cellsAround.push(neighbour)
    }
  }
  return cellsAround
}

function countSteps(cell) {
  if (!cell.status.opened && !cell.status.flagged) {
    gameState.playerSteps += 1
    gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
  }
}

function countContextSteps(cell) {
  if (!cell.status.opened) {
    gameState.playerSteps += 1
    gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
  }
}

function checkMinesCount(cells) {
  const markedCells = cells.reduce(
    (sum, row) =>
      sum + row.filter((cell) => cell.status.flagged === true).length,
    0
  )
  gameState.updatedMines = gameState.appMines - markedCells
  gameState.display.innerText = `Mines left: ${gameState.updatedMines}`
}

function revealCells(cells) {
  for (let row = 0; row < cells.length; row += 1) {
    for (let col = 0; col < cells[row].length; col += 1) {
      const cell = cells[row][col]
      if (cell.status.opened && cell.state.empty) {
        cell.el.classList.add("cell-opened")
      } else if (cell.state.number) {
        cell.el.classList.add("cell-number")
      } else if (cell.status.flagged) {
        cell.el.classList.add("cell-flagged")
      }
      if (gameState.isGameEnded) {
        if (cell.state.mine) {
          cell.el.classList.add("cell-mined")
        }
      }
    }
  }
}
function drawBoard(boardSize) {
  const board = []
  for (let row = 0; row < boardSize; row += 1) {
    const rowArr = []
    for (let cell = 0; cell < boardSize; cell += 1) {
      const cellElement = document.createElement("div")
      cellElement.classList.add("cell", "cell-closed")
      cellElement.dataset.unOpened = "true"
      const cellInstance = createCell(cellElement, row, cell, true, false)
      rowArr.push(cellInstance)
    }
    board.push(rowArr)
  }
  return board
}

function drawEndGameBoard(cells) {
  const board = []
  for (let row = 0; row < cells.length; row += 1) {
    const rowArr = []
    for (let col = 0; col < cells[row].length; col += 1) {
      const cell = cells[row][col]
      const cellElement = document.createElement("div")
      cell.el = cellElement
      cell.el.classList.add("cell")
      if (cell.status.opened && cell.state.empty) {
        cell.el.classList.add("cell-opened")
      }
      if (cell.state.number) {
        cell.el.innerText = cell.number
        cell.el.classList.add("cell-number", `number-${cell.number}`)
      }
      if (cell.status.flagged) {
        cell.el.classList.add("cell-flagged")
      }
      if (gameState.isGameEnded) {
        if (cell.state.mine) {
          cell.el.classList.add("cell-mined")
        }
      }
      rowArr.push(cell)
    }
    board.push(rowArr)
  }
  return board
}

function flagCell(cell) {
  if (!cell.status.opened) {
    if (!cell.status.flagged) {
      cell.status.flagged = true
      cell.el.classList.add("cell-flagged")
    } else {
      cell.status.flagged = false
      cell.el.classList.remove("cell-flagged")
    }
    checkMinesCount(gameState.appCells)
  }
}

function endGame() {
  gameState.appBoard.addEventListener(
    "click",
    (e) => {
      e.stopPropagation()
    },
    true
  )
  gameState.appBoard.addEventListener(
    "contextmenu",
    (e) => {
      e.stopPropagation()
    },
    true
  )
  gameState.isGameEnded = true
  revealCells(gameState.appCells)
}

function caseEnd() {
  let stopTime
  clearInterval(intId)
  if (gameState.stopTime) {
    stopTime = new Date(gameState?.stopTime)
  } else {
    stopTime = new Date()
    gameState.stopTime = stopTime
  }

  const writeTime = new Date(gameState.time)
  gameState.elapsedTime = new Date(stopTime - writeTime).getSeconds()
  if (gameState.isWin) {
    gameState.isGameEnded = true

    gameState.display.innerText = `Hooray! You found all mines in ${gameState.duration} seconds and  ${gameState.playerSteps} moves!`
  } else {
    gameState.isGameEnded = true
    gameState.display.innerText = "BOOM! Game over. Try again"
  }
  const { gamesTable, ...game } = gameState
  pushToTable(gameState.gamesTable, game)
}

function checkWin() {
  const isWin = gameState.appCells.every((row) =>
    row.every(
      (cell) =>
        (cell.status.opened && cell.status.flagged) ||
        cell.status.opened ||
        cell.state.mine
    )
  )
  if (isWin) {
    gameState.isWin = true
    caseEnd()
    endGame()
  }
}

function openCell(cell) {
  if (gameState.playerSteps < 1) {
    gameState.playerSteps += 1
    gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
    cell.status.unOpened = false
    cell.status.opened = true
    cell.el.classList.remove("cell-closed")
    cell.el.classList.add("cell-opened")
    placeMines(cell, gameState.appCells, gameState.appBoardSize)
    return
  }
  if (!cell || !cell.status) {
    return
  }
  if (cell.status.opened) {
    return
  }
  if (cell.status.flagged) {
    return
  }
  if (!cell.status.flagged) {
    cell.status.unOpened = false
    cell.status.opened = true
    cell.el.classList.remove("cell-closed")
    cell.el.classList.add("cell-opened")
    if (cell?.state.mine) {
      cell.el.classList.add("cell-mined")
      caseEnd()
      endGame()
      return
    }
  }

  if (!cell.state.mine) {
    cell.status.unOpened = false
    cell.status.opened = true
    const neigbours = checkCellsAround(gameState.appCells, cell)
    const minesAtNeighbours = neigbours.filter(
      (n) => n?.state.mine === true
    ).length
    if (minesAtNeighbours === 0) {
      neigbours.forEach((n) => openCell(n))
    } else {
      cell.state.number = true
      cell.el.innerText = minesAtNeighbours
      cell.number = minesAtNeighbours
      cell.el.classList.add("cell-number")
      cell.el.classList.add(`number-${minesAtNeighbours}`)
    }
  }
}
function renderAndInsert(cells) {
  cells.forEach((row) => {
    const rowElem = document.createElement("div")
    rowElem.classList.add("row")
    gameState.appBoard.append(rowElem)
    row.forEach((cell) => {
      cell.el.addEventListener("click", () => {
        if (gameState.playerSteps === 0) {
          gameState.time = Date.now()
        }
        if (gameState.playerSteps > 0) {
          countSteps(cell)
        }
        openCell(cell)
        checkWin()

        if (!intId) {
          intId = setInterval(() => {
            gameState.duration = (
              (Date.now() - gameState.time) /
              1000
            ).toFixed()
            gameState.displayTimer.innerText = `Time duration: ${gameState.duration}`
          }, 1000)
        }
      })
      cell.el.addEventListener("contextmenu", (e) => {
        e.preventDefault()
        flagCell(cell)
        if (gameState.playerSteps > 0) {
          countContextSteps(cell)
        }

        checkWin()
      })
      rowElem.append(cell.el)
    })
  })
}

function drawScoreTable(table, parentElement) {
  const colHeaders = ["№", "Mines", "Board size", "Steps", "Time", "Status"]
  const scoreTable = document.createElement("div")
  const scoreTableHead = document.createElement("div")
  scoreTable.classList.add("score-table")
  scoreTableHead.classList.add("score-table__row")
  colHeaders.forEach((head) => {
    const headEl = document.createElement("div")
    headEl.classList.add("score-table__item")
    headEl.innerText = head
    scoreTableHead.append(headEl)
  })
  scoreTable.append(scoreTableHead)
  table.forEach((tab, index) => {
    const row = document.createElement("div")
    row.classList.add("score-table__row")
    const number = document.createElement("div")
    const mines = document.createElement("div")
    const board = document.createElement("div")
    const steps = document.createElement("div")
    const time = document.createElement("div")
    const status = document.createElement("div")
    number.classList.add("score-table__item")
    mines.classList.add("score-table__item")
    board.classList.add("score-table__item")
    steps.classList.add("score-table__item")
    time.classList.add("score-table__item")
    status.classList.add("score-table__item")
    number.innerText = index + 1
    mines.innerText = tab.appMines
    board.innerText = tab.appBoardSize
    steps.innerText = tab.playerSteps
    time.innerText = tab.elapsedTime
    status.innerText = tab.isWin ? "Win" : "Lose"
    row.append(number, mines, board, steps, time, status)
    scoreTable.append(row)
  })
  parentElement.append(scoreTable)
}

function showScoreTable() {
  const table = document.body.querySelector(".score-table")
  table.classList.toggle("score-table_show")
}
function mountApp(size, mines) {
  intId = null
  document.body.classList.add("theme-dark")
  gameState.appBoardSize = size
  gameState.appMines = mines
  gameState.minesInput = document.createElement("input")
  gameState.minesInput.setAttribute('min','10')
  gameState.minesInput.setAttribute('max','90')
  gameState.app = document.createElement("div")
  gameState.wrapper = document.createElement("div")
  if (gameState.gamesTable) {
    drawScoreTable(gameState.gamesTable, gameState.wrapper)
  }

  const appDifficultiesButtonswrapper = document.createElement("div")
  const displayWrapper = document.createElement("div")

  gameState.themeButton = document.createElement("button")
  gameState.showScoreTable = document.createElement("button")
  gameState.themeButton.innerText = "Switch theme"
  gameState.showScoreTable.innerText = "Show table"

  gameState.appBoard = document.createElement("div")
  gameState.display = document.createElement("div")
  gameState.displaySteps = document.createElement("div")
  gameState.displayTimer = document.createElement("div")
  gameState.display.classList.add("display")
  gameState.displaySteps.classList.add("display-steps")
  gameState.displayTimer.classList.add("display-timer")
  gameState.minesInput.classList.add("input")
  gameState.minesInput.setAttribute("type", "number")
  gameState.minesInput.value = gameState.userMinesNumber
  gameState.themeButton.classList.add("button", "button-theme")
  gameState.showScoreTable.classList.add("button", "button-score")
  displayWrapper.classList.add("app__display")
  appDifficultiesButtonswrapper.classList.add("app__buttons")
  gameState.themeButton.addEventListener("click", toggleTheme)
  gameState.minesInput.addEventListener("input", userMines)
  gameState.showScoreTable.addEventListener("click", showScoreTable)
  gameState.display.innerText = `Mines left: ${mines}`
  gameState.displaySteps.innerText = `Steps: ${gameState.playerSteps}`
  gameState.displayTimer.innerText = `Time duration: ${gameState.duration}`

  if (gameState.appCells) {
    gameState.appCells = drawEndGameBoard(gameState.appCells)
  } else {
    gameState.appCells = drawBoard(size)
  }

  renderAndInsert(gameState.appCells)
  gameState.restartButton = document.createElement("button")
  gameState.restartButton.innerText = "New game"
  gameState.restartButton.addEventListener("click", () =>
    restartGame(gameState.defaultBoardSize, gameState.userMinesNumber)
  )
  gameState.restartButton.classList.add("button", "button-restart")
  gameState.wrapper.prepend(gameState.restartButton)
  gameState.restartButton.classList.add("show-button")
  gameState.app.classList.add("app")
  gameState.wrapper.classList.add("wrapper")
  gameState.appBoard.classList.add("board")
  appendDifficultiesButtons(appDifficultiesButtonswrapper)
  displayWrapper.append(
    gameState.minesInput,
    gameState.display,
    gameState.displaySteps,
    gameState.displayTimer
  )
  document.body.append(gameState.app)
  gameState.app.append(gameState.wrapper)
  gameState.wrapper.append(
    gameState.themeButton,
    gameState.showScoreTable,
    appDifficultiesButtonswrapper,
    displayWrapper,
    gameState.appBoard
  )
}

function restartGame(boardSize, defaultMines) {
  start = null
  gameState.duration = 0
  clearInterval(intId)
  gameState.playerSteps = 0
  gameState.app.remove()
  gameState.appBoard.remove()
  gameState.appBoardSize = null
  gameState.display.remove()
  gameState.displaySteps.remove()
  gameState.appMines = null
  gameState.updatedMines = null
  gameState.appCells = null
  if (gameState.restartButton) gameState.restartButton.remove()
  gameState.time = new Date()
  gameState.stopTime = null
  gameState.isGameEnded = false
  gameState.isWin = false
  gameState.isLose = false
  mountApp(boardSize, defaultMines)
}

function saveGame() {
  localStorage.setItem("gameState", JSON.stringify(gameState))
}

function pushToTable(table, game) {
  if (table.length > 9) {
    while (table.length > 9) {
      table.pop()
    }
    table.unshift(game)
  } else {
    table.unshift(game)
  }
}
function loadGame() {
  loadedGame = localStorage.getItem("gameState")
  if (loadedGame) {
    const { ...game } = JSON.parse(loadedGame)
    loadedGame = game
  }
}

function choseDifficulty() {
  gameState.defaultBoardSize =
    difficulties[String(this.innerText.toLowerCase())].boardSize
  restartGame(gameState.defaultBoardSize, gameState.userMinesNumber)
}

function appendDifficultiesButtons(parent) {
  for (const [key] of Object.entries(difficulties)) {
    const difButton = document.createElement("button")
    difButton.classList.add("button", "button-difficulty")
    difButton.innerText = String(key).toUpperCase()
    difButton.addEventListener("click", choseDifficulty)
    parent.append(difButton)
  }
}
window.addEventListener("load", () => {
  loadGame()
  if (loadedGame) {
    gameState = loadedGame
    mountApp(gameState.defaultBoardSize, gameState.userMinesNumber)
    if (loadedGame.isGameEnded) {
      caseEnd()
      endGame()
    }
  } else {
    mountApp(gameState.defaultBoardSize, gameState.userMinesNumber)
  }
})
window.addEventListener("beforeunload", () => {
  saveGame()
})


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLE9BQU8sTUFBTSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsTUFBTTtBQUNyRCwrQ0FBK0Msc0JBQXNCO0FBQ3JFLHVEQUF1RCxtQkFBbUI7QUFDMUU7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9zdHlsZXMuc2Nzcz9hNjA5Iiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIudGhlbWUtbGlnaHQge1xcbiAgLS1mb250LWNvbG9yOiAjZmZmO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjZjNmM2YzO1xcbiAgLS1kaXNwbGF5LWNvbG9yOiByZ2IoMTYsIDE4MiwgMTI3KTtcXG4gIC0tZGlzcGxheS1mb250LWNvbG9yOiByZ2IoMTQ0LCA4LCAyMjIpO1xcbiAgLS1idXR0b24tY29sb3I6IHJnYig5MywgMCwgMjU1KTtcXG4gIC0tZm9udC1oZWFkZXItY29sb3I6ICMzNzM3Mzc7XFxuICAtLWJvcmRlci1yYWRpdXM6IDVweDtcXG4gIC0tYm9yZGVyLWNvbG9yOiAjNjU2NTY1O1xcbiAgLS1jZWxsLWRlYWZ1bHQtY29sb3I6IHJnYig5MiwgMTk2LCAxOTYpO1xcbiAgLS1jZWxsLWZsYWdnZWQtY29sb3I6IHJnYigxOTEsIDEyNywgMjU1KTtcXG4gIC0tY2VsbC1vcGVuZWQtY29sb3I6IHJnYmEoMjM2LCAyNTQsIDI1NCwwLjEpO1xcbiAgLS1jZWxsLW1pbmVkLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSkgIWltcG9ydGFudDtcXG4gIC0tY2VsbC1vcGFjaXR5OiAxO1xcbn1cXG5cXG4udGhlbWUtZGFyayB7XFxuICAtLWJhY2tncm91bmQtY29sb3I6ICMxYTAwMTg7XFxuICAtLWRpc3BsYXktY29sb3I6IHJnYigxNSwgMTI4LCA5MCk7XFxuICAtLWRpc3BsYXktZm9udC1jb2xvcjogcmdiKDE0NCwgOCwgMjIyKTtcXG4gIC0tYnV0dG9uLWNvbG9yOiByZ2IoMTY4LCA1LCAyMDUpO1xcbiAgLS1mb250LWNvbG9yOiAjYzNjM2MzO1xcbiAgLS1mb250LWhlYWRlci1jb2xvcjogI2IwYjBiMDtcXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgLS1ib3JkZXItY29sb3I6ICNhNmE2YTY7XFxuICAtLWNlbGwtZGVhZnVsdC1jb2xvcjogcmdiKDQsIDc1LCAxNTApO1xcbiAgLS1jZWxsLWZsYWdnZWQtY29sb3I6IHJnYigxOTEsIDEyNywgMjU1KTtcXG4gIC0tY2VsbC1vcGVuZWQtY29sb3I6IHJnYmEoMCwgNTUsIDEwMCwgMC4zKTtcXG4gIC0tY2VsbC1taW5lZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpICFpbXBvcnRhbnQ7XFxuICAtLWNlbGwtb3BhY2l0eTogMC43O1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIGxpbmVhciAwLjRzO1xcbn1cXG5cXG4uYXBwX19idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5hcHBfX2Rpc3BsYXkge1xcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHJvdy1nYXA6IDEwcHg7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBwYWRkaW5nOiAwIDIwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbn1cXG5cXG4uZGlzcGxheSB7XFxuICBtaW4taGVpZ2h0OiA5MHB4O1xcbiAgY29sb3I6IHZhcigtLWRpc3BsYXktY29sb3IpO1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZGlzcGxheS1zdGVwcyB7XFxuICBjb2xvcjogdmFyKC0tZGlzcGxheS1mb250LWNvbG9yKTtcXG4gIGZvbnQtc2l6ZTogMzZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5kaXNwbGF5LXN0ZXBzIHtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcbn1cXG4uZGlzcGxheS10aW1lciB7XFxuICBtaW4td2lkdGg6IDE4MHB4O1xcbiAgY29sb3I6IHZhcigtLWRpc3BsYXktZm9udC1jb2xvcik7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxuICAuZGlzcGxheS10aW1lciB7XFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXG4gIC5kaXNwbGF5IHtcXG4gICAgbWluLWhlaWdodDogNzBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgfVxcbn1cXG5cXG4uYm9hcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNjb3JlLXRhYmxlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tY29sb3IpO1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTEyMCUpO1xcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAwLjNzO1xcbiAgei1pbmRleDogMTI7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc2NvcmUtdGFibGVfX3JvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1kZWFmdWx0LWNvbG9yKTtcXG59XFxuLnNjb3JlLXRhYmxlX19pdGVtIHtcXG4gIGZsZXg6IDEgMSAxNiU7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbn1cXG4uc2NvcmUtdGFibGVfc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCUpO1xcbn1cXG5cXG4uYnV0dG9uIHtcXG4gIHdpZHRoOiAxNTBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XFxufVxcbi5idXR0b24tcmVzdGFydCB7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYnV0dG9uLWRpZmZpY3VsdHkge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1kZWFmdWx0LWNvbG9yKTtcXG59XFxuLmJ1dHRvbjpob3ZlciB7XFxuICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXG59XFxuXFxuLnNob3ctYnV0dG9uIHtcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5pbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1jb2xvcik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxufVxcblxcbi5yb3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLmNlbGwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1kZWFmdWx0LWNvbG9yKTtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4ycztcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmNlbGw6aG92ZXIge1xcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDEuMik7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxuICAuY2VsbCB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gIH1cXG59XFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5jZWxsIHtcXG4gICAgd2lkdGg6IDE2cHg7XFxuICAgIGhlaWdodDogMTZweDtcXG4gIH1cXG59XFxuXFxuLmNlbGwtZmxhZ2dlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLWZsYWdnZWQtY29sb3IpO1xcbn1cXG4uY2VsbC1vcGVuZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1vcGVuZWQtY29sb3IpO1xcbn1cXG4uY2VsbC1taW5lZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLW1pbmVkLWNvbG9yKTtcXG59XFxuLmNlbGwtbnVtYmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5udW1iZXItMSB7XFxuICBjb2xvcjogcmdiYSgwLCA5OSwgMTc0LCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXG59XFxuLm51bWJlci0yIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDE2OSwgMTgxLCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXG59XFxuLm51bWJlci0zIHtcXG4gIGNvbG9yOiByZ2JhKDY2LCAxNzIsIHZhcigtLWNlbGwtb3BhY2l0eSkpO1xcbn1cXG4ubnVtYmVyLTQge1xcbiAgY29sb3I6IHJnYmEoMjIxLCAyNTUsIHZhcigtLWNlbGwtb3BhY2l0eSkpO1xcbn1cXG4ubnVtYmVyLTUge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAyMTMsIHZhcigtLWNlbGwtb3BhY2l0eSkpO1xcbn1cXG4ubnVtYmVyLTYge1xcbiAgY29sb3I6IHJnYmEoMjU1LCAxNjYsIHZhcigtLWNlbGwtb3BhY2l0eSkpO1xcbn1cXG4ubnVtYmVyLTcge1xcbiAgY29sb3I6IHJnYigyNDEsIDY4LCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXG59XFxuLm51bWJlci04IHtcXG4gIGNvbG9yOiByZ2IoMjU1LCAwLCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3ZhcmlhYmxlcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQ0E7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLCtCQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUNBQUE7RUFDQSx3Q0FBQTtFQUNBLDRDQUFBO0VBQ0EsaURBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UsMkJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFDQUFBO0VBQ0Esd0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGlEQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QUE1QkE7RUFDRSxzQkFBQTtBQStCRjs7QUE1QkE7RUFDRSx5Q0FBQTtFQUNBLHdDQUFBO0FBK0JGOztBQTNCRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtBQThCSjtBQTNCRTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUE2Qko7O0FBekJBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUE0QkY7O0FBekJBO0VBQ0UsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQTRCRjtBQTFCRTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBNEJKO0FBMUJJO0VBTEY7SUFNSSxlQUFBO0VBNkJKO0FBQ0Y7QUF6QkU7RUFDRSxnQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBMkJKO0FBekJJO0VBTkY7SUFPSSxlQUFBO0VBNEJKO0FBQ0Y7QUF6QkU7RUE1QkY7SUE2QkksZ0JBQUE7SUFDQSxlQUFBO0VBNEJGO0FBQ0Y7O0FBekJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUE0QkY7O0FBekJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUE0QkY7QUExQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQ0FBQTtBQTRCSjtBQXpCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQTJCSjtBQXhCRTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtBQTBCSjs7QUF0QkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMkJBQUE7QUF5QkY7QUF2QkU7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQXlCSjtBQXRCRTtFQUNFLHFCQUFBO0VBQ0EsMkNBQUE7QUF3Qko7QUFyQkU7RUFDRSx1QkFBQTtBQXVCSjs7QUFuQkE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQXNCRjs7QUFuQkE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHNDQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBc0JGOztBQWxCQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBcUJGOztBQWxCQTtFQUNFLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFxQkY7QUFuQkU7RUFDRSx1QkFBQTtBQXFCSjtBQWxCRTtFQWJGO0lBY0ksV0FBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0VBcUJGO0FBQ0Y7QUFuQkU7RUFuQkY7SUFvQkksV0FBQTtJQUNBLFlBQUE7RUFzQkY7QUFDRjs7QUFsQkU7RUFDRSwyQ0FBQTtBQXFCSjtBQWxCRTtFQUNFLDBDQUFBO0FBb0JKO0FBakJFO0VBQ0UseUNBQUE7QUFtQko7QUFoQkU7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWtCSjs7QUFiRTtFQUNFLDRDQUFBO0FBZ0JKO0FBYkU7RUFDRSw2Q0FBQTtBQWVKO0FBWkU7RUFDRSx5Q0FBQTtBQWNKO0FBWEU7RUFDRSwwQ0FBQTtBQWFKO0FBVkU7RUFDRSwwQ0FBQTtBQVlKO0FBVEU7RUFDRSwwQ0FBQTtBQVdKO0FBUkU7RUFDRSx3Q0FBQTtBQVVKO0FBUEU7RUFDRSx1Q0FBQTtBQVNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIlxcclxcbi50aGVtZS1saWdodCB7XFxyXFxuICAtLWZvbnQtY29sb3I6ICNmZmY7XFxyXFxuICAtLWJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XFxyXFxuICAtLWRpc3BsYXktY29sb3I6IHJnYigxNiwgMTgyLCAxMjcpO1xcclxcbiAgLS1kaXNwbGF5LWZvbnQtY29sb3I6IHJnYigxNDQsIDgsIDIyMik7XFxyXFxuICAtLWJ1dHRvbi1jb2xvcjogcmdiKDkzLCAwLCAyNTUpO1xcclxcbiAgLS1mb250LWhlYWRlci1jb2xvcjogIzM3MzczNztcXHJcXG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgLS1ib3JkZXItY29sb3I6ICM2NTY1NjU7XFxyXFxuICAtLWNlbGwtZGVhZnVsdC1jb2xvcjogcmdiKDkyLCAxOTYsIDE5Nik7XFxyXFxuICAtLWNlbGwtZmxhZ2dlZC1jb2xvcjogcmdiKDE5MSwgMTI3LCAyNTUpO1xcclxcbiAgLS1jZWxsLW9wZW5lZC1jb2xvcjogcmdiYSgyMzYsIDI1NCwgMjU0LDAuMSk7XFxyXFxuICAtLWNlbGwtbWluZWQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKSAhaW1wb3J0YW50O1xcclxcbiAgLS1jZWxsLW9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi50aGVtZS1kYXJrIHtcXHJcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzFhMDAxODtcXHJcXG4gIC0tZGlzcGxheS1jb2xvcjogcmdiKDE1LCAxMjgsIDkwKTtcXHJcXG4gIC0tZGlzcGxheS1mb250LWNvbG9yOiByZ2IoMTQ0LCA4LCAyMjIpO1xcclxcbiAgLS1idXR0b24tY29sb3I6IHJnYigxNjgsIDUsIDIwNSk7XFxyXFxuICAtLWZvbnQtY29sb3I6ICNjM2MzYzM7XFxyXFxuICAtLWZvbnQtaGVhZGVyLWNvbG9yOiAjYjBiMGIwO1xcclxcbiAgLS1ib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAtLWJvcmRlci1jb2xvcjogI2E2YTZhNjtcXHJcXG4gIC0tY2VsbC1kZWFmdWx0LWNvbG9yOiByZ2IoNCwgNzUsIDE1MCk7XFxyXFxuICAtLWNlbGwtZmxhZ2dlZC1jb2xvcjogcmdiKDE5MSwgMTI3LCAyNTUpO1xcclxcbiAgLS1jZWxsLW9wZW5lZC1jb2xvcjogcmdiYSgwLCA1NSwgMTAwLCAwLjMpO1xcclxcbiAgLS1jZWxsLW1pbmVkLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSkgIWltcG9ydGFudDtcXHJcXG4gIC0tY2VsbC1vcGFjaXR5OiAwLjc7XFxyXFxufVwiLFwiQGltcG9ydCBcXFwiLi92YXJpYWJsZXMuc2Nzc1xcXCI7XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciBsaW5lYXIgMC40cztcXHJcXG59XFxyXFxuXFxyXFxuLmFwcCB7XFxyXFxuICAmX19idXR0b25zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fZGlzcGxheSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcm93LWdhcDogMTBweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLndyYXBwZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWF4LXdpZHRoOiA4MDBweDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgcGFkZGluZy10b3A6IDQwcHg7XFxyXFxufVxcclxcblxcclxcbi5kaXNwbGF5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDkwcHg7XFxyXFxuICBjb2xvcjogdmFyKC0tZGlzcGxheS1jb2xvcik7XFxyXFxuICBmb250LXNpemU6IDM2cHg7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAmLXN0ZXBzIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWRpc3BsYXktZm9udC1jb2xvcik7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgfVxcclxcblxcclxcbiAgJi10aW1lciB7XFxyXFxuICAgIG1pbi13aWR0aDogMTgwcHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kaXNwbGF5LWZvbnQtY29sb3IpO1xcclxcbiAgICBmb250LXNpemU6IDM2cHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcXHJcXG4gICAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjRweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvYXJkIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5zY29yZS10YWJsZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1mb250LWNvbG9yKTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC0xMjAlKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4zcztcXHJcXG4gIHotaW5kZXg6IDEyO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG5cXHJcXG4gICZfX3JvdyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtZGVhZnVsdC1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgZmxleDogMSAxIDE2JTtcXHJcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxyXFxuICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX3Nob3cge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwJSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4ycztcXHJcXG5cXHJcXG4gICYtcmVzdGFydCB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtZGlmZmljdWx0eSB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1kZWFmdWx0LWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnNob3ctYnV0dG9uIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmctbGVmdDogMjBweDtcXHJcXG4gIHdpZHRoOiA3MHB4O1xcclxcbiAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgZm9udC1zaXplOiAyNHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWZvbnQtY29sb3IpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlzcGxheS1jb2xvcik7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5yb3cge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuXFxyXFxuLmNlbGwge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2VsbC1kZWFmdWx0LWNvbG9yKTtcXHJcXG4gIHdpZHRoOiAzMHB4O1xcclxcbiAgaGVpZ2h0OiAzMHB4O1xcclxcbiAgZm9udC1zaXplOiAyNnB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4ycztcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHJcXG4gICY6aG92ZXIge1xcclxcbiAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMS4yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAgIHdpZHRoOiAxNnB4O1xcclxcbiAgICBoZWlnaHQ6IDE2cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jZWxsIHtcXHJcXG4gICYtZmxhZ2dlZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtZmxhZ2dlZC1jb2xvcik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLW9wZW5lZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNlbGwtb3BlbmVkLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtbWluZWQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jZWxsLW1pbmVkLWNvbG9yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtbnVtYmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5udW1iZXIge1xcclxcbiAgJi0xIHtcXHJcXG4gICAgY29sb3I6IHJnYmEoMCwgOTksIDE3NCwgdmFyKC0tY2VsbC1vcGFjaXR5KSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLTIge1xcclxcbiAgICBjb2xvcjogcmdiYSgwLCAxNjksIDE4MSwgdmFyKC0tY2VsbC1vcGFjaXR5KSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLTMge1xcclxcbiAgICBjb2xvcjogcmdiYSg2NiwgMTcyLCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtNCB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDIyMSwgMjU1LCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtNSB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjEzLCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtNiB7XFxyXFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTY2LCB2YXIoLS1jZWxsLW9wYWNpdHkpKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYtNyB7XFxyXFxuICAgIGNvbG9yOiByZ2IoMjQxLCA2OCwgdmFyKC0tY2VsbC1vcGFjaXR5KSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmLTgge1xcclxcbiAgICBjb2xvcjogcmdiKDI1NSwgMCwgdmFyKC0tY2VsbC1vcGFjaXR5KSk7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlcy5zY3NzXCJcclxuXHJcbmxldCBsb2FkZWRHYW1lXHJcbmxldCBzdGFydFxyXG5sZXQgaW50SWRcclxubGV0IGdhbWVTdGF0ZSA9IHtcclxuICBnYW1lc1RhYmxlOiBbXSxcclxuICB1c2VyTWluZXNOdW1iZXI6IDEwLFxyXG4gIG1pbmVzSW5wdXQ6IG51bGwsXHJcbiAgdGhlbWVCdXR0b246IG51bGwsXHJcbiAgZGVmYXVsdEJvYXJkU2l6ZTogMTAsXHJcbiAgcGxheWVyU3RlcHM6IDAsXHJcbiAgYXBwOiBudWxsLFxyXG4gIGFwcEJvYXJkOiBudWxsLFxyXG4gIGFwcEJvYXJkU2l6ZTogbnVsbCxcclxuICB3cmFwcGVyOiBudWxsLFxyXG4gIGRpc3BsYXk6IG51bGwsXHJcbiAgZGlzcGxheVN0ZXBzOiBudWxsLFxyXG4gIGFwcE1pbmVzOiBudWxsLFxyXG4gIHVwZGF0ZWRNaW5lczogbnVsbCxcclxuICBhcHBDZWxsczogbnVsbCxcclxuICByZXN0YXJ0QnV0dG9uOiBudWxsLFxyXG4gIHRpbWU6IG5ldyBEYXRlKCksXHJcbiAgZHVyYXRpb246IDAsXHJcbiAgdGltZXI6IHN0YXJ0IC0gRGF0ZS5ub3coKSxcclxuICBzdG9wVGltZTogbnVsbCxcclxuICBlbGFwc2VkVGltZTogbnVsbCxcclxuICBpc0dhbWVFbmRlZDogZmFsc2UsXHJcbiAgaXNXaW46IGZhbHNlLFxyXG4gIGlzTG9zZTogZmFsc2UsXHJcbn1cclxuXHJcbmNvbnN0IGRpZmZpY3VsdGllcyA9IHtcclxuICBlYXN5OiB7XHJcbiAgICBtaW5lczogZ2FtZVN0YXRlLnVzZXJNaW5lc051bWJlcixcclxuICAgIGJvYXJkU2l6ZTogMTAsXHJcbiAgfSxcclxuICBtZWRpdW06IHtcclxuICAgIG1pbmVzOiBnYW1lU3RhdGUudXNlck1pbmVzTnVtYmVyLFxyXG4gICAgYm9hcmRTaXplOiAxNSxcclxuICB9LFxyXG4gIGhhcmQ6IHtcclxuICAgIG1pbmVzOiBnYW1lU3RhdGUudXNlck1pbmVzTnVtYmVyLFxyXG4gICAgYm9hcmRTaXplOiAyNSxcclxuICB9LFxyXG59XHJcbmNvbnN0IG1pbmVzUmFuZ2UgPSB7XHJcbiAgZnJvbTogMTAsXHJcbiAgdG86IDk5LFxyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VyTWluZXMoZSkge1xyXG4gIGlmIChlLnRhcmdldC52YWx1ZSA8IG1pbmVzUmFuZ2UuZnJvbSAmJiBlLnRhcmdldC52YWx1ZSA+IG1pbmVzUmFuZ2UudG8pIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBnYW1lU3RhdGUudXNlck1pbmVzTnVtYmVyID0gZS50YXJnZXQudmFsdWVcclxufVxyXG5mdW5jdGlvbiBzZXRUaGVtZSh0aGVtZU5hbWUpIHtcclxuICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IHRoZW1lTmFtZVxyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVUaGVtZSgpIHtcclxuICBpZiAoZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgIT09IFwidGhlbWUtZGFya1wiKSB7XHJcbiAgICBzZXRUaGVtZShcInRoZW1lLWRhcmtcIilcclxuICB9IGVsc2Uge1xyXG4gICAgc2V0VGhlbWUoXCJ0aGVtZS1saWdodFwiKVxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2VsbChlbCwgeCwgeSwgZW1wdHksIG1pbmUsIHVuT3BlbmVkID0gdHJ1ZSwgb3BlbmVkID0gZmFsc2UpIHtcclxuICByZXR1cm4ge1xyXG4gICAgZWwsXHJcbiAgICBwb3NpdGlvbjoge1xyXG4gICAgICB4LFxyXG4gICAgICB5LFxyXG4gICAgfSxcclxuICAgIHN0YXR1czoge1xyXG4gICAgICB1bk9wZW5lZCxcclxuICAgICAgb3BlbmVkLFxyXG4gICAgICBmbGFnZ2VkOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgICBzdGF0ZToge1xyXG4gICAgICBlbXB0eSxcclxuICAgICAgbWluZSxcclxuICAgICAgbnVtYmVyOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihyYW5nZSkge1xyXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSlcclxufVxyXG5mdW5jdGlvbiBnZXRNaW5lc0Nvb3JkaW5hdGVzKGJvYXJkU2l6ZSwgbnVtYmVyT2ZNaW5lcywgZmlyc3RDZWxsKSB7XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBbXVxyXG5cclxuICB3aGlsZSAoY29vcmRpbmF0ZXMubGVuZ3RoIDwgbnVtYmVyT2ZNaW5lcykge1xyXG4gICAgY29uc3QgbWluZUNvb3JkaW5hdGVzID0ge1xyXG4gICAgICB4OiBnZXRSYW5kb21OdW1iZXIoYm9hcmRTaXplKSxcclxuICAgICAgeTogZ2V0UmFuZG9tTnVtYmVyKGJvYXJkU2l6ZSksXHJcbiAgICB9XHJcbiAgICBpZiAoXHJcbiAgICAgICFjb29yZGluYXRlcy5zb21lKFxyXG4gICAgICAgIChjb29yZGluYXRlKSA9PlxyXG4gICAgICAgICAgY29vcmRpbmF0ZS54ID09PSBtaW5lQ29vcmRpbmF0ZXMueCAmJlxyXG4gICAgICAgICAgY29vcmRpbmF0ZS55ID09PSBtaW5lQ29vcmRpbmF0ZXMueVxyXG4gICAgICApXHJcbiAgICApIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGZpcnN0Q2VsbC5wb3NpdGlvbi54ICE9PSBtaW5lQ29vcmRpbmF0ZXMueCAmJlxyXG4gICAgICAgIGZpcnN0Q2VsbC5wb3NpdGlvbi55ICE9PSBtaW5lQ29vcmRpbmF0ZXMueVxyXG4gICAgICApXHJcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChtaW5lQ29vcmRpbmF0ZXMpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY29vcmRpbmF0ZXNcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhY2VNaW5lcyhmaXJzdENlbGwsIGFwcEJvYXJkQ2VsbHMsIGJvYXJkU2l6ZSkge1xyXG4gIGNvbnN0IG1pbmVzID0gZ2V0TWluZXNDb29yZGluYXRlcyhib2FyZFNpemUsIGdhbWVTdGF0ZS5hcHBNaW5lcywgZmlyc3RDZWxsKVxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkU2l6ZTsgcm93ICs9IDEpIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGJvYXJkU2l6ZTsgY29sICs9IDEpIHtcclxuICAgICAgbWluZXMuZm9yRWFjaCgobWluZSkgPT4ge1xyXG4gICAgICAgIGlmIChyb3cgPT09IG1pbmUueCAmJiBjb2wgPT09IG1pbmUueSkge1xyXG4gICAgICAgICAgYXBwQm9hcmRDZWxsc1tyb3ddW2NvbF0uc3RhdGUubWluZSA9IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja0NlbGxzQXJvdW5kKGNlbGxzLCBvcGVuZWRDZWxsKSB7XHJcbiAgY29uc3QgY2VsbHNBcm91bmQgPSBbXVxyXG4gIGZvciAoXHJcbiAgICBsZXQgcm93ID0gb3BlbmVkQ2VsbC5wb3NpdGlvbi54IC0gMTtcclxuICAgIHJvdyA8PSBvcGVuZWRDZWxsLnBvc2l0aW9uLnggKyAxO1xyXG4gICAgcm93ICs9IDFcclxuICApIHtcclxuICAgIGZvciAoXHJcbiAgICAgIGxldCBjb2wgPSBvcGVuZWRDZWxsLnBvc2l0aW9uLnkgLSAxO1xyXG4gICAgICBjb2wgPD0gb3BlbmVkQ2VsbC5wb3NpdGlvbi55ICsgMTtcclxuICAgICAgY29sICs9IDFcclxuICAgICkge1xyXG4gICAgICBjb25zdCBuZWlnaGJvdXIgPSBjZWxscz8uW3Jvd10/Lltjb2xdXHJcbiAgICAgIGNlbGxzQXJvdW5kLnB1c2gobmVpZ2hib3VyKVxyXG4gICAgfVxyXG4gIH1cclxuICByZXR1cm4gY2VsbHNBcm91bmRcclxufVxyXG5cclxuZnVuY3Rpb24gY291bnRTdGVwcyhjZWxsKSB7XHJcbiAgaWYgKCFjZWxsLnN0YXR1cy5vcGVuZWQgJiYgIWNlbGwuc3RhdHVzLmZsYWdnZWQpIHtcclxuICAgIGdhbWVTdGF0ZS5wbGF5ZXJTdGVwcyArPSAxXHJcbiAgICBnYW1lU3RhdGUuZGlzcGxheVN0ZXBzLmlubmVyVGV4dCA9IGBTdGVwczogJHtnYW1lU3RhdGUucGxheWVyU3RlcHN9YFxyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY291bnRDb250ZXh0U3RlcHMoY2VsbCkge1xyXG4gIGlmICghY2VsbC5zdGF0dXMub3BlbmVkKSB7XHJcbiAgICBnYW1lU3RhdGUucGxheWVyU3RlcHMgKz0gMVxyXG4gICAgZ2FtZVN0YXRlLmRpc3BsYXlTdGVwcy5pbm5lclRleHQgPSBgU3RlcHM6ICR7Z2FtZVN0YXRlLnBsYXllclN0ZXBzfWBcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTWluZXNDb3VudChjZWxscykge1xyXG4gIGNvbnN0IG1hcmtlZENlbGxzID0gY2VsbHMucmVkdWNlKFxyXG4gICAgKHN1bSwgcm93KSA9PlxyXG4gICAgICBzdW0gKyByb3cuZmlsdGVyKChjZWxsKSA9PiBjZWxsLnN0YXR1cy5mbGFnZ2VkID09PSB0cnVlKS5sZW5ndGgsXHJcbiAgICAwXHJcbiAgKVxyXG4gIGdhbWVTdGF0ZS51cGRhdGVkTWluZXMgPSBnYW1lU3RhdGUuYXBwTWluZXMgLSBtYXJrZWRDZWxsc1xyXG4gIGdhbWVTdGF0ZS5kaXNwbGF5LmlubmVyVGV4dCA9IGBNaW5lcyBsZWZ0OiAke2dhbWVTdGF0ZS51cGRhdGVkTWluZXN9YFxyXG59XHJcblxyXG5mdW5jdGlvbiByZXZlYWxDZWxscyhjZWxscykge1xyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGNlbGxzLmxlbmd0aDsgcm93ICs9IDEpIHtcclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNlbGxzW3Jvd10ubGVuZ3RoOyBjb2wgKz0gMSkge1xyXG4gICAgICBjb25zdCBjZWxsID0gY2VsbHNbcm93XVtjb2xdXHJcbiAgICAgIGlmIChjZWxsLnN0YXR1cy5vcGVuZWQgJiYgY2VsbC5zdGF0ZS5lbXB0eSkge1xyXG4gICAgICAgIGNlbGwuZWwuY2xhc3NMaXN0LmFkZChcImNlbGwtb3BlbmVkXCIpXHJcbiAgICAgIH0gZWxzZSBpZiAoY2VsbC5zdGF0ZS5udW1iZXIpIHtcclxuICAgICAgICBjZWxsLmVsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLW51bWJlclwiKVxyXG4gICAgICB9IGVsc2UgaWYgKGNlbGwuc3RhdHVzLmZsYWdnZWQpIHtcclxuICAgICAgICBjZWxsLmVsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLWZsYWdnZWRcIilcclxuICAgICAgfVxyXG4gICAgICBpZiAoZ2FtZVN0YXRlLmlzR2FtZUVuZGVkKSB7XHJcbiAgICAgICAgaWYgKGNlbGwuc3RhdGUubWluZSkge1xyXG4gICAgICAgICAgY2VsbC5lbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1taW5lZFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5mdW5jdGlvbiBkcmF3Qm9hcmQoYm9hcmRTaXplKSB7XHJcbiAgY29uc3QgYm9hcmQgPSBbXVxyXG4gIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IGJvYXJkU2l6ZTsgcm93ICs9IDEpIHtcclxuICAgIGNvbnN0IHJvd0FyciA9IFtdXHJcbiAgICBmb3IgKGxldCBjZWxsID0gMDsgY2VsbCA8IGJvYXJkU2l6ZTsgY2VsbCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICBjZWxsRWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiLCBcImNlbGwtY2xvc2VkXCIpXHJcbiAgICAgIGNlbGxFbGVtZW50LmRhdGFzZXQudW5PcGVuZWQgPSBcInRydWVcIlxyXG4gICAgICBjb25zdCBjZWxsSW5zdGFuY2UgPSBjcmVhdGVDZWxsKGNlbGxFbGVtZW50LCByb3csIGNlbGwsIHRydWUsIGZhbHNlKVxyXG4gICAgICByb3dBcnIucHVzaChjZWxsSW5zdGFuY2UpXHJcbiAgICB9XHJcbiAgICBib2FyZC5wdXNoKHJvd0FycilcclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdFbmRHYW1lQm9hcmQoY2VsbHMpIHtcclxuICBjb25zdCBib2FyZCA9IFtdXHJcbiAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgY2VsbHMubGVuZ3RoOyByb3cgKz0gMSkge1xyXG4gICAgY29uc3Qgcm93QXJyID0gW11cclxuICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNlbGxzW3Jvd10ubGVuZ3RoOyBjb2wgKz0gMSkge1xyXG4gICAgICBjb25zdCBjZWxsID0gY2VsbHNbcm93XVtjb2xdXHJcbiAgICAgIGNvbnN0IGNlbGxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgICBjZWxsLmVsID0gY2VsbEVsZW1lbnRcclxuICAgICAgY2VsbC5lbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKVxyXG4gICAgICBpZiAoY2VsbC5zdGF0dXMub3BlbmVkICYmIGNlbGwuc3RhdGUuZW1wdHkpIHtcclxuICAgICAgICBjZWxsLmVsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLW9wZW5lZFwiKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChjZWxsLnN0YXRlLm51bWJlcikge1xyXG4gICAgICAgIGNlbGwuZWwuaW5uZXJUZXh0ID0gY2VsbC5udW1iZXJcclxuICAgICAgICBjZWxsLmVsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLW51bWJlclwiLCBgbnVtYmVyLSR7Y2VsbC5udW1iZXJ9YClcclxuICAgICAgfVxyXG4gICAgICBpZiAoY2VsbC5zdGF0dXMuZmxhZ2dlZCkge1xyXG4gICAgICAgIGNlbGwuZWwuY2xhc3NMaXN0LmFkZChcImNlbGwtZmxhZ2dlZFwiKVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChnYW1lU3RhdGUuaXNHYW1lRW5kZWQpIHtcclxuICAgICAgICBpZiAoY2VsbC5zdGF0ZS5taW5lKSB7XHJcbiAgICAgICAgICBjZWxsLmVsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLW1pbmVkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHJvd0Fyci5wdXNoKGNlbGwpXHJcbiAgICB9XHJcbiAgICBib2FyZC5wdXNoKHJvd0FycilcclxuICB9XHJcbiAgcmV0dXJuIGJvYXJkXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZsYWdDZWxsKGNlbGwpIHtcclxuICBpZiAoIWNlbGwuc3RhdHVzLm9wZW5lZCkge1xyXG4gICAgaWYgKCFjZWxsLnN0YXR1cy5mbGFnZ2VkKSB7XHJcbiAgICAgIGNlbGwuc3RhdHVzLmZsYWdnZWQgPSB0cnVlXHJcbiAgICAgIGNlbGwuZWwuY2xhc3NMaXN0LmFkZChcImNlbGwtZmxhZ2dlZFwiKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2VsbC5zdGF0dXMuZmxhZ2dlZCA9IGZhbHNlXHJcbiAgICAgIGNlbGwuZWwuY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtZmxhZ2dlZFwiKVxyXG4gICAgfVxyXG4gICAgY2hlY2tNaW5lc0NvdW50KGdhbWVTdGF0ZS5hcHBDZWxscylcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVuZEdhbWUoKSB7XHJcbiAgZ2FtZVN0YXRlLmFwcEJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICBcImNsaWNrXCIsXHJcbiAgICAoZSkgPT4ge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpXHJcbiAgICB9LFxyXG4gICAgdHJ1ZVxyXG4gIClcclxuICBnYW1lU3RhdGUuYXBwQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiY29udGV4dG1lbnVcIixcclxuICAgIChlKSA9PiB7XHJcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcclxuICAgIH0sXHJcbiAgICB0cnVlXHJcbiAgKVxyXG4gIGdhbWVTdGF0ZS5pc0dhbWVFbmRlZCA9IHRydWVcclxuICByZXZlYWxDZWxscyhnYW1lU3RhdGUuYXBwQ2VsbHMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhc2VFbmQoKSB7XHJcbiAgbGV0IHN0b3BUaW1lXHJcbiAgY2xlYXJJbnRlcnZhbChpbnRJZClcclxuICBpZiAoZ2FtZVN0YXRlLnN0b3BUaW1lKSB7XHJcbiAgICBzdG9wVGltZSA9IG5ldyBEYXRlKGdhbWVTdGF0ZT8uc3RvcFRpbWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHN0b3BUaW1lID0gbmV3IERhdGUoKVxyXG4gICAgZ2FtZVN0YXRlLnN0b3BUaW1lID0gc3RvcFRpbWVcclxuICB9XHJcblxyXG4gIGNvbnN0IHdyaXRlVGltZSA9IG5ldyBEYXRlKGdhbWVTdGF0ZS50aW1lKVxyXG4gIGdhbWVTdGF0ZS5lbGFwc2VkVGltZSA9IG5ldyBEYXRlKHN0b3BUaW1lIC0gd3JpdGVUaW1lKS5nZXRTZWNvbmRzKClcclxuICBpZiAoZ2FtZVN0YXRlLmlzV2luKSB7XHJcbiAgICBnYW1lU3RhdGUuaXNHYW1lRW5kZWQgPSB0cnVlXHJcblxyXG4gICAgZ2FtZVN0YXRlLmRpc3BsYXkuaW5uZXJUZXh0ID0gYEhvb3JheSEgWW91IGZvdW5kIGFsbCBtaW5lcyBpbiAke2dhbWVTdGF0ZS5kdXJhdGlvbn0gc2Vjb25kcyBhbmQgICR7Z2FtZVN0YXRlLnBsYXllclN0ZXBzfSBtb3ZlcyFgXHJcbiAgfSBlbHNlIHtcclxuICAgIGdhbWVTdGF0ZS5pc0dhbWVFbmRlZCA9IHRydWVcclxuICAgIGdhbWVTdGF0ZS5kaXNwbGF5LmlubmVyVGV4dCA9IFwiQk9PTSEgR2FtZSBvdmVyLiBUcnkgYWdhaW5cIlxyXG4gIH1cclxuICBjb25zdCB7IGdhbWVzVGFibGUsIC4uLmdhbWUgfSA9IGdhbWVTdGF0ZVxyXG4gIHB1c2hUb1RhYmxlKGdhbWVTdGF0ZS5nYW1lc1RhYmxlLCBnYW1lKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjaGVja1dpbigpIHtcclxuICBjb25zdCBpc1dpbiA9IGdhbWVTdGF0ZS5hcHBDZWxscy5ldmVyeSgocm93KSA9PlxyXG4gICAgcm93LmV2ZXJ5KFxyXG4gICAgICAoY2VsbCkgPT5cclxuICAgICAgICAoY2VsbC5zdGF0dXMub3BlbmVkICYmIGNlbGwuc3RhdHVzLmZsYWdnZWQpIHx8XHJcbiAgICAgICAgY2VsbC5zdGF0dXMub3BlbmVkIHx8XHJcbiAgICAgICAgY2VsbC5zdGF0ZS5taW5lXHJcbiAgICApXHJcbiAgKVxyXG4gIGlmIChpc1dpbikge1xyXG4gICAgZ2FtZVN0YXRlLmlzV2luID0gdHJ1ZVxyXG4gICAgY2FzZUVuZCgpXHJcbiAgICBlbmRHYW1lKClcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wZW5DZWxsKGNlbGwpIHtcclxuICBpZiAoZ2FtZVN0YXRlLnBsYXllclN0ZXBzIDwgMSkge1xyXG4gICAgZ2FtZVN0YXRlLnBsYXllclN0ZXBzICs9IDFcclxuICAgIGdhbWVTdGF0ZS5kaXNwbGF5U3RlcHMuaW5uZXJUZXh0ID0gYFN0ZXBzOiAke2dhbWVTdGF0ZS5wbGF5ZXJTdGVwc31gXHJcbiAgICBjZWxsLnN0YXR1cy51bk9wZW5lZCA9IGZhbHNlXHJcbiAgICBjZWxsLnN0YXR1cy5vcGVuZWQgPSB0cnVlXHJcbiAgICBjZWxsLmVsLmNsYXNzTGlzdC5yZW1vdmUoXCJjZWxsLWNsb3NlZFwiKVxyXG4gICAgY2VsbC5lbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1vcGVuZWRcIilcclxuICAgIHBsYWNlTWluZXMoY2VsbCwgZ2FtZVN0YXRlLmFwcENlbGxzLCBnYW1lU3RhdGUuYXBwQm9hcmRTaXplKVxyXG4gICAgcmV0dXJuXHJcbiAgfVxyXG4gIGlmICghY2VsbCB8fCAhY2VsbC5zdGF0dXMpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoY2VsbC5zdGF0dXMub3BlbmVkKSB7XHJcbiAgICByZXR1cm5cclxuICB9XHJcbiAgaWYgKGNlbGwuc3RhdHVzLmZsYWdnZWQpIHtcclxuICAgIHJldHVyblxyXG4gIH1cclxuICBpZiAoIWNlbGwuc3RhdHVzLmZsYWdnZWQpIHtcclxuICAgIGNlbGwuc3RhdHVzLnVuT3BlbmVkID0gZmFsc2VcclxuICAgIGNlbGwuc3RhdHVzLm9wZW5lZCA9IHRydWVcclxuICAgIGNlbGwuZWwuY2xhc3NMaXN0LnJlbW92ZShcImNlbGwtY2xvc2VkXCIpXHJcbiAgICBjZWxsLmVsLmNsYXNzTGlzdC5hZGQoXCJjZWxsLW9wZW5lZFwiKVxyXG4gICAgaWYgKGNlbGw/LnN0YXRlLm1pbmUpIHtcclxuICAgICAgY2VsbC5lbC5jbGFzc0xpc3QuYWRkKFwiY2VsbC1taW5lZFwiKVxyXG4gICAgICBjYXNlRW5kKClcclxuICAgICAgZW5kR2FtZSgpXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKCFjZWxsLnN0YXRlLm1pbmUpIHtcclxuICAgIGNlbGwuc3RhdHVzLnVuT3BlbmVkID0gZmFsc2VcclxuICAgIGNlbGwuc3RhdHVzLm9wZW5lZCA9IHRydWVcclxuICAgIGNvbnN0IG5laWdib3VycyA9IGNoZWNrQ2VsbHNBcm91bmQoZ2FtZVN0YXRlLmFwcENlbGxzLCBjZWxsKVxyXG4gICAgY29uc3QgbWluZXNBdE5laWdoYm91cnMgPSBuZWlnYm91cnMuZmlsdGVyKFxyXG4gICAgICAobikgPT4gbj8uc3RhdGUubWluZSA9PT0gdHJ1ZVxyXG4gICAgKS5sZW5ndGhcclxuICAgIGlmIChtaW5lc0F0TmVpZ2hib3VycyA9PT0gMCkge1xyXG4gICAgICBuZWlnYm91cnMuZm9yRWFjaCgobikgPT4gb3BlbkNlbGwobikpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjZWxsLnN0YXRlLm51bWJlciA9IHRydWVcclxuICAgICAgY2VsbC5lbC5pbm5lclRleHQgPSBtaW5lc0F0TmVpZ2hib3Vyc1xyXG4gICAgICBjZWxsLm51bWJlciA9IG1pbmVzQXROZWlnaGJvdXJzXHJcbiAgICAgIGNlbGwuZWwuY2xhc3NMaXN0LmFkZChcImNlbGwtbnVtYmVyXCIpXHJcbiAgICAgIGNlbGwuZWwuY2xhc3NMaXN0LmFkZChgbnVtYmVyLSR7bWluZXNBdE5laWdoYm91cnN9YClcclxuICAgIH1cclxuICB9XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyQW5kSW5zZXJ0KGNlbGxzKSB7XHJcbiAgY2VsbHMuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICBjb25zdCByb3dFbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgcm93RWxlbS5jbGFzc0xpc3QuYWRkKFwicm93XCIpXHJcbiAgICBnYW1lU3RhdGUuYXBwQm9hcmQuYXBwZW5kKHJvd0VsZW0pXHJcbiAgICByb3cuZm9yRWFjaCgoY2VsbCkgPT4ge1xyXG4gICAgICBjZWxsLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGdhbWVTdGF0ZS5wbGF5ZXJTdGVwcyA9PT0gMCkge1xyXG4gICAgICAgICAgZ2FtZVN0YXRlLnRpbWUgPSBEYXRlLm5vdygpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnYW1lU3RhdGUucGxheWVyU3RlcHMgPiAwKSB7XHJcbiAgICAgICAgICBjb3VudFN0ZXBzKGNlbGwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wZW5DZWxsKGNlbGwpXHJcbiAgICAgICAgY2hlY2tXaW4oKVxyXG5cclxuICAgICAgICBpZiAoIWludElkKSB7XHJcbiAgICAgICAgICBpbnRJZCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgZ2FtZVN0YXRlLmR1cmF0aW9uID0gKFxyXG4gICAgICAgICAgICAgIChEYXRlLm5vdygpIC0gZ2FtZVN0YXRlLnRpbWUpIC9cclxuICAgICAgICAgICAgICAxMDAwXHJcbiAgICAgICAgICAgICkudG9GaXhlZCgpXHJcbiAgICAgICAgICAgIGdhbWVTdGF0ZS5kaXNwbGF5VGltZXIuaW5uZXJUZXh0ID0gYFRpbWUgZHVyYXRpb246ICR7Z2FtZVN0YXRlLmR1cmF0aW9ufWBcclxuICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBjZWxsLmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgIGZsYWdDZWxsKGNlbGwpXHJcbiAgICAgICAgaWYgKGdhbWVTdGF0ZS5wbGF5ZXJTdGVwcyA+IDApIHtcclxuICAgICAgICAgIGNvdW50Q29udGV4dFN0ZXBzKGNlbGwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGVja1dpbigpXHJcbiAgICAgIH0pXHJcbiAgICAgIHJvd0VsZW0uYXBwZW5kKGNlbGwuZWwpXHJcbiAgICB9KVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRyYXdTY29yZVRhYmxlKHRhYmxlLCBwYXJlbnRFbGVtZW50KSB7XHJcbiAgY29uc3QgY29sSGVhZGVycyA9IFtcIuKEllwiLCBcIk1pbmVzXCIsIFwiQm9hcmQgc2l6ZVwiLCBcIlN0ZXBzXCIsIFwiVGltZVwiLCBcIlN0YXR1c1wiXVxyXG4gIGNvbnN0IHNjb3JlVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgY29uc3Qgc2NvcmVUYWJsZUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgc2NvcmVUYWJsZS5jbGFzc0xpc3QuYWRkKFwic2NvcmUtdGFibGVcIilcclxuICBzY29yZVRhYmxlSGVhZC5jbGFzc0xpc3QuYWRkKFwic2NvcmUtdGFibGVfX3Jvd1wiKVxyXG4gIGNvbEhlYWRlcnMuZm9yRWFjaCgoaGVhZCkgPT4ge1xyXG4gICAgY29uc3QgaGVhZEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgaGVhZEVsLmNsYXNzTGlzdC5hZGQoXCJzY29yZS10YWJsZV9faXRlbVwiKVxyXG4gICAgaGVhZEVsLmlubmVyVGV4dCA9IGhlYWRcclxuICAgIHNjb3JlVGFibGVIZWFkLmFwcGVuZChoZWFkRWwpXHJcbiAgfSlcclxuICBzY29yZVRhYmxlLmFwcGVuZChzY29yZVRhYmxlSGVhZClcclxuICB0YWJsZS5mb3JFYWNoKCh0YWIsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICByb3cuY2xhc3NMaXN0LmFkZChcInNjb3JlLXRhYmxlX19yb3dcIilcclxuICAgIGNvbnN0IG51bWJlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IG1pbmVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gICAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb25zdCBzdGVwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICAgIGNvbnN0IHRpbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBjb25zdCBzdGF0dXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgICBudW1iZXIuY2xhc3NMaXN0LmFkZChcInNjb3JlLXRhYmxlX19pdGVtXCIpXHJcbiAgICBtaW5lcy5jbGFzc0xpc3QuYWRkKFwic2NvcmUtdGFibGVfX2l0ZW1cIilcclxuICAgIGJvYXJkLmNsYXNzTGlzdC5hZGQoXCJzY29yZS10YWJsZV9faXRlbVwiKVxyXG4gICAgc3RlcHMuY2xhc3NMaXN0LmFkZChcInNjb3JlLXRhYmxlX19pdGVtXCIpXHJcbiAgICB0aW1lLmNsYXNzTGlzdC5hZGQoXCJzY29yZS10YWJsZV9faXRlbVwiKVxyXG4gICAgc3RhdHVzLmNsYXNzTGlzdC5hZGQoXCJzY29yZS10YWJsZV9faXRlbVwiKVxyXG4gICAgbnVtYmVyLmlubmVyVGV4dCA9IGluZGV4ICsgMVxyXG4gICAgbWluZXMuaW5uZXJUZXh0ID0gdGFiLmFwcE1pbmVzXHJcbiAgICBib2FyZC5pbm5lclRleHQgPSB0YWIuYXBwQm9hcmRTaXplXHJcbiAgICBzdGVwcy5pbm5lclRleHQgPSB0YWIucGxheWVyU3RlcHNcclxuICAgIHRpbWUuaW5uZXJUZXh0ID0gdGFiLmVsYXBzZWRUaW1lXHJcbiAgICBzdGF0dXMuaW5uZXJUZXh0ID0gdGFiLmlzV2luID8gXCJXaW5cIiA6IFwiTG9zZVwiXHJcbiAgICByb3cuYXBwZW5kKG51bWJlciwgbWluZXMsIGJvYXJkLCBzdGVwcywgdGltZSwgc3RhdHVzKVxyXG4gICAgc2NvcmVUYWJsZS5hcHBlbmQocm93KVxyXG4gIH0pXHJcbiAgcGFyZW50RWxlbWVudC5hcHBlbmQoc2NvcmVUYWJsZSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Njb3JlVGFibGUoKSB7XHJcbiAgY29uc3QgdGFibGUgPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoXCIuc2NvcmUtdGFibGVcIilcclxuICB0YWJsZS5jbGFzc0xpc3QudG9nZ2xlKFwic2NvcmUtdGFibGVfc2hvd1wiKVxyXG59XHJcbmZ1bmN0aW9uIG1vdW50QXBwKHNpemUsIG1pbmVzKSB7XHJcbiAgaW50SWQgPSBudWxsXHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFwidGhlbWUtZGFya1wiKVxyXG4gIGdhbWVTdGF0ZS5hcHBCb2FyZFNpemUgPSBzaXplXHJcbiAgZ2FtZVN0YXRlLmFwcE1pbmVzID0gbWluZXNcclxuICBnYW1lU3RhdGUubWluZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxyXG4gIGdhbWVTdGF0ZS5taW5lc0lucHV0LnNldEF0dHJpYnV0ZSgnbWluJywnMTAnKVxyXG4gIGdhbWVTdGF0ZS5taW5lc0lucHV0LnNldEF0dHJpYnV0ZSgnbWF4JywnOTAnKVxyXG4gIGdhbWVTdGF0ZS5hcHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgZ2FtZVN0YXRlLndyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgaWYgKGdhbWVTdGF0ZS5nYW1lc1RhYmxlKSB7XHJcbiAgICBkcmF3U2NvcmVUYWJsZShnYW1lU3RhdGUuZ2FtZXNUYWJsZSwgZ2FtZVN0YXRlLndyYXBwZXIpXHJcbiAgfVxyXG5cclxuICBjb25zdCBhcHBEaWZmaWN1bHRpZXNCdXR0b25zd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBjb25zdCBkaXNwbGF5V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuXHJcbiAgZ2FtZVN0YXRlLnRoZW1lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIGdhbWVTdGF0ZS5zaG93U2NvcmVUYWJsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICBnYW1lU3RhdGUudGhlbWVCdXR0b24uaW5uZXJUZXh0ID0gXCJTd2l0Y2ggdGhlbWVcIlxyXG4gIGdhbWVTdGF0ZS5zaG93U2NvcmVUYWJsZS5pbm5lclRleHQgPSBcIlNob3cgdGFibGVcIlxyXG5cclxuICBnYW1lU3RhdGUuYXBwQm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgZ2FtZVN0YXRlLmRpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgZ2FtZVN0YXRlLmRpc3BsYXlTdGVwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcclxuICBnYW1lU3RhdGUuZGlzcGxheVRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGdhbWVTdGF0ZS5kaXNwbGF5LmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5XCIpXHJcbiAgZ2FtZVN0YXRlLmRpc3BsYXlTdGVwcy5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheS1zdGVwc1wiKVxyXG4gIGdhbWVTdGF0ZS5kaXNwbGF5VGltZXIuY2xhc3NMaXN0LmFkZChcImRpc3BsYXktdGltZXJcIilcclxuICBnYW1lU3RhdGUubWluZXNJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaW5wdXRcIilcclxuICBnYW1lU3RhdGUubWluZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwibnVtYmVyXCIpXHJcbiAgZ2FtZVN0YXRlLm1pbmVzSW5wdXQudmFsdWUgPSBnYW1lU3RhdGUudXNlck1pbmVzTnVtYmVyXHJcbiAgZ2FtZVN0YXRlLnRoZW1lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIiwgXCJidXR0b24tdGhlbWVcIilcclxuICBnYW1lU3RhdGUuc2hvd1Njb3JlVGFibGUuY2xhc3NMaXN0LmFkZChcImJ1dHRvblwiLCBcImJ1dHRvbi1zY29yZVwiKVxyXG4gIGRpc3BsYXlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoXCJhcHBfX2Rpc3BsYXlcIilcclxuICBhcHBEaWZmaWN1bHRpZXNCdXR0b25zd3JhcHBlci5jbGFzc0xpc3QuYWRkKFwiYXBwX19idXR0b25zXCIpXHJcbiAgZ2FtZVN0YXRlLnRoZW1lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVUaGVtZSlcclxuICBnYW1lU3RhdGUubWluZXNJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiaW5wdXRcIiwgdXNlck1pbmVzKVxyXG4gIGdhbWVTdGF0ZS5zaG93U2NvcmVUYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1Njb3JlVGFibGUpXHJcbiAgZ2FtZVN0YXRlLmRpc3BsYXkuaW5uZXJUZXh0ID0gYE1pbmVzIGxlZnQ6ICR7bWluZXN9YFxyXG4gIGdhbWVTdGF0ZS5kaXNwbGF5U3RlcHMuaW5uZXJUZXh0ID0gYFN0ZXBzOiAke2dhbWVTdGF0ZS5wbGF5ZXJTdGVwc31gXHJcbiAgZ2FtZVN0YXRlLmRpc3BsYXlUaW1lci5pbm5lclRleHQgPSBgVGltZSBkdXJhdGlvbjogJHtnYW1lU3RhdGUuZHVyYXRpb259YFxyXG5cclxuICBpZiAoZ2FtZVN0YXRlLmFwcENlbGxzKSB7XHJcbiAgICBnYW1lU3RhdGUuYXBwQ2VsbHMgPSBkcmF3RW5kR2FtZUJvYXJkKGdhbWVTdGF0ZS5hcHBDZWxscylcclxuICB9IGVsc2Uge1xyXG4gICAgZ2FtZVN0YXRlLmFwcENlbGxzID0gZHJhd0JvYXJkKHNpemUpXHJcbiAgfVxyXG5cclxuICByZW5kZXJBbmRJbnNlcnQoZ2FtZVN0YXRlLmFwcENlbGxzKVxyXG4gIGdhbWVTdGF0ZS5yZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKVxyXG4gIGdhbWVTdGF0ZS5yZXN0YXJ0QnV0dG9uLmlubmVyVGV4dCA9IFwiTmV3IGdhbWVcIlxyXG4gIGdhbWVTdGF0ZS5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PlxyXG4gICAgcmVzdGFydEdhbWUoZ2FtZVN0YXRlLmRlZmF1bHRCb2FyZFNpemUsIGdhbWVTdGF0ZS51c2VyTWluZXNOdW1iZXIpXHJcbiAgKVxyXG4gIGdhbWVTdGF0ZS5yZXN0YXJ0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJidXR0b25cIiwgXCJidXR0b24tcmVzdGFydFwiKVxyXG4gIGdhbWVTdGF0ZS53cmFwcGVyLnByZXBlbmQoZ2FtZVN0YXRlLnJlc3RhcnRCdXR0b24pXHJcbiAgZ2FtZVN0YXRlLnJlc3RhcnRCdXR0b24uY2xhc3NMaXN0LmFkZChcInNob3ctYnV0dG9uXCIpXHJcbiAgZ2FtZVN0YXRlLmFwcC5jbGFzc0xpc3QuYWRkKFwiYXBwXCIpXHJcbiAgZ2FtZVN0YXRlLndyYXBwZXIuY2xhc3NMaXN0LmFkZChcIndyYXBwZXJcIilcclxuICBnYW1lU3RhdGUuYXBwQm9hcmQuY2xhc3NMaXN0LmFkZChcImJvYXJkXCIpXHJcbiAgYXBwZW5kRGlmZmljdWx0aWVzQnV0dG9ucyhhcHBEaWZmaWN1bHRpZXNCdXR0b25zd3JhcHBlcilcclxuICBkaXNwbGF5V3JhcHBlci5hcHBlbmQoXHJcbiAgICBnYW1lU3RhdGUubWluZXNJbnB1dCxcclxuICAgIGdhbWVTdGF0ZS5kaXNwbGF5LFxyXG4gICAgZ2FtZVN0YXRlLmRpc3BsYXlTdGVwcyxcclxuICAgIGdhbWVTdGF0ZS5kaXNwbGF5VGltZXJcclxuICApXHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZ2FtZVN0YXRlLmFwcClcclxuICBnYW1lU3RhdGUuYXBwLmFwcGVuZChnYW1lU3RhdGUud3JhcHBlcilcclxuICBnYW1lU3RhdGUud3JhcHBlci5hcHBlbmQoXHJcbiAgICBnYW1lU3RhdGUudGhlbWVCdXR0b24sXHJcbiAgICBnYW1lU3RhdGUuc2hvd1Njb3JlVGFibGUsXHJcbiAgICBhcHBEaWZmaWN1bHRpZXNCdXR0b25zd3JhcHBlcixcclxuICAgIGRpc3BsYXlXcmFwcGVyLFxyXG4gICAgZ2FtZVN0YXRlLmFwcEJvYXJkXHJcbiAgKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZXN0YXJ0R2FtZShib2FyZFNpemUsIGRlZmF1bHRNaW5lcykge1xyXG4gIHN0YXJ0ID0gbnVsbFxyXG4gIGdhbWVTdGF0ZS5kdXJhdGlvbiA9IDBcclxuICBjbGVhckludGVydmFsKGludElkKVxyXG4gIGdhbWVTdGF0ZS5wbGF5ZXJTdGVwcyA9IDBcclxuICBnYW1lU3RhdGUuYXBwLnJlbW92ZSgpXHJcbiAgZ2FtZVN0YXRlLmFwcEJvYXJkLnJlbW92ZSgpXHJcbiAgZ2FtZVN0YXRlLmFwcEJvYXJkU2l6ZSA9IG51bGxcclxuICBnYW1lU3RhdGUuZGlzcGxheS5yZW1vdmUoKVxyXG4gIGdhbWVTdGF0ZS5kaXNwbGF5U3RlcHMucmVtb3ZlKClcclxuICBnYW1lU3RhdGUuYXBwTWluZXMgPSBudWxsXHJcbiAgZ2FtZVN0YXRlLnVwZGF0ZWRNaW5lcyA9IG51bGxcclxuICBnYW1lU3RhdGUuYXBwQ2VsbHMgPSBudWxsXHJcbiAgaWYgKGdhbWVTdGF0ZS5yZXN0YXJ0QnV0dG9uKSBnYW1lU3RhdGUucmVzdGFydEJ1dHRvbi5yZW1vdmUoKVxyXG4gIGdhbWVTdGF0ZS50aW1lID0gbmV3IERhdGUoKVxyXG4gIGdhbWVTdGF0ZS5zdG9wVGltZSA9IG51bGxcclxuICBnYW1lU3RhdGUuaXNHYW1lRW5kZWQgPSBmYWxzZVxyXG4gIGdhbWVTdGF0ZS5pc1dpbiA9IGZhbHNlXHJcbiAgZ2FtZVN0YXRlLmlzTG9zZSA9IGZhbHNlXHJcbiAgbW91bnRBcHAoYm9hcmRTaXplLCBkZWZhdWx0TWluZXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVHYW1lKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ2FtZVN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KGdhbWVTdGF0ZSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hUb1RhYmxlKHRhYmxlLCBnYW1lKSB7XHJcbiAgaWYgKHRhYmxlLmxlbmd0aCA+IDkpIHtcclxuICAgIHdoaWxlICh0YWJsZS5sZW5ndGggPiA5KSB7XHJcbiAgICAgIHRhYmxlLnBvcCgpXHJcbiAgICB9XHJcbiAgICB0YWJsZS51bnNoaWZ0KGdhbWUpXHJcbiAgfSBlbHNlIHtcclxuICAgIHRhYmxlLnVuc2hpZnQoZ2FtZSlcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gbG9hZEdhbWUoKSB7XHJcbiAgbG9hZGVkR2FtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2FtZVN0YXRlXCIpXHJcbiAgaWYgKGxvYWRlZEdhbWUpIHtcclxuICAgIGNvbnN0IHsgLi4uZ2FtZSB9ID0gSlNPTi5wYXJzZShsb2FkZWRHYW1lKVxyXG4gICAgbG9hZGVkR2FtZSA9IGdhbWVcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNob3NlRGlmZmljdWx0eSgpIHtcclxuICBnYW1lU3RhdGUuZGVmYXVsdEJvYXJkU2l6ZSA9XHJcbiAgICBkaWZmaWN1bHRpZXNbU3RyaW5nKHRoaXMuaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCkpXS5ib2FyZFNpemVcclxuICByZXN0YXJ0R2FtZShnYW1lU3RhdGUuZGVmYXVsdEJvYXJkU2l6ZSwgZ2FtZVN0YXRlLnVzZXJNaW5lc051bWJlcilcclxufVxyXG5cclxuZnVuY3Rpb24gYXBwZW5kRGlmZmljdWx0aWVzQnV0dG9ucyhwYXJlbnQpIHtcclxuICBmb3IgKGNvbnN0IFtrZXldIG9mIE9iamVjdC5lbnRyaWVzKGRpZmZpY3VsdGllcykpIHtcclxuICAgIGNvbnN0IGRpZkJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIilcclxuICAgIGRpZkJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uXCIsIFwiYnV0dG9uLWRpZmZpY3VsdHlcIilcclxuICAgIGRpZkJ1dHRvbi5pbm5lclRleHQgPSBTdHJpbmcoa2V5KS50b1VwcGVyQ2FzZSgpXHJcbiAgICBkaWZCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNob3NlRGlmZmljdWx0eSlcclxuICAgIHBhcmVudC5hcHBlbmQoZGlmQnV0dG9uKVxyXG4gIH1cclxufVxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gIGxvYWRHYW1lKClcclxuICBpZiAobG9hZGVkR2FtZSkge1xyXG4gICAgZ2FtZVN0YXRlID0gbG9hZGVkR2FtZVxyXG4gICAgbW91bnRBcHAoZ2FtZVN0YXRlLmRlZmF1bHRCb2FyZFNpemUsIGdhbWVTdGF0ZS51c2VyTWluZXNOdW1iZXIpXHJcbiAgICBpZiAobG9hZGVkR2FtZS5pc0dhbWVFbmRlZCkge1xyXG4gICAgICBjYXNlRW5kKClcclxuICAgICAgZW5kR2FtZSgpXHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIG1vdW50QXBwKGdhbWVTdGF0ZS5kZWZhdWx0Qm9hcmRTaXplLCBnYW1lU3RhdGUudXNlck1pbmVzTnVtYmVyKVxyXG4gIH1cclxufSlcclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgKCkgPT4ge1xyXG4gIHNhdmVHYW1lKClcclxufSlcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9