(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _razilocomponent = require('razilocomponent');

var _razilocomponent2 = _interopRequireDefault(_razilocomponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// razilo modules are all ES6 modules so make them available on global
window.RaziloComponent = _razilocomponent2.default;

},{"razilocomponent":52}],2:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindIdenticalAlterer = exports.RaziloBindEqualAlterer = exports.RaziloBindTrimAlterer = exports.RaziloBindSuffixAlterer = exports.RaziloBindPrefixAlterer = exports.RaziloBindNotAlterer = exports.RaziloBindJsonAlterer = exports.RaziloBindJoinAlterer = exports.RaziloBindDateAlterer = exports.RaziloBindAlterer = undefined;

var _alterer = require('./src/alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

var _dateAlterer = require('./src/date.alterer.js');

var _dateAlterer2 = _interopRequireDefault(_dateAlterer);

var _joinAlterer = require('./src/join.alterer.js');

var _joinAlterer2 = _interopRequireDefault(_joinAlterer);

var _jsonAlterer = require('./src/json.alterer.js');

var _jsonAlterer2 = _interopRequireDefault(_jsonAlterer);

var _notAlterer = require('./src/not.alterer.js');

var _notAlterer2 = _interopRequireDefault(_notAlterer);

var _prefixAlterer = require('./src/prefix.alterer.js');

var _prefixAlterer2 = _interopRequireDefault(_prefixAlterer);

var _suffixAlterer = require('./src/suffix.alterer.js');

var _suffixAlterer2 = _interopRequireDefault(_suffixAlterer);

var _trimAlterer = require('./src/trim.alterer.js');

var _trimAlterer2 = _interopRequireDefault(_trimAlterer);

var _equalAlterer = require('./src/equal.alterer.js');

var _equalAlterer2 = _interopRequireDefault(_equalAlterer);

var _identicalAlterer = require('./src/identical.alterer.js');

var _identicalAlterer2 = _interopRequireDefault(_identicalAlterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindAlterer = _alterer2.default;
exports.RaziloBindDateAlterer = _dateAlterer2.default;
exports.RaziloBindJoinAlterer = _joinAlterer2.default;
exports.RaziloBindJsonAlterer = _jsonAlterer2.default;
exports.RaziloBindNotAlterer = _notAlterer2.default;
exports.RaziloBindPrefixAlterer = _prefixAlterer2.default;
exports.RaziloBindSuffixAlterer = _suffixAlterer2.default;
exports.RaziloBindTrimAlterer = _trimAlterer2.default;
exports.RaziloBindEqualAlterer = _equalAlterer2.default;
exports.RaziloBindIdenticalAlterer = _identicalAlterer2.default;

},{"./src/alterer.js":3,"./src/date.alterer.js":4,"./src/equal.alterer.js":5,"./src/identical.alterer.js":6,"./src/join.alterer.js":7,"./src/json.alterer.js":8,"./src/not.alterer.js":9,"./src/prefix.alterer.js":10,"./src/suffix.alterer.js":11,"./src/trim.alterer.js":12}],3:[function(require,module,exports){
"use strict";

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Alterer
 * Generic alterer methods used accross all alterers
 */
var Alterer = function () {
	function Alterer() {
		_classCallCheck(this, Alterer);

		this.name = undefined;
		this.accepts = [];
	}

	Alterer.prototype.detect = function detect(name, resolved) {
		if (name !== this.name) return false;
		if (this.accepts.length !== 0 && this.accepts.indexOf(typeof resolved === "undefined" ? "undefined" : _typeof(resolved)) < 0) return false;
		return true;
	};

	return Alterer;
}();

exports.default = Alterer;

},{}],4:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

