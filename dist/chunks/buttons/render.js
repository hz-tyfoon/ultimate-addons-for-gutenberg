(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/buttons/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/buttons/editor.lazy.scss":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/buttons/editor.lazy.scss ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/**\n * Editor styles for the admin\n */\n.wp-block[data-type=\"uagb/buttons\"][data-btn-width=\"full\"] .block-editor-inner-blocks,\n.wp-block[data-type=\"uagb/buttons\"][data-btn-width=\"full\"] .wp-block[data-type=\"uagb/buttons-child\"] {\n  width: 100%; }\n\n.uagb-buttons__outer-wrap .block-editor-inner-blocks {\n  width: 100%; }\n  .uagb-buttons__outer-wrap .block-editor-inner-blocks .block-editor-block-list__layout {\n    display: inline-flex; }\n\n.uagb-buttons__outer-wrap .uagb-buttons__wrap .block-editor-block-list__layout .block-list-appender {\n  margin-right: -60px !important; }\n", "",{"version":3,"sources":["webpack://./src/blocks/buttons/editor.lazy.scss"],"names":[],"mappings":"AAAA;;EAEE;AACF;;EAEE,WAAW,EAAE;;AAEf;EACE,WAAW,EAAE;EACb;IACE,oBAAoB,EAAE;;AAE1B;EACE,8BAA8B,EAAE","sourcesContent":["/**\n * Editor styles for the admin\n */\n.wp-block[data-type=\"uagb/buttons\"][data-btn-width=\"full\"] .block-editor-inner-blocks,\n.wp-block[data-type=\"uagb/buttons\"][data-btn-width=\"full\"] .wp-block[data-type=\"uagb/buttons-child\"] {\n  width: 100%; }\n\n.uagb-buttons__outer-wrap .block-editor-inner-blocks {\n  width: 100%; }\n  .uagb-buttons__outer-wrap .block-editor-inner-blocks .block-editor-block-list__layout {\n    display: inline-flex; }\n\n.uagb-buttons__outer-wrap .uagb-buttons__wrap .block-editor-block-list__layout .block-list-appender {\n  margin-right: -60px !important; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/buttons/editor.lazy.scss":
/*!*********************************************!*\
  !*** ./src/blocks/buttons/editor.lazy.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/buttons/editor.lazy.scss");

            

var refs = 0;
var update;
var options = {"injectType":"lazySingletonStyleTag","attributes":{"id":"uagb-editor-styles"}};

options.insert = "head";
options.singleton = true;

var exported = {};

exported.locals = _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {};
exported.use = function() {
  if (!(refs++)) {
    update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);
  }

  return exported;
};
exported.unuse = function() {
  if (refs > 0 && !--refs) {
    update();
    update = null;
  }
};



;
       /* harmony default export */ __webpack_exports__["default"] = (exported);


/***/ }),

/***/ "./src/blocks/buttons/render.js":
/*!**************************************!*\
  !*** ./src/blocks/buttons/render.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/buttons/editor.lazy.scss");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");





const ALLOWED_BLOCKS = ['uagb/buttons-child'];

const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_3__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const {
    attributes
  } = props;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_4__["useDeviceType"])();
  const {
    className,
    btn_count,
    buttons,
    stack,
    isPreview,
    buttonSize,
    buttonSizeTablet,
    buttonSizeMobile
  } = attributes;
  const getButtonTemplate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    const childButtons = [];

    for (let i = 0; i < btn_count; i++) {
      childButtons.push(['uagb/buttons-child', buttons[i]]);
    }

    return childButtons;
  }, [btn_count, buttons]);
  const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/multi-button.png`;
  return isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    width: "100%",
    src: previewImageData,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, 'uagb-buttons__outer-wrap', `uagb-btn__${buttonSize}-btn`, `uagb-btn-tablet__${buttonSizeTablet}-btn`, `uagb-btn-mobile__${buttonSizeMobile}-btn`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${props.clientId.substr(0, 8)}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()('uagb-buttons__wrap', `uagb-buttons-stack-${stack}`)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    template: getButtonTemplate,
    templateLock: false,
    allowedBlocks: ALLOWED_BLOCKS,
    __experimentalMoverDirection: 'desktop' === stack ? 'vertical' : 'horizontal'
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map