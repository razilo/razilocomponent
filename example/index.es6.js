import './node_modules/webcomponents.js/webcomponents-lite.min.js';
import './node_modules/proxy-oo-polyfill/proxy-oo-polyfill.js';
import './node_modules/promise-polyfill/promise.js';
import RaziloComponent from 'razilocomponent';
import RaziloRequest from 'razilorequest';

// razilo modules are all ES6 modules so make them available on global window
window.RaziloComponent = RaziloComponent;
window.RaziloRequest = RaziloRequest;