var _razilobindCore = require('razilobind-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Date Alterer
 * Alters various data to a date string in (options) format
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var DateAlterer = function (_Alterer) {
	_inherits(DateAlterer, _Alterer);

	function DateAlterer() {
		_classCallCheck(this, DateAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'date';
		_this.accepts = ['string', 'number', 'object', 'symbol'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	DateAlterer.prototype.alter = function alter(resolved, options) {
		var dateObj = void 0;

		if ((typeof resolved === 'undefined' ? 'undefined' : _typeof(resolved)) === 'symbol') dateObj = new Date(Date.parse(String(Symbol(resolved))));else if (!isNaN(resolved) && resolved !== null) dateObj = new Date(resolved);else if (typeof resolved === 'string' && resolved.length > 0) dateObj = new Date(Date.parse(resolved));else if (resolved instanceof Date) dateObj = resolved;else return '';

		return _razilobindCore.RaziloBindDateFormat.dateFormat(dateObj, options);
	};

	return DateAlterer;
}(_alterer2.default);

exports.default = DateAlterer;

},{"./alterer.js":3,"razilobind-core":35}],5:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Equal Alterer
 * Alters any data to its boolean opposite
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var EqualAlterer = function (_Alterer) {
	_inherits(EqualAlterer, _Alterer);

	function EqualAlterer() {
		_classCallCheck(this, EqualAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'equal';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	EqualAlterer.prototype.alter = function alter(resolved, options) {
		return resolved == options;
	};

	return EqualAlterer;
}(_alterer2.default);

exports.default = EqualAlterer;

},{"./alterer.js":3}],6:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Identical Alterer
 * Alters any data to its boolean opposite
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var IdenticalAlterer = function (_Alterer) {
	_inherits(IdenticalAlterer, _Alterer);

	function IdenticalAlterer() {
		_classCallCheck(this, IdenticalAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'identical';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	IdenticalAlterer.prototype.alter = function alter(resolved, options) {
		return resolved === options;
	};

	return IdenticalAlterer;
}(_alterer2.default);

exports.default = IdenticalAlterer;

},{"./alterer.js":3}],7:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Join Alterer
 * Joins the values of object or array as a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var JoinAlterer = function (_Alterer) {
	_inherits(JoinAlterer, _Alterer);

	function JoinAlterer() {
		_classCallCheck(this, JoinAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'join';
		_this.accepts = ['object'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	JoinAlterer.prototype.alter = function alter(resolved, options) {
		var result = '';
		for (var key in resolved) {
			result = result + String(resolved[key]);
		}return result;
	};

	return JoinAlterer;
}(_alterer2.default);

exports.default = JoinAlterer;

},{"./alterer.js":3}],8:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * JSON Alterer
 * Alters any type of data to a JSON string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var JsonAlterer = function (_Alterer) {
	_inherits(JsonAlterer, _Alterer);

	function JsonAlterer() {
		_classCallCheck(this, JsonAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'json';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	JsonAlterer.prototype.alter = function alter(resolved, options) {
		return JSON.stringify(resolved);
	};

	return JsonAlterer;
}(_alterer2.default);

exports.default = JsonAlterer;

},{"./alterer.js":3}],9:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Not Alterer
 * Alters any data to its boolean opposite
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var NotAlterer = function (_Alterer) {
	_inherits(NotAlterer, _Alterer);

	function NotAlterer() {
		_classCallCheck(this, NotAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'not';
		_this.accepts = [];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	NotAlterer.prototype.alter = function alter(resolved, options) {
		return !resolved;
	};

	return NotAlterer;
}(_alterer2.default);

exports.default = NotAlterer;

},{"./alterer.js":3}],10:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Prefix Alterer
 * Adds anything to start of a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var PrefixAlterer = function (_Alterer) {
	_inherits(PrefixAlterer, _Alterer);

	function PrefixAlterer() {
		_classCallCheck(this, PrefixAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'prefix';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	PrefixAlterer.prototype.alter = function alter(resolved, options) {
		return String(options) + resolved;
	};

	return PrefixAlterer;
}(_alterer2.default);

exports.default = PrefixAlterer;

},{"./alterer.js":3}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Suffix Alterer
 * Adds anything to end of a string
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var SuffixAlterer = function (_Alterer) {
	_inherits(SuffixAlterer, _Alterer);

	function SuffixAlterer() {
		_classCallCheck(this, SuffixAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'suffix';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	SuffixAlterer.prototype.alter = function alter(resolved, options) {
		return resolved + String(options);
	};

	return SuffixAlterer;
}(_alterer2.default);

exports.default = SuffixAlterer;

},{"./alterer.js":3}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _alterer = require('./alterer.js');

var _alterer2 = _interopRequireDefault(_alterer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Trim Alterer
 * Alters string data by triming it of whitespace
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 */
var TrimAlterer = function (_Alterer) {
	_inherits(TrimAlterer, _Alterer);

	function TrimAlterer() {
		_classCallCheck(this, TrimAlterer);

		var _this = _possibleConstructorReturn(this, _Alterer.call(this));

		_this.name = 'trim';
		_this.accepts = ['string'];
		return _this;
	}

	/**
  * alter()
  * Changes resolved data based on options
  * @param mixed resolved The data to change
  * @param mixed options Any options sent in with the alterer
  * @return mixed Changed resolved data
  */


	TrimAlterer.prototype.alter = function alter(resolved, options) {
		return resolved.trim();
	};

	return TrimAlterer;
}(_alterer2.default);

exports.default = TrimAlterer;

},{"./alterer.js":3}],13:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindModelBinder = exports.RaziloBindInitBinder = exports.RaziloBindEventBinder = exports.RaziloBindCheckedBinder = exports.RaziloBindValueBinder = exports.RaziloBindElseBinder = exports.RaziloBindIfBinder = exports.RaziloBindSelectedBinder = exports.RaziloBindRequiredBinder = exports.RaziloBindDisabledBinder = exports.RaziloBindHrefBinder = exports.RaziloBindSrcBinder = exports.RaziloBindAttributesBinder = exports.RaziloBindClassBinder = exports.RaziloBindStyleBinder = exports.RaziloBindHideBinder = exports.RaziloBindShowBinder = exports.RaziloBindHtmlBinder = exports.RaziloBindTextBinder = exports.RaziloBindForBinder = exports.RaziloBindBinder = undefined;

var _binder = require('./src/binder.js');

var _binder2 = _interopRequireDefault(_binder);

var _forBinder = require('./src/for.binder.js');

var _forBinder2 = _interopRequireDefault(_forBinder);

var _textBinder = require('./src/text.binder.js');

var _textBinder2 = _interopRequireDefault(_textBinder);

var _htmlBinder = require('./src/html.binder.js');

var _htmlBinder2 = _interopRequireDefault(_htmlBinder);

var _showBinder = require('./src/show.binder.js');

var _showBinder2 = _interopRequireDefault(_showBinder);

var _hideBinder = require('./src/hide.binder.js');

var _hideBinder2 = _interopRequireDefault(_hideBinder);

var _styleBinder = require('./src/style.binder.js');

var _styleBinder2 = _interopRequireDefault(_styleBinder);

var _classBinder = require('./src/class.binder.js');

var _classBinder2 = _interopRequireDefault(_classBinder);

var _attributesBinder = require('./src/attributes.binder.js');

var _attributesBinder2 = _interopRequireDefault(_attributesBinder);

var _srcBinder = require('./src/src.binder.js');

var _srcBinder2 = _interopRequireDefault(_srcBinder);

var _hrefBinder = require('./src/href.binder.js');

var _hrefBinder2 = _interopRequireDefault(_hrefBinder);

var _disabledBinder = require('./src/disabled.binder.js');

var _disabledBinder2 = _interopRequireDefault(_disabledBinder);

var _requiredBinder = require('./src/required.binder.js');

var _requiredBinder2 = _interopRequireDefault(_requiredBinder);

var _selectedBinder = require('./src/selected.binder.js');

var _selectedBinder2 = _interopRequireDefault(_selectedBinder);

var _ifBinder = require('./src/if.binder.js');

var _ifBinder2 = _interopRequireDefault(_ifBinder);

var _elseBinder = require('./src/else.binder.js');

var _elseBinder2 = _interopRequireDefault(_elseBinder);

var _valueBinder = require('./src/value.binder.js');

var _valueBinder2 = _interopRequireDefault(_valueBinder);

var _checkedBinder = require('./src/checked.binder.js');

var _checkedBinder2 = _interopRequireDefault(_checkedBinder);

var _eventBinder = require('./src/event.binder.js');

var _eventBinder2 = _interopRequireDefault(_eventBinder);

var _initBinder = require('./src/init.binder.js');

var _initBinder2 = _interopRequireDefault(_initBinder);

var _modelBinder = require('./src/model.binder.js');

var _modelBinder2 = _interopRequireDefault(_modelBinder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindBinder = _binder2.default;
exports.RaziloBindForBinder = _forBinder2.default;
exports.RaziloBindTextBinder = _textBinder2.default;
exports.RaziloBindHtmlBinder = _htmlBinder2.default;
exports.RaziloBindShowBinder = _showBinder2.default;
exports.RaziloBindHideBinder = _hideBinder2.default;
exports.RaziloBindStyleBinder = _styleBinder2.default;
exports.RaziloBindClassBinder = _classBinder2.default;
exports.RaziloBindAttributesBinder = _attributesBinder2.default;
exports.RaziloBindSrcBinder = _srcBinder2.default;
exports.RaziloBindHrefBinder = _hrefBinder2.default;
exports.RaziloBindDisabledBinder = _disabledBinder2.default;
exports.RaziloBindRequiredBinder = _requiredBinder2.default;
exports.RaziloBindSelectedBinder = _selectedBinder2.default;
exports.RaziloBindIfBinder = _ifBinder2.default;
exports.RaziloBindElseBinder = _elseBinder2.default;
exports.RaziloBindValueBinder = _valueBinder2.default;
exports.RaziloBindCheckedBinder = _checkedBinder2.default;
exports.RaziloBindEventBinder = _eventBinder2.default;
exports.RaziloBindInitBinder = _initBinder2.default;
exports.RaziloBindModelBinder = _modelBinder2.default;

},{"./src/attributes.binder.js":14,"./src/binder.js":15,"./src/checked.binder.js":16,"./src/class.binder.js":17,"./src/disabled.binder.js":18,"./src/else.binder.js":19,"./src/event.binder.js":20,"./src/for.binder.js":21,"./src/hide.binder.js":22,"./src/href.binder.js":23,"./src/html.binder.js":24,"./src/if.binder.js":25,"./src/init.binder.js":26,"./src/model.binder.js":27,"./src/required.binder.js":28,"./src/selected.binder.js":29,"./src/show.binder.js":30,"./src/src.binder.js":31,"./src/style.binder.js":32,"./src/text.binder.js":33,"./src/value.binder.js":34}],14:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Attributes Binder
 * Alters elements attributes based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var AttributesBinder = function (_Binder) {
	_inherits(AttributesBinder, _Binder);

	function AttributesBinder(options, traverser) {
		_classCallCheck(this, AttributesBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'attributes';
		_this.accepts = ['property', 'phantom', 'object', 'array', 'string', 'method'];
		_this.attributes = {};
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	AttributesBinder.prototype.bind = function bind() {
		// add new and update existing attributes
		var attributes = {};
		var atts = typeof this.resolver.resolved === 'string' ? [this.resolver.resolved.trim()] : this.resolver.resolved;
		for (var a in atts) {
			var attr = isNaN(a) ? a.trim() : atts[a].trim();
			var val = isNaN(a) ? atts[a] : true;
			attributes[attr] = val;

			if (typeof val === 'boolean') {
				if (!!val) this.node.setAttribute(attr, '');else this.node.removeAttribute(attr, '');
			} else this.node.setAttribute(attr, val);
		}

		// remove any attributes that have gone
		for (var b in this.attributes) {
			if (!!attributes[b]) continue;
			this.node.removeAttribute(b);
		}

		// update cache
		this.attributes = attributes;
	};

	return AttributesBinder;
}(_binder2.default);

exports.default = AttributesBinder;

},{"./binder.js":15}],15:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _razilobindCore = require('razilobind-core');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Binder
 * Generic binder methods used accross all binders
 */
var Binder = function () {
	function Binder() {
		_classCallCheck(this, Binder);

		this.id = Math.random().toString(36).slice(2) + Date.now(); // create unique id for binder
		this.options = undefined;
		this.traverser = undefined;
		this.name = undefined;
		this.observables = [];
		this.accepts = [];
	}

	Binder.prototype.setup = function setup(options, traverser) {
		this.options = options;
		this.traverser = traverser;
	};

	/**
  * detect()
  * Basic detection of an element by its attribute, setting resolvable
  * @param html-node node The node to detect any bindables on
  * @return bool True on bindable, false on fail
  */


	Binder.prototype.detect = function detect(node) {
		// allow element nodes only
		if (node.nodeType !== 1) return false;

		this.resolvable = node.hasAttribute(this.options.prefix + 'bind-' + this.name) ? node.getAttribute(this.options.prefix + 'bind-' + this.name) : undefined;
		this.configurable = node.hasAttribute(this.options.prefix + 'config-' + this.name) ? node.getAttribute(this.options.prefix + 'config-' + this.name) : undefined;
		this.alterable = node.hasAttribute(this.options.prefix + 'alter-' + this.name) ? node.getAttribute(this.options.prefix + 'alter-' + this.name) : undefined;

		if (!this.resolvable) return false;

		this.node = node;
		return true;
	};

	/**
  * build()
  * Build a bindable object and try to resolve data, if resolved creates initial bind too
  * @param object model The model to attempt to build the binder against
  * @return Binder The binder of specific type
  */


	Binder.prototype.build = function build(model) {
		// set bindable data
		this.priority = 1;
		this.resolver = _razilobindCore.RaziloBindCoreDetector.resolver(this.resolvable, this.node);
		this.alterer = _razilobindCore.RaziloBindCoreDetector.resolver(this.alterable, this.node);
		this.config = _razilobindCore.RaziloBindCoreDetector.resolver(this.configurable, this.node);
		this.model = model;

		// resolve data to actuals and observables if of correct type or no types set
		if (this.resolver && (this.accepts.length === 0 || this.accepts.indexOf(this.resolver.name) >= 0)) this.update();

		// collate binders
		if (this.resolver.observers) for (var i = 0; i < this.resolver.observers.length; i++) {
			if (this.observables.indexOf(this.resolver.observers[i]) < 0) this.observables.push(this.resolver.observers[i]);
		}if (this.alterer.observers) for (var _i = 0; _i < this.alterer.observers.length; _i++) {
			if (this.observables.indexOf(this.alterer.observers[_i]) < 0) this.observables.push(this.alterer.observers[_i]);
		}if (this.config.observers) for (var _i2 = 0; _i2 < this.config.observers.length; _i2++) {
			if (this.observables.indexOf(this.config.observers[_i2]) < 0) this.observables.push(this.config.observers[_i2]);
		}return this;
	};

	/**
  * update()
  * updates observers (as they can change if using properties as keys) and issue bind in child
  * @param object oldValue The old value once object change detect
  * @param string path The path that was affected (or the key if adding or removing a value to/from an object)
  * @param string action The action to perform, 'update', 'array-add', 'array-remove', 'object-add', 'object-remove'
  * @param object key The key name if an object value is added or removed
  */


	Binder.prototype.update = function update(oldValue, path, action, key) {
		// resolve data, bind to element from child class
		this.resolver.resolve(this.model, this.delayMethod === true ? true : false);
		var newValue = this.resolver.resolved;

		if (this.config) this.config.resolve(this.model);
		if (this.alterer) {
			this.alterer.resolve(this.model);
			this.resolver.resolved = _razilobindCore.RaziloBindCoreDetector.alterers(this.alterer.resolved, this.resolver.resolved);
		}

		this.bind(oldValue, path, action, key);

		// garbage collection on observables map which is only thing holding ref to binder (so binder will be released naturally)
		if (action === 'object-remove') delete this.traverser.observables[path + '.' + key];else if (action === 'array-remove') for (var i = newValue.length - 1; i < oldValue; i++) {
			delete this.traverser.observables[path + '.' + i];
		}
	};

	return Binder;
}();

exports.default = Binder;

},{"razilobind-core":35}],16:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Checked Binder
 * Binds resolved data to value attribute of elements such as input, textarea, select etc...
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var CheckedBinder = function (_Binder) {
	_inherits(CheckedBinder, _Binder);

	function CheckedBinder(options, traverser) {
		_classCallCheck(this, CheckedBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'checked';
		_this.accepts = ['property', 'phantom', 'method'];
		_this.event;
		_this.type;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	CheckedBinder.prototype.bind = function bind(oldValue, path) {
		// catch duplicate fires from ui
		if (this.node.value === this.resolver.resolved) return;

		// set value
		this.type = this.node.getAttribute('type');
		this.setValue();

		// should we watch for changes?
		if (!!this.event || this.resolver.observers.length < 1) return;

		// add event listener to node
		this.event = 'change';
		this.node.addEventListener(this.event, this.listener.bind(this), false);
	};

	/**
  * listener()
  * Update model when an element interaction updates its value
  * @param event event The event that triggers the update
  */


	CheckedBinder.prototype.listener = function listener(event) {
		event.stopPropagation();

		// last observer is the full observed path to resolver (others before can make up sub properties)
		var path = this.resolver.observers[this.resolver.observers.length - 1].split('.');
		var end = path.pop();

		// get parent object/array
		var model = this.model;
		for (var i = 0; i < path.length; i++) {
			model = model[path[i]];
		} // change model
		if (this.node.hasAttribute('type') && this.type == 'radio') model[end] = this.node.value;else model[end] = !!this.node.checked ? true : false;
	};

	/**
  * setValue()
  * Set a node value and attribute to ensure changes can be picked up by attribute watchers
  */


	CheckedBinder.prototype.setValue = function setValue() {
		if (this.node.hasAttribute('type') && this.type == 'radio') {
			// radio
			this.node.checked = this.node.value == this.resolver.resolved ? true : false;
			if (this.node.value == this.resolver.resolved) this.node.setAttribute('checked', '');else this.node.removeAttribute('checked');
		} else {
			// checkbox and others...
			this.node.checked = !!this.resolver.resolved ? true : false;
			if (!!this.resolver.resolved) this.node.setAttribute('checked', '');else this.node.removeAttribute('checked');
		}
	};

	return CheckedBinder;
}(_binder2.default);

exports.default = CheckedBinder;

},{"./binder.js":15}],17:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ClassBinder = function (_Binder) {
	_inherits(ClassBinder, _Binder);

	function ClassBinder(options, traverser) {
		_classCallCheck(this, ClassBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'class';
		_this.accepts = ['property', 'phantom', 'object', 'array', 'string', 'method'];
		_this.classnames = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ClassBinder.prototype.bind = function bind() {
		var classnames = [];

		// add new classes if not already added
		var names = typeof this.resolver.resolved === 'string' ? [this.resolver.resolved.trim()] : this.resolver.resolved;
		for (var a in names) {
			var classname = isNaN(a) ? a.trim() : names[a].trim();
			if (typeof a === 'string' && !names[a]) continue; // skip falsy objects
			classnames.push(classname); // add already present to stack
			if (new RegExp('([^a-z0-9_-]{1}|^)' + classname + '([^a-z0-9_-]{1}|$)').test(this.node.className)) continue; // skip already present

			this.node.className += ' ' + classname + ' ';
			classnames.push(classname);
		}

		// remove any that where there previosly but now not in stack
		if (this.classnames.length > 0) {
			// remove any classes not in
			for (var i = 0; i < this.classnames.length; i++) {
				if (classnames.indexOf(this.classnames[i]) >= 0) continue;
				this.node.className = this.node.className.replace(new RegExp('([^a-z0-9_-]{1}|^)' + this.classnames[i] + '([^a-z0-9_-]{1}|$)', 'g'), ' ');
			}
		}

		// update node and cache stack
		this.node.className = this.node.className.replace(/\s{1}\s{1}/g, ' ');
		this.classnames = classnames;
	};

	return ClassBinder;
}(_binder2.default);

exports.default = ClassBinder;

},{"./binder.js":15}],18:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Disabled Binder
 * Alters disabled attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var DisabledBinder = function (_Binder) {
	_inherits(DisabledBinder, _Binder);

	function DisabledBinder(options, traverser) {
		_classCallCheck(this, DisabledBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'disabled';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	DisabledBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.setAttribute('disabled', '');else this.node.removeAttribute('disabled');
	};

	return DisabledBinder;
}(_binder2.default);

exports.default = DisabledBinder;

},{"./binder.js":15}],19:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Else Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ElseBinder = function (_Binder) {
	_inherits(ElseBinder, _Binder);

	function ElseBinder(options, traverser) {
		_classCallCheck(this, ElseBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'else';
		_this.accepts = ['property', 'phantom', 'boolean', 'method'];
		_this.placeholder = null;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ElseBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) {
			// insert placeholder
			this.placeholder = document.createComment('razilobind:else');
			this.node.parentNode.insertBefore(this.placeholder, this.node);
			this.node.parentNode.removeChild(this.node);
		} else if (this.placeholder) {
			this.placeholder.parentNode.insertBefore(this.node, this.placeholder);
			this.placeholder.parentNode.removeChild(this.placeholder);
			this.placeholder = null;
		}
	};

	return ElseBinder;
}(_binder2.default);

exports.default = ElseBinder;

},{"./binder.js":15}],20:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Event Binder
 * Bind methods to element events
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var EventBinder = function (_Binder) {
	_inherits(EventBinder, _Binder);

	function EventBinder(options, traverser) {
		_classCallCheck(this, EventBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'event';
		_this.delayMethod = true;
		_this.accepts = ['object'];
		_this.events = {};
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	EventBinder.prototype.bind = function bind(object) {
		// remove old events
		for (var name in this.events) {
			if (this.resolver.resolved[name]) continue;
			this.node.removeEventListener(name, this.listener, false);
			delete this.events[name];
		}

		// add new events
		for (var _name in this.resolver.resolved) {
			if (!this.events[_name]) {
				if (typeof this.resolver.resolved[_name].method !== 'function') continue;
				this.node.addEventListener(_name, this.listener.bind(this), false);
			}
			this.events[_name] = this.resolver.resolved[_name];
		}
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	EventBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		var values = [event].concat(this.events[event.type].values);
		this.events[event.type].method.apply(this.model, values);
	};

	return EventBinder;
}(_binder2.default);

exports.default = EventBinder;

},{"./binder.js":15}],21:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _razilobindCore = require('razilobind-core');

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * For Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, config, model, accepts
 */
