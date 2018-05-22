(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("access-gate", [], factory);
	else if(typeof exports === 'object')
		exports["access-gate"] = factory();
	else
		root["access-gate"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(1)(
	  /* script */
	  __webpack_require__(2),
	  /* template */
	  __webpack_require__(3),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)

	module.exports = Component.exports


/***/ },
/* 1 */
/***/ function(module, exports) {

	// this module is a runtime utility for cleaner component module output and will
	// be included in the final webpack user bundle

	module.exports = function normalizeComponent (
	  rawScriptExports,
	  compiledTemplate,
	  scopeId,
	  cssModules
	) {
	  var esModule
	  var scriptExports = rawScriptExports = rawScriptExports || {}

	  // ES6 modules interop
	  var type = typeof rawScriptExports.default
	  if (type === 'object' || type === 'function') {
	    esModule = rawScriptExports
	    scriptExports = rawScriptExports.default
	  }

	  // Vue.extend constructor export interop
	  var options = typeof scriptExports === 'function'
	    ? scriptExports.options
	    : scriptExports

	  // render functions
	  if (compiledTemplate) {
	    options.render = compiledTemplate.render
	    options.staticRenderFns = compiledTemplate.staticRenderFns
	  }

	  // scopedId
	  if (scopeId) {
	    options._scopeId = scopeId
	  }

	  // inject cssModules
	  if (cssModules) {
	    var computed = Object.create(options.computed || null)
	    Object.keys(cssModules).forEach(function (key) {
	      var module = cssModules[key]
	      computed[key] = function () { return module }
	    })
	    options.computed = computed
	  }

	  return {
	    esModule: esModule,
	    exports: scriptExports,
	    options: options
	  }
	}


/***/ },
/* 2 */
/***/ function(module, exports) {

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//


	import VueFormGenerator from "vue-form-generator";
	import { mapGetters } from 'vuex';

	export default {
	    data: function data() {
	        return {
	            model: {
	                email_opt_in: null,
	                accepted_terms_and_conditions: false
	            },
	            params: {},
	            schema: {
	                groups: []
	            },
	            formOptions: {
	                validateAfterLoad: false,
	                validateAfterChanged: true
	            }
	        };
	    },
	    created: function created() {
	        this.createFormGroups();
	    },

	    computed: _extends({}, mapGetters('accessGate', ['schemaGroups'])),
	    methods: {
	        save: function save(form, schema) {
	            /*  axios.post('/register', form)
	              .then(function (response){
	                 	if(response.data.ok == true) {
	                 		this.$root.checkUser();
	                 	} else {
	                      if(response.data.hasOwnProperty('error')) {
	                          if(response.data.error.match(/\n/).length > 1) {
	                              let errors = response.data.error.split("\n");
	                              for(let i; i < errors.length; i++) {
	                                  if(errors[i] != "undefined"){
	                                      this.$dnotify({
	                                          title: this.$root.$t('Error'),
	                                          message: errors[i],
	                                          duration: 5000,
	                                          type: 'error'
	                                      });
	                                  }
	                              }
	                          } else {
	                              this.$dnotify({
	                                  title: this.$root.$t('Error'),
	                                  message: response.data.error,
	                                  duration: 5000,
	                                  type: 'error'
	                              });
	                          }
	                      }
	                  }
	              }.bind(this))
	              .catch(function (error) {
	                  if(error.response.status == 422){
	                      this.schema.fields.forEach(function(elem, i) {
	                          var obj = this.object_search(elem.model, error.response.data)
	                          if(obj){
	                              setTimeout(function(){
	                                  this.$dnotify({
	                                      title: this.capitalize(elem.placeholder)+this.$root.$t(' is invalid'),
	                                      message: obj[elem.model][0],
	                                      type: 'error'
	                                  });
	                              }.bind(this), 150);
	                              //Please don't change this... this is how I force validation on fields
	                              let errors = obj[elem.model];
	                              this.$refs.form.onFieldValidated(false, errors, this.$refs.form.$children[i]);
	                          }
	                      }.bind(this));
	                  } else {
	                      this.$dnotify({
	                          title: this.$root.$t('Error'),
	                          message: this.$root.$t('Our hamsters tripped in their wheel, please contact us'),
	                          duration: 5000,
	                          type: 'error'
	                      });
	                  }
	              }.bind(this));
	              */
	        },
	        createFormGroups: function createFormGroups() {
	            var submitGate = {
	                group: 'submit',
	                fields: [{
	                    type: 'submit',
	                    label: '',
	                    validateBeforeSubmit: true,
	                    buttonText: this.$t('Continue to Site'),
	                    styleClasses: 'dt-btn active dt-btn-hollow cf twelve col',
	                    onSubmit: function (form, schema) {
	                        console.info(this.errors);
	                        this.save(form);
	                    }.bind(this),
	                    disabled: function disabled() {
	                        return this.errors.length != 0;
	                    }
	                }]
	            };
	            this.$data.schema.groups = this.schemaGroups.concat(submitGate);
	        }
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "access-gate-overlay"
	  }, [_c('div', {
	    staticClass: "access-gate-container"
	  }, [_c('div', {
	    staticClass: "access-gate"
	  }, [_c('h2', [_vm._v("Please enter yout registration.")]), _vm._v(" "), _c('vue-form-generator', {
	    ref: "form",
	    staticClass: "cf",
	    attrs: {
	      "schema": _vm.schema,
	      "model": _vm.model,
	      "options": _vm.formOptions
	    }
	  })], 1)])])
	},staticRenderFns: []}

/***/ }
/******/ ])
});
;