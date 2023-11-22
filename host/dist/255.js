"use strict";
(self["webpackChunkreact_host_nextjs_remote_host"] = self["webpackChunkreact_host_nextjs_remote_host"] || []).push([[255],{

/***/ 255:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: consume shared module (default) react@* (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(122);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: remote remote/nextjs-remote-component
var nextjs_remote_component = __webpack_require__(546);
var nextjs_remote_component_default = /*#__PURE__*/__webpack_require__.n(nextjs_remote_component);
// EXTERNAL MODULE: remote remote/nextjs-remote-page
var nextjs_remote_page = __webpack_require__(26);
var nextjs_remote_page_default = /*#__PURE__*/__webpack_require__.n(nextjs_remote_page);
;// CONCATENATED MODULE: ./src/App.jsx



function App() {
  return /*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment, null, /*#__PURE__*/index_js_default().createElement("div", null, "This is the React container App hosted at localhost:8080"), /*#__PURE__*/index_js_default().createElement((nextjs_remote_component_default()), null), /*#__PURE__*/index_js_default().createElement((nextjs_remote_page_default()), null));
}
/* harmony default export */ const src_App = (App);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js + 2 modules
var dist = __webpack_require__(818);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: remote remote/aboutPage
var aboutPage = __webpack_require__(904);
var aboutPage_default = /*#__PURE__*/__webpack_require__.n(aboutPage);
;// CONCATENATED MODULE: ./src/bootstrap.jsx




const container = document.getElementById('root');
const root = (0,client/* createRoot */.s)(container); // createRoot(container!) if you use TypeScript

const router = (0,dist/* createBrowserRouter */.aj)([{
  path: "/",
  element: /*#__PURE__*/index_js_default().createElement(src_App, null),
  children: []
}, {
  path: '/about',
  element: /*#__PURE__*/index_js_default().createElement((aboutPage_default()), null),
  children: []
}]);
root.render( /*#__PURE__*/index_js_default().createElement(dist/* RouterProvider */.pG, {
  router: router
}));

/***/ })

}]);
//# sourceMappingURL=255.js.map