var ForBinder = function (_Binder) {
	_inherits(ForBinder, _Binder);

	function ForBinder(options, traverser) {
		_classCallCheck(this, ForBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'for';
		_this.accepts = ['property', 'phantom', 'method', 'array', 'object'];
		_this.placeholder = {};
		_this.children = [];
		return _this;
	}

	/**
  * OVERRIDE:detect()
  * Basic detection of an element by its attribute, setting resolvable
  * @param html-node node The node to detect any bindables on
  * @return bool True on bindable, false on fail
  */


	ForBinder.prototype.detect = function detect(node) {
		// allow element nodes only
		if (node.nodeType !== 1) return false;

		this.resolvable = node.hasAttribute(this.options.prefix + 'bind-' + this.name) ? node.getAttribute(this.options.prefix + 'bind-' + this.name) : undefined;
		this.configurable = node.hasAttribute(this.options.prefix + 'config-' + this.name) ? node.getAttribute(this.options.prefix + 'config-' + this.name) : undefined;
		this.alterable = node.hasAttribute(this.options.prefix + 'alter-' + this.name) ? node.getAttribute(this.options.prefix + 'alter-' + this.name) : undefined;
		this.orderable = node.hasAttribute(this.options.prefix + 'order-' + this.name) ? node.getAttribute(this.options.prefix + 'order-' + this.name) : undefined;
		this.filterable = node.hasAttribute(this.options.prefix + 'filter-' + this.name) ? node.getAttribute(this.options.prefix + 'filter-' + this.name) : undefined;
		this.limitable = node.hasAttribute(this.options.prefix + 'limit-' + this.name) ? node.getAttribute(this.options.prefix + 'limit-' + this.name) : undefined;
		this.offsetable = node.hasAttribute(this.options.prefix + 'offset-' + this.name) ? node.getAttribute(this.options.prefix + 'offset-' + this.name) : undefined;

		if (!this.resolvable) return false;

		this.node = node;
		return true;
	};

	/**
  * OVERRIDE:build()
  * Build a bindable object and try to resolve data, if resolved creates initial bind too
  * @param object model The model to attempt to build the binder against
  * @return Binder The binder of specific type
  */


	ForBinder.prototype.build = function build(model) {
		// set bindable data
		this.priority = 1;
		this.resolver = _razilobindCore.RaziloBindCoreDetector.resolver(this.resolvable, this.node);
		this.alterer = _razilobindCore.RaziloBindCoreDetector.resolver(this.alterable, this.node);
		this.config = _razilobindCore.RaziloBindCoreDetector.resolver(this.configurable, this.node);
		this.order = _razilobindCore.RaziloBindCoreDetector.resolver(this.orderable, this.node);
		this.filter = _razilobindCore.RaziloBindCoreDetector.resolver(this.filterable, this.node);
		this.limit = _razilobindCore.RaziloBindCoreDetector.resolver(this.limitable, this.node);
		this.offset = _razilobindCore.RaziloBindCoreDetector.resolver(this.offsetable, this.node);
		this.model = model;

		// resolve data to actuals and observables if of correct type or no types set
		if (this.resolver && (this.accepts.length === 0 || this.accepts.indexOf(this.resolver.name) >= 0)) this.update();

		// collate binders
		if (this.resolver.observers) for (var i = 0; i < this.resolver.observers.length; i++) {
			if (this.observables.indexOf(this.resolver.observers[i]) < 0) this.observables.push(this.resolver.observers[i]);
		}if (this.alterer.observers) for (var _i = 0; _i < this.alterer.observers.length; _i++) {
			if (this.observables.indexOf(this.alterer.observers[_i]) < 0) this.observables.push(this.alterer.observers[_i]);
		}if (this.config.observers) for (var _i2 = 0; _i2 < this.config.observers.length; _i2++) {
			if (this.observables.indexOf(this.config.observers[_i2]) < 0) this.observables.push(this.config.observers[_i2]);
		}if (this.order.observers) for (var _i3 = 0; _i3 < this.order.observers.length; _i3++) {
			if (this.observables.indexOf(this.order.observers[_i3]) < 0) this.observables.push(this.order.observers[_i3]);
		}if (this.filter.observers) for (var _i4 = 0; _i4 < this.filter.observers.length; _i4++) {
			if (this.observables.indexOf(this.filter.observers[_i4]) < 0) this.observables.push(this.filter.observers[_i4]);
		}if (this.limit.observers) for (var _i5 = 0; _i5 < this.limit.observers.length; _i5++) {
			if (this.observables.indexOf(this.limit.observers[_i5]) < 0) this.observables.push(this.limit.observers[_i5]);
		}if (this.offset.observers) for (var _i6 = 0; _i6 < this.offset.observers.length; _i6++) {
			if (this.observables.indexOf(this.offset.observers[_i6]) < 0) this.observables.push(this.offset.observers[_i6]);
		}return this;
	};

	/**
  * OVERRIDE:update()
  * updates observers (as they can change if using properties as keys) and issue bind in child
  * @param object oldValue The old value once object change detect
  * @param string path The path that was affected (or the key if adding or removing a value to/from an object)
  * @param string action The action to perform, 'update', 'array-add', 'array-remove', 'object-add', 'object-remove'
  * @param object key The key name if an object value is added or removed
  */


	ForBinder.prototype.update = function update(oldValue, path, action, key) {
		// resolve data, bind to element from child class
		this.resolver.resolve(this.model);
		var newValue = this.resolver.resolved;

		if (this.config) this.config.resolve(this.model);
		if (this.order) this.order.resolve(this.model);
		if (this.filter) this.filter.resolve(this.model);
		if (this.limit) this.limit.resolve(this.model);
		if (this.offset) this.offset.resolve(this.model);
		if (this.alterer) {
			// alter resolved value
			this.alterer.resolve(this.model);
			this.resolver.resolved = _razilobindCore.RaziloBindCoreDetector.alterers(this.alterer.resolved, this.resolver.resolved);
		}

		this.bind(oldValue, path, action, key);

		// garbage collection on observables map which is only thing holding ref to binder (so binder will be released naturally)
		if (action === 'object-remove') delete this.traverser.observables[path + '.' + key];else if (action === 'array-remove') for (var i = newValue.length - 1; i < oldValue; i++) {
			delete this.traverser.observables[path + '.' + i];
		}
	};

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	ForBinder.prototype.bind = function bind(oldValue, path, action, objectKey) {
		if (_typeof(this.resolver.resolved) !== 'object') return; // do not re-draw for non objects
		if (action == 'update' && typeof oldValue !== 'undefined' && (typeof oldValue === 'undefined' ? 'undefined' : _typeof(oldValue)) !== 'object') return; // do not re-draw on litaral changes (as they do not affect loop)

		// grab any config data
		var phantomKey = this.config && this.config.resolved.key ? this.config.resolved.key.indexOf('$') !== 0 ? '$' + this.config.resolved.key : this.config.resolved.key : '$key';
		var phantomValue = this.config && this.config.resolved.value ? this.config.resolved.value.indexOf('$') !== 0 ? '$' + this.config.resolved.value : this.config.resolved.value : '$value';
		var order = this.order && this.order.resolved ? this.order.resolved : undefined;
		var filter = this.filter && this.filter.resolved ? this.filter.resolved : undefined;

		// add placeholder and remove element from dom
		if (!this.placeholder.start) {
			this.placeholder.end = document.createComment('razilobind:for:end');
			if (this.node.nextSibling === null) this.node.parentNode.appendChild(this.placeholder.end);else this.node.parentNode.insertBefore(this.placeholder.end, this.node.nextSibling);

			this.placeholder.start = document.createComment('razilobind:for:start');
			this.placeholder.end.parentNode.insertBefore(this.placeholder.start, this.placeholder.end);

			this.node.parentNode.removeChild(this.node);
		}

		if (this.children.length > 0) {
			// remove any current children
			for (var _i7 = 0; _i7 < this.children.length; _i7++) {
				this.children[_i7].parentNode.removeChild(this.children[_i7]);
			}this.children = [];
		}

		// order and/or filter the resolved data, dont allow over length of data
		var orderedFiltered = this.orderFilter(this.resolver.resolved, order, filter);

		// limit and offset if either set
		if (this.offset || this.limit) {
			var offset = this.offset && this.offset.resolved ? parseInt(this.offset.resolved) : 0;
			var limit = this.limit && this.limit.resolved ? parseInt(this.limit.resolved) : 0;

			var nOffset = offset < 1 ? 0 : offset - 1;
			var nLimit = nOffset + limit < 1 ? 0 : (nOffset > 0 ? nOffset - 1 : nOffset) + limit;

			orderedFiltered.resolved = orderedFiltered.resolved.splice(nOffset, nLimit);
			if (orderedFiltered.map) orderedFiltered.map = orderedFiltered.map.splice(nOffset, nLimit);
		}

		for (var key in orderedFiltered.resolved) {
			var newNode = this.node.cloneNode(true);
			newNode.removeAttribute(this.options.prefix + 'bind-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'config-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'alter-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'order-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'filter-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'limit-' + this.name);
			newNode.removeAttribute(this.options.prefix + 'offset-' + this.name);
			newNode.phantom = {
				'iterationKey': orderedFiltered.map ? orderedFiltered.map[key] : key,
				'initialValue': orderedFiltered.resolved[key],
				'observers': this.resolver.observers,
				'keyName': phantomKey,
				'valueName': phantomValue
			};

			this.children.push(newNode);
		}

		// add children
		for (var i = 0; i < this.children.length; i++) {
			this.placeholder.end.parentNode.insertBefore(this.children[i], this.placeholder.end);
			if (path) this.traverser.traverse(this.children[i], this.model);
		}
	};

	// order data


	ForBinder.prototype.orderFilter = function orderFilter(resolved, orderBy, filterBy) {
		if (!resolved || !orderBy && !filterBy) return { map: undefined, resolved: resolved };

		var isArray = Array.isArray(resolved);
		var newOrder = [];
		var map = [];

		resolvedloop: for (var key in resolved) {
			// filter out any data before ordering
			if (filterBy) {
				for (var name in filterBy) {
					if (typeof filterBy[name] === 'string' && new RegExp("^" + filterBy[name].split('*').join('.*') + "$").test(resolved[key][name])) continue resolvedloop;else if (Array.isArray(filterBy[name]) && new RegExp("^" + filterBy[name].join('').split('*').join('.*') + "$").test(resolved[key][name])) continue resolvedloop;
				}
			}

			// if first bit of data or no order defined, push data
			if (map.length < 1 || !orderBy) {
				map.push(key);
				newOrder.push(resolved[key]);
				continue;
			}

			// get position for order
			orderloop: for (var i = 0; i < newOrder.length; i++) {
				for (var _name in orderBy) {
					if (orderBy[_name] == 'asc' && resolved[key][_name] > newOrder[i][_name]) continue orderloop;
					if (resolved[key][_name] == newOrder[i][_name]) continue;
					if (orderBy[_name] == 'desc' && resolved[key][_name] < newOrder[i][_name]) continue orderloop;
				}
				break;
			}

			// splice data into new stack
			map.splice(i, 0, key);
			newOrder.splice(i, 0, resolved[key]);
		}

		return { map: map, resolved: newOrder };
	};

	return ForBinder;
}(_binder2.default);

exports.default = ForBinder;

},{"./binder.js":15,"razilobind-core":35}],22:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Hide Binder
 * Hides element if data resolved to true
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var HideBinder = function (_Binder) {
	_inherits(HideBinder, _Binder);

	function HideBinder(options, traverser) {
		_classCallCheck(this, HideBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'hide';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by showing or hiding node
  * @param object oldValue The old value of the observed object
  */


	HideBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.style.display = 'none';else this.node.style.display = '';
	};

	return HideBinder;
}(_binder2.default);

exports.default = HideBinder;

},{"./binder.js":15}],23:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Href Binder
 * Alters href attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var HrefBinder = function (_Binder) {
	_inherits(HrefBinder, _Binder);

	function HrefBinder(options, traverser) {
		_classCallCheck(this, HrefBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'href';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	HrefBinder.prototype.bind = function bind() {
		// this.resolver.resolved
		if (typeof this.resolver.resolved !== 'string' || this.resolver.resolved.length < 1) this.node.removeAttribute('href');else this.node.setAttribute('href', this.resolver.resolved);
	};

	return HrefBinder;
}(_binder2.default);

exports.default = HrefBinder;

},{"./binder.js":15}],24:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * HTML Binder
 * Binds resolved data to element contents (innerHTML)
 * !!! USE WITH CAUTION ONLY BIND TRUSTED HTML !!!
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var HtmlBinder = function (_Binder) {
	_inherits(HtmlBinder, _Binder);

	function HtmlBinder(options, traverser) {
		_classCallCheck(this, HtmlBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'html';
		_this.accepts = ['string', 'property', 'phantom', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	HtmlBinder.prototype.bind = function bind() {
		this.node.innerHTML = this.resolver.resolved;
	};

	return HtmlBinder;
}(_binder2.default);

exports.default = HtmlBinder;

},{"./binder.js":15}],25:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * If Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var IfBinder = function (_Binder) {
	_inherits(IfBinder, _Binder);

	function IfBinder(options, traverser) {
		_classCallCheck(this, IfBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'if';
		_this.accepts = ['property', 'phantom', 'boolean', 'method'];
		_this.placeholder = null;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	IfBinder.prototype.bind = function bind() {
		if (!this.resolver.resolved) {
			// insert placeholder
			this.placeholder = document.createComment('razilobind:if');
			this.node.parentNode.insertBefore(this.placeholder, this.node);
			this.node.parentNode.removeChild(this.node);
		} else if (this.placeholder) {
			this.placeholder.parentNode.insertBefore(this.node, this.placeholder);
			this.placeholder.parentNode.removeChild(this.placeholder);
			this.placeholder = null;
		}
	};

	return IfBinder;
}(_binder2.default);

exports.default = IfBinder;

},{"./binder.js":15}],26:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Init Binder
 * Bind a method to initialization of element. A starting method good for things like collecting
 * data on start of your app, or preloading method.
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var InitBinder = function (_Binder) {
	_inherits(InitBinder, _Binder);

	function InitBinder(options, traverser) {
		_classCallCheck(this, InitBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'init';
		_this.delayMethod = true;
		_this.accepts = ['method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	InitBinder.prototype.bind = function bind(object) {
		document.addEventListener("DOMContentLoaded", this.listener.bind(this), false);
	};

	/**
  * listener()
  * Catch events on nodes and run functions set.
  * @param event event The event that triggers the update
  */


	InitBinder.prototype.listener = function listener(event) {
		event.stopPropagation();
		this.resolver.resolved.method.apply(this.model, this.resolver.resolved.values);
	};

	return InitBinder;
}(_binder2.default);

exports.default = InitBinder;

},{"./binder.js":15}],27:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Model Binder
 * Binds resolved data to model attribute of elements and model property of elements, if object, attribute will switch to changing description
 * to allow attribute change to be picked up by custom elements. Used primary to put data into a custom element
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ModelBinder = function (_Binder) {
	_inherits(ModelBinder, _Binder);

	function ModelBinder(options, traverser) {
		_classCallCheck(this, ModelBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'model';
		_this.accepts = ['property', 'phantom', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	ModelBinder.prototype.bind = function bind(oldValue, path) {
		// set value
		this.node.setAttribute('model', _typeof(this.resolver.resolved) === 'object' ? '[object]@' + new Date().getTime() : this.resolver.resolved);
		this.node.model = this.resolver.resolved;
	};

	return ModelBinder;
}(_binder2.default);

exports.default = ModelBinder;

},{"./binder.js":15}],28:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Required Binder
 * Alters required attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var RequiredBinder = function (_Binder) {
	_inherits(RequiredBinder, _Binder);

	function RequiredBinder(options, traverser) {
		_classCallCheck(this, RequiredBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'required';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	RequiredBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.setAttribute('required', '');else this.node.removeAttribute('required');
	};

	return RequiredBinder;
}(_binder2.default);

exports.default = RequiredBinder;

},{"./binder.js":15}],29:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Selected Binder
 * Alters selected attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var SelectedBinder = function (_Binder) {
	_inherits(SelectedBinder, _Binder);

	function SelectedBinder(options, traverser) {
		_classCallCheck(this, SelectedBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'selected';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	SelectedBinder.prototype.bind = function bind() {
		if (typeof this.resolver.resolved === 'string' && this.resolver.resolved.length > 0) this.node.setAttribute('selected', this.resolver.resolved);else if (_typeof(this.resolver.resolved) === 'object' && this.resolver.resolved != null) {
			this.node.setAttribute('selected', '[object]@' + new Date().getTime());
			this.node.selected = this.resolver.resolved;
		} else if (!!this.resolver.resolved) this.node.setAttribute('selected', '');else this.node.removeAttribute('selected');
	};

	return SelectedBinder;
}(_binder2.default);

exports.default = SelectedBinder;

},{"./binder.js":15}],30:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Show Binder
 * Shows element if data resolved to true
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ShowBinder = function (_Binder) {
	_inherits(ShowBinder, _Binder);

	function ShowBinder(options, traverser) {
		_classCallCheck(this, ShowBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'show';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by showing hiding the node
  * @param object oldValue The old value of the observed object
  */


	ShowBinder.prototype.bind = function bind() {
		if (!!this.resolver.resolved) this.node.style.display = '';else this.node.style.display = 'none';
	};

	return ShowBinder;
}(_binder2.default);

exports.default = ShowBinder;

},{"./binder.js":15}],31:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Src Binder
 * Alters src attribute based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var SrcBinder = function (_Binder) {
	_inherits(SrcBinder, _Binder);

	function SrcBinder(options, traverser) {
		_classCallCheck(this, SrcBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'src';
		_this.accepts = ['property', 'phantom', 'object', 'string', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	SrcBinder.prototype.bind = function bind() {
		// this.resolver.resolved
		if (typeof this.resolver.resolved !== 'string' || this.resolver.resolved.length < 1) this.node.removeAttribute('src');else this.node.setAttribute('src', this.resolver.resolved);
	};

	return SrcBinder;
}(_binder2.default);

exports.default = SrcBinder;

},{"./binder.js":15}],32:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Style Binder
 * Alters elements style based on resolved data contents
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var StyleBinder = function (_Binder) {
	_inherits(StyleBinder, _Binder);

	function StyleBinder(options, traverser) {
		_classCallCheck(this, StyleBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'style';
		_this.accepts = ['property', 'phantom', 'object', 'method'];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data by applying styles to node
  * @param object oldValue The old value of the observed object
  */


	StyleBinder.prototype.bind = function bind(oldValue) {
		if (_typeof(this.resolver.resolved) !== 'object') return;

		// set new values
		for (var key in this.resolver.resolved) {
			if (typeof key !== 'string' || typeof this.resolver.resolved[key] !== 'string') continue;
			this.node.style[key] = this.resolver.resolved[key];
		}

		// remove any old values not set by new ones
		for (var key2 in oldValue) {
			if (typeof this.resolver.resolved[key2] !== 'undefined') continue;
			this.node.style[key2] = '';
		}
	};

	return StyleBinder;
}(_binder2.default);

exports.default = StyleBinder;

},{"./binder.js":15}],33:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Text Binder
 * Binds resolved data to element contents via HTML innerText
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var TextBinder = function (_Binder) {
	_inherits(TextBinder, _Binder);

	function TextBinder(options, traverser) {
		_classCallCheck(this, TextBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'text';
		_this.accepts = [];
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	TextBinder.prototype.bind = function bind(oldValue, path) {
		this.node.innerText = String(_typeof(this.resolver.resolved) === 'symbol' ? Symbol(this.resolver.resolved) : this.resolver.resolved);
	};

	return TextBinder;
}(_binder2.default);

exports.default = TextBinder;

},{"./binder.js":15}],34:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _binder = require('./binder.js');

var _binder2 = _interopRequireDefault(_binder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Value Binder
 * Binds resolved data to value attribute of elements such as input, textarea, select etc...
 *
 * Inherits
 *
 * properties: options, node, resolvable, model, accepts
 * method: detect(node) { return bool }
 * method: build(model) { return binder }
 * method: update(newValue, oldValue) { }
 */
var ValueBinder = function (_Binder) {
	_inherits(ValueBinder, _Binder);

	function ValueBinder(options, traverser) {
		_classCallCheck(this, ValueBinder);

		var _this = _possibleConstructorReturn(this, _Binder.call(this));

		_this.options = options;
		_this.traverser = traverser;
		_this.name = 'value';
		_this.accepts = ['property', 'phantom', 'method'];
		_this.event;
		_this.tag;
		_this.type;
		return _this;
	}

	/**
  * bind()
  * Bind the resolved data to the node replacing contents
  * @param object oldValue The old value of the observed object
  */


	ValueBinder.prototype.bind = function bind(oldValue, path) {
		// set value
		this.tag = this.node.tagName.toLowerCase();
		this.type = this.node.getAttribute('type');
		if (this.type != 'file') {
			if (this.tag === 'select') setTimeout(this.setValue.bind(this), 10);else this.setValue();
		}

		// should we watch for changes?
		if (!!this.event || this.resolver.observers.length < 1 || this.tag === 'option' || this.type == 'radio') return;

		// add event listener to node
		this.event = this.eventType();
		this.node.addEventListener(this.event, this.listener.bind(this), false);
	};

	/**
  * listener()
  * Update model when an element interaction updates its value
  * @param event event The event that triggers the update
  */


	ValueBinder.prototype.listener = function listener(event) {
		event.stopPropagation();

		// last observer is the full observed path to resolver (others before can make up sub properties)
		var path = this.resolver.observers[this.resolver.observers.length - 1].split('.');
		var end = path.pop();

		// get parent object/array
		var model = this.model;
		for (var i = 0; i < path.length; i++) {
			model = model[path[i]];
		} // change model
		if (this.tag === 'select' && this.node.hasAttribute('multiple')) {
			var selected = [];
			var opts = this.node.querySelectorAll('option');
			for (var i = 0; i < opts.length; i++) {
				if (!!opts[i].selected) selected.push(opts[i].value);
			}model[end] = selected;
		} else {
			model[end] = this.node.value;
			this.node.setAttribute('value', _typeof(this.node.value) === 'object' ? '[object]@' + new Date().getTime() : this.node.value);
		}
	};

	/**
  * setValue()
  * Set a node value and attribute to ensure changes can be picked up by attribute watchers
  */


	ValueBinder.prototype.setValue = function setValue() {
		if (this.tag === 'select' && this.node.hasAttribute('multiple') && Array.isArray(this.resolver.resolved)) {
			var opts = this.node.querySelectorAll('option');
			for (var i = 0; i < opts.length; i++) {
				// do not indexOf to stop issues with mixed var type
				for (var ii = 0; ii < this.resolver.resolved.length; ii++) {
					if (opts[i].value == this.resolver.resolved[ii]) opts[i].selected = true;
				}
			}
		} else {
			this.node.setAttribute('value', _typeof(this.resolver.resolved) === 'object' ? '[object]@' + new Date().getTime() : this.resolver.resolved);
			this.node.value = this.resolver.resolved;
		}
	};

	/**
  * eventType()
  * Get the type of event we want to listen on
  */


	ValueBinder.prototype.eventType = function eventType() {
		var name = 'change';
		if (this.tag === 'input') name = 'input';

		return name;
	};

	return ValueBinder;
}(_binder2.default);

exports.default = ValueBinder;

},{"./binder.js":15}],35:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindDateFormat = exports.RaziloBindCoreObserver = exports.RaziloBindCoreTraverser = exports.RaziloBindCoreDetector = exports.RaziloBindCore = undefined;

var _core = require('./src/core.js');

var _core2 = _interopRequireDefault(_core);

var _detector = require('./src/detector.js');

var _detector2 = _interopRequireDefault(_detector);

var _traverser = require('./src/traverser.js');

var _traverser2 = _interopRequireDefault(_traverser);

var _observer = require('./src/observer.js');

var _observer2 = _interopRequireDefault(_observer);

var _dateFormat = require('./src/date-format.js');

var _dateFormat2 = _interopRequireDefault(_dateFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindCore = _core2.default;
exports.RaziloBindCoreDetector = _detector2.default;
exports.RaziloBindCoreTraverser = _traverser2.default;
exports.RaziloBindCoreObserver = _observer2.default;
exports.RaziloBindDateFormat = _dateFormat2.default;

},{"./src/core.js":36,"./src/date-format.js":37,"./src/detector.js":38,"./src/observer.js":39,"./src/traverser.js":40}],36:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _traverser = require('./traverser.js');

