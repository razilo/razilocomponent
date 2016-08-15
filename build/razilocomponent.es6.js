import '../node_modules/webcomponents.js/webcomponents-lite.js'
import '../node_modules/proxy-oo-polyfill/proxy-oo-polyfill.js'
import '../node_modules/promise-polyfill/promise.js'
import RaziloComponent from '../index.js'

// razilo modules are all ES6 modules so make them available on global
window.RaziloComponent = RaziloComponent;
