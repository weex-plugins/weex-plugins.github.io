/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(100)
	var __weex_style__ = __webpack_require__(101)
	var __weex_script__ = __webpack_require__(102)
	
	__weex_define__('@weex-component/a208a7bbad701fc3704710d824c3e36a', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/a208a7bbad701fc3704710d824c3e36a',undefined,undefined)

/***/ },

/***/ 93:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "navbar-con"
	  ],
	  "children": [
	    {
	      "type": "div",
	      "classList": [
	        "navbar"
	      ],
	      "children": [
	        {
	          "type": "div",
	          "classList": [
	            "btn-back"
	          ],
	          "events": {
	            "click": "goHome"
	          },
	          "children": [
	            {
	              "type": "image",
	              "classList": [
	                "btn-arrow-left"
	              ],
	              "attr": {
	                "src": "http://img1.vued.vanthink.cn/vued9c8e7e738ff94abee23eb69d7f1401e9.png"
	              }
	            },
	            {
	              "type": "text",
	              "classList": [
	                "btn-text"
	              ],
	              "attr": {
	                "value": "返回"
	              }
	            }
	          ]
	        },
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": function () {return this.title}
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 94:
/***/ function(module, exports) {

	module.exports = {
	  "navbar-con": {
	    "height": 108,
	    "paddingTop": 20
	  },
	  "navbar": {
	    "zIndex": 1000,
	    "position": "relative",
	    "display": "flex",
	    "flexDirection": "row",
	    "height": 88,
	    "backgroundColor": "#ffffff",
	    "alignItems": "center",
	    "borderBottomWidth": 2,
	    "borderBottomColor": "#dddddd"
	  },
	  "btn-back": {
	    "zIndex": 1002,
	    "flexDirection": "row",
	    "alignItems": "center",
	    "width": 180,
	    "height": 88
	  },
	  "btn-arrow-left": {
	    "width": 60,
	    "height": 60,
	    "marginLeft": 10
	  },
	  "btn-text": {
	    "color": "#0f89f5"
	  },
	  "title": {
	    "position": "absolute",
	    "left": 180,
	    "right": 180,
	    "top": 0,
	    "height": 88,
	    "lineHeight": 88,
	    "fontSize": 36,
	    "textAlign": "center"
	  }
	}

/***/ },

/***/ 95:
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	var navigator = __weex_require__('@weex-module/navigator');
	module.exports = {
	  methods: {
	    goHome: function goHome() {
	      navigator.pop();
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 100:
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "classList": [
	    "container"
	  ],
	  "children": [
	    {
	      "type": "navbar",
	      "attr": {
	        "title": "设置地图中心"
	      }
	    },
	    {
	      "type": "weex-amap",
	      "classList": [
	        "map"
	      ],
	      "id": "map2017",
	      "attr": {
	        "sdkKey": function () {return this.keys},
	        "mapInstance": function () {return this.map},
	        "zoom": function () {return this.zoom},
	        "center": function () {return this.pos}
	      }
	    },
	    {
	      "type": "div",
	      "classList": [
	        "map-control"
	      ],
	      "children": [
	        {
	          "type": "text",
	          "classList": [
	            "title"
	          ],
	          "attr": {
	            "value": "Props: center"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "tips"
	          ],
	          "attr": {
	            "value": "center属性表示地图中心点坐标值，你可以设置它来改变地图的位置，比如洁面显示的[116.487, 40.00003]为中心的地图"
	          }
	        },
	        {
	          "type": "div",
	          "events": {
	            "click": "changeCenter"
	          },
	          "classList": [
	            "btnbox"
	          ],
	          "children": [
	            {
	              "type": "text",
	              "classList": [
	                "btn"
	              ],
	              "attr": {
	                "value": "Set Center"
	              }
	            }
	          ]
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 101:
/***/ function(module, exports) {

	module.exports = {
	  "container": {
	    "position": "relative",
	    "flex": 1,
	    "backgroundColor": "#ffffff"
	  },
	  "map": {
	    "flex": 1,
	    "position": "relative",
	    "backgroundColor": "#ffffff",
	    "minHeight": 800,
	    "borderBottomWidth": 10,
	    "borderBottomColor": "#ffffff"
	  },
	  "map-control": {
	    "paddingTop": 20,
	    "minHeight": 600
	  },
	  "title": {
	    "marginLeft": 20,
	    "paddingLeft": 20,
	    "paddingTop": 10,
	    "paddingBottom": 10,
	    "fontSize": 36,
	    "borderLeftWidth": 6,
	    "borderLeftColor": "#0f89f5",
	    "color": "#222222",
	    "textAlign": "left"
	  },
	  "tips": {
	    "margin": 20,
	    "padding": 10,
	    "color": "#666666",
	    "fontSize": 20
	  },
	  "btn": {
	    "margin": 20,
	    "padding": 20,
	    "backgroundColor": "#1ba1e2",
	    "borderRadius": 5,
	    "color": "#ffffff",
	    "textAlign": "center",
	    "cursor": "pointer",
	    "fontSize": 28
	  }
	}

/***/ },

/***/ 102:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(103);
	var Amap = null;
	try {
	  Amap = __weex_require__('@weex-module/amap');
	} catch (err) {
	  console.log(err);
	}
	var modal = __weex_require__('@weex-module/modal');
	module.exports = {
	  data: function () {return {
	    keys: {
	      h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	      ios: '',
	      android: 'db6a973159cb0c2639ad02c617a786ae'
	    },
	    pos: [116.487, 40.00003],
	    zoom: 9
	  }},
	
	  methods: {
	    changeCenter: function changeCenter() {
	      this.pos = [116.4 + Math.random() * 0.5, 40.25 + Math.random() * 0.25];
	    }
	  }
	};}
	/* generated by weex-loader */


/***/ },

/***/ 103:
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(93)
	var __weex_style__ = __webpack_require__(94)
	var __weex_script__ = __webpack_require__(95)
	
	__weex_define__('@weex-component/navbar', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODE1YTkwMWZmMDc1ZDEwOTMwNWI/NmRkNyoqKioqIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jZW50ZXIud2U/MzY5YyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9uYXZiYXIud2U/MzU2MSoiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlPzliNDAqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdmJhci53ZT9jMTk2KiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvY2VudGVyLndlPzBlM2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2NlbnRlci53ZT9lNGU5Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9jZW50ZXIud2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlP2Y4N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7O0FDdENBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDOztBQUVELDJGOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7QUNhQSx5QkFDQTs7OytCQUdBO2lCQUNBO0FBRUE7QUFKQTtBQURBOzs7Ozs7Ozs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUErQixpQkFBaUI7QUFDaEQscUNBQW9DLGdCQUFnQjtBQUNwRCw4QkFBNkIsaUJBQWlCO0FBQzlDLGdDQUErQjtBQUMvQjtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7O0FDZ0JBLHFCQUNBO1lBQ0E7S0FDQTtrQkFDQTtlQUNBO2VBQ0E7QUFDQTtxQkFDQTs7OztXQUlBO1lBQ0E7Z0JBRUE7QUFKQTtvQkFLQTtXQUdBO0FBVEE7OzsyQ0FXQTt3RUFDQTtBQUVBO0FBSkE7QUFYQTs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxFQUFDIiwiZmlsZSI6InBhZ2VzL2NlbnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDgxNWE5MDFmZjA3NWQxMDkzMDViIiwidmFyIF9fd2VleF90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9jZW50ZXIud2VcIilcbnZhciBfX3dlZXhfc3R5bGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vY2VudGVyLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY2VudGVyLndlXCIpXG5cbl9fd2VleF9kZWZpbmVfXygnQHdlZXgtY29tcG9uZW50L2EyMDhhN2JiYWQ3MDFmYzM3MDQ3MTBkODI0YzNlMzZhJywgW10sIGZ1bmN0aW9uKF9fd2VleF9yZXF1aXJlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9tb2R1bGVfXykge1xuXG4gICAgX193ZWV4X3NjcmlwdF9fKF9fd2VleF9tb2R1bGVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X3JlcXVpcmVfXylcbiAgICBpZiAoX193ZWV4X2V4cG9ydHNfXy5fX2VzTW9kdWxlICYmIF9fd2VleF9leHBvcnRzX18uZGVmYXVsdCkge1xuICAgICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMgPSBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHRcbiAgICB9XG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy50ZW1wbGF0ZSA9IF9fd2VleF90ZW1wbGF0ZV9fXG5cbiAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cy5zdHlsZSA9IF9fd2VleF9zdHlsZV9fXG5cbn0pXG5cbl9fd2VleF9ib290c3RyYXBfXygnQHdlZXgtY29tcG9uZW50L2EyMDhhN2JiYWQ3MDFmYzM3MDQ3MTBkODI0YzNlMzZhJyx1bmRlZmluZWQsdW5kZWZpbmVkKVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3BhZ2VzL2NlbnRlci53ZT9lbnRyeT10cnVlXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gNSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwibmF2YmFyLWNvblwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcIm5hdmJhclwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0bi1iYWNrXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJnb0hvbWVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0bi1hcnJvdy1sZWZ0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcImh0dHA6Ly9pbWcxLnZ1ZWQudmFudGhpbmsuY24vdnVlZDljOGU3ZTczOGZmOTRhYmVlMjNlYjY5ZDdmMTQwMWU5LnBuZ1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuLXRleHRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLov5Tlm55cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGl0bGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdGxlfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vc3JjL2luY2x1ZGUvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDMgNSA2IDcgOCA5IDEwIDExIDEyIDEzIDE0IDE1IDE2IDE3IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwibmF2YmFyLWNvblwiOiB7XG4gICAgXCJoZWlnaHRcIjogMTA4LFxuICAgIFwicGFkZGluZ1RvcFwiOiAyMFxuICB9LFxuICBcIm5hdmJhclwiOiB7XG4gICAgXCJ6SW5kZXhcIjogMTAwMCxcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogODgsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiAyLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGRkZGRkXCJcbiAgfSxcbiAgXCJidG4tYmFja1wiOiB7XG4gICAgXCJ6SW5kZXhcIjogMTAwMixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcIndpZHRoXCI6IDE4MCxcbiAgICBcImhlaWdodFwiOiA4OFxuICB9LFxuICBcImJ0bi1hcnJvdy1sZWZ0XCI6IHtcbiAgICBcIndpZHRoXCI6IDYwLFxuICAgIFwiaGVpZ2h0XCI6IDYwLFxuICAgIFwibWFyZ2luTGVmdFwiOiAxMFxuICB9LFxuICBcImJ0bi10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzBmODlmNVwiXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwibGVmdFwiOiAxODAsXG4gICAgXCJyaWdodFwiOiAxODAsXG4gICAgXCJ0b3BcIjogMCxcbiAgICBcImhlaWdodFwiOiA4OCxcbiAgICBcImxpbmVIZWlnaHRcIjogODgsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9zdHlsZS5qcyEuL34vd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL3NyYy9pbmNsdWRlL25hdmJhci53ZVxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzIDUgNiA3IDggOSAxMCAxMSAxMiAxMyAxNCAxNSAxNiAxNyIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cIm5hdmJhci1jb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwibmF2YmFyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLWJhY2tcIiBvbmNsaWNrPVwiZ29Ib21lXCI+XG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImJ0bi1hcnJvdy1sZWZ0XCIgc3JjPVwiaHR0cDovL2ltZzEudnVlZC52YW50aGluay5jbi92dWVkOWM4ZTdlNzM4ZmY5NGFiZWUyM2ViNjlkN2YxNDAxZTkucG5nXCI+PC9pbWFnZT5cbiAgICAgICAgPHRleHQgY2xhc3M9XCJidG4tdGV4dFwiPui/lOWbnjwvdGV4dD5cbiAgICAgIDwvZGl2PlxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7dGl0bGV9fTwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHN0eWxlPlxuICAubmF2YmFyLWNvbntcbiAgICBoZWlnaHQ6IDEwODtcbiAgICBwYWRkaW5nLXRvcDogMjA7XG4gIH1cbiAgLm5hdmJhcntcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OmZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBoZWlnaHQ6IDg4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAyO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNkZGQ7XG4gIH1cbiAgLmJ0bi1iYWNre1xuICAgIHotaW5kZXg6IDEwMDI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxODA7XG4gICAgaGVpZ2h0OiA4ODtcbiAgfVxuICAuYnRuLWFycm93LWxlZnR7XG4gICAgd2lkdGg6IDYwO1xuICAgIGhlaWdodDogNjA7XG4gICAgbWFyZ2luLWxlZnQ6IDEwO1xuICB9XG4gIC5idG4tdGV4dHtcbiAgICBjb2xvcjogIzBmODlmNTtcbiAgfVxuICAudGl0bGV7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6MTgwO1xuICAgIHJpZ2h0OjE4MDtcbiAgICB0b3A6MDtcbiAgICBoZWlnaHQ6IDg4O1xuICAgIGxpbmUtaGVpZ2h0OiA4ODtcbiAgICBmb250LXNpemU6IDM2O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuPC9zdHlsZT5cbjxzY3JpcHQ+XG4gIGNvbnN0IG5hdmlnYXRvciA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9uYXZpZ2F0b3InKTtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbWV0aG9kczoge1xuICAgICAgZ29Ib21lKCkge1xuICAgICAgICBuYXZpZ2F0b3IucG9wKCk7XG4gICAgICB9XG4gICAgfSAgIFxuICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5jbHVkZS9uYXZiYXIud2U/MTY1MmJhYTgiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIm5hdmJhclwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIuiuvue9ruWcsOWbvuS4reW/g1wiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ3ZWV4LWFtYXBcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtYXBcIlxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCJtYXAyMDE3XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNka0tleVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMua2V5c30sXG4gICAgICAgIFwibWFwSW5zdGFuY2VcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLm1hcH0sXG4gICAgICAgIFwiem9vbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuem9vbX0sXG4gICAgICAgIFwiY2VudGVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N9XG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtYXAtY29udHJvbFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlByb3BzOiBjZW50ZXJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRpcHNcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJjZW50ZXLlsZ7mgKfooajnpLrlnLDlm77kuK3lv4PngrnlnZDmoIflgLzvvIzkvaDlj6/ku6Xorr7nva7lroPmnaXmlLnlj5jlnLDlm77nmoTkvY3nva7vvIzmr5TlpoLmtIHpnaLmmL7npLrnmoRbMTE2LjQ4NywgNDAuMDAwMDNd5Li65Lit5b+D55qE5Zyw5Zu+XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwiY2hhbmdlQ2VudGVyXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuYm94XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIlNldCBDZW50ZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvcGFnZXMvY2VudGVyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiY29udGFpbmVyXCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwicmVsYXRpdmVcIixcbiAgICBcImZsZXhcIjogMSxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIm1hcFwiOiB7XG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogODAwLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogMTAsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIm1hcC1jb250cm9sXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogMjAsXG4gICAgXCJtaW5IZWlnaHRcIjogNjAwXG4gIH0sXG4gIFwidGl0bGVcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiAyMCxcbiAgICBcInBhZGRpbmdMZWZ0XCI6IDIwLFxuICAgIFwicGFkZGluZ1RvcFwiOiAxMCxcbiAgICBcInBhZGRpbmdCb3R0b21cIjogMTAsXG4gICAgXCJmb250U2l6ZVwiOiAzNixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiA2LFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzBmODlmNVwiLFxuICAgIFwiY29sb3JcIjogXCIjMjIyMjIyXCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJsZWZ0XCJcbiAgfSxcbiAgXCJ0aXBzXCI6IHtcbiAgICBcIm1hcmdpblwiOiAyMCxcbiAgICBcInBhZGRpbmdcIjogMTAsXG4gICAgXCJjb2xvclwiOiBcIiM2NjY2NjZcIixcbiAgICBcImZvbnRTaXplXCI6IDIwXG4gIH0sXG4gIFwiYnRuXCI6IHtcbiAgICBcIm1hcmdpblwiOiAyMCxcbiAgICBcInBhZGRpbmdcIjogMjAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMWJhMWUyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogNSxcbiAgICBcImNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjdXJzb3JcIjogXCJwb2ludGVyXCIsXG4gICAgXCJmb250U2l6ZVwiOiAyOFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvcGFnZXMvY2VudGVyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSA1IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPG5hdmJhciB0aXRsZT1cIuiuvue9ruWcsOWbvuS4reW/g1wiPjwvbmF2YmFyPlxuICAgIDx3ZWV4LWFtYXAgY2xhc3M9XCJtYXBcIiBpZD1cIm1hcDIwMTdcIiBzZGsta2V5PXt7a2V5c319ICBtYXAtaW5zdGFuY2U9e3ttYXB9fSB6b29tPXt7em9vbX19IGNlbnRlcj17e3Bvc319PlxuICAgIDwvd2VleC1hbWFwPlxuICAgIDxkaXYgY2xhc3M9XCJtYXAtY29udHJvbFwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPlByb3BzOiBjZW50ZXI8L3RleHQ+IFxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXBzXCI+Y2VudGVy5bGe5oCn6KGo56S65Zyw5Zu+5Lit5b+D54K55Z2Q5qCH5YC877yM5L2g5Y+v5Lul6K6+572u5a6D5p2l5pS55Y+Y5Zyw5Zu+55qE5L2N572u77yM5q+U5aaC5rSB6Z2i5pi+56S655qEWzExNi40ODcsIDQwLjAwMDAzXeS4uuS4reW/g+eahOWcsOWbvjwvdGV4dD5cbiAgICAgIDxkaXYgb25jbGljaz1cImNoYW5nZUNlbnRlclwiIGNsYXNzPVwiYnRuYm94XCI+PHRleHQgY2xhc3M9XCJidG5cIiA+U2V0IENlbnRlcjwvdGV4dD48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6MTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB9XG4gIC5tYXB7XG4gICAgZmxleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBtaW4taGVpZ2h0OiA4MDA7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMTA7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcbiAgfVxuICAubWFwLWNvbnRyb2x7XG4gICAgcGFkZGluZy10b3A6IDIwO1xuICAgIG1pbi1oZWlnaHQ6IDYwMDtcbiAgfVxuICAudGl0bGV7XG4gICAgbWFyZ2luLWxlZnQ6IDIwO1xuICAgIHBhZGRpbmctbGVmdDogMjA7XG4gICAgcGFkZGluZy10b3A6IDEwO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMDtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgYm9yZGVyLWxlZnQtd2lkdGg6IDY7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwZjg5ZjU7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgfVxuICAudGlwc3tcbiAgICBtYXJnaW46IDIwO1xuICAgIHBhZGRpbmc6IDEwO1xuICAgIGNvbG9yOiM2NjY7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG4gIC5idG57XG4gICAgbWFyZ2luOiAyMDtcbiAgICBwYWRkaW5nOiAyMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWJhMWUyO1xuICAgIGJvcmRlci1yYWRpdXM6IDU7XG4gICAgY29sb3I6ICNmZmY7IFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDI4cHg7XG4gIH1cbjwvc3R5bGU+XG5cbjxzY3JpcHQ+XG4gIHJlcXVpcmUoJy4uL2luY2x1ZGUvbmF2YmFyLndlJyk7XG4gIHZhciBBbWFwID0gbnVsbDtcbiAgdHJ5IHtcbiAgICBBbWFwID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL2FtYXAnKTtcbiAgfSBjYXRjaChlcnIpIHtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG4gIHZhciBtb2RhbCA9IHJlcXVpcmUoJ0B3ZWV4LW1vZHVsZS9tb2RhbCcpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiB7XG4gICAgICAgIGg1OidmNGI5OWRjZDUxNzUyMTQyZWMwZjFiZGNiOWE4ZWMwMicsXG4gICAgICAgIGlvczogJycsXG4gICAgICAgIGFuZHJvaWQ6ICdkYjZhOTczMTU5Y2IwYzI2MzlhZDAyYzYxN2E3ODZhZSdcbiAgICAgIH0sXG4gICAgICBwb3M6IFsxMTYuNDg3LCA0MC4wMDAwM10sXG4gICAgICB6b29tOiA5LFxuICAgIH0sXG4gICAgXG4gICAgbWV0aG9kczoge1xuICAgICAgY2hhbmdlQ2VudGVyKCkge1xuICAgICAgICB0aGlzLnBvcyA9IFsxMTYuNCArIE1hdGgucmFuZG9tKCkqMC41LDQwLjI1ICsgTWF0aC5yYW5kb20oKSowLjI1XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BhZ2VzL2NlbnRlci53ZT8wYzhmOTFkNiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL25hdmJhci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9uYXZiYXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDkgMTAgMTEgMTIgMTMgMTQgMTUgMTYgMTciXSwic291cmNlUm9vdCI6IiJ9