var _traverser2 = _interopRequireDefault(_traverser);

var _observer = require('./observer.js');

var _observer2 = _interopRequireDefault(_observer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RaziloBind Binding Library
 * Offers View-Model binding between js object and html view
 */
var Core = function () {
	function Core(options) {
		_classCallCheck(this, Core);

		// set up
		this.options = typeof options !== 'undefined' ? options : {};
		this.options.prefix = typeof this.options.prefix !== 'undefined' ? this.options.prefix + '-' : '';
	}

	Core.prototype.bind = function bind(element, object) {
		element = typeof element === 'string' ? document.querySelector(element) : element;
		if (!element) throw "Element not found, cannot bind to non-element";

		// set basics
		element.razilobind = this;
		this.model = _observer2.default.object(object, this.update.bind(this), true);
		this.element = element;

		// iterate over nodes
		this.traverser = new _traverser2.default(this.options);
		this.traverser.traverse(this.element, this.model, true);
	};

	Core.prototype.update = function update(path, oldV, newV) {
		var action = 'update';
		var pathParts = path.split('.');
		var pathEnd = pathParts[pathParts.length - 1];

		// sort out arrys and objects
		if (pathEnd === 'length') {
			// convert .lengths to parent updates
			action = oldV > newV ? 'array-remove' : 'array-add';
			path = path.substring(0, path.length - pathEnd.length - 1);
		} else if (typeof oldV === 'undefined' || typeof newV === 'undefined') {
			var model = this.model;
			for (var i = 0; i < pathParts.length - 1; i++) {
				model = model[pathParts[i]];
			} // if parent is object, also fire parent update and allow original to continue
			if (typeof model.length === 'undefined') {
				var xPath = path.substring(0, path.length - pathEnd.length - 1);
				var xAction = typeof oldV === 'undefined' ? 'object-add' : 'object-remove';
				this.cascade(oldV, xPath, xAction, pathEnd);
			}
		}

		this.cascade(oldV, path, action);
	};

	Core.prototype.cascade = function cascade(oldV, path, action, pathEnd) {
		// ensure we cascade any changes back down the tree for objects and arrays
		while (path.length > 0) {
			if (typeof this.traverser.observables[path] !== 'undefined') for (var key in this.traverser.observables[path]) {
				this.traverser.observables[path][key].update(oldV, path, action, pathEnd);
			}path = path.substring(0, path.lastIndexOf("."));
		}
	};

	return Core;
}();

exports.default = Core;

},{"./observer.js":39,"./traverser.js":40}],37:[function(require,module,exports){
'use strict';

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Date Alterer
 * Alters various data to a date string in (options) format
 *
 * Inspired by dateFormat https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js by Steven Levithan <stevenlevithan.com>
 *
 * Inherits
 *
 * properties: name, accepts, options
 * method: detect(name, resolved) { return bool }
 *
 * PORTED FROM: dateFormat https://github.com/felixge/node-dateformat/blob/master/lib/dateformat.js
 * Date Format 1.2.3
 * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
 * MIT license
 *
 * Includes enhancements by Scott Trenda <scott.trenda.net>
 * and Kris Kowal <cixar.com/~kris.kowal/>
 *
 * Accepts a date, a mask, or a date and a mask.
 * Returns a formatted version of the given date.
 * The date defaults to the current date/time.
 * The mask defaults to dateFormat.masks.default.
 */
var DateFormat = function () {
	function DateFormat() {
		_classCallCheck(this, DateFormat);
	}

	DateFormat.dateFormat = function dateFormat(date, mask, utc, gmt) {
		var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
		var timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
		var timezoneClip = /[^-+\dA-Z]/g;

		var masks = {
			'default': 'ddd mmm dd yyyy HH:MM:ss',
			'shortDate': 'm/d/yy',
			'mediumDate': 'mmm d, yyyy',
			'longDate': 'mmmm d, yyyy',
			'fullDate': 'dddd, mmmm d, yyyy',
			'shortTime': 'h:MM TT',
			'mediumTime': 'h:MM:ss TT',
			'longTime': 'h:MM:ss TT Z',
			'isoDate': 'yyyy-mm-dd',
			'isoTime': 'HH:MM:ss',
			'isoDateTime': 'yyyy-mm-dd\'T\'HH:MM:sso',
			'isoUtcDateTime': 'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'',
			'expiresHeaderFormat': 'ddd, dd mmm yyyy HH:MM:ss Z'
		};

		var i18n = {
			dayNames: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			monthNames: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		};

		mask = String(masks[mask] || mask || masks['default']);

		// Allow setting the utc/gmt argument via the mask
		var maskSlice = mask.slice(0, 4);
		if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
			mask = mask.slice(4);
			utc = true;
			if (maskSlice === 'GMT:') gmt = true;
		}

		var _ = utc ? 'getUTC' : 'get';
		var d = date[_ + 'Date']();
		var D = date[_ + 'Day']();
		var m = date[_ + 'Month']();
		var y = date[_ + 'FullYear']();
		var H = date[_ + 'Hours']();
		var M = date[_ + 'Minutes']();
		var s = date[_ + 'Seconds']();
		var L = date[_ + 'Milliseconds']();
		var o = utc ? 0 : date.getTimezoneOffset();
		var W = DateFormat.getWeek(date);
		var N = DateFormat.getDayOfWeek(date);
		var flags = {
			d: d,
			dd: DateFormat.pad(d),
			ddd: i18n.dayNames[D],
			dddd: i18n.dayNames[D + 7],
			m: m + 1,
			mm: DateFormat.pad(m + 1),
			mmm: i18n.monthNames[m],
			mmmm: i18n.monthNames[m + 12],
			yy: String(y).slice(2),
			yyyy: y,
			h: H % 12 || 12,
			hh: DateFormat.pad(H % 12 || 12),
			H: H,
			HH: DateFormat.pad(H),
			M: M,
			MM: DateFormat.pad(M),
			s: s,
			ss: DateFormat.pad(s),
			l: DateFormat.pad(L, 3),
			L: DateFormat.pad(Math.round(L / 10)),
			t: H < 12 ? 'a' : 'p',
			tt: H < 12 ? 'am' : 'pm',
			T: H < 12 ? 'A' : 'P',
			TT: H < 12 ? 'AM' : 'PM',
			Z: gmt ? 'GMT' : utc ? 'UTC' : (String(date).match(timezone) || ['']).pop().replace(timezoneClip, ''),
			o: (o > 0 ? '-' : '+') + DateFormat.pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
			S: ['th', 'st', 'nd', 'rd'][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10],
			W: W,
			N: N
		};

		return mask.replace(token, function (match) {
			if (match in flags) return flags[match];
			return match.slice(1, match.length - 1);
		});
	};

	/**
  * Get the ISO 8601 week number
  * Based on comments from
  * http://techblog.procurios.nl/k/n618/news/view/33796/14863/Calculate-ISO-8601-week-and-year-in-javascript.html
  *
  * @param  {Object} `date`
  * @return {Number}
  */


	DateFormat.getWeek = function getWeek(date) {
		// Remove time components of date
		var targetThursday = new Date(date.getFullYear(), date.getMonth(), date.getDate());

		// Change date to Thursday same week
		targetThursday.setDate(targetThursday.getDate() - (targetThursday.getDay() + 6) % 7 + 3);

		// Take January 4th as it is always in week 1 (see ISO 8601)
		var firstThursday = new Date(targetThursday.getFullYear(), 0, 4);

		// Change date to Thursday same week
		firstThursday.setDate(firstThursday.getDate() - (firstThursday.getDay() + 6) % 7 + 3);

		// Check if daylight-saving-time-switch occured and correct for it
		var ds = targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset();
		targetThursday.setHours(targetThursday.getHours() - ds);

		// Number of weeks between target Thursday and first Thursday
		var weekDiff = (targetThursday - firstThursday) / (86400000 * 7);
		return 1 + Math.floor(weekDiff);
	};

	/**
  * Get ISO-8601 numeric representation of the day of the week
  * 1 (for Monday) through 7 (for Sunday)
  *
  * @param  {Object} `date`
  * @return {Number}
  */


	DateFormat.getDayOfWeek = function getDayOfWeek(date) {
		var dow = date.getDay();
		if (dow === 0) dow = 7;
		return dow;
	};

	DateFormat.pad = function pad(val, len) {
		val = String(val);
		len = len || 2;
		while (val.length < len) {
			val = '0' + val;
		}return val;
	};

	return DateFormat;
}();

exports.default = DateFormat;

},{}],38:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Detector = function () {
	function Detector() {
		_classCallCheck(this, Detector);
	}

	/**
  * Choose binders for the data found when iterating over element bindables
  * Some binders will not allow other binders to be found, such as any binder that
  * creates it own insance e.g. for loops, as they are generated on the fly.
  * return array of binders
  */
	Detector.binders = function binders(node, model, options, traverser) {
		if (!Detector.defaultBinders || _typeof(Detector.defaultBinders) !== 'object') return;

		var binders = [];
		for (var name in Detector.defaultBinders) {
			var binder = new Detector.defaultBinders[name](options, traverser);
			if (binder.detect(node)) binders.push(binder.build(model));
		}

		if (Detector.customBinders && _typeof(Detector.customBinders) === 'object') {
			for (var _name in Detector.customBinders) {
				var _binder = new Detector.customBinders[_name](options, traverser);
				if (_binder.detect(node)) binders.push(_binder.build(model));
			}
		}

		return binders;
	};

	/**
  * Run alterers found in resolved alterable data
  * return resolved The altered resolved data
  */


	Detector.alterers = function alterers(_alterers, resolved) {
		if (typeof _alterers === 'undefined') return false;
		if ((typeof _alterers === 'undefined' ? 'undefined' : _typeof(_alterers)) !== 'object') _alterers = [_alterers];

		for (var key in _alterers) {
			var name = isNaN(key) ? key : _alterers[key];
			var options = isNaN(key) ? _alterers[key] : undefined;

			if (!Detector.defaultAlterers || _typeof(Detector.defaultAlterers) !== 'object') continue;

			for (var _key in Detector.defaultAlterers) {
				var alterer = new Detector.defaultAlterers[_key]();
				if (alterer.detect(name, resolved)) resolved = alterer.alter(resolved, options);
			}

			if (Detector.customAlterers && _typeof(Detector.customAlterers) === 'object') {
				for (var _name2 in Detector.customAlterers) {
					var _alterer = new Detector.customAlterers[_name2]();
					if (_alterer.detect(_name2, resolved)) resolved = _alterer.alter(resolved, options);
				}
			}
		}

		return resolved;
	};

	/**
  * Choose a single resolver for data found when iterating over elements. Can be used for any element attribute data
  * return Resolver resolver or bool false on fail
  */


	Detector.resolver = function resolver(data, node) {
		if (typeof data === 'undefined' || data.length < 1) return false;
		if (!Detector.defaultResolvers || _typeof(Detector.defaultResolvers) !== 'object') return false;

		for (var name in Detector.defaultResolvers) {
			var resolver = new Detector.defaultResolvers[name](node);
			if (resolver.detect(data)) return resolver;
		}

		if (Detector.customResolvers && _typeof(Detector.customResolvers) === 'object') {
			for (var _name3 in Detector.customResolvers) {
				var _resolver = new Detector.customResolvers[_name3](node);
				if (_resolver.detect(data)) return _resolver;
			}
		}

		// failed to resolve
		return false;
	};

	return Detector;
}();

