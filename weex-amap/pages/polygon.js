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

	var __weex_template__ = __webpack_require__(112)
	var __weex_style__ = __webpack_require__(113)
	var __weex_script__ = __webpack_require__(114)
	
	__weex_define__('@weex-component/ccdd933a92e88024b61669cc749c1254', [], function(__weex_require__, __weex_exports__, __weex_module__) {
	
	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }
	
	    __weex_module__.exports.template = __weex_template__
	
	    __weex_module__.exports.style = __weex_style__
	
	})
	
	__weex_bootstrap__('@weex-component/ccdd933a92e88024b61669cc749c1254',undefined,undefined)

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


/***/ },

/***/ 112:
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
	        "title": "设置多边形"
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
	        "zoom": function () {return this.zoom},
	        "center": function () {return this.pos}
	      },
	      "children": [
	        {
	          "type": "weex-amap-polygon",
	          "attr": {
	            "path": function () {return this.path},
	            "fillOpacity": "0.5",
	            "fillColor": "#2ecc71",
	            "fillWidth": "4"
	          }
	        }
	      ]
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
	            "value": "Componenet: weex-amap-polygon"
	          }
	        },
	        {
	          "type": "text",
	          "classList": [
	            "tips"
	          ],
	          "attr": {
	            "value": "weex-amap-polygon 可以在地图上绘制多边形"
	          }
	        }
	      ]
	    }
	  ]
	}

/***/ },

/***/ 113:
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
	  }
	}

/***/ },

