(window["webpackJsonp_ultimate_addons_for_gutenberg"] = window["webpackJsonp_ultimate_addons_for_gutenberg"] || []).push([["chunks/team/render"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/team/editor.lazy.scss":
/*!*************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/team/editor.lazy.scss ***!
  \*************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.i, "/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n\n.block-editor-rich-text__editable.uagb-team__title {\n  margin-top: 0; }\n\n.wp-block-uagb-team {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n", "",{"version":3,"sources":["webpack://./src/blocks/team/editor.lazy.scss"],"names":[],"mappings":"AAAA;;;;;EAKE;AACF;EACE,aAAa;EACb,UAAU;EACV,SAAS;EACT,gBAAgB,EAAE;;AAEpB;EACE,WAAW,EAAE;;AAEf;;EAEE,gBAAgB;EAChB,uBAAuB;EACvB,YAAY,EAAE;;AAEhB;EACE,gBAAgB,EAAE;;AAEpB;EACE,aAAa,EAAE;;AAEjB;EACE,gBAAgB;EAChB,mBAAmB,EAAE","sourcesContent":["/**\n * #.# Editor Styles\n *\n * CSS for just Backend enqueued after style.scss\n * which makes it higher in priority.\n */\n.block-editor-page #wpwrap .edit-post-visual-editor ul.uagb-team__social-list {\n  display: flex;\n  padding: 0;\n  margin: 0;\n  list-style: none; }\n\n.block-editor-page #wpwrap .edit-post-visual-editor .uagb-team__social-icon a {\n  color: #333; }\n\n.wp-block-uagb-team .components-button:focus:enabled,\n.wp-block-uagb-team .components-button {\n  box-shadow: none;\n  background: transparent;\n  border: none; }\n\n.wp-block-uagb-team p.uagb-team__desc.block-editor-rich-text__editable {\n  margin: 0 0 10px; }\n\n.block-editor-rich-text__editable.uagb-team__title {\n  margin-top: 0; }\n\n.wp-block-uagb-team {\n  margin-top: 20px;\n  margin-bottom: 20px; }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/blocks/team/editor.lazy.scss":
/*!******************************************!*\
  !*** ./src/blocks/team/editor.lazy.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_lib_loader_js_editor_lazy_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/lib/loader.js!./editor.lazy.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/blocks/team/editor.lazy.scss");

            

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

/***/ "./src/blocks/team/render.js":
/*!***********************************!*\
  !*** ./src/blocks/team/render.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @Controls/renderIcon */ "./blocks-config/uagb-controls/renderIcon.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.lazy.scss */ "./src/blocks/team/editor.lazy.scss");
/* harmony import */ var _Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @Controls/getPreviewType */ "./blocks-config/uagb-controls/getPreviewType.js");









const Render = props => {
  // Add and remove the CSS on the drop and remove of the component.
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useLayoutEffect"])(() => {
    _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_6__["default"].use();
    return () => {
      _editor_lazy_scss__WEBPACK_IMPORTED_MODULE_6__["default"].unuse();
    };
  }, []);
  props = props.parentProps;
  const deviceType = Object(_Controls_getPreviewType__WEBPACK_IMPORTED_MODULE_7__["useDeviceType"])();
  const {
    className,
    setAttributes,
    attributes,
    mergeBlocks,
    insertBlocksAfter,
    onReplace
  } = props;
  const {
    isPreview,
    align,
    tag,
    title,
    prefix,
    description_text,
    image,
    imgStyle,
    imgSize,
    imgPosition,
    twitterIcon,
    fbIcon,
    linkedinIcon,
    pinIcon,
    twitterLink,
    fbLink,
    linkedinLink,
    pinLink,
    socialTarget,
    socialEnable,
    stack
  } = attributes;
  const titleHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
    tagName: tag,
    value: title,
    className: "uagb-team__title",
    onChange: value => setAttributes({
      title: value
    }),
    multiline: false,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Title', 'ultimate-addons-for-gutenberg'),
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len = arguments.length, blocks = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        blocks[_key - 2] = arguments[_key];
      }

      insertBlocksAfter([...blocks, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
        content: after
      })]);
    } : undefined,
    onRemove: () => onReplace([])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
    tagName: "div",
    value: prefix,
    className: "uagb-team__prefix",
    onChange: value => setAttributes({
      prefix: value
    }),
    onMerge: mergeBlocks,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Designation', 'ultimate-addons-for-gutenberg'),
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len2 = arguments.length, blocks = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        blocks[_key2 - 2] = arguments[_key2];
      }

      insertBlocksAfter([...blocks, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
        content: after
      })]);
    } : undefined,
    onRemove: () => onReplace([])
  }));

  const socialHtml = (icon, link, target) => {
    const target_value = target ? '_blank' : '_self';
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      className: "uagb-team__social-icon"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: link,
      "aria-label": icon,
      target: target_value,
      title: "",
      rel: "noopener noreferrer"
    }, Object(_Controls_renderIcon__WEBPACK_IMPORTED_MODULE_3__["default"])(icon)));
  };

  const socialLinks = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "uagb-team__social-list"
  }, '' !== twitterIcon && socialHtml(twitterIcon, twitterLink, socialTarget), '' !== fbIcon && socialHtml(fbIcon, fbLink, socialTarget), '' !== linkedinIcon && socialHtml(linkedinIcon, linkedinLink, socialTarget), '' !== pinIcon && socialHtml(pinIcon, pinLink, socialTarget)); // Get description and seperator components.

  const descHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_5__["RichText"], {
    tagName: "p",
    value: description_text,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Write a Description', 'ultimate-addons-for-gutenberg'),
    className: "uagb-team__desc",
    onChange: value => setAttributes({
      description_text: value
    }),
    onMerge: mergeBlocks,
    onSplit: insertBlocksAfter ? function (before, after) {
      setAttributes({
        content: before
      });

      for (var _len3 = arguments.length, blocks = new Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++) {
        blocks[_key3 - 2] = arguments[_key3];
      }

      insertBlocksAfter([...blocks, Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__["createBlock"])('core/paragraph', {
        content: after
      })]);
    } : undefined,
    onRemove: () => onReplace([])
  });
  let size = '';
  let imgUrl = '';

  if (image) {
    size = image.sizes;

    if (image.sizes) {
      imgUrl = size[imgSize] ? size[imgSize].url : image.url;
    } else {
      imgUrl = image.url;
    }
  }

  let imageHtml = '';

  if ('' !== imgUrl) {
    imageHtml = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      className: `uagb-team__image-crop-${imgStyle}`,
      src: imgUrl,
      alt: image.alt ? image.alt : ''
    });
  }

  const previewImageData = `${uagb_blocks_info.uagb_url}/admin/assets/preview-images/team.png`;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, isPreview ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    width: "100%",
    src: previewImageData,
    alt: ""
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_0___default()(className, `uagb-team__image-position-${imgPosition}`, `uagb-team__align-${align}`, `uagb-team__stack-${stack}`, `uagb-editor-preview-mode-${deviceType.toLowerCase()}`, `uagb-block-${props.clientId.substr(0, 8)}`)
  }, imgPosition === 'left' && imageHtml, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "uagb-team__content"
  }, imgPosition === 'above' && imageHtml, titleHtml, descHtml, socialEnable && socialLinks), imgPosition === 'right' && imageHtml));
};

/* harmony default export */ __webpack_exports__["default"] = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.memo(Render));

/***/ })

}]);
//# sourceMappingURL=render.js.map