exports.default = Detector;

},{}],39:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observer = function () {
	function Observer() {
		_classCallCheck(this, Observer);
	}

	/**
  * object()
  * Observe an object, applying a callback if changed
  * This method uses native Proxy available for clean observing, returning proxied object
     *
  * NOTE:
  * If native proxy not available, proxy will be polyfilled and fallback to object observe polyfill for observing
  * and proxy polyfill for those who  want to use it (caveat, proxy polyfill does not allow mutating of arrays) To change a polyfilled proxy
  * you will have to replace whole array. This is why we fall back to OO polyfill for observing but allow you to still use Proxy polyfill
  * if you want to for your app with this caveat.
  *
  * DEPS:
  * This class relies on the smiffy6969/proxy-oo-polyfill (npm install proxy-oo-polyfill) for hybrid proxy with oo observing.
  *
  * @param obj Object The model to proxy
  * @param fn Function The calback function to run on change
  * @param deep Boolean Should we go deep or just proxy/observe root level
  * @param prefix String Used to set prefix of path in object (should be blank when called)
  * @return Object The proxied object
  */
	Observer.object = function object(obj, fn, deep, prefix) {
		if (!Proxy.oo) return Observer.proxy(obj, fn, deep, prefix);
		Observer.oo(obj, fn, deep, prefix);
		return obj;
	};

	/**
  * proxy()
  *
  * Use native proxy to extend object model, allowing us to observe changes and instigate callback on changes
  * @param obj Object The model to proxy
  * @param fn Function The calback function to run on change
  * @param deep Boolean Should we go deep or just proxy/observe root level
  * @param prefix String Used to set prefix of path in object (should be blank when called)
  * @return Object The proxied object
  */


	Observer.proxy = function proxy(obj, fn, deep, prefix) {
		prefix = typeof prefix === 'undefined' ? '' : prefix;
		return new Proxy(obj, {
			set: function set(target, prop, value) {
				var old = target[prop];
				target[prop] = value;
				fn.call(this, prefix + prop, old, value);
				return true;
			},
			get: function get(target, prop) {
				return !deep || target[prop] == null || _typeof(target[prop]) !== 'object' || target[prop] instanceof Date ? target[prop] : Observer.proxy(target[prop], fn, deep, prefix + prop + '.');
			}
		});
	};

	/**
  * oo()
  *
  * Fallback observing method to allow us to watch changes on object without native proxy
  * @param obj Object The model to proxy
  * @param fn Function The calback function to run on change
  * @param deep Boolean Should we go deep or just proxy/observe root level
  * @param prefix String Used to set prefix of path in object (should be blank when called)
  */


	Observer.oo = function oo(obj, fn, deep, prefix) {
		prefix = typeof prefix === 'undefined' ? '' : prefix;
		Proxy.oo.observe(obj, function (changes) {
			for (var i = 0; i < changes.length; i++) {
				fn(prefix + changes[i].name, obj[changes[i].name], changes[i].oldValue, changes[i].type);
				if (changes[i].type == 'add' && !!deep && obj[changes[i].name] && _typeof(obj[changes[i].name]) === 'object') Observer.oo(obj[changes[i].name], fn, deep, prefix + changes[i].name + '.');
			}
		});
		for (var name in obj) {
			if (!!deep && obj[name] && _typeof(obj[name]) === 'object') Observer.oo(obj[name], fn, deep, prefix + name + '.');
		}
	};

	return Observer;
}();

exports.default = Observer;

},{}],40:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _detector = require('./detector.js');