/***/ 114:
/***/ function(module, exports, __webpack_require__) {

	module.exports = function(module, exports, __weex_require__){'use strict';
	
	__webpack_require__(103);
	var Amap = null;
	try {
	  Amap = __weex_require__('@weex-module/amap');
	} catch (err) {
	  console.log(err);
	}
	var polygonArr = new Array();
	polygonArr.push([116.403322, 39.920255]);
	polygonArr.push([116.410703, 39.897555]);
	polygonArr.push([116.402292, 39.892353]);
	polygonArr.push([116.389846, 39.891365]);
	module.exports = {
	  data: function () {return {
	    keys: {
	      h5: 'f4b99dcd51752142ec0f1bdcb9a8ec02',
	      ios: '',
	      android: 'db6a973159cb0c2639ad02c617a786ae'
	    },
	    pos: [116.397428, 39.90923],
	    path: polygonArr,
	    zoom: 13
	  }},
	
	  methods: {}
	};}
	/* generated by weex-loader */


/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU3YjQ3YmMwNmVlM2E2YTc2NjY/Njk2NyoqKioqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BvbHlnb24ud2U/YzUyYiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5jbHVkZS9uYXZiYXIud2U/MzU2MSoqKioiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luY2x1ZGUvbmF2YmFyLndlPzliNDAqKioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdmJhci53ZT9jMTk2KioqIiwid2VicGFjazovLy8uL3NyYy9pbmNsdWRlL25hdmJhci53ZT9mODdhKioqIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9wb2x5Z29uLndlP2UyYjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL3BvbHlnb24ud2U/Y2Q1NiIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvcG9seWdvbi53ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLEVBQUM7O0FBRUQsMkY7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7OztBQ2FBLHlCQUNBOzs7K0JBR0E7aUJBQ0E7QUFFQTtBQUpBO0FBREE7Ozs7Ozs7OztBQ3hEQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsRUFBQzs7Ozs7Ozs7QUNmRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCLGlCQUFpQjtBQUNoRCw4QkFBNkIsaUJBQWlCO0FBQzlDLGdDQUErQjtBQUMvQixRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBaUMsaUJBQWlCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7O0FDZ0JBLHFCQUNBO1lBQ0E7S0FDQTtrQkFDQTtlQUNBO2VBQ0E7QUFDQTtzQkFDQTs4QkFDQTs4QkFDQTs4QkFDQTs4QkFDQTs7OztXQUlBO1lBQ0E7Z0JBRUE7QUFKQTt1QkFLQTtXQUNBO1dBR0E7QUFWQTs7WUFZQTtBQWJBIiwiZmlsZSI6InBhZ2VzL3BvbHlnb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1NTdiNDdiYzA2ZWUzYTZhNzY2NiIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vcG9seWdvbi53ZVwiKVxudmFyIF9fd2VleF9zdHlsZV9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2pzb24uanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9wb2x5Z29uLndlXCIpXG52YXIgX193ZWV4X3NjcmlwdF9fID0gcmVxdWlyZShcIiEhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL3NjcmlwdC5qcyFiYWJlbC1sb2FkZXI/cHJlc2V0c1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnByZXNldHM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXByZXNldC1lczIwMTUmcGx1Z2luc1tdPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wbHVnaW4tdHJhbnNmb3JtLXJ1bnRpbWUmcGx1Z2lucz0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJmNvbW1lbnRzPWZhbHNlIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vcG9seWdvbi53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9jY2RkOTMzYTkyZTg4MDI0YjYxNjY5Y2M3NDljMTI1NCcsIFtdLCBmdW5jdGlvbihfX3dlZXhfcmVxdWlyZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfbW9kdWxlX18pIHtcblxuICAgIF9fd2VleF9zY3JpcHRfXyhfX3dlZXhfbW9kdWxlX18sIF9fd2VleF9leHBvcnRzX18sIF9fd2VleF9yZXF1aXJlX18pXG4gICAgaWYgKF9fd2VleF9leHBvcnRzX18uX19lc01vZHVsZSAmJiBfX3dlZXhfZXhwb3J0c19fLmRlZmF1bHQpIHtcbiAgICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzID0gX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0XG4gICAgfVxuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMudGVtcGxhdGUgPSBfX3dlZXhfdGVtcGxhdGVfX1xuXG4gICAgX193ZWV4X21vZHVsZV9fLmV4cG9ydHMuc3R5bGUgPSBfX3dlZXhfc3R5bGVfX1xuXG59KVxuXG5fX3dlZXhfYm9vdHN0cmFwX18oJ0B3ZWV4LWNvbXBvbmVudC9jY2RkOTMzYTkyZTg4MDI0YjYxNjY5Y2M3NDljMTI1NCcsdW5kZWZpbmVkLHVuZGVmaW5lZClcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9wYWdlcy9wb2x5Z29uLndlP2VudHJ5PXRydWVcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJuYXZiYXItY29uXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibmF2YmFyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuLWJhY2tcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImdvSG9tZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuLWFycm93LWxlZnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiaHR0cDovL2ltZzEudnVlZC52YW50aGluay5jbi92dWVkOWM4ZTdlNzM4ZmY5NGFiZWUyM2ViNjlkN2YxNDAxZTkucG5nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG4tdGV4dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIui/lOWbnlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0aXRsZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudGl0bGV9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvaW5jbHVkZS9uYXZiYXIud2Vcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMyA1IDYgNyA4IDkgMTAgMTEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJuYXZiYXItY29uXCI6IHtcbiAgICBcImhlaWdodFwiOiAxMDgsXG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwXG4gIH0sXG4gIFwibmF2YmFyXCI6IHtcbiAgICBcInpJbmRleFwiOiAxMDAwLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJyb3dcIixcbiAgICBcImhlaWdodFwiOiA4OCxcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkZGRkZGRcIlxuICB9LFxuICBcImJ0bi1iYWNrXCI6IHtcbiAgICBcInpJbmRleFwiOiAxMDAyLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcInJvd1wiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogMTgwLFxuICAgIFwiaGVpZ2h0XCI6IDg4XG4gIH0sXG4gIFwiYnRuLWFycm93LWxlZnRcIjoge1xuICAgIFwid2lkdGhcIjogNjAsXG4gICAgXCJoZWlnaHRcIjogNjAsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IDEwXG4gIH0sXG4gIFwiYnRuLXRleHRcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMGY4OWY1XCJcbiAgfSxcbiAgXCJ0aXRsZVwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImFic29sdXRlXCIsXG4gICAgXCJsZWZ0XCI6IDE4MCxcbiAgICBcInJpZ2h0XCI6IDE4MCxcbiAgICBcInRvcFwiOiAwLFxuICAgIFwiaGVpZ2h0XCI6IDg4LFxuICAgIFwibGluZUhlaWdodFwiOiA4OCxcbiAgICBcImZvbnRTaXplXCI6IDM2LFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuL34vd2VleC1sb2FkZXIvbGliL3N0eWxlLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c3R5bGVzIS4vc3JjL2luY2x1ZGUvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwibmF2YmFyLWNvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJuYXZiYXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidG4tYmFja1wiIG9uY2xpY2s9XCJnb0hvbWVcIj5cbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYnRuLWFycm93LWxlZnRcIiBzcmM9XCJodHRwOi8vaW1nMS52dWVkLnZhbnRoaW5rLmNuL3Z1ZWQ5YzhlN2U3MzhmZjk0YWJlZTIzZWI2OWQ3ZjE0MDFlOS5wbmdcIj48L2ltYWdlPlxuICAgICAgICA8dGV4dCBjbGFzcz1cImJ0bi10ZXh0XCI+6L+U5ZuePC90ZXh0PlxuICAgICAgPC9kaXY+XG4gICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+e3t0aXRsZX19PC90ZXh0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c3R5bGU+XG4gIC5uYXZiYXItY29ue1xuICAgIGhlaWdodDogMTA4O1xuICAgIHBhZGRpbmctdG9wOiAyMDtcbiAgfVxuICAubmF2YmFye1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6ZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGhlaWdodDogODg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDI7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2RkZDtcbiAgfVxuICAuYnRuLWJhY2t7XG4gICAgei1pbmRleDogMTAwMjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDE4MDtcbiAgICBoZWlnaHQ6IDg4O1xuICB9XG4gIC5idG4tYXJyb3ctbGVmdHtcbiAgICB3aWR0aDogNjA7XG4gICAgaGVpZ2h0OiA2MDtcbiAgICBtYXJnaW4tbGVmdDogMTA7XG4gIH1cbiAgLmJ0bi10ZXh0e1xuICAgIGNvbG9yOiAjMGY4OWY1O1xuICB9XG4gIC50aXRsZXtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDoxODA7XG4gICAgcmlnaHQ6MTgwO1xuICAgIHRvcDowO1xuICAgIGhlaWdodDogODg7XG4gICAgbGluZS1oZWlnaHQ6IDg4O1xuICAgIGZvbnQtc2l6ZTogMzY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG48L3N0eWxlPlxuPHNjcmlwdD5cbiAgY29uc3QgbmF2aWdhdG9yID0gcmVxdWlyZSgnQHdlZXgtbW9kdWxlL25hdmlnYXRvcicpO1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBtZXRob2RzOiB7XG4gICAgICBnb0hvbWUoKSB7XG4gICAgICAgIG5hdmlnYXRvci5wb3AoKTtcbiAgICAgIH1cbiAgICB9ICAgXG4gIH1cbjwvc2NyaXB0PlxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmNsdWRlL25hdmJhci53ZT8xNjUyYmFhOCIsInZhciBfX3dlZXhfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi90ZW1wbGF0ZS5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz90eXBlPXRlbXBsYXRlIS4vbmF2YmFyLndlXCIpXG52YXIgX193ZWV4X3N0eWxlX18gPSByZXF1aXJlKFwiISEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvanNvbi5qcyEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi8uLi8uLi9ub2RlX21vZHVsZXMvd2VleC1sb2FkZXIvbGliL2V4dHJhY3QuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyEuL25hdmJhci53ZVwiKVxudmFyIF9fd2VleF9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vbm9kZV9tb2R1bGVzL3dlZXgtbG9hZGVyL2xpYi9zY3JpcHQuanMhYmFiZWwtbG9hZGVyP3ByZXNldHNbXT0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcHJlc2V0LWVzMjAxNSZwcmVzZXRzPS9Vc2Vycy9hbGktMTMwMjU3bi93d3cvYXBwL25vZGVfbW9kdWxlcy9iYWJlbC1wcmVzZXQtZXMyMDE1JnBsdWdpbnNbXT0vVXNlcnMvYWxpLTEzMDI1N24vd3d3L2FwcC9ub2RlX21vZHVsZXMvYmFiZWwtcGx1Z2luLXRyYW5zZm9ybS1ydW50aW1lJnBsdWdpbnM9L1VzZXJzL2FsaS0xMzAyNTduL3d3dy9hcHAvbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tcnVudGltZSZjb21tZW50cz1mYWxzZSEuLy4uLy4uL25vZGVfbW9kdWxlcy93ZWV4LWxvYWRlci9saWIvZXh0cmFjdC5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL25hdmJhci53ZVwiKVxuXG5fX3dlZXhfZGVmaW5lX18oJ0B3ZWV4LWNvbXBvbmVudC9uYXZiYXInLCBbXSwgZnVuY3Rpb24oX193ZWV4X3JlcXVpcmVfXywgX193ZWV4X2V4cG9ydHNfXywgX193ZWV4X21vZHVsZV9fKSB7XG5cbiAgICBfX3dlZXhfc2NyaXB0X18oX193ZWV4X21vZHVsZV9fLCBfX3dlZXhfZXhwb3J0c19fLCBfX3dlZXhfcmVxdWlyZV9fKVxuICAgIGlmIChfX3dlZXhfZXhwb3J0c19fLl9fZXNNb2R1bGUgJiYgX193ZWV4X2V4cG9ydHNfXy5kZWZhdWx0KSB7XG4gICAgICBfX3dlZXhfbW9kdWxlX18uZXhwb3J0cyA9IF9fd2VleF9leHBvcnRzX18uZGVmYXVsdFxuICAgIH1cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnRlbXBsYXRlID0gX193ZWV4X3RlbXBsYXRlX19cblxuICAgIF9fd2VleF9tb2R1bGVfXy5leHBvcnRzLnN0eWxlID0gX193ZWV4X3N0eWxlX19cblxufSlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2luY2x1ZGUvbmF2YmFyLndlXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSA1IDYgNyA4IDkgMTAgMTEiLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcIm5hdmJhclwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ0aXRsZVwiOiBcIuiuvue9ruWkmui+ueW9olwiXG4gICAgICB9XG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ3ZWV4LWFtYXBcIixcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJtYXBcIlxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCJtYXAyMDE3XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInNka0tleVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMua2V5c30sXG4gICAgICAgIFwiem9vbVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuem9vbX0sXG4gICAgICAgIFwiY2VudGVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N9XG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ3ZWV4LWFtYXAtcG9seWdvblwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInBhdGhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhdGh9LFxuICAgICAgICAgICAgXCJmaWxsT3BhY2l0eVwiOiBcIjAuNVwiLFxuICAgICAgICAgICAgXCJmaWxsQ29sb3JcIjogXCIjMmVjYzcxXCIsXG4gICAgICAgICAgICBcImZpbGxXaWR0aFwiOiBcIjRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibWFwLWNvbnRyb2xcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGl0bGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCJDb21wb25lbmV0OiB3ZWV4LWFtYXAtcG9seWdvblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGlwc1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIndlZXgtYW1hcC1wb2x5Z29uIOWPr+S7peWcqOWcsOWbvuS4iue7mOWItuWkmui+ueW9olwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvdGVtcGxhdGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP3R5cGU9dGVtcGxhdGUhLi9zcmMvcGFnZXMvcG9seWdvbi53ZVxuLy8gbW9kdWxlIGlkID0gMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImNvbnRhaW5lclwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtYXBcIjoge1xuICAgIFwiZmxleFwiOiAxLFxuICAgIFwicG9zaXRpb25cIjogXCJyZWxhdGl2ZVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwibWluSGVpZ2h0XCI6IDgwMCxcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IDEwLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCJtYXAtY29udHJvbFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IDIwLFxuICAgIFwibWluSGVpZ2h0XCI6IDYwMFxuICB9LFxuICBcInRpdGxlXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogMjAsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiAyMCxcbiAgICBcInBhZGRpbmdUb3BcIjogMTAsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IDEwLFxuICAgIFwiZm9udFNpemVcIjogMzYsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogNixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiMwZjg5ZjVcIixcbiAgICBcImNvbG9yXCI6IFwiIzIyMjIyMlwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwibGVmdFwiXG4gIH0sXG4gIFwidGlwc1wiOiB7XG4gICAgXCJtYXJnaW5cIjogMjAsXG4gICAgXCJwYWRkaW5nXCI6IDEwLFxuICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgXCJmb250U2l6ZVwiOiAyMFxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3dlZXgtbG9hZGVyL2xpYi9qc29uLmpzIS4vfi93ZWV4LWxvYWRlci9saWIvc3R5bGUuanMhLi9+L3dlZXgtbG9hZGVyL2xpYi9leHRyYWN0LmpzP2luZGV4PTAmdHlwZT1zdHlsZXMhLi9zcmMvcGFnZXMvcG9seWdvbi53ZVxuLy8gbW9kdWxlIGlkID0gMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxuYXZiYXIgdGl0bGU9XCLorr7nva7lpJrovrnlvaJcIj48L25hdmJhcj5cbiAgICA8d2VleC1hbWFwIGNsYXNzPVwibWFwXCIgaWQ9XCJtYXAyMDE3XCIgc2RrLWtleT17e2tleXN9fSB6b29tPXt7em9vbX19IGNlbnRlcj17e3Bvc319PlxuICAgICAgPHdlZXgtYW1hcC1wb2x5Z29uIHBhdGg9XCJ7e3BhdGh9fVwiIGZpbGwtb3BhY2l0eT1cIjAuNVwiIGZpbGwtY29sb3I9XCIjMmVjYzcxXCIgZmlsbC13aWR0aD1cIjRcIj48L3dlZXgtYW1hcC1wb2x5Z29uPlxuICAgIDwvd2VleC1hbWFwPlxuICAgIDxkaXYgY2xhc3M9XCJtYXAtY29udHJvbFwiPlxuICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPkNvbXBvbmVuZXQ6IHdlZXgtYW1hcC1wb2x5Z29uPC90ZXh0PiBcbiAgICAgIDx0ZXh0IGNsYXNzPVwidGlwc1wiPndlZXgtYW1hcC1wb2x5Z29uIOWPr+S7peWcqOWcsOWbvuS4iue7mOWItuWkmui+ueW9ojwvdGV4dD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c3R5bGU+XG4gIC5jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6MTsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgfVxuICAubWFwe1xuICAgIGZsZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWluLWhlaWdodDogODAwO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDEwO1xuICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XG4gIH1cbiAgLm1hcC1jb250cm9se1xuICAgIHBhZGRpbmctdG9wOiAyMDtcbiAgICBtaW4taGVpZ2h0OiA2MDA7XG4gIH1cbiAgLnRpdGxle1xuICAgIG1hcmdpbi1sZWZ0OiAyMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwO1xuICAgIHBhZGRpbmctdG9wOiAxMDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTA7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGJvcmRlci1sZWZ0LXdpZHRoOiA2O1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMGY4OWY1O1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gIH1cbiAgLnRpcHN7XG4gICAgbWFyZ2luOiAyMDtcbiAgICBwYWRkaW5nOiAxMDtcbiAgICBjb2xvcjojNjY2O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuPC9zdHlsZT5cblxuPHNjcmlwdD5cbiAgcmVxdWlyZSgnLi4vaW5jbHVkZS9uYXZiYXIud2UnKTtcbiAgdmFyIEFtYXAgPSBudWxsO1xuICB0cnkge1xuICAgIEFtYXAgPSByZXF1aXJlKCdAd2VleC1tb2R1bGUvYW1hcCcpO1xuICB9IGNhdGNoKGVycikge1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbiAgdmFyIHBvbHlnb25BcnIgPSBuZXcgQXJyYXkoKTsvL+Wkmui+ueW9ouimhueblueJqeiKgueCueWdkOagh+aVsOe7hFxuICBwb2x5Z29uQXJyLnB1c2goWzExNi40MDMzMjIsIDM5LjkyMDI1NV0pO1xuICBwb2x5Z29uQXJyLnB1c2goWzExNi40MTA3MDMsIDM5Ljg5NzU1NV0pO1xuICBwb2x5Z29uQXJyLnB1c2goWzExNi40MDIyOTIsIDM5Ljg5MjM1M10pO1xuICBwb2x5Z29uQXJyLnB1c2goWzExNi4zODk4NDYsIDM5Ljg5MTM2NV0pO1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkYXRhOiB7XG4gICAgICBrZXlzOiB7XG4gICAgICAgIGg1OidmNGI5OWRjZDUxNzUyMTQyZWMwZjFiZGNiOWE4ZWMwMicsXG4gICAgICAgIGlvczogJycsXG4gICAgICAgIGFuZHJvaWQ6ICdkYjZhOTczMTU5Y2IwYzI2MzlhZDAyYzYxN2E3ODZhZSdcbiAgICAgIH0sXG4gICAgICBwb3M6IFsxMTYuMzk3NDI4LCAzOS45MDkyM10sXG4gICAgICBwYXRoOiBwb2x5Z29uQXJyLFxuICAgICAgem9vbTogMTMsXG4gICAgfSxcbiAgICBcbiAgICBtZXRob2RzOiB7XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcGFnZXMvcG9seWdvbi53ZT84Yzc0NjdiYyJdLCJzb3VyY2VSb290IjoiIn0=