var _detector2 = _interopRequireDefault(_detector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Traverser = function () {
    function Traverser(options) {
        _classCallCheck(this, Traverser);

        this.options = options;
        this.observables = {};
    }

    Traverser.prototype.traverse = function traverse(element, model, initial) {
        // check for binders and build observables map
        var binders = this.options.noParentBind && initial ? [] : _detector2.default.binders(element, model, this.options, this);

        // compile binders into a watch list (one binder instance only per element)
        if (binders.length > 0) {
            for (var i = 0; i < binders.length; i++) {
                if (binders[i].observables.length > 0) {
                    for (var ii = 0; ii < binders[i].observables.length; ii++) {
                        var path = binders[i].observables[ii];
                        if (typeof this.observables[path] === 'undefined') this.observables[path] = {};
                        this.observables[path][binders[i].id] = binders[i];
                    }
                }
            }
        }

        this.goDeep(element, model);
    };

    Traverser.prototype.goDeep = function goDeep(element, model) {
        // go deep! <o_0> Make sure we do not do this for loops (bind-for) as they will traverse
        // themselves to stop stale binding bug on placeholder instead of parent looped results
        if (element.childNodes && !element.hasAttribute('bind-for')) {
            for (var i = 0; i < element.childNodes.length; i++) {
                if (element.childNodes[i].nodeType !== 1) continue;
                this.traverse(element.childNodes[i], model);
            }
        }
    };

    return Traverser;
}();

exports.default = Traverser;

},{"./detector.js":38}],41:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.RaziloBindStringResolver = exports.RaziloBindPropertyResolver = exports.RaziloBindPhantomResolver = exports.RaziloBindObjectResolver = exports.RaziloBindNumberResolver = exports.RaziloBindMethodResolver = exports.RaziloBindBooleanResolver = exports.RaziloBindArrayResolver = exports.RaziloBindResolver = undefined;

var _resolver = require('./src/resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _arrayResolver = require('./src/array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

var _booleanResolver = require('./src/boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _methodResolver = require('./src/method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _numberResolver = require('./src/number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _objectResolver = require('./src/object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

var _phantomResolver = require('./src/phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _propertyResolver = require('./src/property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _stringResolver = require('./src/string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.RaziloBindResolver = _resolver2.default;
exports.RaziloBindArrayResolver = _arrayResolver2.default;
exports.RaziloBindBooleanResolver = _booleanResolver2.default;
exports.RaziloBindMethodResolver = _methodResolver2.default;
exports.RaziloBindNumberResolver = _numberResolver2.default;
exports.RaziloBindObjectResolver = _objectResolver2.default;
exports.RaziloBindPhantomResolver = _phantomResolver2.default;
exports.RaziloBindPropertyResolver = _propertyResolver2.default;
exports.RaziloBindStringResolver = _stringResolver2.default;

},{"./src/array.resolver.js":42,"./src/boolean.resolver.js":43,"./src/method.resolver.js":44,"./src/number.resolver.js":45,"./src/object.resolver.js":46,"./src/phantom.resolver.js":47,"./src/property.resolver.js":48,"./src/resolver.js":49,"./src/string.resolver.js":50}],42:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _methodResolver = require('./method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _objectResolver = require('./object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Array Resolver
 * Resolves data as array with literals or model properties
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var ArrayResolver = function (_Resolver) {
	_inherits(ArrayResolver, _Resolver);

	function ArrayResolver(node) {
		_classCallCheck(this, ArrayResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'array';
		_this.regex = ArrayResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	ArrayResolver.prototype.resolve = function resolve(object) {
		var res = ArrayResolver.toArray(this.data, object, this.node);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	ArrayResolver.regex = function regex() {
		return (/^\[{1}\s?(([0-9]+|\'{1}[^\']+\'{1}|[a-zA-Z_]+|[\$a-zA-Z_]{1}[^,]+[a-zA-Z_\]]{1}|\[{1}.*\]{1}|\{{1}.*\}{1}|[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1})\s?,?\s?)*\s?\]{1}$/
		);
	};

	/**
  * static toArray()
  * turns a data and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve on the object
  * @param object object The object to resolve the data on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	ArrayResolver.toArray = function toArray(data, object, node) {
		// split by comma but be carefull not to break nested data
		data = data.trim();
		var parts = data.substring(1, data.length - 1).split(',');
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
			var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

			if (sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
		}

		// work through seperated data resolving or pushing for further analysis
		var observers = [];
		var result = [];
		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();
			if (_booleanResolver2.default.regex().test(values[ii])) result.push(_booleanResolver2.default.toBoolean(values[ii]).resolved);else if (_stringResolver2.default.regex().test(values[ii])) result.push(_stringResolver2.default.toString(values[ii]).resolved);else if (_numberResolver2.default.regex().test(values[ii])) result.push(_numberResolver2.default.toNumber(values[ii]).resolved);else if (_propertyResolver2.default.regex().test(values[ii])) {
				var propRes = _propertyResolver2.default.toProperty(values[ii], object, node);
				if (typeof propRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to property';
				result.push(propRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, propRes.observers);
			} else if (_phantomResolver2.default.regex().test(values[ii])) {
				var phRes = _phantomResolver2.default.toProperty(values[ii], object, node);
				if (typeof phRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to phantom';
				result.push(phRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, phRes.observers);
			} else if (_methodResolver2.default.regex().test(values[ii])) {
				var methRes = _methodResolver2.default.toMethod(values[ii], object, node);
				if (typeof methRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to method';
				result.push(methRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, methRes.observers);
			} else if (ArrayResolver.regex().test(values[ii])) {
				var arrRes = ArrayResolver.toArray(values[ii], object, node);
				if (typeof arrRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to array';
				result.push(arrRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, arrRes.observers);
			} else if (_objectResolver2.default.regex().test(values[ii])) {
				var objRes = _objectResolver2.default.toObject(values[ii], object, node);
				if (typeof objRes === 'undefined') throw 'Could not resolve data: "' + values[ii] + '" to object';
				result.push(objRes.resolved);
				observers = _resolver2.default.mergeObservers(observers, objRes.observers);
			}
		}

		return { resolved: result, observers: observers };
	};

	return ArrayResolver;
}(_resolver2.default);

exports.default = ArrayResolver;

},{"./boolean.resolver.js":43,"./method.resolver.js":44,"./number.resolver.js":45,"./object.resolver.js":46,"./phantom.resolver.js":47,"./property.resolver.js":48,"./resolver.js":49,"./string.resolver.js":50}],43:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Boolean Resolver
 * Resolves data as boolean true or false
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var BooleanResolver = function (_Resolver) {
	_inherits(BooleanResolver, _Resolver);

	function BooleanResolver(node) {
		_classCallCheck(this, BooleanResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'boolean';
		_this.regex = BooleanResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a boolean true or false, set any observables on data
  */


	BooleanResolver.prototype.resolve = function resolve(object) {
		var res = BooleanResolver.toBoolean(this.data);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	BooleanResolver.regex = function regex() {
		return (/^true|false$/
		);
	};

	/**
  * static toBoolean()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve to a string
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	BooleanResolver.toBoolean = function toBoolean(data) {
		return { resolved: data == 'true' ? true : false, observers: [] };
	};

	return BooleanResolver;
}(_resolver2.default);

exports.default = BooleanResolver;

},{"./resolver.js":49}],44:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _arrayResolver = require('./array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

var _objectResolver = require('./object.resolver.js');

var _objectResolver2 = _interopRequireDefault(_objectResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Method Resolver
 * Resolves data to model method
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var MethodResolver = function (_Resolver) {
	_inherits(MethodResolver, _Resolver);

	function MethodResolver(node) {
		_classCallCheck(this, MethodResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'method';
		_this.regex = MethodResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	MethodResolver.prototype.resolve = function resolve(object, delay) {
		var res = MethodResolver.toMethod(this.data, object, this.node, delay);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * Used to validate if data is a method call or not
  * @return object regex The regex used to validate if of type or not
  */


	MethodResolver.regex = function regex() {
		return (/^[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1}$/
		);
	};

	/**
  * static toMethod()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve on the object
  * @param object object The object to resolve the path on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	MethodResolver.toMethod = function toMethod(data, object, node, delay) {
		// get the bit before (
		data = data.trim();
		var key = data.substring(0, data.indexOf('('));

		// get the bit between ()
		var val = data.substring(data.indexOf('(') + 1, data.length - 1);

		// resolve method name
		if (!_propertyResolver2.default.regex().test(key)) return undefined;
		var resolver = _propertyResolver2.default.toProperty(key, object, node);
		var method = resolver.resolved;
		var observers = resolver.observers;
		if (typeof method !== 'function') return undefined;

		// split data by , but do not split objects or arrays
		var parts = val.split(',');
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
			var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

			if (sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
		}

		// resolve each split data
		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();

			// resolve value
			if (_booleanResolver2.default.regex().test(values[ii])) values[ii] = _booleanResolver2.default.toBoolean(values[ii]).resolved;else if (_stringResolver2.default.regex().test(values[ii])) values[ii] = _stringResolver2.default.toString(values[ii]).resolved;else if (_numberResolver2.default.regex().test(values[ii])) values[ii] = _numberResolver2.default.toNumber(values[ii]).resolved;else if (_propertyResolver2.default.regex().test(values[ii])) {
				var propValRes = _propertyResolver2.default.toProperty(values[ii], object, node);
				values[ii] = propValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, propValRes.observers);
			} else if (_phantomResolver2.default.regex().test(values[ii])) {
				var phValRes = _phantomResolver2.default.toProperty(values[ii], object, node);
				values[ii] = phValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, phValRes.observers);
			} else if (_arrayResolver2.default.regex().test(values[ii])) {
				var arrValRes = _arrayResolver2.default.toArray(values[ii], object, node);
				values[ii] = arrValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, arrValRes.observers);
			} else if (_objectResolver2.default.regex().test(values[ii])) {
				var objValRes = _objectResolver2.default.toObject(values[ii], object, node);
				values[ii] = objValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, objValRes.observers);
			} else values[ii] = undefined;
		}

		// for event binders... return method instead of running it
		return { resolved: !!delay ? { method: method, values: values } : method.apply(object, values), observers: observers };
	};

	return MethodResolver;
}(_resolver2.default);

exports.default = MethodResolver;

},{"./array.resolver.js":42,"./boolean.resolver.js":43,"./number.resolver.js":45,"./object.resolver.js":46,"./phantom.resolver.js":47,"./property.resolver.js":48,"./resolver.js":49,"./string.resolver.js":50}],45:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Number Resolver
 * Resolves data as number
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var NumberResolver = function (_Resolver) {
	_inherits(NumberResolver, _Resolver);

	function NumberResolver(node) {
		_classCallCheck(this, NumberResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'number';
		_this.regex = NumberResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a number, set any observables on data
  */


	NumberResolver.prototype.resolve = function resolve(object) {
		var res = NumberResolver.toNumber(this.data);
		this.resolved = res.resolved;
		this.observers = res.obeservers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	NumberResolver.regex = function regex() {
		return (/^[0-9]+(\.[0-9]+)?$/
		);
	};

	/**
  * static toNumber()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve to a string
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	NumberResolver.toNumber = function toNumber(data) {
		return { resolved: data, observers: [] };
	};

	return NumberResolver;
}(_resolver2.default);

exports.default = NumberResolver;

},{"./resolver.js":49}],46:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _stringResolver = require('./string.resolver.js');

var _stringResolver2 = _interopRequireDefault(_stringResolver);

var _numberResolver = require('./number.resolver.js');

var _numberResolver2 = _interopRequireDefault(_numberResolver);

var _booleanResolver = require('./boolean.resolver.js');

var _booleanResolver2 = _interopRequireDefault(_booleanResolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

var _methodResolver = require('./method.resolver.js');

var _methodResolver2 = _interopRequireDefault(_methodResolver);

var _arrayResolver = require('./array.resolver.js');

var _arrayResolver2 = _interopRequireDefault(_arrayResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Object Resolver
 * Resolves data as object with literals or model properties
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var ObjectResolver = function (_Resolver) {
	_inherits(ObjectResolver, _Resolver);

	function ObjectResolver(node) {
		_classCallCheck(this, ObjectResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'object';
		_this.regex = ObjectResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	ObjectResolver.prototype.resolve = function resolve(object, delay) {
		var res = ObjectResolver.toObject(this.data, object, this.node, delay);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	ObjectResolver.regex = function regex() {
		return (/^\{{1}\s?((\'{1}[^\']+\'{1}|[a-zA-Z_]+|[a-zA-Z_]{1}[^,]+[a-zA-Z_\]]{1}|)\s?:{1}\s?([0-9]+|\'{1}[^\']+\'{1}|[a-zA-Z_]+|[a-zA-Z_\$]{1}[^,]+[a-zA-Z0-9_\]]{1}|\[{1}.*\]{1}|\{{1}.*\}{1}|[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*\({1}[^\(\)]*\){1})\s?,?\s?)*\s?\}{1}$/
		);
	};

	/**
  * static toObject()
  * turns a data and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve on the object
  * @param object object The object to resolve the data on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	ObjectResolver.toObject = function toObject(data, object, node, delay) {
		// split by comma but be carefull not to break nested data
		data = data.trim();
		var parts = data.substring(1, data.length - 1).split(',');
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var rb = (values[values.length - 1].match(/\(/g) || []).length == (values[values.length - 1].match(/\)/g) || []).length;
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;
			var mb = (values[values.length - 1].match(/\{/g) || []).length == (values[values.length - 1].match(/\}/g) || []).length;

			if (rb && sb && mb) values[values.length] = parts[i];else values[values.length - 1] += ',' + parts[i];
		}

		// work through seperated data resolving or pushing for further analysis
		var observers = [];
		var result = [];

		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();

			// split by ':' preserving data in second part
			var vKey = values[ii].substring(0, values[ii].indexOf(':')).trim();
			var vVal = values[ii].substring(values[ii].indexOf(':') + 1, values[ii].length).trim();

			// resolve key
			if (_stringResolver2.default.regex().test(vKey)) vKey = _stringResolver2.default.toString(vKey).resolved;else if (_propertyResolver2.default.regex().test(vKey)) {
				var propKeyRes = _propertyResolver2.default.toProperty(vKey, object, node);
				if (typeof propKeyRes === 'undefined') throw 'Could not resolve data: "' + vKey + '" to property';
				vKey = propKeyRes;
				observers = _resolver2.default.mergeObservers(observers, propKeyRes.observers);
			} else if (_phantomResolver2.default.regex().test(vKey)) {
				var phKeyRes = _phantomResolver2.default.toProperty(vKey, object, node);
				if (typeof phKeyRes === 'undefined') throw 'Could not resolve data: "' + vKey + '" to phantom';
				vKey = phKeyRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, phKeyRes.observers);
			} else vKey = 'undefined';

			// resolve value
			if (_booleanResolver2.default.regex().test(vVal)) vVal = _booleanResolver2.default.toBoolean(vVal).resolved;else if (_stringResolver2.default.regex().test(vVal)) vVal = _stringResolver2.default.toString(vVal).resolved;else if (_numberResolver2.default.regex().test(vVal)) vVal = _numberResolver2.default.toNumber(vVal).resolved;else if (_propertyResolver2.default.regex().test(vVal)) {
				var propValRes = _propertyResolver2.default.toProperty(vVal, object, node);
				if (typeof propValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to property';
				vVal = propValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, propValRes.observers);
			} else if (_phantomResolver2.default.regex().test(vVal)) {
				var phValRes = _phantomResolver2.default.toProperty(vVal, object, node);
				if (typeof phValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to phantom';
				vVal = phValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, phValRes.observers);
			} else if (_methodResolver2.default.regex().test(vVal)) {
				var methValRes = _methodResolver2.default.toMethod(vVal, object, node, delay);
				if (typeof methValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to method';
				vVal = methValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, methValRes.observers);
			} else if (_arrayResolver2.default.regex().test(vVal)) {
				var arrValRes = _arrayResolver2.default.toArray(vVal, object, node);
				if (typeof arrValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to array';
				vVal = arrValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, arrValRes.observers);
			} else if (ObjectResolver.regex().test(vVal)) {
				var objValRes = ObjectResolver.toObject(vVal, object, node);
				if (typeof objValRes === 'undefined') throw 'Could not resolve data: "' + vVal + '" to object';
				vVal = objValRes.resolved;
				observers = _resolver2.default.mergeObservers(observers, objValRes.observers);
			} else vVal = undefined;

			result[vKey] = vVal;
		}

		return { resolved: result, observers: observers };
	};

	return ObjectResolver;
}(_resolver2.default);

exports.default = ObjectResolver;

},{"./array.resolver.js":42,"./boolean.resolver.js":43,"./method.resolver.js":44,"./number.resolver.js":45,"./phantom.resolver.js":47,"./property.resolver.js":48,"./resolver.js":49,"./string.resolver.js":50}],47:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _propertyResolver = require('./property.resolver.js');

var _propertyResolver2 = _interopRequireDefault(_propertyResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Phantom Property Resolver
 * Resolves phantom property to real property based on parent iteration.
 * Phantom properties proceed with a $ and must resolve to an itterable instance
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var PhantomResolver = function (_Resolver) {
	_inherits(PhantomResolver, _Resolver);

	function PhantomResolver(node) {
		_classCallCheck(this, PhantomResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'phantom';
		_this.regex = PhantomResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	PhantomResolver.prototype.resolve = function resolve(object) {
		var res = PhantomResolver.toProperty(this.data, object, this.node);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * regex used to test resolvable data on
  * @return object regex The regex used to validate if of type or not
  */


	PhantomResolver.regex = function regex() {
		return (/^\${1}[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|\$?[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*$/
		);
	};

	/**
  * static toProperty()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string path The path to resolve on the object
  * @param object object The object to resolve the path on
  * @param HTMLElement node The node that the property is being generated for (allows look back for phantom)
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	PhantomResolver.toProperty = function toProperty(data, object, node) {
		data = data.trim();
		var dataPhantom = data.split(/\.|\[/).shift();
		var dataPath = data.substring(dataPhantom.length, data.length);

		var result = { resolved: undefined, observers: [] };
		if (!node || !node.parentNode) return result;

		// find closest phantom up nodes
		var sniffed = node;
		while (sniffed && sniffed.tagName !== 'BODY') {
			if (sniffed && sniffed.phantom && (sniffed.phantom.keyName == dataPhantom || sniffed.phantom.valueName == dataPhantom)) break;
			sniffed = sniffed.parentNode;
		}
		if (!sniffed || !sniffed.phantom) return result;

		// now we can analyse it and turn it into the actual object path if needed
		if (dataPhantom == sniffed.phantom.keyName) {
			result.resolved = sniffed.phantom.iterationKey;
		} else if (dataPhantom == sniffed.phantom.valueName) {
			var cache = -1;
			var name = '';
			for (var key in sniffed.phantom.observers) {
				var c = sniffed.phantom.observers[key].match(/\./g) ? sniffed.phantom.observers[key].match(/\./g).length : 0;
				name = c > cache ? sniffed.phantom.observers[key] : name;
				cache = c > cache ? c : cache;
				result.observers.push(sniffed.phantom.observers[key]);
			}
			result.observers.push(name + '.' + sniffed.phantom.iterationKey);

			// get actual from initial phantom value
			var propRes = _propertyResolver2.default.toProperty(name + '.' + sniffed.phantom.iterationKey, object, node);
			result.resolved = typeof propRes.resolved !== 'undefined' ? propRes.resolved : undefined;

			// now resolve property
			if (propRes.observers.length > 0) for (var key2 in propRes.observers) {
				if (result.observers.indexOf(propRes.observers[key2]) < 0) result.observers.push(propRes.observers[key2]);
			}if (dataPath.length > 0) result = _propertyResolver2.default.toProperty(name + '.' + sniffed.phantom.iterationKey + dataPath, object, node);
		}

		return result;
	};

	return PhantomResolver;
}(_resolver2.default);

exports.default = PhantomResolver;

},{"./property.resolver.js":48,"./resolver.js":49}],48:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

var _phantomResolver = require('./phantom.resolver.js');

var _phantomResolver2 = _interopRequireDefault(_phantomResolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Property Resolver
 * Resolves data to object, sets observers on any paths found
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var PropertyResolver = function (_Resolver) {
	_inherits(PropertyResolver, _Resolver);

	function PropertyResolver(node) {
		_classCallCheck(this, PropertyResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'property';
		_this.regex = PropertyResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a property, set any observables on data
  * @param object object The object that you want to resolve data to
  */


	PropertyResolver.prototype.resolve = function resolve(object) {
		var res = PropertyResolver.toProperty(this.data, object, this.node);
		this.resolved = res.resolved;
		this.observers = res.observers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	PropertyResolver.regex = function regex() {
		return (/^[a-zA-Z]{1}[a-zA-Z0-9_]+((\.[a-zA-Z]{1}[a-zA-Z0-9_]+)|(\[([0-9]+|\$?[a-zA-Z_]{1}[a-zA-Z0-9_.\[\'\]]+)\])|(\[\'[^\[\]\']+\'\]))*$/
		);
	};

	/**
  * static toProperty()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string path The path to resolve on the object
  * @param object object The object to resolve the path on
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	PropertyResolver.toProperty = function toProperty(data, object, node) {
		// split by dot or open square bracket but be carefull not to break nested data
		data = data.trim();
		var parts = data.replace(/\[/g, '.[').split(/\./);
		var values = [parts[0]];
		for (var i = 1; i < parts.length; i++) {
			var sb = (values[values.length - 1].match(/\[/g) || []).length == (values[values.length - 1].match(/\]/g) || []).length;

			if (sb) values[values.length] = parts[i];else {
				values[values.length - 1] += '.' + parts[i];
				values[values.length - 1] = values[values.length - 1].replace(/\.\[/g, '[');
			}
		}

		// work through seperated data resolving or pushing for further analysis
		var observable = '';
		var observers = [];
		var result = object;
		for (var ii = 0; ii < values.length; ii++) {
			values[ii] = values[ii].trim();

			if (values[ii].indexOf("[") == 0) {
				if (/^\[\s*[0-9]+\s*\]$/.test(values[ii])) {
					// index
					var key = parseInt(values[ii].replace(/\[|\]/g, '').trim());
					result = !result ? undefined : result[key];
					observable += '.' + key;
				} else if (/^\[\s*\'(.*)\'\s*\]$/.test(values[ii])) {
					// key
					var _key = values[ii].replace(/\'|\[|\]/g, '').trim();
					result = !result ? undefined : result[_key];
					observable += '.' + _key;
				} else if (_phantomResolver2.default.regex().test(values[ii].substring(1, values[ii].length - 1))) {
					var phRes = _phantomResolver2.default.toProperty(values[ii].substring(1, values[ii].length - 1), object, node);
					result = phRes.resolved ? result[phRes.resolved] : undefined;
					observable += '.' + phRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, phRes.observers);
				} else {
					var propRes = PropertyResolver.toProperty(values[ii].substring(1, values[ii].length - 1), object, node);
					result = propRes.resolved && result ? result[propRes.resolved] : undefined;
					observable += '.' + propRes.resolved;
					observers = _resolver2.default.mergeObservers(observers, propRes.observers);
				}
			} else {
				result = result ? result[values[ii]] : undefined; // removing array items
				observable += '.' + values[ii];
			}

			// compact observable path to any other observables found
			if (observable) observers.push(observable.charAt(0) === '.' ? observable.substring(1, observable.length) : observable);
		}

		return { resolved: result, observers: observers };
	};

	return PropertyResolver;
}(_resolver2.default);

exports.default = PropertyResolver;

},{"./phantom.resolver.js":47,"./resolver.js":49}],49:[function(require,module,exports){
"use strict";

exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Resolver
 * Generic resolver methods used accross all resolvers
 */
var Resolver = function () {
	function Resolver() {
		_classCallCheck(this, Resolver);

		this.node = undefined;
		this.name = undefined;
		this.regex = undefined;
	}

	/**
  * detect()
  * is data resolvable to resolver
  * @param string data The data string to try and resolve to type
  * @return bool True on resolvable, false on fail.
  */


	Resolver.prototype.detect = function detect(data) {
		this.data = data;
		return this.regex.test(this.data);
	};

	// join two observer arrays togethor without duplicating


	Resolver.mergeObservers = function mergeObservers(obsA, obsB) {
		for (var i = 0; i < obsB.length; i++) {
			if (obsA.indexOf(obsB[i]) < 0) obsA.push(obsB[i]);
		}

		return obsA;
	};

	return Resolver;
}();

exports.default = Resolver;

},{}],50:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _resolver = require('./resolver.js');

var _resolver2 = _interopRequireDefault(_resolver);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * String Resolver
 * Resolves data as string literal
 *
 * Inherits
 *
 * property: data
 * method: detect(data) { return bool }
 */
var StringResolver = function (_Resolver) {
	_inherits(StringResolver, _Resolver);

	function StringResolver(node) {
		_classCallCheck(this, StringResolver);

		var _this = _possibleConstructorReturn(this, _Resolver.call(this));

		_this.node = node;
		_this.name = 'string';
		_this.regex = StringResolver.regex();
		return _this;
	}

	/**
  * resolve()
  * Resolve data to a string, set any observables on data
  */


	StringResolver.prototype.resolve = function resolve(object) {
		var res = StringResolver.toString(this.data);
		this.resolved = res.resolved;
		this.observers = res.obeservers;
	};

	/**
  * static regex()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @return object regex The regex used to validate if of type or not
  */


	StringResolver.regex = function regex() {
		return (/^\'.*\'$/
		);
	};

	/**
  * static toString()
  * turns a path and object to a property value, returning list of observers on any found properties
  * @param string data The data to resolve to a string
  * @return object {resolved: ..., observers:...} The resolved data and any observers needed to track future changes
  */


	StringResolver.toString = function toString(data) {
		return { resolved: data.substring(1, data.length - 1), observers: [] };
	};

	return StringResolver;
}(_resolver2.default);

exports.default = StringResolver;

},{"./resolver.js":49}],51:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _razilobindCore = require('razilobind-core');

var _razilobindAlterer = require('razilobind-alterer');

var _razilobindBinder = require('razilobind-binder');

var _razilobindResolver = require('razilobind-resolver');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * RaziloBind Binding Library
 * Packages up the module with extension support if running as complete standalone binder to allow direct injected alterers, binders and resolvers
 * Offers View-Model binding between js object and html view
 */
var RaziloBind = function (_RaziloBindCore) {
	_inherits(RaziloBind, _RaziloBindCore);

	function RaziloBind(options) {
		_classCallCheck(this, RaziloBind);

		// Inject default alterers
		var _this = _possibleConstructorReturn(this, _RaziloBindCore.call(this, options));

		_razilobindCore.RaziloBindCoreDetector.defaultAlterers = {
			TrimAlterer: _razilobindAlterer.RaziloBindTrimAlterer,
			JsonAlterer: _razilobindAlterer.RaziloBindJsonAlterer,
			NotAlterer: _razilobindAlterer.RaziloBindNotAlterer,
			PrefixAlterer: _razilobindAlterer.RaziloBindPrefixAlterer,
			SuffixAlterer: _razilobindAlterer.RaziloBindSuffixAlterer,
			DateAlterer: _razilobindAlterer.RaziloBindDateAlterer,
			JoinAlterer: _razilobindAlterer.RaziloBindJoinAlterer,
			EqualAlterer: _razilobindAlterer.RaziloBindEqualAlterer,
			IdenticalAlterer: _razilobindAlterer.RaziloBindIdenticalAlterer
		};

		// Inject default binders
		_razilobindCore.RaziloBindCoreDetector.defaultBinders = {
			ForBinder: _razilobindBinder.RaziloBindForBinder,
			TextBinder: _razilobindBinder.RaziloBindTextBinder,
			HtmlBinder: _razilobindBinder.RaziloBindHtmlBinder,
			ShowBinder: _razilobindBinder.RaziloBindShowBinder,
			HideBinder: _razilobindBinder.RaziloBindHideBinder,
			StyleBinder: _razilobindBinder.RaziloBindStyleBinder,
			ClassBinder: _razilobindBinder.RaziloBindClassBinder,
			AttributesBinder: _razilobindBinder.RaziloBindAttributesBinder,
			SrcBinder: _razilobindBinder.RaziloBindSrcBinder,
			HrefBinder: _razilobindBinder.RaziloBindHrefBinder,
			DisabledBinder: _razilobindBinder.RaziloBindDisabledBinder,
			RequiredBinder: _razilobindBinder.RaziloBindRequiredBinder,
			SelectedBinder: _razilobindBinder.RaziloBindSelectedBinder,
			IfBinder: _razilobindBinder.RaziloBindIfBinder,
			ElseBinder: _razilobindBinder.RaziloBindElseBinder,
			ValueBinder: _razilobindBinder.RaziloBindValueBinder,
			CheckedBinder: _razilobindBinder.RaziloBindCheckedBinder,
			EventBinder: _razilobindBinder.RaziloBindEventBinder,
			InitBinder: _razilobindBinder.RaziloBindInitBinder,
			ModelBinder: _razilobindBinder.RaziloBindModelBinder
		};

		// Inject default resolvers
		_razilobindCore.RaziloBindCoreDetector.defaultResolvers = {
			BooleanResolver: _razilobindResolver.RaziloBindBooleanResolver,
			PropertyResolver: _razilobindResolver.RaziloBindPropertyResolver,
			MethodResolver: _razilobindResolver.RaziloBindMethodResolver,
			StringResolver: _razilobindResolver.RaziloBindStringResolver,
			NumberResolver: _razilobindResolver.RaziloBindNumberResolver,
			ObjectResolver: _razilobindResolver.RaziloBindObjectResolver,
			ArrayResolver: _razilobindResolver.RaziloBindArrayResolver,
			PhantomResolver: _razilobindResolver.RaziloBindPhantomResolver
		};
		return _this;
	}

	/**
  * addAlterers()
  * Add custom alterers
  *
  * @param array alterers An array of custom alterers to inject into Detector
  */


	RaziloBind.prototype.addAlterers = function addAlterers(alterers) {
		if (!alterers || (typeof alterers === 'undefined' ? 'undefined' : _typeof(alterers)) !== 'object') return;
		_razilobindCore.RaziloBindCoreDetector.customAlterers = alterers;
	};

	/**
  * addBinder()
  * Add custom binders
  *
  * @param array binders An array of custom binders to inject into Detector
  */


	RaziloBind.prototype.addBinders = function addBinders(binders) {
		if (!binders || (typeof binders === 'undefined' ? 'undefined' : _typeof(binders)) !== 'object') return;
		_razilobindCore.RaziloBindCoreDetector.customBinders = binders;
	};

	/**
  * addResolvers()
  * Add custom resolvers
  *
  * @param array resolvers An array of custom resolvers to inject into Detector
  */


	RaziloBind.prototype.addResolvers = function addResolvers(resolvers) {
		if (!resolvers || (typeof resolvers === 'undefined' ? 'undefined' : _typeof(resolvers)) !== 'object') return;
		_razilobindCore.RaziloBindCoreDetector.customResolvers = resolvers;
	};

	return RaziloBind;
}(_razilobindCore.RaziloBindCore);

exports.default = RaziloBind;

},{"razilobind-alterer":2,"razilobind-binder":13,"razilobind-core":35,"razilobind-resolver":41}],52:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _core = require('./src/core.js');

var _core2 = _interopRequireDefault(_core);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RaziloComponent = function () {
	function RaziloComponent(name, extbp, bp) {
		_classCallCheck(this, RaziloComponent);

		var isString = typeof extbp === 'string';
		this.register(name, isString ? extbp : null, isString ? bp : extbp, document._currentScript.ownerDocument);
	}

	/**
  * Register New Component
  */


	RaziloComponent.prototype.register = function register(name, ext, bp, component) {
		for (var key in bp) {
			this[key] = bp[key];
		}return _core2.default.registerElement(this, name, ext, component);
	};

	/**
  * Fires an event off from the components element
  * @param string name The name of the event
  * @param mixed detail [optional] Any optional details you wish to send
  */
	// fireEvent(name, detail) return function )

	/**
  * Get the current working root element (the host) (generated on bind to preserve element)
  */
	// getHost() { returns host }

	/**
  * Clone object without reference
  */
	// cloneObject() { returns host }

	/**
  * Custom element created, but not currently on dom
  */
	// OPTIONAL created() { }

	/**
  * Custom element attached to dom
  */
	// OPTIONAL attached() { }

	/**
  * Custom element detached from dom
  */
	// OPTIONAL detached() { }

	/**
  * Custom element atttibute has changed somehow
  * @param string name The name of the attribute added, removed or changed
  * @param string oldVal The old value of the attribute.
  * @param string newVal The new value of the attribute.
  */
	// OPTIONAL attributeChanged(name, oldVal, newVal) { }


	return RaziloComponent;
}();

exports.default = RaziloComponent;

},{"./src/core.js":53}],53:[function(require,module,exports){
'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _razilobind = require('razilobind');

var _razilobind2 = _interopRequireDefault(_razilobind);

var _razilobindCore = require('razilobind-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * RaziloComponent Web Component Builder Library
 * Offers simple cross browser web components to be written in ES6
 */
var Core = function () {
	function Core() {
		_classCallCheck(this, Core);
	}

	/**
  * [public] - Register a new custom element, creating a naff working scope for the interface
  * @param object blueprint The custom element blueprint to create the custom element from
  */
	Core.registerElement = function registerElement(bp, name, ext, component) {
		if (!name) throw 'Cannot register custom element without a custom element name via register(name, extends) or new CustomElement({name: ..., extends: ...})';

		// create proto
		var proto = Object.create(HTMLElement.prototype);

		// forward callbacks, all these happen as a per instance of component basis, outside of these things are per component registration
		proto.createdCallback = function () {
			Core.createTemplate(this, name, Core.cloneObject(bp), component); // create only
			this.razilobind.model.getHost = Core.getThis.bind(this); // get the element scope
			this.razilobind.model.cloneObject = Core.cloneObject; // get the element scope
			this.razilobind.model.fireEvent = Core.fire.bind(this); // setup fireEvent on host
			this.razilobind.model.dateFormat = _razilobindCore.RaziloBindDateFormat.dateFormat; // setup fireEvent on host
			if (typeof this.razilobind.model.created === 'function') this.razilobind.model.created.call(this.razilobind.model);
		};

		proto.attachedCallback = function () {
			Core.applyTemplate(this); // apply once all have been created, IMPORTANT!
			if (typeof this.razilobind.model.attached === 'function') this.razilobind.model.attached.call(this.razilobind.model);
		};

		proto.detachedCallback = function () {
			if (typeof this.razilobind.model.detached === 'function') this.razilobind.model.detached.call(this.razilobind.model);
		};

		proto.attributeChangedCallback = function (att, oldVal, newVal) {
			if (typeof this.razilobind.model.attributeChanged === 'function') this.razilobind.model.attributeChanged.call(this.razilobind.model, att, oldVal, newVal);
			Core.fire('attributechanged', { attribute: att, oldVal: oldVal, newVal: newVal }, this);
		};

		// register custom element
		var protoWrap = { prototype: proto };
		if (!!ext) protoWrap.extends = ext;
		try {
			document.registerElement(name, protoWrap);
		} catch (e) {}
	};

	Core.getThis = function getThis() {
		return this;
	};

	/**
  * [public] - Fires an event off, from the provided element, or from scope if element not set
  * @param HTML obejct element The element to fire from
  * @param string name The name of the event
  * @param mixed detail [optional] Any optional details you wish to send
  */


	Core.fire = function fire(name, detail, element) {
		element = typeof element === 'undefined' ? this : element.host ? element.host : element;

		var event;
		try {
			event = !detail ? new Event(name) : new CustomEvent(name, { 'detail': detail });
		} catch (e) {
			// allback to create event old fashioned way
			event = document.createEvent('customEvent');
			if (detail) event.detail = detail;
			event.initEvent(name, true, true);
		}

		try {
			element.dispatchEvent(event);
		} catch (e) {
			console.log('MAX CALL STACK ERROR', e);
			console.log(element, event);
		}
	};

	/**
  * [public] - Clone an objects properties and methods
  * @param object The object to clone
  * @return object The cloned object (not a reference to an object)
  */


	Core.cloneObject = function cloneObject(obj) {
		if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== "object" || obj === null) return obj;

		var clone;

		if (obj instanceof Date) {
			clone = new Date();
			clone.setTime(obj.getTime());
			return clone;
		}

		if (obj instanceof Array) {
			clone = [];
			for (var i = 0, len = obj.length; i < len; i++) {
				clone[i] = Core.cloneObject(obj[i]);
			}return clone;
		}

		// Handle Object
		if (obj instanceof Object) {
			clone = {};
			for (var att in obj) {
				if (obj.hasOwnProperty(att)) clone[att] = Core.cloneObject(obj[att]);
			}return clone;
		}

		throw new Error("Unable to clone object " + obj + ",  this object type is not supported in component blueprints.");
	};

	/**
  * [private] - Apply a template to a fragment and apply binding to the framnet component, store this against the host element
  * This will allow us to bind away without the worry of where scope lies, as all component binding happens in isolation.
  * once all binding complete, we can move content around into it's correct place.
  * @param html object host The custom element to apply the template to
  * @param object model The model data to apply to the host
  * @param object component The web component template to use as the template for building the html element
  */


	Core.createTemplate = function createTemplate(host, name, model, component) {
		if (!host) throw 'Host custom element not specified, please add custom element reference or lookup';

		var template = component.querySelector('template#' + name);
		if (!template) return host.razilobind = { model: model };

		// bind to component fragment then move into host html after all binds complete
		var rb = new _razilobind2.default({ noParentBind: true });
		host.componentFragment = document.createDocumentFragment();
		host.componentFragment.appendChild(document.createElement('COMPONENT'));
		host.componentFragment.firstChild.innerHTML = template.innerHTML;
		rb.bind(host.componentFragment.firstChild, model);

		// move bind data from componentFragment to host ready for applying template, leave this until all binds completed (stops duplicate bindings)
		host.razilobind = host.componentFragment.firstChild.razilobind;
		delete host.componentFragment.firstChild.razilobind;
	};

	/**
  * [private] - Apply built component to the host element. Takes a fragment component and merges it into the host html, mixing any content from the host into the component fragment first.
  * @param mixed host The custom element to apply the template to, usually 'this' but can be selector string
  */


	Core.applyTemplate = function applyTemplate(host) {
		if (!host.componentFragment) return;

		// do we need to apply any host content?... pull into fragment
		var matches = host.componentFragment.firstChild.querySelectorAll('content');
		if (matches.length > 0) {
			for (var i = 0; i < matches.length; i++) {
				if (matches[i].hasAttribute('select')) {
					// substitute fragment content placeholders with selected host content
					var name = matches[i].getAttribute('select');
					var found = host.querySelector(name);
					if (found) matches[i].parentNode.replaceChild(found, matches[i]);
				} else {
					// move all host content to fragment placeholder and remove placeholder
					while (host.firstChild) {
						matches[i].parentNode.appendChild(host.firstChild);
					}matches[i].parentNode.removeChild(matches[i]);
				}
			}
		}

		// transfer over the fragment to the host and remove
		host.innerHTML = '';
		while (host.componentFragment.firstChild.firstChild) {
			host.appendChild(host.componentFragment.firstChild.firstChild);
		}delete host.componentFragment;
	};

	return Core;
}();

exports.default = Core;

},{"razilobind":51,"razilobind-core":35}]},{},[1])